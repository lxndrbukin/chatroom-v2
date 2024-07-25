import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, signup } from '../../store';
import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function AuthSignUp(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  const redirectText = 'Already have an account?';
  const redirectURL = '/login';
  const redirectURLText = 'Login';

  const inputFields = [
    { name: 'email', placeholder: 'Email' },
    { name: 'password', placeholder: 'Password' },
  ];

  const renderedFields = inputFields.map((field) => {
    return (
      <AuthFormInput key={field.name} onChange={handleInputChange} {...field} />
    );
  });

  return (
    <AuthForm
      redirectText={redirectText}
      redirectURL={redirectURL}
      redirectURLText={redirectURLText}
      buttonText="Sign Up"
      onSubmit={handleSubmit}
    >
      {renderedFields}
    </AuthForm>
  );
}

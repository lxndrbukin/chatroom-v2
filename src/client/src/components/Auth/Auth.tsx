import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, auth } from '../../store';
import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function Auth(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(auth({ formData, pathname }));
  };

  const redirectText =
    pathname === '/signup'
      ? 'Already have an account?'
      : "Don't have an account?";
  const redirectURL = pathname === '/signup' ? '/login' : '/signup';
  const redirectURLText = pathname === '/signup' ? 'Login' : 'Sign Up';
  const buttonText = pathname === '/signup' ? 'Sign Up' : 'Login';

  const inputFields = [
    { name: 'username', placeholder: 'Username' },
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
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      {renderedFields}
    </AuthForm>
  );
}

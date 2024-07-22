import { ChangeEvent, FormEvent, useState } from 'react';
import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function AuthSignUp(): JSX.Element {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log('Submit');
  };

  const redirectText = 'Already have an account?';
  const redirectURL = '/login';
  const redirectURLText = 'Login';

  return (
    <AuthForm
      redirectText={redirectText}
      redirectURL={redirectURL}
      redirectURLText={redirectURLText}
      buttonText="Sign Up"
      onSubmit={handleSubmit}
    >
      <AuthFormInput name="username" placeholder="Username" />
      <AuthFormInput name="password" placeholder="Password" />
      <AuthFormInput name="confirmPassword" placeholder="Confirm Password" />
    </AuthForm>
  );
}

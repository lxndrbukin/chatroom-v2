import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, auth, handleAuthErrors } from '../../store';

import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function Auth(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { isLoggedIn, errors } = useSelector(
    (state: RootState) => state.session
  );
  const [formData, setFormData] = useState<any>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, placeholder } = e.target;
    if (formData[name].length === 0) {
      dispatch(
        handleAuthErrors({
          [name]: `${placeholder} field should not be empty`,
        })
      );
    } else return;
  };

  const handleSelect = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (errors && errors[name]) {
      dispatch(
        handleAuthErrors({
          [name]: undefined,
        })
      );
    }
  };

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
    { name: 'confirmPassword', placeholder: 'Confirm Password' },
  ];

  const renderedFields = inputFields.map((field): JSX.Element => {
    return (
      <div className="auth-form-input">
        <AuthFormInput
          key={field.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onSelect={handleSelect}
          {...field}
        />
        {errors && (
          <div className="auth-form-input-error">{errors[field.name]}</div>
        )}
      </div>
    );
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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

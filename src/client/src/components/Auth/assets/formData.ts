import { AuthInputField } from '../types';

export const inputFields: Array<AuthInputField> = [
  { name: 'username', placeholder: 'Username' },
  { name: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    displayRoute: '/signup',
  },
];

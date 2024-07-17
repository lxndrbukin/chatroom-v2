import { FormEventHandler, ReactNode } from 'react';

type AuthFormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
};

export default function AuthForm({
  children,
  onSubmit,
  buttonText,
}: AuthFormProps): JSX.Element {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      {children}
      <button>{buttonText}</button>
    </form>
  );
}

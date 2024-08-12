import './assets/styles.scss';
import { FormEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type AuthFormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText: string;
  redirectText?: string;
  redirectURLText?: string;
  redirectURL?: string;
};

export default function AuthForm({
  children,
  onSubmit,
  buttonText,
  redirectText,
  redirectURLText,
  redirectURL,
}: AuthFormProps): JSX.Element {
  return (
    <div className="auth">
      <form onSubmit={onSubmit} className="auth-form">
        {children}
        <button>{buttonText}</button>
      </form>
      <p className="auth-redirect">
        {redirectText} <Link to={redirectURL || '/'}>{redirectURLText}</Link>
      </p>
    </div>
  );
}

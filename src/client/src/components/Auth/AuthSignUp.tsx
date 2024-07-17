import AuthForm from './AuthForm';
import AuthFormInput from './assets/reusable/AuthFormInput';

export default function AuthSignUp(): JSX.Element {
  const handleSubmit = (): void => {
    console.log('Submit');
  };

  return (
    <AuthForm buttonText="Sign Up" onSubmit={handleSubmit}>
      <AuthFormInput name="username" placeholder="Username" />
      <AuthFormInput name="password" placeholder="Password" />
    </AuthForm>
  );
}

type AuthFormInputProps = {
  [key: string]: string;
};

export default function AuthFormInput({
  name,
  placeholder,
  label,
}: AuthFormInputProps): JSX.Element {
  return (
    <div className="auth-form-input">
      <label>{label}</label>
      <input name={name} placeholder={placeholder} />
    </div>
  );
}

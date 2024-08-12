type AuthFormInputProps = {
  [key: string]: any;
};

export default function AuthFormInput({
  name,
  placeholder,
  label,
  ...props
}: AuthFormInputProps): JSX.Element {
  return (
    <div className="auth-form-input">
      <label>{label}</label>
      <input {...props} name={name} placeholder={placeholder} />
    </div>
  );
}

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
    <>
      <label>{label}</label>
      <input {...props} name={name} placeholder={placeholder} />
    </>
  );
}

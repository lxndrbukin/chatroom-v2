import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, handleAuthErrors } from '../../../../store';

type AuthFormInputProps = {
  [key: string]: any;
};

export default function AuthFormInput({
  name,
  placeholder,
  label,
  ...props
}: AuthFormInputProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [inputs, setInputs] = useState();

  const handleError = (
    name: string,
    showError: boolean,
    placeholder?: string
  ): void => {
    if (showError) {
      dispatch(
        handleAuthErrors({ [name]: `${placeholder} field should not be empty` })
      );
    } else {
      dispatch(handleAuthErrors({ [name]: undefined }));
    }
  };

  return (
    <>
      <label>{label}</label>
      <input
        onBlur={() => handleError(name, true, placeholder)}
        onSelect={() => handleError(name, false)}
        {...props}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

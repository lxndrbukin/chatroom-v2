import { ChangeEvent, useState } from 'react';
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
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const showErrorMessage = (
    name: string,
    showError: boolean,
    placeholder?: string
  ): void => {
    if (showError && inputValue.length === 0) {
      dispatch(
        handleAuthErrors({
          [name]: `${placeholder} field should not be empty`,
        })
      );
    }
    if (inputValue.length !== 0) {
      dispatch(
        handleAuthErrors({
          [name]: undefined,
        })
      );
    }
  };

  return (
    <>
      <label>{label}</label>
      <input
        onBlur={() => showErrorMessage(name, true, placeholder)}
        onClick={() => showErrorMessage(name, false)}
        onSelect={handleChange}
        {...props}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

import { ChangeEvent, FocusEvent, useState } from 'react';
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
  const [showError, setShowError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e: FocusEvent) => {
    if (!inputValue.length) {
      setShowError(true);
      if (showError) {
        dispatch(
          handleAuthErrors({
            [name]: `${placeholder} field should not be empty`,
          })
        );
      }
    }
  };

  const showErrorMessage = (name: string, placeholder?: string): void => {
    if (!showError && !inputValue.length) {
    }
  };

  return (
    <>
      <label>{label}</label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        onSelect={() => showErrorMessage(name)}
        {...props}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

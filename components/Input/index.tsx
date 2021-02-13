import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  readonly label: string;
}

const Input: React.FC<IInputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="flex flex-col p-2  ">
      <label className="text-green mx-2" htmlFor="#">
        {label}
      </label>

      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        className="p-4 h-10  bg-input box-border  text-grayTextBase bg-input border-color rounded-lg"
        type="text"
        ref={inputRef}
        {...rest}
      />
    </div>
  );
};

export default Input;

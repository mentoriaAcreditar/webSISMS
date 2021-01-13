import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  mask: string;
}
const Input: React.FC<IInput> = ({
  label,
  name,
  id,
  value,
  onChange,
  mask,
}: IInput) => {
  return (
    <div className="flex flex-col p-2  ">
      <label className="text-green mx-2" htmlFor="#">
        {label}
      </label>

      <InputMask
        id={id}
        value={value}
        onChange={onChange}
        className="p-4 h-10  bg-input box-border  text-grayTextBase bg-input border-color rounded-lg"
        type="text"
        mask={mask}
      />
    </div>
  );
};

export default Input;

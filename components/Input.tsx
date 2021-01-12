import React, { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}
const Input: React.FC<IInput> = ({
  label,
  name,

  id,
  value,
  onChange,
}: IInput) => {
  return (
    <div className="flex flex-col p-2  ">
      <label className="text-green mx-2" htmlFor="#">
        {label}
      </label>
      <input
      name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="p-4 h-10  bg-input box-border  text-green bg-input border-color rounded-3xl"
        type="text"
      />
    </div>
  );
};

export default Input;

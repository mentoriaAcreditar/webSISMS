import React, { InputHTMLAttributes } from 'react';

interface CheckBoxPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;

  id: string;
}

const CheckBox: React.FC<CheckBoxPros> = ({
  name,
  id,
  value,
}: CheckBoxPros) => {
  return (
    <div className="flex flex-row items-center space-x-2 ">
      <input className="" type="radio" id={id} name={name} value={value} />
      <label htmlFor={name}>{value}</label>
    </div>
  );
};

export default CheckBox;

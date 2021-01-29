import React, { useState, InputHTMLAttributes } from 'react';
import './style.css';

interface CheckBoxPros extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const CheckBox: React.FC<CheckBoxPros> = ({
  value,
  type,
  ...rest
}: CheckBoxPros) => {
  return (
    <div className="flex flex-row items-center space-x-2 ">
      {/* <input
        className="check-size"
        id={value}
        name={value}
        value={value}
        {...rest}
      />
      <label htmlFor={name}>{value}</label> */}
    </div>
  );
};

export default CheckBox;

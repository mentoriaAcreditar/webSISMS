import React from 'react';
import './style.css';

interface BarProps {
  title?: string;
}

// eslint-disable-next-line react/prop-types
const Bar: React.FC<BarProps> = ({ title }) => (
  <div className="  w-full bg-opacity-30 bg-green6 flex flex-row items-center justify-center p-2 rounded-3xl">
    <h1 className="sm:text-2xl text-center text-green">{title}</h1>
  </div>
);
export default Bar;

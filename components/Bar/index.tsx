import React from 'react';

interface BarProps {
  title?: string;
}

// eslint-disable-next-line react/prop-types
const Bar: React.FC<BarProps> = ({ title }) => (
  <div className="bg-gradient-to-b from-white bg-greenLight  w-full flex flex-row items-center justify-center p-2 rounded-3xl">
    <h1 className="sm:text-2xl text-center text-green">{title}</h1>
  </div>
);
export default Bar;

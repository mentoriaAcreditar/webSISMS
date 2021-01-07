import React from 'react';
import './style.css';
import Link from 'next/link';

interface BarProps {
  title?: string;
}

// eslint-disable-next-line react/prop-types
const Bar: React.FC<BarProps> = ({ title }) => (
  <div className="  flex bg-green7 flex-row items-center justify-center p-2 rounded-3xl">
    <div className="flex flex-col w-11/12">
      <h1 className="sm:text-2xl  text-center text-green">{title}</h1>
    </div>
    <Link href="/">
      <img className="cursor-pointer" src="./logout2.svg" alt="" />
    </Link>
  </div>
);
export default Bar;

import React from 'react';
import './style.css';
import Link from 'next/link';

interface BarProps {
  title?: string;
}

// eslint-disable-next-line react/prop-types
const Bar: React.FC<BarProps> = ({ title }) => (
  <div className="  flex bg-purpleDark flex-row items-center justify-center p-4 ">
    <div className="flex flex-col w-11/12">
      <h1 className="sm:text-2xl  text-center text-white">{title}</h1>
    </div>
    <Link href="/">
      <div className="flex cursor-pointer flex-row space-x-2">
        <span className="text-white">Sair</span>
        <img src="./log-out1.svg" alt="" />
      </div>
    </Link>
  </div>
);
export default Bar;

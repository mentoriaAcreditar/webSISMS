import React from 'react';
import './style.css';
import Link from 'next/link';

interface BarProps {
  title?: string;
  route: string;
  left?: boolean;
  logout?: boolean;
}

// eslint-disable-next-line react/prop-types
const Bar: React.FC<BarProps> = ({ title, left, route, logout }) => (
  <div className="  flex bg-purpleDark flex-row items-center justify-center p-4 ">
    <div className="dropdown px-4">
      <button className="text-white px-4 p-2 rounded-md justify-center items-center flex flex-row">
        Cadastros
        <img src="./chevron-down.svg" alt="" />
      </button>
      <div className="dropdown-content ">
        <Link href="cad">
          <span>Sintomas</span>
        </Link>

        <Link href="cad">
          <span>Unidades de saúde (US)</span>
        </Link>

        <Link href="cadastroProfissional">
          <span>Profissionais de saúde</span>
        </Link>
      </div>
    </div>

    {left ? (
      <Link href={route}>
        <div className="flex cursor-pointer flex-row space-x-2">
          <img src="./arrow-left.svg" alt="" />
        </div>
      </Link>
    ) : (
      <></>
    )}

    <div className="flex flex-col w-11/12">
      <h1 className="sm:text-xl  text-center text-white">{title}</h1>
    </div>
    {logout ? (
      <Link href="/profile">
        <div className="flex cursor-pointer flex-row space-x-2">
          <span className="text-white">Sair</span>
          <img src="./log-out1.svg" alt="" />
        </div>
      </Link>
    ) : (
      <></>
    )}
  </div>
);
export default Bar;

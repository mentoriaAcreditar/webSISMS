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
  <div className="  flex flex-row   p-4 shadow-xs bg-white">
    <div className="dropdown sm:hidden flex px-4 absolute left-0">
      <button className="text-primary px-4 p-2 rounded-md justify-center items-center flex flex-row">
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

    {logout ? (
      <div className="flex flex-row justify-center items-center space-x-2 mr-8 absolute right-0">
        <div className="flex flex-row w-full space-x-2">
          <div className="sm:flex flex-col items-end hidden ">
            <h1 className="font-bold">Antonio Carlos</h1>
            <span className="text-xs">Administrador</span>
          </div>

          <img
            className="bg-primary rounded-full w-10 p-2 h-10"
            src="user3.svg"
            alt=""
          />
          <div className="dropdown ">
            <button className="text-primary  p-2 rounded-md justify-center items-center flex flex-row">
              <img src="./chevron-down2.svg" alt="" />
            </button>
            <div className="dropdown-content ">
              <Link href="cad">
                <span>Perfil</span>
              </Link>

              <Link href="cad">
                <span>Ajuda</span>
              </Link>

              <Link href="cadastroProfissional">
                <span>Sair</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <Link href="/profile">
            <div className="flex cursor-pointer flex-row space-x-2">
              <img className="w-8" src="./log-out2.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    ) : (
      <></>
    )}
  </div>
);
export default Bar;

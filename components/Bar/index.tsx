import React from 'react';
import './style.css';
import Link from 'next/link';

interface BarProps {
  routeProfile: string;
  left?: boolean;
  logout?: boolean;
  user?: string;
  userCargo?: string;
}

// eslint-disable-next-line react/prop-types
const Bar: React.FC<BarProps> = ({
  left,
  routeProfile,
  logout,
  user,
  userCargo,
}: BarProps) => (
  <div className="  flex flex-row   p-4 shadow-xs bg-white">
    <div className="dropdown2 sm:hidden flex px-4 absolute left-0">
      <button
        type="button"
        className="text-primary px-4 p-2 rounded-md justify-center items-center flex flex-row"
      >
        Menu
        <img src="./chevron-down3.svg" alt="" />
      </button>
      <div className="dropdown-content2 ">
        <Link href="cad">
          <span className="cursor-pointer">Sintomas</span>
        </Link>

        <Link href="cad">
          <span className="cursor-pointer">Unidades de saúde (US)</span>
        </Link>

        <Link href="cadastroProfissional">
          <span className="cursor-pointer">Profissionais de saúde</span>
        </Link>
      </div>
    </div>

    {left ? (
      <Link href="/">
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
            <h1 className="font-bold">{user}</h1>
            <span className="text-xs">{userCargo}</span>
          </div>

          <img
            className="bg-primary rounded-full w-10 p-2 h-10"
            src="user3.svg"
            alt=""
          />
          <div className="dropdown ">
            <button
              type="button"
              className="text-primary  p-2 rounded-md justify-center items-center flex flex-row"
            >
              <img src="./chevron-down2.svg" alt="" />
            </button>
            <div className="dropdown-content ">
              <Link href={routeProfile}>
                <div className="flex flex-row cursor-pointer hover:bg-gray">
                  <img className="w-8" src="./user3.svg" alt="" />
                  <span>Perfil</span>
                </div>
              </Link>

              <Link href={routeProfile}>
                <div className="flex flex-row  cursor-pointer hover:bg-gray">
                  <img className="w-8" src="./help-circle.svg " alt="" />
                  <span>Ajuda</span>
                </div>
              </Link>

              <Link href="/">
                <div className="flex flex-row cursor-pointer hover:bg-gray">
                  <img className="w-8" src="./log-out2.svg" alt="" />
                  <span>Sair</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    )}
  </div>
);
export default Bar;

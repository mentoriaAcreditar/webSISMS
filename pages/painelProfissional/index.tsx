import React, { useState } from 'react';

import Link from 'next/link';
import Bar from '../../components/Bar';
import Sintomas from '../../components/Sintomas';
import Us from '../../components/Us';
import RelatorioPacientes from '../../components/RelatorioPacientes';

const PainelProfissional: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState('cadastro');

  function handleSetPage(name: string) {
    setPage(name);
  }

  function openModal() {
    setModalOpen(true);
  }

  function handleAddTool() {
    console.log('ok');
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }
  const v = [
    {
      name: 'Tosse',
    },
    {
      name: 'Coração acelerado',
    },
    {
      name: 'Febre',
    },
    {
      name: 'Cansaço',
    },
    {
      name: 'Falta de ar',
    },
    {
      name: 'Falta de ar',
    },
    {
      name: 'Falta de ar',
    },
  ];
  return (
    <>
      <div className="flex flex-row h-screen">
        <div
          className="flex-col container sm:flex hidden items-center relative  bg-secondary
        sm:h-full md:h-full lg:h-full   w-2/12"
        >
          <div className="w-full   flex flex-col items-center h-16 justify-center ">
            <img src="./logotest2.svg" alt="" />
          </div>

          <div className=" flex flex-col w-full  ">
            <div />

            <button
              type="button"
              onClick={() => handleSetPage('cadastro')}
              className={
                page === 'cadastro'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./userwhite.svg" alt="" />
              <span className="">Pacientes</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPage('us')}
              className={
                page === 'us'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./unid.svg" alt="" />
              <span className="">PSFs</span>
            </button>
          </div>
          <div className="absolute left-0 bottom-0  shadow-xs  flex flex-col items-center px-2 py-4 ">
            <button
              className="space-x-2 cursor-pointer flex flex-row text-white"
              type="button"
            >
              <img className="  " src="./s.svg" alt="" />
              <span className="">Configurações</span>
            </button>
          </div>
        </div>
        <div className="w-full  bg-grayBackground relative z-0">
          <Bar
            routeProfile="perfilProfissional/Joao"
            logout
            user="Joao"
            userCargo="Técnico"
          />
          <div className="flex sm:hidden md:hiddem lg:hidden">
            <div className="dropdown2 sm:hidden flex px-4 absolute z-10 top-0 left-0">
              <button
                type="button"
                className="text-primary px-4 p-2 rounded-md justify-center items-center flex flex-row"
              >
                Menu
                <img src="./chevron-down3.svg" alt="" />
              </button>
              <div className="dropdown-content2 ">
                <button type="button" onClick={() => handleSetPage('cadastro')}>
                  <span className="cursor-pointer">Pacientes</span>
                </button>

                <button type="button" onClick={() => handleSetPage('us')}>
                  <span className="cursor-pointer">PSFs</span>
                </button>
              </div>
            </div>
          </div>

          {page === 'sintomas' ? (
            <Sintomas />
          ) : page === 'us' ? (
            <Us />
          ) : (
            <RelatorioPacientes />
          )}
        </div>
      </div>
    </>
  );
};

export default PainelProfissional;

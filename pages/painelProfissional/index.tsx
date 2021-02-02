import React, { useState } from 'react';
import Bar from '../../components/Bar';
import Sintomas from '../../components/Sintomas';
import Us from '../../components/Us';
import RelatorioPacientes from '../../components/RelatorioPacientes';

const PainelProfissional: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState('');

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
      <div className="flex flex-row   h-screen">
        <div
          className="flex-col container sm:flex hidden items-center relative  justify-center bg-secondary
        sm:h-full md:h-full lg:h-full   w-2/12"
        >
          <div className="w-full bg-primary absolute top-0 flex flex-col items-center p-6">
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
              <img src="./book.svg" alt="" />
              <span className="">Agenda</span>
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
        <div className="w-full  bg-grayBackground">
          <Bar
            routeProfile="/perfilProfissional"
            logout
            user="Joao"
            userCargo="Técnico"
          />

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

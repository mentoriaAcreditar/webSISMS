import React, { useState } from 'react';
import Link from 'next/link';
import Bar from '../Bar';

import ModalAddTool from '../ModalAddSintomas';
import ModalAddUnidades from '../ModalAddUnidades';
import ModalAddProfissional from '../ModalAddProfissionais';

const Sintomas: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
      nivel: 'Alto',
    },
    {
      name: 'Coração acelerado',
      nivel: 'Alto',
    },
    {
      name: 'Febre',
      nivel: 'Alto',
    },
    {
      name: 'Cansaço',
      nivel: 'Alto',
    },
    {
      name: 'Falta de ar',
      nivel: 'Alto',
    },
    {
      name: 'Falta de ar',
      nivel: 'Alto',
    },
    {
      name: 'Falta de ar',
      nivel: 'Baixo',
    },
  ];
  return (
    <div className="flex flex-col space-y-4 px-8 py-4 ">
      <div className="py-4 relative  flex flex-row items-center">
        <h1 className="font-bold text-2xl">Sintomas</h1>
        <div className="p-2 flex flex-row  absolute right-0 space-x-2">
          <button
            onClick={() => openModal()}
            type="button"
            className="bg-white flex flex-row items-center space-x-2 rounded-full p-2 px-4"
          >
            <img src="./filter.svg" alt="" />
            <span className="text-primary">Filtrar</span>
          </button>
          <button
            onClick={() => openModal()}
            type="button"
            className="bg-primary rounded-full flex flex-row space-x-2 items-center  p-2 px-4   "
          >
            <img src="./plus-circle2.svg" alt="" />
            <span className="text-white">Adicionar</span>
          </button>
        </div>

        <ModalAddTool
          handleAddTool={handleAddTool}
          isOpen={modalOpen}
          setIsOpen={toggleModal}
        />
      </div>
      <div className=" space-y-4 sm:space-y-0">
        <div className="w-full shadow-lg rounded-lg ">
          <div className="p-4 relative text-secondary bg-white font-bold flex flex-row ">
            <span className="text-center w-3/12">Nome</span>
            <span className="w-3/12 text-center ">Nivel de risco</span>

            <span className="absolute right-0 mr-10 ">Ações</span>
          </div>

          <hr className="text-grayBackground" />
          <ul className=" h-hList  shadow-xs  divide-y overflow-auto divide-gray  w-full ">
            {v.map((vt) => (
              <li className="">
                <button
                  type="button"
                  className="hover:bg-white hover:shadow-lg hover:border-transparent flex group relative  py-2 flex-row w-full"
                >
                  <span className="text-secondary py-2   w-3/12 text-sm sm:text-lg ">
                    {vt.name}
                  </span>

                  <span className=" w-3/12 text-center text-sm py-2 sm:text-lg text-grayText">
                    {vt.nivel}
                  </span>
                  <div className="flex flex-row space-x-6  absolute right-0 mr-4">
                    <div className="tooltip">
                      <button
                        className="hover:bg-blue-400 flex flex-col justify-center items-center bg-gray rounded-full p-2"
                        type="button"
                      >
                        <img src="./edit3.svg" alt="" />
                        <span className="tooltiptext">Editar</span>
                      </button>
                    </div>
                    <div className="tooltip">
                      <button
                        className="hover:bg-red-500 flex flex-col justify-center items-center bg-gray rounded-full p-2 "
                        type="button"
                      >
                        <img src="./trash3.svg" alt="" />
                        <span className="tooltiptext">Excluir</span>
                      </button>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sintomas;

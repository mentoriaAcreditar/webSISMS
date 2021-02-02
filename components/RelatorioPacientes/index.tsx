import React, { useState } from 'react';
import Bar from '../Bar';
import './style.css';
import Link from 'next/link';
import ModalAddProfissional from '../ModalAddProfissionais';
import ModalAddPaciente from '../ModalAddPaciente';

const RelatorioPaciente: React.FC = () => {
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
      name: 'João',
      contato: '(11)4002-8922',
      atualizacao: 'Ontem às 13:26',
      risco: 'Baixo',
      acoes: 'Abrir',
    },
    {
      name: 'Zézin',
      contato: '(11)4002-8922',
      atualizacao: 'Ontem às 13:26',
      risco: 'Alto',
      acoes: 'Abrir',
    },
    {
      name: 'Maria',
      contato: '(11)4002-8922',
      atualizacao: 'Ontem às 13:26',
      risco: 'Médio',
      acoes: 'Abrir',
    },
  ];
  return (
    <div className="flex flex-col space-y-4 px-8 py-4 ">
      <div className="py-4 relative  flex flex-row items-center">
        <h1 className="font-bold text-2xl">Pacientes</h1>
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

        <ModalAddPaciente
          handleAddTool={handleAddTool}
          isOpen={modalOpen}
          setIsOpen={toggleModal}
        />
      </div>
      <div className=" space-y-4 sm:space-y-0">
        <div className="w-full shadow-lg rounded-lg ">
          <div className="p-4 relative text-secondary bg-white sm:text-lg text-xs font-bold flex flex-row ">
            <span className="text-center w-2/12">Nome</span>
            <span className="w-3/12 text-center ">Contato</span>
            <span className="w-2/12 text-center  ">Última atualização</span>
            <span className="w-3/12 text-center  ">Risco</span>
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
                  <span className="text-secondary py-2     w-2/12 text-xs sm:text-lg ">
                    {vt.name}
                  </span>
                  <span className=" w-3/12 text-xs sm:text-lg py-2 text-grayText">
                    {vt.contato}
                  </span>
                  <span className=" w-2/12 text-center text-xs py-2 sm:text-lg text-grayText">
                    {vt.atualizacao}
                  </span>
                  <span
                    className={
                      vt.risco === 'Baixo'
                        ? 'text-green w-3/12 text-center text-xs py-2 sm:text-lg'
                        : vt.risco === 'Médio'
                        ? 'text-yellow-400 w-3/12 text-center text-xs py-2 sm:text-lg '
                        : 'text-red-500 w-3/12 text-center text-xs py-2 sm:text-lg '
                    }
                  >
                    {vt.risco}
                  </span>

                  <div className="flex flex-row space-x-4  absolute right-0 mr-4">
                    <div className="tooltip">
                      <Link href="/form">
                        <button
                          className="hover:bg-primary flex flex-col justify-center items-center bg-gray rounded-full p-2"
                          type="button"
                        >
                          <img src="./send1.svg" alt="" />
                          <span className="tooltiptext">Enviar Formulário</span>
                        </button>
                      </Link>
                    </div>
                    <Link href="/relatorioPaciente">
                      <div className="tooltip">
                        <button
                          className="hover:bg-primary flex flex-col justify-center items-center bg-gray rounded-full p-2"
                          type="button"
                        >
                          Abrir
                        </button>
                      </div>
                    </Link>
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

export default RelatorioPaciente;

import React, { useState } from 'react';
import Bar from '../../components/Bar';
import './style.css';
import ModalAddTool from '../../components/ModalAddSintomas';
import ModalAddUnidades from '../../components/ModalAddUnidades';
import ModalAddProfissional from '../../components/ModalAddProfissionais';
import Link from 'next/link';

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
      <Bar route="#" logout title="Painel do Administrador" />
      <div className="flex flex-col space-y-4 bg-gray p-8 ">
        <h1 className="text-2xl">Cadastros</h1>
        <div className="flex flex-col space-y-4 sm:space-y-0">
          <div className="w-full space-y-4 shadow-xl rounded-lg p-8 bg-white">
            <h1 className="text-xl">
              Sintomas que os pacientes poderão selecionar
            </h1>
            <ul className="mt-6 h-64 shadow-xs p-4 divide-y overflow-auto divide-gray rounded-lg w-full ">
              {v.map((vt) => (
                <li className="text-xl   ">
                  <div className="flex flex-row">
                    <span className="h-10 w-full text-sm  sm:text-xl text-green">
                      {vt.name}
                    </span>
                    <div className="flex flex-row space-x-6">
                      <button
                        className=" flex flex-col justify-center items-center"
                        type="button"
                      >
                        <img src="./edit-2.svg" alt="" />
                      </button>

                      <button
                        className="flex flex-col justify-center items-center"
                        type="button"
                      >
                        <img src="./trash-2.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="rounded-lg bg-purple  p-2 w-4/12 textButtonColor"
              onClick={() => openModal()}
            >
              <span className="text-white">Adicionar</span>
            </button>
            <ModalAddTool
              handleAddTool={handleAddTool}
              isOpen={modalOpen}
              setIsOpen={toggleModal}
            />
          </div>
          <div className="w-full space-y-4 shadow-xl rounded-lg p-8 bg-white">
            <h1 className="text-xl">Unidades de saúde (US)</h1>
            <ul className="mt-6 h-64 shadow-xs p-4 divide-y overflow-auto divide-gray rounded-lg w-full ">
              {v.map((vt) => (
                <li className="text-xl   ">
                  <div className="flex flex-row">
                    <span className="h-10 w-full text-sm sm:text-xl text-green">
                      {vt.name}
                    </span>
                    <div className="flex flex-row space-x-6">
                      <button
                        className=" flex flex-col justify-center items-center"
                        type="button"
                      >
                        <img src="./edit-2.svg" alt="" />
                      </button>

                      <button
                        className="flex flex-col justify-center items-center"
                        type="button"
                      >
                        <img src="./trash-2.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openModal()}
              type="button"
              className="rounded-lg bg-purple  p-2 w-4/12 textButtonColor"
            >
              <span className="text-white">Adicionar</span>
            </button>
            <ModalAddUnidades
              handleAddTool={handleAddTool}
              isOpen={modalOpen}
              setIsOpen={toggleModal}
            />
          </div>
          <div className="w-full space-y-4 shadow-xl rounded-lg p-8 bg-white">
            <h1 className="text-xl">Profissionais da unidade de saúde</h1>
            <ul className="mt-6 h-64 shadow-xs p-4 divide-y overflow-auto divide-gray rounded-lg w-full ">
              {v.map((vt) => (
                <li className="text-xl   ">
                  <div className="flex flex-row">
                    <span className="h-10 w-full text-sm sm:text-xl text-green">
                      {vt.name}
                    </span>
                    <div className="flex flex-row space-x-6">
                      <button
                        className=" flex flex-col justify-center items-center"
                        type="button"
                      >
                        <img src="./edit-2.svg" alt="" />
                      </button>

                      <button
                        className="flex flex-col justify-center items-center"
                        type="button"
                      >
                        <img src="./trash-2.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="cadastroProfissional">
              <button
                type="button"
                className="rounded-lg bg-purple  p-2 w-4/12 textButtonColor"
              >
                <span className="text-white">Adicionar</span>
              </button>
            </Link>
            {/* <ModalAddProfissional isOpen={modalOpen} setIsOpen={toggleModal} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatorioPaciente;

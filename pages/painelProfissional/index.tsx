import React from 'react';
import Link from 'next/link';
import Bar from '../../components/Bar';
import Input from '../../components/Input';

const PainelProfissional = () => {
  return (
    <>
      <Bar route="/profile" logout="true" title="Painel do Profissional" />
      <div className="flex  flex-col bg-gray">
        <div className="bg-purple w-full">
          <div className="py-4 flex items-center flex-col ">
            <div>
              <img className="z-0 w-18 h-18 relative" src="user.svg" alt="" />
            </div>
            <div className="flex items-center flex-col  mt-4">
              <h1 className="font-bold text-white text-xl">Antonio Carlos</h1>
              <span className="text-white">Técnico em Enfermagem</span>
            </div>
          </div>
        </div>
        <div className="sm:flex  sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-8">
          <div className="flex flex-col sm:w-4/12 bg-white p-8 shadow-md rounded-lg  space-y-4 ">
            <h1 className="text-xl font-medium text-green">Atividades</h1>
            <hr className="text-gray" />
            <div className="flex flex-col space-y-4">
              <Link href="relatorioPacientes">
                <button
                  type="button"
                  className="flex flex-row space-x-4 p-2 border-2 shadow-md shadow-red rounded-lg"
                >
                  <img src="./search.svg" alt="" />
                  <div className="flex flex-col">
                    <span>Listar Pacientes</span>
                  </div>
                </button>
              </Link>
              <Link href="form">
                <button
                  type="button"
                  className="flex flex-row space-x-4 p-2 border-2 shadow-md rounded-lg "
                >
                  <img src="./send.svg" alt="" />
                  <div className="flex flex-col">
                    <span>Enviar formulário</span>
                  </div>
                </button>
              </Link>
              <div className="flex flex-row space-x-4 p-2 border-2 shadow-md rounded-lg ">
                <img src="./calendar.svg" alt="" />
                <div className="flex flex-col">
                  <span>Minha agenda</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:w-8/12  bg-white p-8 shadow-md rounded-lg space-y-4">
            <div className="flex flex-row">
              <h1 className="w-full text-xl font-medium text-green">
                Dados do profissional
              </h1>
              <Link href="cadastroProfissional">
                <img className="cursor-pointer" src="./edit-2.svg" alt="" />
              </Link>
            </div>
            <hr className="text-gray" />
            <div className="flex flex-col space-y-4">
              <div>
                <span className="font-bold">Código: </span>
                <span>00212</span>
              </div>
              <div>
                <span className="font-bold">Nome completo: </span>
                <span>Antonio Carlos Rocha de Lima</span>
              </div>
              <div className="flex flex-row space-x-8">
                <div>
                  <span className="font-bold">CPF: </span>
                  <span>607.210.221-20</span>
                </div>
                <div>
                  <span className="font-bold">Nascimento: </span>
                  <span>20/12/1996</span>
                </div>
              </div>
              <div>
                <span className="font-bold">Endereço: </span>
                <span>Rua josé siqueira, S/N, Viçosa do Ceará</span>
              </div>
              <div>
                <span className="font-bold">PSF: </span>
                <span>Cacimbão</span>
              </div>
              <div>
                <span className="font-bold">Usuário: </span>
                <span>Profissional da sáude</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PainelProfissional;

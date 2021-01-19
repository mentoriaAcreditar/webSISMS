import React from 'react';
import Bar from '../../components/Bar';

import './style.css';

const PerfilDoPaciente: React.FC = () => {
  return (
    <>
      <Bar route="#" title="Perfil do paciente" />
      <div className="flex flex-col p-4 h-screen items-center">
        <div className="flex bg-opacity-30 bg-green6 bg-gray-400 p-8 sm:w-10/12 bg-opacity-25 rounded-3xl  flex-col items-center mt-8 ">
          <div className="flex  flex-row sm:px-4 sm:space-x-32 space-x-24 items-center space-x-2">
            <div className="bg-blue3 h-8 flex items-center justify-center p-2 rounded-3xl w-20">
              <button type="button" className="">
                Editar
              </button>
              <img className="w-4 icon" src="./pencil.svg" alt="" />
            </div>

            <img src="./user.svg" alt="" />

            <div className="bg-blue3 h-8 flex items-center justify-center space-x-2 p-2 rounded-3xl w-20">
              <button type="button" className="">
                Sair
              </button>
              <img className="w-4 icon" src="./logout2.svg" alt="" />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center space-y-4">
            <input
              className="border-b-2 border-green placeholder-green text-green bg-transparent text-center text-2xl p-2"
              placeholder="Nome completo"
              type="text"
            />
            <input
              className="border-b-2 border-green placeholder-green text-green bg-transparent text-center text-2xl p-2"
              placeholder="CPF"
              type="text"
            />
            <input
              className="border-b-2 placeholder-green border-green text-green bg-transparent text-center text-2xl p-2"
              placeholder="Endereço"
              type="text"
            />
            <input
              className="border-b-2 placeholder-green border-green  text-green bg-transparent text-center text-2xl p-2"
              placeholder="Remédios"
              type="text"
            />
            <input
              className="border-b-2 placeholder-green border-green text-green bg-transparent text-center text-2xl p-2"
              placeholder="Histórico de sintomas"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilDoPaciente;

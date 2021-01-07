import { yellow } from '@material-ui/core/colors';
import React from 'react';
import './style.css';

const RelatorioPaciente: React.FC = () => {
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
    <>
      <div className="flex fundo flex-col  p-4 bg-blue5">
        <div className="header sm:w-full flex flex-row items-center justify-center p-2 rounded-3xl">
          <h1 className="sm:text-2xl  text-center text-green">
            Relatório geral de pacientes por profissional
          </h1>
        </div>
        <div className="flex sm:text-xl text-green sm:px-8 px-4 flex-row mt-10">
          <div className="sm:w-9/12 ">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="text-sm sm:text-2xl">Nome do profissional</h1>
              <img className="icon" src="./lupa.png" alt="" />
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-center">
            <h1 className="sm:text-2xl text-sm">Localizar pacientes</h1>
            <img className="icon" src="./lupa.png" alt="" />
          </div>
        </div>
        <form className=" flex flex-col items-center justfify-center" action="">
          <div className="flex flex-col mt-8   shadow-md rounded-l-3xl rounded-r-3xl  h-screen">
            {/* <ul className="flex bg-green text-white rounded-r-3xl rounded-l-3xl rounded-br-none rounded-bl-none flex-row p-2 space-x-4">
           
          </ul> */}

            <table>
              <tr className="sm:text-3xl  text-sm bg-blue4Dark   text-white  rounded-br-none rounded-bl-none flex-row mr-2 space-x-4">
                <td className=" bg-blue4Dark sm:px-16  text-white  rounded-l-3xl  rounded-br-none rounded-bl-none flex-row p-2 space-x-4">
                  <div className="flex  flex-row items-center space-x-4">
                    <span>Nome</span>
                    <img className="sm:w-8 w-4 icon" src="./lupa.png" alt="" />
                  </div>
                </td>
                <td>Contato</td>
                <td>Última ataulização</td>
                <td>Risco</td>
                <td className=" bg-blue4Dark  text-white rounded-r-3xl sm:pr-8 rounded-br-none rounded-bl-none flex-row p-2 sm:space-x-4">
                  Ações
                </td>
              </tr>
              {v.map((vt) => (
                <tr className="border-blue4 sm:text-2xl border-b text-blue4  ">
                  <td className="p-4">{vt.name}</td>
                  <td>{vt.contato}</td>
                  <td>{vt.atualizacao}</td>
                  <td
                    className={
                      vt.risco === 'Baixo'
                        ? 'text-green'
                        : vt.risco === 'Médio'
                        ? 'text-yellow-400'
                        : 'text-red-600'
                    }
                  >
                    {vt.risco}
                  </td>
                  <td>{vt.acoes}</td>
                </tr>
              ))}
            </table>
          </div>
        </form>
      </div>
      <div className="flex  flex-row justify-center w-full h-full ">
        <img className="w-full" src="./fundoFooter2.png" alt="" />
      </div>
    </>
  );
};

export default RelatorioPaciente;

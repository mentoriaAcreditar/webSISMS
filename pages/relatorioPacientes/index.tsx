import { yellow } from '@material-ui/core/colors';
import React from 'react';
import Bar from '../../components/Bar';
import './style.css';
import Link from 'next/link';

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
      <Bar
        left
        route="/painelProfissional"
        title="Relatório geral de pacientes"
      />
      <div className="flex fundo flex-col  sm:px-24 py-4 bg-gray ">
        <form
          className=" flex flex-col sm:p-8 p-2 rounded-lg shadow-md bg-white"
          action=""
        >
          {' '}
          <div className="sm:flex sm:flex-row">
            <h1 className="text-xl sm:w-full ">Pacientes</h1>
            <div className="flex flex-row space-x-4">
              <input className="border w-full rounded-lg p-2" type="text" />
              <button className="bg-purple p-2 rounded-lg" type="button">
                <span className="text-white">Pesquisar</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-xs  shadow-xs rounded-l-lg rounded-r-lg  h-screen">
            <table>
              <tr className="sm:text-xl text-xs  bg-purpleDark   text-white  rounded-br-none rounded-bl-none flex-row  ">
                <td className=" bg-purpleDark p-2  text-white  rounded-l-lg  rounded-br-none rounded-bl-none flex-row ">
                  Nome
                </td>
                <td>Contato</td>
                <td>Última atualização</td>
                <td>Risco</td>
                <td className=" bg-purpleDark  text-white rounded-r-lg sm:pr-8 rounded-br-none rounded-bl-none flex-row p-2 sm:space-x-4">
                  Ações
                </td>
              </tr>
              {v.map((vt) => (
                <tr className="border-blue4 sm:text-xl border-b text-blue4  ">
                  <td className="py-2 px-0">{vt.name}</td>
                  <td>{vt.contato}</td>
                  <td>{vt.atualizacao}</td>
                  <td
                    className={
                      vt.risco === 'Baixo'
                        ? 'text-green'
                        : vt.risco === 'Médio'
                        ? 'text-yellow-400'
                        : 'text-red'
                    }
                  >
                    {vt.risco}
                  </td>
                  <td>
                    <Link href="/relatorioPaciente">
                      <span className="cursor-pointer">Abrir</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default RelatorioPaciente;

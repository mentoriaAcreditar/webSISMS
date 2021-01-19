import React from 'react';
import Link from 'next/link';
import Bar from '../../components/Bar';
import Input from '../../components/Input';

const RelatorioDescritivo = () => {
  return (
    <>
      <Bar
        route="relatorioPacientes"
        left
        title="Relatório descritivo do paciente"
      />
      <div className="flex  flex-col bg-gray">
        <div className="bg-purple w-full">
          <div className="py-4 flex items-center flex-col ">
            <div>
              <img className="z-0 w-18 h-18 relative" src="user.svg" alt="" />
            </div>
            <div className="flex items-center flex-col  mt-4">
              <h1 className="font-bold text-white text-xl">Antonio Carlos</h1>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 space-y-4 sm:space-y-0 p-8">
          <div className="flex flex-col bg-white p-8 shadow-md rounded-lg space-y-4">
            <h1 className="text-xl text-green ">Doenças pré-existentes</h1>
            <hr className="text-gray" />
            <div className="sm:grid sm:grid-cols-5 space-y-2 sm:space-y-0 sm:gap-2">
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Asma</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Asma</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Asma</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Asma</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Asma</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Asma</span>
              </div>
            </div>
            <h1 className="text-xl text-green ">Medicamentos já consumidos:</h1>
            <hr className="text-gray" />
            <div className="sm:grid sm:grid-cols-5  space-y-2 sm:space-y-0 sm:gap-2">
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Dipirona</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Medical</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Neosadina</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Doril</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>Milhoral</span>
              </div>
              <div className="border flex flex-row justify-center border-gray p-2 rounded-lg">
                <span>As</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white p-8 shadow-md rounded-lg space-y-4">
            <h1 className="text-xl font-medium text-green">Dados pessoais</h1>
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
            </div>
          </div>

          <div className="flex flex-col bg-white p-8 shadow-md rounded-lg  space-y-4 ">
            <h1 className="text-xl font-medium text-green">Histórico</h1>
            <hr className="text-gray" />
            <div className="flex flex-col overflow-auto h-64 space-y-4">
              <div className="flex flex-row space-x-4 p-2 border-2 shadow-md shadow-red rounded-lg border-blue2">
                <img src="./clipboard.svg" alt="" />
                <div className="flex flex-col">
                  <span>Risco de saúde: Baixo</span>
                  <span>Sintomas: Febre, tose</span>
                  <span className="text-xs">
                    Dia: 08/10/2020 - às 10:00 hrs
                  </span>
                </div>
              </div>
              <div className="flex flex-row space-x-4 p-2 border-2 shadow-md rounded-lg border-red">
                <img src="./clipboard.svg" alt="" />
                <div className="flex flex-col">
                  <span>Risco de saúde: Alta</span>
                  <span>Sintomas: Febre, tose</span>
                  <span className="text-xs">
                    Dia: 08/10/2020 - às 10:00 hrs
                  </span>
                </div>
              </div>
              <div className="flex flex-row space-x-4 p-2 border-2 shadow-md rounded-lg border-yellow-400">
                <img src="./clipboard.svg" alt="" />
                <div className="flex flex-col">
                  <span>Risco de saúde: Médiano</span>
                  <span>Sintomas: Febre, tose</span>
                  <span className="text-xs">
                    Dia: 08/10/2020 - às 10:00 hrs
                  </span>
                </div>
              </div>
              <div className="flex flex-row space-x-4 p-2 border-2 shadow-md rounded-lg border-yellow-400">
                <img src="./clipboard.svg" alt="" />
                <div className="flex flex-col">
                  <span>Risco de saúde: Médiano</span>
                  <span>Sintomas: Febre, tose</span>
                  <span className="text-xs">
                    Dia: 08/10/2020 - às 10:00 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatorioDescritivo;
{
  /* <div className="flex flex-row mt-4  justify-center space-x-4">
            <div className="flex flex-col rounded-2xl w-2/12 items-center  ">
              <div className="flex flex-col items-center w-full rounded-t-2xl rounded-h-2xl bg-opacity-25 bg-green  text-green">
                <h1>Dia 01(10/02/2021)</h1>
                <span className="text-sm">às 13:43</span>
              </div>
              <div className="flex flex-col items-center w-full rounded-b-2xl bg-blue4">
                <span>Risco de saúde</span>
                <h1 className="text-xl text-green2">Baixo</h1>
                <h1>Sintomas</h1>
                <p className="text-center">
                  Tosse, Febre, Diarréria, Falta de ar
                </p>
              </div>
            </div>
          </div> */
}

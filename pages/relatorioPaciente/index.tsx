import React from 'react';
import Link from 'next/link';

const RelatorioDescritivo = (): JSX.Element => {
  return (
    <>
      <div className="  flex flex-row   p-4 shadow-xs bg-primaryDark">
        <Link href="/painelProfissional">
          <div className="flex cursor-pointer flex-row space-x-2">
            <img src="./arrow-left.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="flex  flex-col bg-gray">
        <div className="bg-primary w-full">
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

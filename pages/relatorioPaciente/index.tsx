import React from 'react';
import Link from 'next/link';
import Bar from '../../components/Bar';
import Input from '../../components/Input';

const RelatorioDescritivo = () => {
  return (
    <div
      className="flex fundo  flex-col p-4"
      style={{ background: 'url(./fundoAzul.png)  no-repeat center/cover' }}
    >
      <div className=" bg-gradient-to-b from-blue w-full flex flex-row items-center justify-center p-2 rounded-3xl">
        <div className="flex flex-col w-11/12">
          <h1 className="sm:text-2xl  text-center text-green">
            Relatório descritivo do paciente
          </h1>
        </div>
        <div className="flex cursor-pointer flex-row space-x-2">
          <span>Sair</span>
          <img src="./logout2.svg" alt="" />
        </div>
      </div>

      <img src="./user.svg" alt="" />

      <form action="sm:flex sm:flex-col">
        <Input placeholder="Seu nome" name="Nome completo:" />
        <div className="sm:flex sm:flex-row">
          <Input name="CPF:" />
          <Input name="Identificador:" />
          <Input name="Data de inicio do monitoramento:" />
        </div>
        <Input name="Endereço:" />
        <Input name="Doeças pré-existentes:" />
        <Input name="Medicamentos já consumidos:" />
      </form>

      <div className=" bg-gradient-to-b from-blue w-full flex flex-row items-center justify-center p-2 rounded-3xl">
        <div className="flex flex-col w-11/12">
          <h1 className="sm:text-2xl  text-center text-green">Histórico</h1>
        </div>
      </div>

      <div className="flex flex-row mt-4  justify-center space-x-4">
        <div className="flex flex-col rounded-2xl w-2/12 items-center  ">
          <div className="flex flex-col items-center w-full rounded-t-2xl rounded-h-2xl bg-opacity-25 bg-green  text-green">
            <h1>Dia 01(10/02/2021)</h1>
            <span className="text-sm">às 13:43</span>
          </div>
          <div className="flex flex-col items-center w-full rounded-b-2xl bg-blue4">
            <span>Risco de saúde</span>
            <h1 className="text-xl text-green2">Baixo</h1>
            <h1>Sintomas</h1>
            <p className="text-center">Tosse, Febre, Diarréria, Falta de ar</p>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl w-2/12 items-center  ">
          <div className="flex flex-col items-center w-full rounded-t-2xl rounded-h-2xl bg-opacity-25 bg-yellow-400  text-yellow-600">
            <h1>Dia 01(10/02/2021)</h1>
            <span className="text-sm">às 13:43</span>
          </div>
          <div className="flex flex-col items-center w-full rounded-b-2xl bg-yellow-400">
            <span>Risco de saúde</span>
            <h1 className="text-xl text-yellow-600">Baixo</h1>
            <h1>Sintomas</h1>
            <p className="text-center">Tosse, Febre, Diarréria, Falta de ar</p>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl w-2/12 items-center  ">
          <div className="flex flex-col items-center w-full rounded-t-2xl rounded-h-2xl bg-opacity-25 bg-red-400  text-red-400">
            <h1>Dia 01(10/02/2021)</h1>
            <span className="text-sm">às 13:43</span>
          </div>
          <div className="flex flex-col items-center w-full rounded-b-2xl bg-red-400">
            <span>Risco de saúde</span>
            <h1 className="text-xl text-red-600">Baixo</h1>
            <h1>Sintomas</h1>
            <p className="text-center">Tosse, Febre, Diarréria, Falta de ar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatorioDescritivo;

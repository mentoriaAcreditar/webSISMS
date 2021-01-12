import React, { useState } from 'react';
import Link from 'next/link';
import Bar from '../../components/Bar';
import Input from '../../components/Input';
import { ProfissonalDaSaude } from '../../models/profissonalDaSaude';

const CadastroProfissional = () => {
  let [profissional, setProfissional] = useState({
    ...new ProfissonalDaSaude(),
  });

  function handleChange(evt: any) {
    const value = evt.target.value;
    setProfissional({
      ...profissional,
      [evt.target.label]: value,
    });
  }
  function handleSalvar() {
    console.log(profissional);
  }
  return (
    <div
      className="flex fundo flex-col p-4"
      style={{ background: 'url(./fundoAzul.png)  no-repeat center/cover' }}
    >
      <div className=" bg-gradient-to-b from-blue w-full flex flex-row items-center justify-center p-2 rounded-3xl">
        <div className="flex flex-col w-11/12">
          <h1 className="sm:text-2xl  text-center text-green">
            Cadastro do profissional
          </h1>
        </div>
        <div className="flex cursor-pointer flex-row space-x-2">
          <span>Sair</span>
          <img src="./logout2.svg" alt="" />
        </div>
      </div>

      <h1 className="mx-2 my-8 text-xl text-green">
        Dica: Você pode alterar o cadastro quando quiser.
      </h1>
      <div>
        <div className="sm:flex  sm:flex-row sm:items-center sm:ml-40  justify-center">
          <div className="flex  flex-col sm:flex-row items-center ">
            <div className="flex my-2  sm:my-0 flex-col items-center justify-center">
              <span className="text-xl text-green">Sua foto de perfil</span>
              <img src="./user.svg" alt="" />
            </div>
            <button className="bg-gray h-8 px-2" type="button">
              Insira sua Imagem
            </button>
          </div>
        </div>
      </div>
      <form action="sm:flex sm:flex-col" onSubmit={handleSalvar}>
        <Input
          placeholder="Seu nome"
          label="Nome completo:"
          name="nome"
          onChange={handleChange}
        />
        <div className="sm:flex sm:flex-row">
          <Input label="CPF:" name="" />
          <Input label="Gênero:" name="" />
          <Input label="Telefone:" name="" />
        </div>
        <div className="sm:flex sm:flex-row">
          <Input label="CEP:" name="" />
          <Input label="Cidade:" name="" />
          <Input label="Nº:" name="" />
        </div>
        <div className="sm:flex sm:flex-row">
          <Input label="Rua:" name="" />
          <Input label="Bairro:" name="" />
        </div>
        <Input label="Rua:" name="" />
        <Input label="Função:" name="" />
        <div className="flex flex-row w-full items-center justify-center py-4">
          <button
            type="submit"
            className="bg-white text-green p-2 rounded-full w-24"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroProfissional;

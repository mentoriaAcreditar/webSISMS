import React from 'react';
import Bar from '../../components/Bar';
import Input from '../../components/Input';

const CadastroPaciente = () => {
  return (
    <>
      <div className="flex bg-green6 fundo flex-col p-4 z-10">
        <Bar title="Cadastro de Paciente" />
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
        <form action="sm:flex sm:flex-col">
          <Input placeholder="Seu nome" name="Nome completo:" />
          <div className="sm:flex sm:flex-row">
            <Input name="CPF:" />
            <Input name="Gênero:" />
            <Input name="Telefone:" />
          </div>
          <div className="sm:flex sm:flex-row">
            <Input name="CEP:" />
            <Input name="Rua:" />
          </div>
          <div className="sm:flex sm:flex-row">
            <Input name="Bairro:" />
            <Input name="Nº:" />
          </div>
          <Input name="Sofre de alguma(s) doença(s) crônica(s)? Caso sim descreva-a(s):" />
          <Input name="Consome algum(uns) medicamento(s) frequentemente? Caso sim especifique." />
          <div className="flex flex-row w-full items-center justify-center py-4" />
        </form>
      </div>
      <div className="flex  flex-row justify-center  w-full ">
        <button
          type="submit"
          className="bg-white text-green mt-24 z-10 relative p-2 rounded-full w-24"
        >
          Salvar
        </button>
        <img className="w-full absolute z-0" src="./fundoFooter.png" alt="" />
      </div>
    </>
  );
};

export default CadastroPaciente;

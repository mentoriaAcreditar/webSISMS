import React from 'react';
import Bar from '../../components/Bar';
import Input from '../../components/Input';

const CadastroPaciente = () => {
  return (
    <div
      className="flex fundo flex-col p-4"
      // style={{ background: 'url(./background.png)  no-repeat center/cover' }}
    >
      <Bar title="Cadastro de Paciente" />
      <h1 className="mx-2 my-8 text-xl text-green">
        Dica: Você pode alterar o cadastro quando quiser.
      </h1>
      <div>
        <div className="flex flex-row items-center ml-40 justify-center">
          <div className="flex flex-row items-center ">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl text-green">Sua foto de perfil</span>
              <img src="./user.svg" alt="" />
            </div>
            <button className="bg-gray h-8 px-2" type="button">
              Insira sua Imagem
            </button>
          </div>
        </div>
      </div>
      <form action="">
        <Input name="Nome completo:" />
        <div className="flex flex-row">
          <Input name="CPF:" />
          <Input name="Gênero:" />
          <Input name="Telefone:" />
        </div>
        <div className="flex flex-row">
          <Input name="CEP:" />
          <Input name="Rua:" />
        </div>
        <div className="flex flex-row">
          <Input name="Bairro:" />
          <Input name="Nº:" />
        </div>
        <Input name="Sofre de alguma(s) doença(s) crônica(s)? Caso sim descreva-a(s):" />
        <Input name="Consome algum(uns) medicamento(s) frequentemente? Caso sim especifique." />
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

export default CadastroPaciente;

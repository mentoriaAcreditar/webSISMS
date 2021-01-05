import React from 'react';
import './style.css';

const RelatorioPaciente: React.FC = () => {
  const v = [
    {
      name: 'Tosse',
    },
    {
      name: 'Coração acelerado',
    },
    {
      name: 'Febre',
    },
    {
      name: 'Cansaço',
    },
    {
      name: 'Falta de ar',
    },
  ];
  return (
    <>
      <div className="flex fundo flex-col bg-blueLight2 ">
        <div className="bg-gradient-to-b   w-full flex flex-col items-center justify-center p-2 rounded-3xl">
          <h1 className="sm:text-2xl  text-center text-green">
            Relatório geral de pacientes por profissional
          </h1>
          <span>Administrador Fulano</span>
        </div>

        <div className="w-1/2 px-8">
          <div className="flex text-xl text-green  flex-row mt-10">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="blueDegrade rounded-full px-6 py-2">Sintomas</h1>
              <img className="icon" src="./lupa2.svg" alt="" />
            </div>
          </div>
          <table className="divide-y mt-6 blueDegrade w-full ">
            {v.map((vt) => (
              <tr className="border-blue4 text-xl text-blue4 ">
                <td className="h-10 ">{vt.name}</td>
                <td>
                  <button type="button">Alterar</button>
                </td>
                <td>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </table>
          <div className="flex flex-row space-x-4">
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Adicionar
            </button>
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Aplicar
            </button>
          </div>
        </div>

        <div className="w-1/2 px-8">
          <div className="flex text-xl text-green  flex-row mt-10">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="blueDegrade rounded-full px-6 py-2">
                Profissionais
              </h1>
              <img className="icon" src="./lupa2.svg" alt="" />
            </div>
          </div>
          <table className="divide-y mt-6 blueDegrade w-full ">
            {v.map((vt) => (
              <tr className="border-blue4 text-xl text-blue4 ">
                <td className="h-10 ">{vt.name}</td>
                <td>
                  <button type="button">Alterar</button>
                </td>
                <td>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </table>
          <div className="flex flex-row space-x-4">
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Adicionar
            </button>
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Aplicar
            </button>
          </div>
        </div>

        <div className="w-1/2 px-8">
          <div className="flex text-xl text-green  flex-row mt-10">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="blueDegrade rounded-full px-6 py-2">Pacientes</h1>
              <img className="icon" src="./lupa2.svg" alt="" />
            </div>
          </div>
          <table className="divide-y mt-6 blueDegrade w-full ">
            {v.map((vt) => (
              <tr className="border-blue4 text-xl text-blue4 ">
                <td className="h-10 ">{vt.name}</td>
                <td>
                  <button type="button">Alterar</button>
                </td>
                <td>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </table>
          <div className="flex flex-row space-x-4">
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Adicionar
            </button>
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Aplicar
            </button>
          </div>
        </div>

        <div className="w-1/2 px-8">
          <div className="flex text-xl text-green  flex-row mt-10">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="blueDegrade rounded-full px-6 py-2">
                Unidades de Saúde
              </h1>
              <img className="icon" src="./lupa2.svg" alt="" />
            </div>
          </div>
          <table className="divide-y mt-6 blueDegrade w-full ">
            {v.map((vt) => (
              <tr className="border-blue4 text-xl text-blue4 ">
                <td className="h-10 ">{vt.name}</td>
                <td>
                  <button type="button">Alterar</button>
                </td>
                <td>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ))}
          </table>
          <div className="flex flex-row space-x-4">
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Adicionar
            </button>
            <button
              type="button"
              className="blueDegradeButton p-2 w-4/12 textButtonColor"
            >
              Aplicar
            </button>
          </div>
        </div>
        <div className=" flex flex-row  mt-20 justify-center">
          <button
            type="button"
            className="blueDegradeButton p-2 w-40 textButtonColor"
          >
            Salvar
          </button>
        </div>
      </div>
      <div className="flex  flex-row justify-center w-full h-full ">
        <img className="w-full" src="./fundo_ADM.png" alt="" />
      </div>
    </>
  );
};

export default RelatorioPaciente;

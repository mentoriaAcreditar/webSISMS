import React from 'react';

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
    <div
      className="flex fundo flex-col p-4 "
      style={{ background: 'url(./fundoAzul.png)  no-repeat center/cover' }}
    >
      <div className="bg-gradient-to-b from-white  w-full flex flex-col items-center justify-center p-2 rounded-3xl">
        <h1 className="sm:text-2xl text-center text-green">
          Relatório geral de pacientes por profissional
        </h1>
        <span>Administrador Fulano</span>
      </div>
      <div className="flex text-xl text-green px-8 flex-row mt-10">
        <div className="w-9/12 ">
          <div className="flex flex-row space-x-2 items-center">
            <h1 className="bg-blue4 rounded-full px-6 py-2">Sintomas</h1>
            <img src="./lupa.png" alt="" />
          </div>
        </div>

        <div className="flex flex-row space-x-2 items-center">
          <h1>Localizar pacientes</h1>
          <img src="./lupa.png" alt="" />
        </div>
      </div>
      <form className=" flex flex-col items-center justfify-center" action="">
        <div className="flex flex-col mt-8 shadow-xs  rounded-l-3xl rounded-r-3xl ">
          {/* <ul className="flex bg-green text-white rounded-r-3xl rounded-l-3xl rounded-br-none rounded-bl-none flex-row p-2 space-x-4">
           
          </ul> */}
          <ul className="flex flex-col ">
            <table className="divide-y ">
              {v.map((vt) => (
                <tr className="border-blue4  text-2xl text-blue4  ">
                  <td className="w-24 h-16">{vt.name}</td>
                  <td>
                    <button type="button">Alterar</button>
                  </td>
                  <td>
                    <button type="button">Excluir</button>
                  </td>
                </tr>
              ))}
            </table>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default RelatorioPaciente;

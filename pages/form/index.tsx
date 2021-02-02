import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [descricao, setDescricao] = useState('');
  const sintomas = [
    { id: '1', name: 'Febre' },
    { id: '2', name: 'Dor de cabeça' },
    { id: '3', name: 'Diarréia' },
    { id: '4', name: 'Espirro' },
    { id: '5', name: 'Dores no corpo' },
    { id: '6', name: 'Sem paladar' },
  ];
  const [selectSintomas, setSelectSintomas] = useState(['']);

  function handleResumo(e: any) {
    setDescricao(descricao);
    console.log(descricao);
  }

  function handleCheck(id: any) {
    const checkBox = document.getElementById(id) as HTMLInputElement;
    const { name } = checkBox;

    if (checkBox.checked === true) {
      selectSintomas.filter((s) => {
        if (name !== s) {
          setSelectSintomas([...selectSintomas, name]);
        }
      });
    } else {
      selectSintomas.filter((s) => {
        if (name === s) {
          const id = selectSintomas.indexOf(s);

          const sint = [...selectSintomas];
          sint.splice(id, 1);

          setSelectSintomas(sint);
        }
      });
    }
  }
  return (
    <div className="flex container  flex-col bg-gray  items-center">
      <div className="w-full text-white h-16 bg-primary  text-xl flex flex-row items-center justify-center">
        <h1>Formulário de acompanhamento</h1>
      </div>
      <div className="flex  flex-col bg-white p-8  sm:w-10/12  rounded-3xl shadow-md mt-4 ">
        <h1 className="text-xl text-green">
          Como está se sentido hoje? Marque os sintomas.
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-10">
          {sintomas.map((s) => (
            <div className="flex flex-row items-center space-x-2 ">
              <input
                className="check-size"
                name={s.name}
                type="checkbox"
                id={s.id}
                onClick={() => {
                  handleCheck(s.id);
                }}
              />
              <label htmlFor="">{s.name}</label>
            </div>
          ))}
        </div>
        <h1 className="mt-4">
          Caso queira especificar mais seu caso, preencha este campo abaixo:
        </h1>
        <input
          className="h-24 bg-gray p-2 mt-4 rounded-lg  "
          type="text-area"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          name=""
          id=""
        />
        <button
          type="submit"
          className="bg-purple text-blue2 p-2 w-40 rounded-lg mt-4"
          onClick={handleResumo}
        >
          <span className="text-white">Pronto</span>
        </button>
      </div>
      <div className="bg-white rounded-2xl mt-10 w-full  sm:w-10/12 shadow-md  ">
        <div className="flex flex-col bg-gray-400  p-8 w-full rounded-3xl  ">
          <h1 className="text-xl text-green">Resumo</h1>
          <span> Dia 01/02/2021 às 13:50(3ª consulta)</span>
          <ul className="flex flex-row space-x-2">
            {selectSintomas.map((s) =>
              s === '' ? (
                <li />
              ) : (
                <li key={s} className="p-2 shadow rounded-sm  ">
                  {s}
                </li>
              ),
            )}
          </ul>
          <p className="mt-4 ml-2">{descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React from 'react';
import Bar from '../../components/Bar';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';

const Form = () => {
  return (
    <div
      className="flex fundo flex-col p-4   items-center"
      style={{ background: 'url(./background.png)  no-repeat center/cover' }}
    >
      <Bar title="Olá, tudo bem? Queremos saber como você está." />

      <div className="flex flex-col bg-gray-400 p-8  sm:w-10/12 bg-opacity-25 rounded-3xl  mt-16 ">
        <h1 className="text-xl text-green">
          Como está se sentido hoje? Marque os sintomas.
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-10">
          <CheckBox type="radio" id="male" name="dor" value="Febre" />
          <CheckBox type="radio" id="male" name="dor" value="Tosse seca" />
          <CheckBox type="radio" id="male" name="dor" value="Cansaço" />
          <CheckBox type="radio" id="male" name="dor" value="Dor de cabeça" />
          <CheckBox
            type="radio"
            id="male"
            name="dor"
            value="Perda de paladar"
          />
          <CheckBox type="radio" id="male" name="dor" value="Desconforto" />
          <CheckBox type="radio" id="male" name="dor" value="Conjutivite" />
          <CheckBox type="radio" id="male" name="dor" value="Diarreira" />
          <CheckBox
            type="radio"
            id="male"
            name="dor"
            value="Respiração anormal"
          />
          <CheckBox type="radio" id="male" name="dor" value="Dor no peito" />
          <CheckBox type="radio" id="male" name="dor" value="Catarro" />
          <CheckBox type="radio" id="male" name="dor" value="Espirro" />
          <CheckBox type="radio" id="male" name="dor" value="Enjoo" />
          <CheckBox type="radio" id="male" name="dor" value="Vômito" />
          <CheckBox
            type="radio"
            id="male"
            name="dor"
            value="Coração acelerado"
          />
        </div>
        <h1 className="mt-4">
          Caso queira especificar mais seu caso, preencha este campo abaixo:
        </h1>
        <input
          className="h-24 p-2 mt-4 rounded-3xl"
          type="text-area"
          name=""
          id=""
        />
        <button
          type="submit"
          className="bg-blue3 text-blue2 p-2 w-40 rounded-3xl mt-4"
        >
          Pronto
        </button>
      </div>
      <div className=" h-screen  sm:w-10/12  ">
        <div className="flex h-64 flex-col bg-gray-400  p-8 w-full bg-opacity-25 rounded-3xl  mt-10 ">
          <h1 className="text-xl text-green">Resumo</h1>
          <p>
            Dia 01/02/2021 às 13:50(3ª consulta)
            <br />
            Tosse fraca: respiração pouco ofegante; dores corporais fraca;
            sonolência moderada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;

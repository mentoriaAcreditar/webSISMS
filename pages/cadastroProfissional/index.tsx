import React, { useState } from 'react';
import Link from 'next/link';
import InputMask from 'react-input-mask';
import Bar from '../../components/Bar';
import Input from '../../components/Input';
import { ProfissonalDaSaude } from '../../models/profissonalDaSaude';

const CadastroProfissional = () => {
  const [profissional, setProfissional] = useState({
    ...new ProfissonalDaSaude(),
  });

  function handleChange(evt: any) {
    const { value } = evt.target;
    setProfissional({
      ...profissional,
      [evt.target.label]: value,
    });
  }

  console.log(profissional);
  const [tipos, setTipos] = useState([
    'admin',
    'gerente',
    'profissional',
    'paciente',
  ]);
  const [selectTipos, setSelectTipos] = useState();

  const [cidades, setCidades] = useState([
    'Viçosa do Ceará',
    'Tianguá',
    'Sobral',
    'Frecheirinha',
  ]);
  const [selectCidade, setSelectCidade] = useState();

  const [psfs, setPsfs] = useState(['Camcimbão', 'Ingá', 'Delgada']);
  const [selectPsf, setSelectPsf] = useState();

  function handleSelectTipo(event: any) {
    const tipo = event.target.value;
    setSelectTipos(tipo);
    console.log(tipo);
  }

  function handleSelectCidade(event: any) {
    const cidade = event.target.value;
    setSelectCidade(cidade);
    console.log(cidade);
  }

  function handleSelectPsf(event: any) {
    const psf = event.target.value;
    setSelectCidade(psf);
    console.log(psf);
  }
  return (
    <>
      <Bar title="Cadastro de Profissional" />
      <div className="flex fundo flex-col items-center justify-center  bg-gray">
        <div className="bg-purple w-full">
          {/* <h1 className="mx-2 mt-2 text-white text-xl">
            Dica: Você pode alterar o cadastro quando quiser.
          </h1> */}
          <div className="py-4 flex items-center flex-col ">
            <div>
              <img className="z-0 w-32 h-32 relative" src="user.svg" alt="" />
            </div>
            <img
              className="bg-blue6 z-10 rounded-full w-10 p-2 -mt-12 ml-20 h-10  relative"
              src="camera.svg"
              alt=""
            />
            <div className="flex items-center flex-col  mt-4">
              <h1 className="font-bold text-white text-2xl">Antonio Carlos</h1>
              <span className="text-xl">Enfermeiro</span>
            </div>
          </div>
        </div>

        <form className="sm:flex sm:flex-col sm:mb-20  rounded-xl sm:p-16 py-16 px-8 justify-center sm:w-8/12 w-full  -mt-10 bg-white">
          <Input
            mask=""
            placeholder="Seu nome"
            label="Nome completo:"
            name="nome"
            onChange={handleChange}
          />
          <div className="sm:flex sm:flex-row sm:w-4/12">
            <Input mask="99999999-9" label="RG:" />
            <Input mask="999.999.999-99" label="CPF:" />
          </div>
          <div className="sm:flex sm:flex-row">
            <div className="sm:w-full">
              <Input mask="" label="E-mail:" />
            </div>
            <div className="sm:w-4/12">
              <Input mask="(99)9.9999-9999" label="Telefone:" />
            </div>
          </div>

          <div className="sm:flex sm:flex-row">
            <div className="sm:w-3/12">
              <Input mask="99.999-999" label="CEP:" />
            </div>

            <div className="flex text-green mt-2 flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 ">
              <span className="">Cidade:</span>
              <select
                className="px-2  text-grayTextBase space-x-2  h-10 bg-white text-sm sm:text-base box-border t border-color rounded-lg"
                id="tipo"
                name="tipo"
                value={selectCidade}
                onChange={handleSelectCidade}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {cidades.map((cidade) => (
                  <option key={cidade} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:w-5/12">
              <Input mask="" label="Rua:" />
            </div>
          </div>
          <div className="sm:flex sm:flex-row">
            <div className="sm:w-2/12">
              <Input mask="" label="Nº:" />
            </div>
            <div className="sm:w-4/12">
              <Input mask="" label="Bairro:" />
            </div>
            <div className="sm:w-6/12">
              <Input mask="" label="Complemento:" />
            </div>
          </div>
          <div className="sm:flex sm:flex-row">
            <div className="flex text-green flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 mt-6">
              <span className="text-lg">Profissional</span>
              <select
                className="px-2 text-green  mt-2 h-12 bg-white text-sm sm:text-base box-border bg-input border-color rounded-lg"
                id="tipo"
                name="tipo"
                value={selectTipos}
                onChange={handleSelectTipo}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {tipos.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex text-green flex-col sm:w-4/12  ml-2  sm:mr-4 mr-2 mt-6">
              <span className="text-lg">PSF</span>
              <select
                className="p-2 text-grayTextBase space-x-2 mt-2 h-12 bg-white text-sm sm:text-base box-border bg-input border-color rounded-lg"
                id="tipo"
                name="tipo"
                value={selectPsf}
                onChange={handleSelectPsf}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {psfs.map((psf) => (
                  <option key={psf} value={psf}>
                    {psf}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex mt-10 flex-row w-full items-center justify-center py-4">
            <button
              type="submit"
              className="bg-blue4 text-white p-2 rounded-lg w-24"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CadastroProfissional;

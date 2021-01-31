import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Bar from '../Bar';
import Input from '../Input';
import { Profissional } from '../../model/entidades/profissional';
import { ReqProfissional } from '../../model/requisicoes/req-profissional';
import { ReqCidades } from '../../model/requisicoes/req-cidades';
import { Cidade } from '../../model/entidades/cidade';

import { ReqPsf } from '../../model/requisicoes/req-psf';
import { Psf } from '../../model/entidades/psf';

const CadastroProfissional2 = () => {
  useEffect(() => {
    getCidades();
    getPsfs();
  }, []);

  const [profissional, setProfissional] = useState({
    ...new Profissional(),
    toData: new Profissional().toData,
  });

  function handleChange(evt: any) {
    const { value } = evt.target;
    setProfissional({
      ...profissional,
      [evt.target.name]: value,
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
    { ...new Cidade(), toData: new Cidade().toData },
  ]);
  const [selectCidade, setSelectCidade] = useState();

  const [psfs, setPsfs] = useState([
    { ...new Psf(), toData: new Psf().toData },
  ]);
  const [selectPsf, setSelectPsf] = useState();

  function getCidades() {
    new ReqCidades().listaDeCidade().then((dados) => {
      const cidades = dados.docs.map((doc) => doc.data() as Cidade);
      setCidades(cidades);
      console.log(cidades);
      // setState({ cidades: this.cidades });
    });
  }
  function getPsfs() {
    new ReqPsf().listaDePsf().then((dados) => {
      const psfs = dados.docs.map((doc) => doc.data() as Psf);
      setPsfs(psfs);
      console.log(psfs);
      // setState({ cidades: this.cidades });
    });
  }

  function handleSelectTipo(event: any) {
    const tipo = event.target.value;
    setSelectTipos(tipo);
    profissional.tipo = tipo;
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
  async function onSubmit(e: any) {
    e.preventDefault(); // para da termpo salva tem que tira o reload da pagina
    await new ReqProfissional().insert(profissional);
    console.log(profissional);
  }
  return (
    <div className="flex bg-grayBackground fixed fundo flex-col items-center justify-center mt-6 px-4 sm:px-0 ">
      <div className="sm:flex sm:flex-col   rounded-xl  justify-center sm:w-8/12 w-full  -mt-4 bg-white  ">
        <div className="">
          <h1 className="py-4 px-8 font-bold">Cadastrar profissional</h1>
          <hr className="text-gray" />
        </div>

        <form
          onSubmit={onSubmit}
          className="sm:overflow-auto overflow-hidden  sm:h-hOverflow rounded-xl sm:px-10  py-4 px-2 bg-white"
        >
          <Input
            mask=""
            placeholder="Seu nome"
            label="Nome completo:"
            name="nome"
            onChange={handleChange}
          />
          <div className="sm:w-1/2 sm:flex sm:flex-row">
            <Input name="rg" mask="99999999-9" label="RG:" />
            <Input name="cpf" mask="999.999.999-99" label="CPF:" />
          </div>

          <div className="sm:flex sm:flex-row">
            <div className="sm:w-full">
              <Input
                name="email"
                mask=""
                label="E-mail:"
                onChange={handleChange}
              />
            </div>
            <div className="sm:w-4/12">
              <Input name="telefone" mask="(99)9.9999-9999" label="Telefone:" />
            </div>
          </div>

          <div className="sm:flex sm:flex-row">
            <div className="sm:w-3/12">
              <Input name="cep" mask="99.999-999" label="CEP:" />
            </div>

            <div className="flex text-green mt-2 flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 ">
              <span className="">Cidade:</span>
              <select
                className="px-2  text-grayTextBase space-x-2  h-10 bg-white text-sm sm:text-base box-border t border-color rounded-lg"
                id="cidade"
                name="idCidade"
                value={selectCidade}
                onChange={handleChange}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.id}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:w-5/12">
              <Input name="rua" mask="" label="Rua:" />
            </div>
          </div>
          <div className="sm:flex sm:flex-row">
            <div className="sm:w-2/12">
              <Input name="numero" mask="" label="Nº:" />
            </div>
            <div className="sm:w-4/12">
              <Input name="bairro" mask="" label="Bairro:" />
            </div>
            <div className="sm:w-6/12">
              <Input name="complemento" mask="" label="Complemento:" />
            </div>
          </div>
          <div className="sm:flex sm:flex-row">
            <div className="flex text-green flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 mt-6">
              <span className="text-lg">Profissional</span>
              <select
                className="px-2 text-grayTextBase   mt-2 h-12 bg-white text-sm sm:text-base box-border bg-input border-color rounded-lg"
                id="tipo"
                name="tipo"
                value={selectTipos}
                onChange={handleChange}
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
                id="idPsf"
                name="idPsf"
                value={selectPsf}
                onChange={handleChange}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {psfs.map((psf) => (
                  <option key={psf.id} value={psf.id}>
                    {psf.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex mt-10 flex-row w-full items-center justify-center py-4">
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-lg w-24"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroProfissional2;

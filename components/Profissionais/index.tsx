import Link from 'next/link';
import React, { useState } from 'react';
import { Cidade } from '../../model/entidades/cidade';
import { Profissional } from '../../model/entidades/profissional';
import { Psf } from '../../model/entidades/psf';
import { ReqCidades } from '../../model/requisicoes/req-cidades';
import { ReqProfissional } from '../../model/requisicoes/req-profissional';
import { ReqPsf } from '../../model/requisicoes/req-psf';
import ModalAddProfissional from '../ModalAddProfissionais';
import ModalEditProfissional from '../ModalEditProfissional';
import Prof from '../Prof';

const Profissionais: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [editingProfissional, setEditingProfissional] = useState<Profissional>(
    {} as Profissional,
  );
  const [profissionais, setProfissionais] = useState([
    { ...new Profissional(), toData: new Profissional().toData },
  ]);

  const [selectCidade, setSelectCidade] = useState();

  const [cidades, setCidades] = useState([
    { ...new Cidade(), toData: new Cidade().toData },
  ]);

  const [psfs, setPsfs] = useState([
    { ...new Psf(), toData: new Psf().toData },
  ]);
  const [selectPsf, setSelectPsf] = useState();

  useState(() => {
    loadProfissionais();
    getCidades();
    getPsfs();
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function getProfissionais() {
    new ReqProfissional().listaDeProfissionais().then((dados) => {
      const profs = dados.docs.map((doc) => doc.data() as Profissional);
      setProfissionais(profs);

      // setState({ cidades: this.cidades });
    });
  }

  function getProfissionaisByPsf(psf: Psf) {
    new ReqProfissional().listaDeProfissionaisDoPsf(psf).then((dados) => {
      const profs = dados.docs.map((doc) => doc.data() as Profissional);
      setProfissionais(profs);

      console.log(profs);

      // setState({ cidades: this.cidades });
    });
  }

  function loadProfissionais() {
    if (selectPsf === true) {
      getProfissionaisByPsf(psf);
    }
    getProfissionais();
  }

  function handleAddTool() {
    getProfissionais();
  }

  async function handleRemoveTool(profissional: Profissional) {
    await new ReqProfissional().delete(profissional);
    const pIndex = profissionais.findIndex((p) => p.id === profissional.id);
    const pp = [...profissionais];
    pp.splice(pIndex, 1);
    setProfissionais(pp);
  }

  function toggleEditModal(): void {
    setModalEditOpen(!modalEditOpen);
  }

  function handleEditProfissional(profissional: Profissional) {
    setEditingProfissional(profissional);
    toggleEditModal();
  }

  async function handleUpdateFood(profissional: Profissional) {
    const newP: Profissional = {
      id: profissional.id,
      nome: profissional.nome,
      email: profissional.email,
      tipo: profissional.tipo,
      // idPsf: profissional.idPsf,
      // idCidade: profissional.idCidade,
      toData() {
        return {
          nome: this.nome,
          email: this.email,
          tipo: this.tipo,
          // idPsf: this.idPsf,
          // idCidade: this.idCidade,
        };
      },
    };

    await new ReqProfissional().save(newP);
    const todosIndex = profissionais.findIndex((t) => t.id === profissional.id);
    profissionais.splice(todosIndex, 1);
    setProfissionais([...profissionais, newP]);
  }

  function getPsfs() {
    new ReqPsf().listaDePsf().then((dados) => {
      const psfs = dados.docs.map((doc) => doc.data() as Psf);
      setPsfs(psfs);

      // setState({ cidades: this.cidades });
    });
  }

  function getCidades() {
    new ReqCidades().listaDeCidade().then((dados) => {
      const cidades = dados.docs.map((doc) => doc.data() as Cidade);
      setCidades(cidades);

      // setState({ cidades: this.cidades });
    });
  }

  return (
    <div className="flex flex-col space-y-4 px-8 py-4 ">
      <div className="py-4 relative  flex flex-row items-center">
        <h1 className="font-bold text-2xl">Profissionais</h1>
        <div className="p-2 flex flex-row  absolute right-0 space-x-2">
          <div className="dropdown2 sm:hidden flex absolute left-0 top-0">
            <button
              type="button"
              className="bg-white flex flex-row items-center space-x-2 rounded-full p-2 px-4"
            >
              <img src="./filter.svg" alt="" />
              <span className="text-primary">Filtrar</span>
            </button>

            <div className="dropdown-content2 ">
              <div className="">
                <span className="cursor-pointer">por PSF</span>
                <select
                  className="p-2 text-grayTextBase space-x-2 mt-2 h-12 bg-transparent text-sm sm:text-base  rounded-lg"
                  id="idPsf"
                  name="idPsf"
                  value={selectPsf}
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

              <div className="">
                <span className="cursor-pointer">por cidade</span>
                <select
                  className="p-2 text-grayTextBase space-x-2 mt-2 h-12 bg-transparent text-sm sm:text-base  rounded-lg"
                  id="cidade"
                  name="idCidade"
                  value={selectCidade}
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
            </div>
          </div>
          <button
            onClick={() => openModal()}
            type="button"
            className="bg-primary rounded-full flex flex-row space-x-2 items-center  p-2 px-4   "
          >
            <img src="./plus-circle2.svg" alt="" />
            <span className="text-white">Adicionar</span>
          </button>
        </div>

        <ModalAddProfissional
          handleAddTool={handleAddTool}
          isOpen={modalOpen}
          setIsOpen={toggleModal}
        />
        <ModalEditProfissional
          isOpen={modalEditOpen}
          setIsOpen={toggleEditModal}
          editingProfissional={editingProfissional}
          handleUpdateFood={handleUpdateFood}
        />
      </div>
      <div className=" space-y-4 sm:space-y-0">
        <div className="w-full shadow-lg rounded-lg ">
          <div className="p-4 relative text-secondary bg-white font-bold flex flex-row ">
            <span className="text-center w-3/12">Nome</span>
            <span className="w-3/12 text-center ">Tipo</span>
            <span className="w-3/12 text-center  hidden sm:hidden md:hidden lg:flex ">
              E-mail
            </span>
            <span className="absolute right-0 mr-10 ">Ações</span>
          </div>

          <hr className="text-grayBackground" />
          <ul className=" h-hList  shadow-xs  divide-y overflow-auto divide-gray  w-full ">
            {profissionais.map((pro) => (
              <Prof
                key={pro.id}
                profissional={pro}
                handleDelete={handleRemoveTool}
                handleEditProfissional={handleEditProfissional}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profissionais;

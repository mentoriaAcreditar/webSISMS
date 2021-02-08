import React, { useState } from 'react';
import { Profissional } from '../../model/entidades/profissional';
import { ReqProfissional } from '../../model/requisicoes/req-profissional';
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

  useState(() => {
    getProfissionais();
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

  function handleAddTool() {
    getProfissionais();
  }

  // async function handleDelete(profissional: Profissional) {
  //   const pIndex = profissionais.findIndex((p) => p.id === profissional.id);
  //   const pp = [...profissionais];
  //   pp.splice(pIndex, 1);
  //   setProfissionais(pp);
  // }

  // async function handleEdit(profissional: Profissional) {
  //   const newP: Profissional = {
  //     id: profissional.id,
  //     nome: profissional.nome,
  //     email: profissional.email,
  //     tipo: profissional.tipo,
  //     idPsf: '',
  //     idCidade: '',
  //     toData() {
  //       return {
  //         id: this.id,
  //         nome: this.nome,
  //         email: this.email,
  //         tipo: this.tipo,
  //         idPsf: this.idPsf,
  //         idCidade: this.idCidade,
  //       };
  //     },
  //   };
  // const todosIndex = profissionais.findIndex((t) => t.id === profissional.id);

  //   profissionais.splice(todosIndex, 1);

  //   setProfissionais([...profissionais, newP]);
  // }
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

  return (
    <div className="flex flex-col space-y-4 px-8 py-4 ">
      <div className="py-4 relative  flex flex-row items-center">
        <h1 className="font-bold text-2xl">Profissionais</h1>
        <div className="p-2 flex flex-row  absolute right-0 space-x-2">
          <button
            onClick={() => oRemovepenModal()}
            type="button"
            className="bg-white flex flex-row items-center space-x-2 rounded-full p-2 px-4"
          >
            <img src="./filter.svg" alt="" />
            <span className="text-primary">Filtrar</span>
          </button>
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
            <span className="w-3/12 text-center  ">E-mail</span>
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

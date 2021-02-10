import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Bar from '../Bar';
import ModalAddTool from '../ModalAddSintomas';
import { Cidade } from '../../model/entidades/cidade';
import { ReqCidades } from '../../model/requisicoes/req-cidades';
import City from '../City';
import ModalAddCidade from '../ModalAddCidade';
import ModalEditCidade from '../ModalEditCidade';

const Cidades: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectCidade, setSelectCidade] = useState();
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [editingCidade, setEditingCidade] = useState<Cidade>({} as Cidade);

  const [cidades, setCidades] = useState([
    { ...new Cidade(), toData: new Cidade().toData },
  ]);

  useEffect(() => {
    getCidades();
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function handleAddTool() {
    console.log('ok');
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setModalEditOpen(!modalEditOpen);
  }

  function handleEditCidade(cidade: Cidade) {
    setEditingCidade(cidade);
    toggleEditModal();
  }

  function getCidades() {
    new ReqCidades().listaDeCidade().then((dados) => {
      const cities = dados.docs.map((doc) => doc.data() as Cidade);
      setCidades(cities);

      // setState({ cidades: this.cidades });
    });
  }

  async function handleRemoveCidade(cidade: Cidade) {
    await new ReqCidades().delete(cidade);
    const pIndex = cidades.findIndex((p) => p.id === cidades.id);
    const pp = [...cidades];
    pp.splice(pIndex, 1);
    setCidades(pp);
  }

  async function handleUpdateCidade(cidade: Cidade) {
    const newP: Cidade = {
      id: cidade.id,
      nome: cidade.nome,

      toData() {
        return {
          nome: this.nome,
        };
      },
    };

    await new ReqCidades().save(newP);
    const todosIndex = cidades.findIndex((t) => t.id === cidade.id);
    cidades.splice(todosIndex, 1);
    setCidades([...cidades, newP]);
  }

  return (
    <div className="flex flex-col space-y-4 px-8 py-4 ">
      <div className="py-4 relative  flex flex-row items-center">
        <h1 className="font-bold text-2xl">Cidades</h1>
        <div className="p-2 flex flex-row  absolute right-0 space-x-2">
          <button
            onClick={() => openModal()}
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

        <ModalAddCidade
          handleAddTool={handleAddTool}
          isOpen={modalOpen}
          setIsOpen={toggleModal}
        />
        <ModalEditCidade
          isOpen={modalEditOpen}
          setIsOpen={toggleEditModal}
          editingCidade={editingCidade}
          handleUpdateCidade={handleUpdateCidade}
        />
      </div>
      <div className=" space-y-4 sm:space-y-0">
        <div className="w-full shadow-lg rounded-lg ">
          <div className="p-4 relative text-secondary bg-white font-bold flex flex-row ">
            <span className="text-center w-6/12">Nome</span>

            <span className="absolute right-0 mr-10 ">Ações</span>
          </div>

          <hr className="text-grayBackground" />
          <ul className=" h-hList  shadow-xs  divide-y overflow-auto divide-gray  w-full ">
            {cidades.map((cidade) => (
              <City
                key={cidade.id}
                cidade={cidade}
                handleDelete={handleRemoveCidade}
                handleEditCidade={handleEditCidade}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cidades;

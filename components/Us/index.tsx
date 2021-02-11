import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Bar from '../Bar';
import ModalAddTool from '../ModalAddSintomas';
import { Cidade } from '../../model/entidades/cidade';
import { ReqCidades } from '../../model/requisicoes/req-cidades';
import City from '../City';
import ModalAddCidade from '../ModalAddCidade';
import ModalEditCidade from '../ModalEditCidade';
import PSF from '../PSF';
import { ReqPsf } from '../../model/requisicoes/req-psf';
import ModalAddPsf from '../ModalAddPsf';
import { Psf } from '../../model/entidades/psf';
import ModalEditPsf from '../ModalEditPsf';

const Us: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectCidade, setSelectCidade] = useState();
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [editingPsf, setEditingPsf] = useState<Psf>({} as Psf);

  const [psfs, setPsf] = useState([{ ...new Psf(), toData: new Psf().toData }]);

  useEffect(() => {
    getpsf();
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function handleAddTool() {
    getpsf();
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setModalEditOpen(!modalEditOpen);
  }

  function handleEditpsf(psf: Psf) {
    setEditingPsf(psf);
    toggleEditModal();
  }

  function getpsf() {
    new ReqPsf().listaDePsf().then((dados) => {
      const cities = dados.docs.map((doc) => doc.data() as Psf);
      setPsf(cities);

      // setState({ psf: this.psf });
    });
  }

  async function handleRemovepsf(psf: Psf) {
    await new ReqPsf().delete(psf);
    const pIndex = psfs.findIndex((p) => p.id === psf.id);
    const pp = [...psfs];
    pp.splice(pIndex, 1);
    setPsf(pp);
  }

  async function handleUpdatepsf(psf: Psf) {
    const newP: Psf = {
      id: psf.id,
      nome: psf.nome,

      toData() {
        return {
          nome: this.nome,
        };
      },
    };

    await new ReqPsf().save(newP);
    const todosIndex = psfs.findIndex((t) => t.id === psf.id);
    psfs.splice(todosIndex, 1);
    setPsf([...psfs, newP]);
  }

  return (
    <div className="flex flex-col space-y-4 px-8 py-4 ">
      <div className="py-4 relative  flex flex-row items-center">
        <h1 className="font-bold text-2xl">PSFs</h1>
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

        <ModalAddPsf
          handleAddPsf={handleAddTool}
          isOpen={modalOpen}
          setIsOpen={toggleModal}
        />
        <ModalEditPsf
          isOpen={modalEditOpen}
          setIsOpen={toggleEditModal}
          editingPsf={editingPsf}
          handleUpdatePsf={handleUpdatepsf}
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
            {psfs.map((psf) => (
              <PSF
                key={psf.id}
                psf={psf}
                handleDelete={handleRemovepsf}
                handleEditpsf={handleEditpsf}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Us;

import React, { useState } from 'react';
import Link from 'next/link';
import ModalRemoveProfissional from '../ModalRemoveProfissional';
import { Profissional } from '../../model/entidades/profissional';
import ModalRemoveCidade from '../ModalRemoveCidade';
import { Cidade } from '../../model/entidades/cidade';

interface IProps {
  cidade: Cidade;
  handleDelete: (cidade: Cidade) => {};
  handleEditCidade: (cidade: Cidade) => void;
}

const City: React.FC<IProps> = ({
  cidade,
  handleEditCidade,
  handleDelete,
}: IProps) => {
  const [modalRemovecidade, setModalRemovecidade] = useState(false);

  function openModalRemove() {
    setModalRemovecidade(true);
  }

  function toggleModalRemove(): void {
    setModalRemovecidade(!modalRemovecidade);
  }

  function setEditingFood(): void {
    handleEditCidade(cidade);
  }

  return (
    <li key={cidade.id} className="">
      <Link href={`perfilcidade/${cidade.nome}`}>
        <button
          type="button"
          className="hover:bg-white hover:shadow-lg hover:border-transparent flex group relative  py-2 flex-row w-full"
        >
          <span className="text-secondary py-2   w-6/12 text-sm sm:text-lg ">
            {cidade.nome}
          </span>
        </button>
      </Link>
      <div className="flex flex-row space-x-6  absolute -mt-12 right-0 mr-12">
        <div className="tooltip">
          <button
            onClick={() => setEditingFood()}
            className="hover:bg-blue-500 z-10 flex flex-col justify-center items-center bg-gray rounded-full p-2"
            type="button"
          >
            <img src="./edit3.svg" alt="" />
            <span className="tooltiptext">Editar</span>
          </button>
        </div>

        <div className="tooltip">
          <button
            onClick={() => openModalRemove()}
            className="hover:bg-red-500 flex flex-col justify-center items-center bg-gray rounded-full p-2 "
            type="button"
          >
            <span className="tooltiptext">Excluir</span>
            <img src="./trash3.svg" alt="" />
          </button>

          <ModalRemoveCidade
            isOpen={modalRemovecidade}
            setIsOpen={toggleModalRemove}
            handleRemoveCidade={() => handleDelete(cidade)}
          />
        </div>
      </div>
    </li>
  );
};

export default City;

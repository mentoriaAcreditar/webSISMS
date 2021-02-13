import React, { useState } from 'react';
import Link from 'next/link';
import ModalRemoveProfissional from '../ModalRemoveProfissional';
import { Profissional } from '../../model/entidades/profissional';

interface IProps {
  profissional: Profissional;
  handleDelete: (profissional: Profissional) => {};
  handleEditProfissional: (food: Profissional) => void;
}

const Prof: React.FC<IProps> = ({
  profissional,
  handleEditProfissional,
  handleDelete,
}: IProps) => {
  const [modalRemoveProfissional, setModalRemoveProfissional] = useState(false);

  function openModalRemove() {
    setModalRemoveProfissional(true);
  }

  function toggleModalRemove(): void {
    setModalRemoveProfissional(!modalRemoveProfissional);
  }

  function setEditingFood(): void {
    handleEditProfissional(profissional);
  }

  return (
    <li key={profissional.id} className="relative">
      <Link href={`perfilProfissional/${profissional.nome}`}>
        <button
          type="button"
          className="hover:bg-white hover:shadow-lg hover:border-transparent flex group   py-2 flex-row w-full"
        >
          <span className="text-secondary py-2   w-3/12 text-sm sm:text-lg ">
            {profissional.nome}
          </span>
          <span className=" w-3/12 text-sm sm:text-lg py-2 text-grayText">
            {profissional.tipo}
          </span>
          <span className=" w-3/12 hidden sm:hidden md:hidden lg:flex text-center text-sm py-2 sm:text-lg text-grayText">
            {profissional.email}
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

          <ModalRemoveProfissional
            isOpen={modalRemoveProfissional}
            setIsOpen={toggleModalRemove}
            handleRemoveProfissional={() => handleDelete(profissional)}
          />
        </div>
      </div>
    </li>
  );
};

export default Prof;

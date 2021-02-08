import React, { useState } from 'react';
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
    <div>
      <li key={profissional.id} className="">
        <button
          type="button"
          className="hover:bg-white hover:shadow-lg hover:border-transparent flex group relative  py-2 flex-row w-full"
        >
          <span className="text-secondary py-2   w-3/12 text-sm sm:text-lg ">
            {profissional.nome}
          </span>
          <span className=" w-3/12 text-sm sm:text-lg py-2 text-grayText">
            {profissional.email}
          </span>
          <span className=" w-3/12 text-center text-sm py-2 sm:text-lg text-grayText">
            {profissional.tipo}
          </span>
          <div className="flex flex-row space-x-6  absolute right-0 mr-4">
            <div className="tooltip">
              <button
                onClick={() => setEditingFood()}
                className="hover:bg-blue-500 flex flex-col justify-center items-center bg-gray rounded-full p-2"
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
        </button>
      </li>
    </div>
  );
};

export default Prof;

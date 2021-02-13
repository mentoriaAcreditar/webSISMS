import React, { useState } from 'react';
import Link from 'next/link';
import { Psf } from '../../model/entidades/psf';
import ModalRemovePsf from '../ModalRemovePsf';

interface IProps {
  psf: Psf;
  handleDelete: (psf: Psf) => {};
  handleEditpsf: (psf: Psf) => void;
}

const PSF: React.FC<IProps> = ({
  psf,
  handleEditpsf,
  handleDelete,
}: IProps) => {
  const [modalRemovepsf, setModalRemovepsf] = useState(false);

  function openModalRemove() {
    setModalRemovepsf(true);
  }

  function toggleModalRemove(): void {
    setModalRemovepsf(!modalRemovepsf);
  }

  function setEditingFood(): void {
    handleEditpsf(psf);
  }

  return (
    <li key={psf.id} className="">
      <div className="hover:bg-white hover:shadow-lg hover:border-transparent flex group relative  py-2 flex-row w-full">
        <span className="text-secondary py-2 text-center  w-4/12 text-sm sm:text-lg ">
          {psf.nome}
        </span>

        <span className="text-secondary py-2 text-center  w-4/12 text-sm sm:text-lg ">
          {psf.idCidade}
        </span>

        <div className="flex flex-row  absolute right-0 mr-10 space-x-6">
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

            <ModalRemovePsf
              isOpen={modalRemovepsf}
              setIsOpen={toggleModalRemove}
              handleRemovepsf={() => handleDelete(psf)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default PSF;

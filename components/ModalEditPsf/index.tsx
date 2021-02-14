import React, { useRef, useCallback, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import { Form } from './styles';
import { Cidade } from '../../model/entidades/cidade';
import { Psf } from '../../model/entidades/psf';
import Modal from '../Modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdatePsf: (psf: Psf) => void;
  editingPsf: Cidade;
}

const ModalEditPsf: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  editingPsf,
  handleUpdatePsf,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Psf) => {
      await handleUpdatePsf(data);
      setIsOpen();
    },
    [handleUpdatePsf, setIsOpen],
  );

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

  return (
    <Modal title="Editar PSF" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingPsf}>
        <Input label="" className="text-white" name="id" />
        <div className=" overflow-auto h-hList w-full ">
          <Input
            label="Nome da cidade:"
            name="nome"
            placeholder="Nome completo"
          />
        </div>

        <div className="w-full  flex mt-10 flex-row justify-end  ">
          <div className=" flex flex-row space-x-4 px-4">
            <button
              onClick={setIsOpen}
              className=" w-20 text-gray-400 h-10 rounded "
              type="button"
            >
              Cancelar
            </button>

            <button
              data-testid="edit-food-button"
              className="bg-primary text-white w-20 h-10 rounded p-2"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalEditPsf;

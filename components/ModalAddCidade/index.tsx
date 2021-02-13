import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import { Form } from './styles';
import Modal from '../Modal';
import { Cidade } from '../../model/entidades/cidade';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (data: Cidade) => void;
}

const ModalAddCidade: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Cidade) => {
      await handleAddTool(data);

      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal title="Cadastrar Cidade" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className=" overflow-auto h-hList w-full ">
          <Input placeholder="Seu nome" label="Nome da cidade:" name="nome" />
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
              className="bg-purple text-white w-20 h-10 rounded p-2"
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

export default ModalAddCidade;

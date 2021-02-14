import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import { Profissional } from '../../model/entidades/profissional';
import { ReqProfissional } from '../../model/requisicoes/req-profissional';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveProfissional: (profissional: Profissional) => void;
}

const ModalRemoveTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleRemoveProfissional,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (profissional: Profissional) => {
      handleRemoveProfissional(profissional);
      new ReqProfissional().delete(profissional);
      setIsOpen();
    },
    [handleRemoveProfissional, setIsOpen],
  );

  return (
    <Modal title="Remover" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="  w-full ">
          <h1 className="text-xl">
            Tem certeza que deseja excluir esse profissional?
          </h1>
        </div>
        <div className="w-full  flex mt-10 flex-row justify-end  ">
          <div className=" flex flex-row space-x-4 px-4">
            <button
              className=" w-24 text-gray-400 h-10 rounded  shadow-xs "
              type="button"
              id="cancel"
            >
              Cancelar
            </button>
            <button
              className="bg-primary text-white w-24 h-10 rounded p-2"
              type="submit"
            >
              Sim
            </button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalRemoveTool;

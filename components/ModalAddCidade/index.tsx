import React, { useRef, useCallback, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import { Form } from './styles';
import { Profissional } from '../../model/entidades/profissional';
import { ReqProfissional } from '../../model/requisicoes/req-profissional';
import { ReqCidades } from '../../model/requisicoes/req-cidades';
import { Cidade } from '../../model/entidades/cidade';

import { ReqPsf } from '../../model/requisicoes/req-psf';
import { Psf } from '../../model/entidades/psf';
import Modal from '../Modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: () => void;
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
    async (data) => {
      await handleAddTool(data);
      onSubmit();

      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  const [cidade, setCidade] = useState({
    ...new Cidade(),
    toData: new Cidade().toData,
  });

  function handleChange(evt: Event) {
    const { value } = evt.target;
    setCidade({
      ...cidade,
      [evt.target.name]: value,
    });
  }

  async function onSubmit() {
    await new ReqCidades().insert(cidade);
    console.log(cidade);
  }

  return (
    <Modal title="Cadastrar Cidade" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className=" overflow-auto h-hList w-full ">
          <Input
            mask=""
            placeholder="Seu nome"
            label="Nome da cidade:"
            name="nome"
            onChange={handleChange}
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

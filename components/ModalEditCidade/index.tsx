import React, { useRef, useCallback, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import { Form } from './styles';
import { Profissional } from '../../model/entidades/profissional';
import { ReqCidades } from '../../model/requisicoes/req-cidades';
import { Cidade } from '../../model/entidades/cidade';
import { ReqPsf } from '../../model/requisicoes/req-psf';
import { Psf } from '../../model/entidades/psf';
import Modal from '../Modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateCidade: (cidade: Cidade) => void;
  editingCidade: Cidade;
}

const ModalEditCidade: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  editingCidade,
  handleUpdateCidade,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Cidade) => {
      await handleUpdateCidade(data);
      setIsOpen();
    },
    [handleUpdateCidade, setIsOpen],
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

  function getCidades() {
    new ReqCidades().listaDeCidade().then((dados) => {
      const cidades = dados.docs.map((doc) => doc.data() as Cidade);
      setCidades(cidades);

      // setState({ cidades: this.cidades });
    });
  }
  function getPsfs() {
    new ReqPsf().listaDePsf().then((dados) => {
      const psfs = dados.docs.map((doc) => doc.data() as Psf);
      setPsfs(psfs);

      // setState({ cidades: this.cidades });
    });
  }

  return (
    <Modal title="Editar Profissional" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingCidade}>
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

export default ModalEditCidade;

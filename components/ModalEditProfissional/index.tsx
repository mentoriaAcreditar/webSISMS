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
  handleUpdateFood: (profissional: Profissional) => void;
  editingProfissional: Profissional;
}

const ModalEditProfissionais: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  editingProfissional,
  handleUpdateFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    getCidades();
    getPsfs();
  }, []);

  const handleSubmit = useCallback(
    async (data: Profissional) => {
      console.log('data', data);
      await handleUpdateFood(data);
      setIsOpen();
    },
    [handleUpdateFood, setIsOpen],
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
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={editingProfissional}
      >
        <Input label="" className="text-white" name="id" />
        <div className=" overflow-auto h-hList w-full ">
          <Input
            label="Nome completo:"
            name="nome"
            placeholder="Nome completo"
          />
          <Input label="E-mail:" name="email" placeholder="E-mail" />
          <div className="sm:flex sm:flex-row">
            <div className="flex text-green mt-2 flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 ">
              <span className="">Cidade:</span>
              <select
                className="px-2  text-grayTextBase space-x-2  h-10 bg-white text-sm sm:text-base box-border t border-color rounded-lg"
                id="idCidade"
                name="idCidade"
                value={selectCidade}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {cidades.map((cidade) => (
                  <option key={cidade.id} value={cidade.id}>
                    {cidade.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:flex sm:flex-row">
            <div className="flex text-green flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 mt-6">
              <span className="text-lg">Profissional</span>
              <select
                className="px-2 text-grayTextBase   mt-2 h-12 bg-white text-sm sm:text-base box-border bg-input border-color rounded-lg"
                id="tipo"
                name="tipo"
                value={selectTipos}
                // onChange={handleChange}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {tipos.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex text-green flex-col sm:w-4/12  ml-2  sm:mr-4 mr-2 mt-6">
              <span className="text-lg">PSF</span>
              <select
                className="p-2 text-grayTextBase space-x-2 mt-2 h-12 bg-white text-sm sm:text-base box-border bg-input border-color rounded-lg"
                id="idPsf"
                name="idPsf"
                value={selectPsf}
                // onChange={handleChange}
              >
                <option className="text-base" disabled selected>
                  Selecione
                </option>
                {psfs.map((psf) => (
                  <option key={psf.id} value={psf.id}>
                    {psf.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="w-full  flex mt-10 flex-row justify-end  ">
          <div className=" flex flex-row space-x-4 px-4">
            <button
              onClick={setIsOpen}
              className=" w-20 text-gray-400 h-10 rounded shadow-xs"
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

export default ModalEditProfissionais;

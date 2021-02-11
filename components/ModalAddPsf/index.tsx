import React, { useRef, useCallback, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import { Form } from './styles';
import { ReqPsf } from '../../model/requisicoes/req-psf';
import { Psf } from '../../model/entidades/psf';
import Modal from '../Modal';
import { Cidade } from '../../model/entidades/cidade';
import { ReqCidades } from '../../model/requisicoes/req-cidades';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddPsf: () => void;
}

const ModalAddPsf: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  handleAddPsf,
}) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    getCidades();
  }, []);

  async function onSubmit() {
    await new ReqPsf().insert(psf);
    console.log(psf);
  }

  const handleSubmit = useCallback(
    async (data) => {
      await handleAddPsf(data);
      onSubmit();
      console.log('a', data);
      setIsOpen();
    },
    [handleAddPsf, setIsOpen],
  );

  const [psf, setPsf] = useState({
    ...new Psf(),
    toData: new Psf().toData,
  });

  function handleChange(evt: Event) {
    const { value } = evt.target;
    setPsf({
      ...psf,
      [evt.target.name]: value,
    });
  }

  const [cidades, setCidades] = useState([
    { ...new Cidade(), toData: new Cidade().toData },
  ]);
  const [selectCidade, setSelectCidade] = useState();

  function getCidades() {
    new ReqCidades().listaDeCidade().then((dados) => {
      const cidade = dados.docs.map((doc) => doc.data() as Cidade);
      setCidades(cidade);

      // setState({ cidades: this.cidades });
    });
  }

  return (
    <Modal title="Cadastrar psf" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className=" overflow-auto h-hList w-full ">
          <Input
            mask=""
            placeholder="Seu nome"
            label="Nome da psf:"
            name="nome"
            onChange={handleChange}
          />
          <div className="flex text-green mt-2 flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 ">
            <span className="">Cidade:</span>
            <select
              className="px-2  text-grayTextBase space-x-2  h-10 bg-white text-sm sm:text-base box-border t border-color rounded-lg"
              id="idCidade"
              name="idCidade"
              value={selectCidade}
              onChange={handleChange}
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

export default ModalAddPsf;

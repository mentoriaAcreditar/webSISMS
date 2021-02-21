import React, { useRef, useCallback, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import { Form } from './styles';
import { Psf } from '../../model/entidades/psf';
import Modal from '../Modal';
import { Cidade } from '../../model/entidades/cidade';
import { ReqCidades } from '../../model/requisicoes/req-cidades';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddPsf: (data: Psf) => void;
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

  const [cid, setCid] = useState('');

  function handleSelectCidade(event: React.ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setCid(city);
  }

  const handleSubmit = useCallback(
    async (data: Psf) => {
      if (cid.length > 0) {
        data.idCidade = cid;
        data.id = psf?.id ?? '';
        await handleAddPsf(data);
        setIsOpen();
      }
    },
    [handleAddPsf, cid, setIsOpen],
  );

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
    <Modal title="Cadastrar PSF" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className=" overflow-auto h-hList w-full ">
          <Input label="Nome do PSF:" name="nome" />
          <div className="flex text-green mt-2 flex-col sm:w-4/12 ml-2  sm:mr-4 mr-2 ">
            <span className="">Cidade:</span>
            <select
              className="px-2  text-grayTextBase space-x-2  h-10 bg-white text-sm sm:text-base box-border t border-color rounded-lg"
              id="idCidade"
              name="idCidade"
              value={selectCidade}
              onChange={handleSelectCidade}
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
              className=" w-20 text-gray-400 h-10 rounded shadow-xs"
              type="button"
            >
              Cancelar
            </button>

            <button
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

export default ModalAddPsf;

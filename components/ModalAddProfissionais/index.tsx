import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { FormHandles } from '@unform/core';

import CheckBox from '../CheckBox';
import { Form } from './styles';

import Modal from '../Modal';

interface ITool {
  _id: number;
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface ICreateTools {
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: Omit<ITool, '_id'>) => void;
}

const ModalAddProfissionais: React.FC<IModalProps> = ({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  setIsOpen,
  // eslint-disable-next-line react/prop-types
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateTools) => {
      await handleAddTool(data);
      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal title="Cadastrar Profissional" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-row w-full ">
          <div className="flex flex-col mb-4">
            <label htmlFor="sintoma">Nome do sintoma</label>
            <input
              className="w-10/12 border rounded-lg h-10 p-2"
              name="sintoma"
              placeholder="Sintoma"
            />
          </div>
          <CheckBox
            type="radio"
            id="male"
            name="Sintoma critico"
            value="Febre"
          />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 space-y-4 sm:space-y-0">
          <div className=" space-y-4 p-4 ">
            <h1>Frequencia</h1>
            <CheckBox
              type="radio"
              id="male"
              name="Sintoma critico"
              value="Não se aplica"
            />
            <table>
              <tr className="sm:text-sm  text-sm bg-purple   text-white  rounded-br-none rounded-bl-none flex-row mr-2 space-x-4">
                <td className=" bg-purle   text-white  rounded-l-lg  rounded-br-none rounded-bl-none flex-row p-2 space-x-4">
                  Período
                </td>
                <td>Descrição</td>
                <td className=" bg-purple  text-white rounded-r-lg sm:pr-8 rounded-br-none rounded-bl-none flex-row p-2 sm:space-x-4">
                  Ações
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-4">dfadsaf</td>
                <td>adsas</td>
                <td>
                  <Link href="/#">
                    <span className="cursor-pointer">Abrir</span>
                  </Link>
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-4">dfadsaf</td>
                <td>adsas</td>
                <td>
                  <Link href="/#">
                    <span className="cursor-pointer">Abrir</span>
                  </Link>
                </td>
              </tr>
            </table>
            <button className="bg-purple rounded-md p-2" type="button">
              <span className="text-white">Adicionar Frequencia</span>
            </button>
          </div>
          <div className=" space-y-4 p-4 ">
            <h1>Intencidade</h1>
            <CheckBox
              type="radio"
              id="male"
              name="Sintoma critico"
              value="Não se aplica"
            />
            <table>
              <tr className="sm:text-sm  text-sm bg-purple   text-white  rounded-br-none rounded-bl-none flex-row mr-2 space-x-4">
                <td className=" bg-purle   text-white  rounded-l-lg  rounded-br-none rounded-bl-none flex-row p-2 space-x-4">
                  Prioridade
                </td>
                <td>Descrição</td>
                <td className=" bg-purple  text-white rounded-r-lg sm:pr-8 rounded-br-none rounded-bl-none flex-row p-2 sm:space-x-4">
                  Ações
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-4">1</td>
                <td>adsas</td>
                <td>
                  <Link href="/#">
                    <span className="cursor-pointer">Abrir</span>
                  </Link>
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-4">1</td>
                <td>adsas</td>
                <td>
                  <Link href="/#">
                    <span className="cursor-pointer">Abrir</span>
                  </Link>
                </td>
              </tr>
            </table>
            <button className="bg-purple rounded-md p-2" type="button">
              <span className="text-white">Adicionar Intencidade</span>
            </button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalAddProfissionais;

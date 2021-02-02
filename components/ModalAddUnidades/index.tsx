import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { FormHandles } from '@unform/core';
import CheckBox from '../RadioButton';
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

const ModalAddUnidades: React.FC<IModalProps> = ({
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
    <Modal title="Cadastrar Sintomas" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-row w-full ">
          <div className="flex flex-col sm:mb-4 mb-0">
            <label htmlFor="">Nome do sintoma</label>
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
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 ">
          <div className=" sm:space-y-4 space-y-2 p-4 ">
            <h1>Frequencia</h1>
            <CheckBox
              type="radio"
              id="male"
              name="Sintoma critico"
              value="Não se aplica"
            />
            <table>
              <tr className="sm:text-sm  text-sm bg-purple border  border-purple  text-white  flex-row mr-2 space-x-4">
                <td className=" bg-purle   text-white  flex-row space-x-4">
                  Período
                </td>
                <td>Descrição</td>
                <td className=" bg-purple  text-white  sm:pr-8 flex-row p-2 sm:space-x-4">
                  Ações
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-2">dfadsaf</td>
                <td>adsas</td>
                <td>
                  <Link href="/#">
                    <span className="cursor-pointer">Abrir</span>
                  </Link>
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-2">dfadsaf</td>
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
              <tr className="sm:text-sm  text-sm bg-purple border border-purple   text-white   flex-row mr-2 space-x-4">
                <td className=" bg-purle   text-white    flex-row p-2 space-x-4">
                  Prioridade
                </td>
                <td>Descrição</td>
                <td className=" bg-purple  text-white flex-row p-2 sm:space-x-4">
                  Ações
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-2">1</td>
                <td>adsas</td>
                <td>
                  <Link href="/#">
                    <span className="cursor-pointer">Abrir</span>
                  </Link>
                </td>
              </tr>

              <tr className="border sm:text-sm border-b text-blue4  ">
                <td className="p-2">1</td>
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

export default ModalAddUnidades;

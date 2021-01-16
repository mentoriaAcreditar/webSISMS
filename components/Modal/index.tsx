import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  title,
  isOpen,
  top,
  setIsOpen,
}) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          color: '#000000',
          borderRadius: '8px',
          width: 'auto',

          // border: 'solid 1px #000',
          boxShadow: '0px 20px 25px #0000001A',
          padding: '0px ',
        },
        overlay: {
          // backgroundColor: '#F5F4F6',
          overflowY: 'auto',
        },
      }}
    >
      <div className="flex flex-row items-center py-4 px-8">
        <p className=" text-darkPurple font-bold w-full">{title}</p>
        <button type="button" onClick={setIsOpen}>
          <img src="./x.svg" alt="" />
        </button>
      </div>

      <hr className="text-gray" />

      {children}
      <hr className="text-gray" />
      <div className="flex flex-row">
        <div className="mx-10 flex flex-row  w-full my-4">
          <button className="flex flex-row space-x-2" type="button">
            <img src="./trash-2.svg" alt="" />
            <span className="text-red">Remover</span>
          </button>
        </div>
        <div className="flex flex-row items-center mr-10 space-x-4">
          <button className=" w-20 text-gray-400 h-10 rounded " type="button">
            Cancelar
          </button>
          <button
            className="bg-purple text-white w-20 h-10 rounded p-2"
            type="button"
          >
            Salvar
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;

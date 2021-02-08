import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  title: string;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  title,
  isOpen,

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
          overflowY: 'hidden',
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
    </ReactModal>
  );
};

export default Modal;

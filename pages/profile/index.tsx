import React from 'react';
import Link from 'next/link';

const Profile: React.FC = () => {
  return (
    <div
      className="flex flex-row justify-center h-full"
      style={{ background: 'url(./background.svg) no-repeat center/cover' }}
    >
      <div className="flex text-green flex-col mt-10 space-y-4 items-center">
        <h1 className="text-3xl  ">Seja bem-vindo ao</h1>
        <img className="w-1/2" src="./Logo.svg" alt="logo" />
        <span>Você é um:</span>
        <div className="space-y-4">
          <Link href="/cadastroPaciente">
            <div className="p-2 cursor-pointer bg-blue rounded-xl flex flex-row justify-center">
              <span>Paciente</span>
            </div>
          </Link>
          <Link href="/cadastroProfissional">
            <div className="p-2 cursor-pointer bg-blue rounded-xl flex flex-row justify-center">
              <span>Profissional</span>
            </div>
          </Link>
          <Link href="/adm">
            <div className="p-2 cursor-pointer bg-blue rounded-xl flex flex-row justify-center">
              <span>Administrador</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

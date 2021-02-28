import React from 'react';
import Link from 'next/link';

const Login = (): JSX.Element => {
  return (
    <div className="  sm:flex w-full relative ">
      <div className=" bg-blueBlack sm:hidden md:hidden hidden lg:flex  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className=" flex flex-col justify-end items-center">
          <img className="w-10/12" src="./img.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  ">
        <form className="flex flex-col items-center    w-10/12">
          <img className="w-4/12 mb-8" src="./Logo.svg" alt="" />
          <h1 className="text-green font-bold text-center text-2xl">
            Bem-vindo, profissional da sáude.
          </h1>
          <span className="text-green2 my-4">
            Para entrar, insira seu nome de usuário e senha.
          </span>
          <input
            className="p-4 h-10  bg-input box-border  text-grayTextBase bg-input border-color
             rounded-full"
            type="text"
            placeholder="Usuario"
          />
          <input
            className="p-4 h-10 mt-4  bg-input box-border  text-grayTextBase bg-input border-color
             rounded-full"
            type="password"
            placeholder="Senha"
          />
          <div className="bg-blueBlack w-4/12 cursor-pointer text-white rounded-3xl h-10 mt-6 flex flex-row items-center justify-center ">
            <Link href="/painelProfissional">Entrar</Link>
          </div>
        </form>
      </div>
      <div className=" hidden sm:flex flex-row items-center absolute bottom-0 right-0 space-x-8 mr-8">
        <img className="w-32 h-32 " src="./covig.svg" alt="" />

        <img className="w-30" src="./ifce.png" alt="" />
      </div>
    </div>
  );
};

export default Login;

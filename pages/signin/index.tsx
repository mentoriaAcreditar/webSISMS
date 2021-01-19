import Head from 'next/head';
import Link from 'next/link';

import Input from '../../components/Input';

const Login = () => {
  return (
    <div
      className="h-auto sm:flex w-full "
      style={{ background: 'url(./background.svg) no-repeat center/cover' }}
    >
      <div className="sm:flex sm:flex-col hidden  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className=" flex flex-col justify-end items-end">
          <img className="w-10/12" src="./Logo.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  ">
        <form className="flex flex-col items-center    w-10/12">
          <h1 className="text-green font-bold text-2xl">
            Bem-vindo, profissional da sáude.
          </h1>
          <span className="text-green2 my-4">
            Para entrar, insira seu nome de usuário e senha.
          </span>
          {/* <Input name="Usuário" />
          <Input name="Senha" /> */}
          <div className="bg-green w-4/12 cursor-pointer text-white rounded-3xl h-10 mt-6 flex flex-row items-center justify-center ">
            <Link href="/user">Entrar</Link>
          </div>

          <div className="flex flex-col mt-8">
            <div className="text-green">
              <Link href="">Esqueceu a senha?</Link>
              <Link href="/signup">Crie sua conta</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

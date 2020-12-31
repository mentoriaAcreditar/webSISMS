import Head from 'next/head';
import Link from 'next/link';



import Input from '../../components/Input';

const SignUp = () => {
  return (
    <div className="h-auto sm:flex w-full "
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
        <div className="sm:flex sm:flex-col hidden  items-end p-2 sm:w-1/2 w-full min-h-screen justify-center ">
        <div className=" flex flex-col justify-end items-end">
         
          <img className="w-10/12" src="./Logo.svg" alt=""/>
        </div>
       
      </div>
      <div className="flex flex-col  items-center sm:w-1/2 w-full h-screen justify-center  ">
    
        <form className="flex flex-col items-center  my-10 w-10/12 overflow-auto">
        <h1 className="text-green font-bold text-2xl">Criar conta</h1>
          <span className="text-green2 my-4">Insira seus dados para criar uma conta.</span>
          <Input name={"Nome"}/>
          <Input name={"E-mail"}/>
          <Input name={"Endereço"}/>
          <Input name={"CPF"}/>
          <Input name={"RG"}/>
          <Input name={"Telefone"}/>
          <button className="bg-green w-4/12 text-white rounded-3xl h-10 mt-6 ">Cadastrar</button>
          <div className="flex flex-col mt-8">
         
          </div>
          </form>
        </div>
    </div>
  );
}

export default SignUp;
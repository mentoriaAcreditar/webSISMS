import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Bar from '../../components/Bar';
import './style.css';
import Sintomas from '../../components/Sintomas';
import Us from '../../components/Us';
import Profissionais from '../../components/Profissionais';
import Cidades from '../../components/Cidades';

const Grafh = () => {
  return (
    <Chart
      width="280px"
      height="280px"
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Curados', 11],
        ['Confirmados', 2],
        ['Internados', 2],
        ['Recuperados', 2],
        ['Observação', 7],
      ]}
      options={{
        title: 'Boletim Covid-19',
        // Just add this option
        pieHole: 0.4,
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};

const GrafhBar = () => {
  return (
    <Chart
      width="380px"
      height="300px"
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={[
        ['Mês', 'Infectados', 'Curados', 'observação'],
        ['Janeiro', 1000, 400, 200],
        ['Fevereiro', 1170, 460, 250],
        ['Março', 660, 1120, 300],
        ['Abril', 1030, 540, 350],
      ]}
      options={{
        // Material design options
        chart: {
          title: 'Comparativo de número de casos',
          subtitle: 'Fonte: US, atualizado em: 20-04-2020',
        },
      }}
      // For tests
      rootProps={{ 'data-testid': '2' }}
    />
  );
};

const Dashboard = () => {
  return (
    <div className=" py-4 px-8">
      <div className="py-4 relative  flex flex-row items-center">
        <div>
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <span className="text-grayTextBase">Seu painel de controle</span>
        </div>

        <button className="bg-primary rounded-md p-2  absolute right-0">
          <span className="text-white">Novo Dashboard</span>
        </button>
      </div>
      <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4   sm:gap-2 space-y-4 sm:space-y-0">
        <div className="shadow-md relative flex  flex-row p-8 space-x-4 bg-white rounded-lg">
          <img
            className="bg-primary absolute left-0 ml-4 rounded-full"
            src="./unid.svg"
            alt=""
          />
          <h1>Total de US</h1>
        </div>
        <div className="shadow-md relative flex flex-row p-8 space-x-4 bg-white rounded-lg">
          <img
            className="bg-primary absolute left-0 ml-2  rounded-full"
            src="./unid.svg"
            alt=""
          />
          <h1>Total de Profissionais</h1>
        </div>
        <div className="shadow-md flex relative flex-row p-8 space-x-4 bg-white rounded-lg">
          <img
            className="bg-primary  absolute left-0 ml-2 rounded-full"
            src="./unid.svg"
            alt=""
          />
          <h1>Total de US</h1>
        </div>
        <div className="shadow-md flex relative flex-row p-8 space-x-4 bg-white rounded-lg">
          <img
            className="bg-primary  absolute left-0 ml-2 rounded-full"
            src="./unid.svg"
            alt=""
          />
          <h1>Total de US</h1>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 mt-4 sm:gap-2 space-y-2 sm:space-y-0">
        <div className="shadow-md flex flex-col bg-white rounded-lg">
          <div className="w-full ">
            <h1 className="font-bold p-4">Número de casos</h1>
            <hr className="text-gray" />
            <div className="px-2">
              <GrafhBar />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2  sm:gap-2 space-y-2 sm:space-y-0">
          <div className="shadow-md flex flex-col bg-white rounded-lg">
            <div className="w-full ">
              <h1 className="font-bold p-4">Profissionais</h1>
              <hr className="text-gray" />
            </div>
            <div className="flex flex-col p-4 overflow-auto h-64 space-y-6">
              <div className="relative flex flex-row space-x-2">
                <img
                  className="bg-primary rounded-full"
                  src="./user3.svg"
                  alt=""
                />
                <span>Fulano de tal</span>
                <span className="absolute right-0 font-bold">US-1</span>
              </div>
              <div className="relative flex flex-row space-x-2">
                <img
                  className="bg-primary rounded-full"
                  src="./user3.svg"
                  alt=""
                />
                <span>Fulano de tal</span>
                <span className="absolute right-0 font-bold">US-1</span>
              </div>
              <div className="relative flex flex-row space-x-2">
                <img
                  className="bg-primary rounded-full"
                  src="./user3.svg"
                  alt=""
                />
                <span>Fulano de tal</span>
                <span className="absolute right-0 font-bold">US-1</span>
              </div>
              <div className="relative flex flex-row space-x-2">
                <img
                  className="bg-primary rounded-full"
                  src="./user3.svg"
                  alt=""
                />
                <span>Fulano de tal</span>
                <span className="absolute right-0 font-bold">US-1</span>
              </div>
              <div className="relative flex flex-row space-x-2">
                <img
                  className="bg-primary rounded-full"
                  src="./user3.svg"
                  alt=""
                />
                <span>Fulano de tal</span>
                <span className="absolute right-0 font-bold">US-1</span>
              </div>
              <div className="relative flex flex-row space-x-2">
                <img
                  className="bg-primary rounded-full"
                  src="./user3.svg"
                  alt=""
                />
                <span>Fulano de tal</span>
                <span className="absolute right-0 font-bold">US-1</span>
              </div>
            </div>
          </div>
          <div className="shadow-md flex flex-col bg-white rounded-lg ">
            <div className="w-full ">
              <h1 className="font-bold p-4">Monitoramento</h1>
              <hr className="text-gray" />
              <Grafh />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatorioPaciente: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState('dashboard');

  function handleSetPage(name: string) {
    setPage(name);
  }

  function openModal() {
    setModalOpen(true);
  }

  function handleAddTool() {
    console.log('ok');
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }
  const v = [
    {
      name: 'Tosse',
    },
    {
      name: 'Coração acelerado',
    },
    {
      name: 'Febre',
    },
    {
      name: 'Cansaço',
    },
    {
      name: 'Falta de ar',
    },
    {
      name: 'Falta de ar',
    },
    {
      name: 'Falta de ar',
    },
  ];
  return (
    <>
      <div className="flex flex-row   h-screen">
        <div
          className="flex-col container sm:flex hidden items-center relative  justify-center bg-secondary
        sm:h-full md:h-full lg:h-full   w-2/12"
        >
          <div className="w-full bg-primary absolute top-0 flex flex-col items-center p-6">
            <img src="./logotest2.svg" alt="" />
          </div>

          <div className=" flex flex-col w-full  ">
            <div />
            <button
              type="button"
              onClick={() => handleSetPage('dashboard')}
              className={
                page === 'dashboard'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./trello.svg" alt="" />
              <span className="">Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPage('cadastro')}
              className={
                page === 'cadastro'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./userwhite.svg" alt="" />
              <span className="">Profissionais</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPage('sintomas')}
              className={
                page === 'sintomas'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./thermometer.svg" alt="" />
              <span className="">Sintomas</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPage('cidades')}
              className={
                page === 'cidades'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./thermometer.svg" alt="" />
              <span className="">Cidades</span>
            </button>

            <button
              type="button"
              onClick={() => handleSetPage('us')}
              className={
                page === 'us'
                  ? 'space-x-2 px-6 p-4 bg-primary  cursor-pointer flex flex-row text-white'
                  : 'space-x-2 px-6 p-4  focus:ring-bg-primary  cursor-pointer flex flex-row text-white'
              }
            >
              <img src="./unid.svg" alt="" />
              <span className="">USs</span>
            </button>
          </div>
          <div className="absolute left-0 bottom-0  shadow-xs  flex flex-col items-center px-2 py-4 ">
            <button
              className="space-x-2 cursor-pointer flex flex-row text-white"
              type="button"
            >
              <img className="  " src="./s.svg" alt="" />
              <span className="">Configurações</span>
            </button>
          </div>
        </div>
        <div className="w-full  bg-grayBackground">
          <Bar
            routeProfile="/perfilProfissional"
            logout
            user="Antonio Carlos"
            userCargo="Administrador"
          />

          {page === 'sintomas' ? (
            <Sintomas />
          ) : page === 'us' ? (
            <Us />
          ) : page === 'cadastro' ? (
            <Profissionais />
          ) : page === 'cidades' ? (
            <Cidades />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </>
  );
};

export default RelatorioPaciente;

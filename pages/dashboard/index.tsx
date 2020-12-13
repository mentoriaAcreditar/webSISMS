import {useEffect, useState} from 'react';



const Dashboard = () => {
  const [name, setName] = useState([]);
  const [mail, setMail] = useState([]);
  const [phone, setPhone] = useState([]);


  // useEffect(() => {
  //   api.get('users').then(response => {
  //     setName(response.data[0].name);
  //     setMail(response.data[0].mail);
  //     setPhone(response.data[0].phone)
     
  //   })
  // },[])
  return (
    <div className="bg-gray-100">
      <a className="shadow-sm h-12 bg-white w-full flex flex-row items-center   justify-center">
          <h1 className="w-full">Painel do Profissional</h1>
          <a href="" className="flex flex-row">
            <span className="sm:flex hidden">Sair</span>
            <img className="mx-2" src="./log-out.svg" alt=""/>
          </a>
      </a>

      <div className="sm:flex sm:flex-row  justify-center m-8">
        <div className="flex flex-col sm:w-1/2 mx-8 ">
          <h1 className="text-magenta2">Acompanhamento do paciente</h1>

          <a href="post" className="shadow rounded-lg mt-4 p-8"> 
            <div className="flex flex-row space-x-2">
              <img src="./plus-circle.svg" alt=""/>
              <h1>Enviar form</h1>
            </div>
          </a>

         
          <div className="flex flex-col shadow rounded-lg bg-white my-8 w-full p-4">
          <div className="flex flex-row w-full mb-8 "> 
              <h1 className="w-full font-bold">Pacientes</h1>
              <a className="flex flex-row mr-4" href="">
                <img className="mx-2" src="./edit.svg" alt=""/>
                Editar
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-2 rounded-lg border p-2">
                <img className="w-12" src="./user2.svg" alt=""/>
                <div>
                  <p className="font-bold">André Sousa Silva</p>
                  <p>Incio da quarentena: 24/12/2020</p>
                  <br/>
                  <p>Enfermidades</p>
                  <span>Diabetes, </span>
                  <span>Asma, </span>
                  <span>lorem </span>
                </div>
              </div>

              <div className="flex flex-row space-x-2 rounded-lg border">
                <img className="w-12" src="./user2.svg" alt=""/>
                <div>
                  <p className="font-bold">André Sousa Silva</p>
                  <p>Incio da quarentena: 24/12/2020</p>
                  <br/>
                  <p>Enfermidades</p>
                  <span>Diabetes, </span>
                  <span>Asma, </span>
                  <span>lorem </span>
                </div>
              </div>

              <div className="flex flex-row space-x-2 border rounded-lg">
                <img className="w-12" src="./user2.svg" alt=""/>
                <div>
                  <p className="font-bold">André Sousa Silva</p>
                  <p>Incio da quarentena: 24/12/2020</p>
                  <br/>
                  <p>Enfermidades</p>
                  <span>Diabetes, </span>
                  <span>Asma, </span>
                  <span>lorem </span>
                </div>
              </div>
              
            </div>
          </div>

       
          
          
        </div>

        <div className="flex flex-col sm:w-1/2 mx-8 ">
          <h1 className="text-magenta2">Dados do profissional</h1>

          <div className="flex flex-col shadow rounded-lg bg-white my-8 w-full p-4">
          <div className="flex flex-row w-full mb-8 "> 
              <h1 className="w-full font-bold">Seus dados</h1>
              <a className="flex flex-row mr-4" href="">
                <img className="mx-2" src="./edit.svg" alt=""/>
                Editar
              </a>
             
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold">Nome</p>
                 <span>{name}</span>
              </div>
              <div>
                <p className="font-bold">E-mail</p>
                <span>{mail}</span>
              </div>
              <div>
                <p className="font-bold">Celular</p>
                <span>{phone}</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}


export default Dashboard;
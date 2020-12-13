import Login from '../signin';
import Input from '../../components/Input';
import Nav from '../../components/Nav';


const About = () => {
  return(
    <div id="about" className="sm:flex sm:flex-row mx-8 h-screen ">
      <div className="sm:w-5/12 sm:mr-24">
        <div className="flex flex-col sm:mt-32 mt-16 space-y-4">
          <h1 className="font-bold text-xl" >Sobre nós</h1>
          <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, dolores? Perspiciatis consequuntur officia maiores unde. Ipsam maiores qui maxime, ad assumenda ullam quam omnis delectus quibusdam dolor ratione obcaecati itaque!</p>
        </div>
      </div>

      <div className="sm:w-1/2 mt-4 sm:mt-32">
        <h1 className="font-bold text-2xl ">Queremos contribuir no combate ao COVID-19</h1>
        <img className=" sm:flex" src="./ilustracao02.svg" alt=""/>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="sm:flex sm:flex-row flex flex-col items-center h-screen">
      <div className="sm:w-5/12 sm:mr-64 sm:mt-2 mt-16  ">
        <h1 className="text-3xl text-green font-bold mb-4 sm:mb-6">NOSSOS CONTATOS</h1>
        <div className="flex flex-row items-center space-x-2"> 
          <img className="bg-white rounded-full w-10 p-2" src="./mail.svg" alt=""/>
          <span>contato@sisms.com.br</span>
         
        </div>
        <div className="flex flex-row items-center mt-4  space-x-2"> 
          <img className="w-10 " src="./whats.png"></img>
          <span>+55 88 9215698</span>    
        </div>
     
      </div>
      <div className="sm:flex sm:flex-row m-20  sm:mx-8  mt-4 sm:mt-32 ">
      
        <form className="sm:flex w-full  flex-col items-center space-y-2">
        <h1 className="text-2xl text-green sm:mb-4">ENTRE EM CONTATO</h1>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Seu nome *" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Seu e-mail *" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Assunto" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl h-32 " placeholder="Sua mensagem" type="text" name="" id=""/>
          <button className="bg-green w-4/12  text-white rounded-3xl h-10 mt-6 ">Enviar</button>
        </form>
      </div>
    
    </div>
  )
}

const Faqs = () => {
  return (
    <div id="faqs" className="flex  flex-col w-full mt-24 sm:mt-2 justify-center items-center p-2 space-y-4">
      <h1 className="text-green text-2xl font-bold">PERGUNTAS E RESPOSTAS</h1>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs 
        duration-500 
           ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs 
        duration-500 
           ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs 
        duration-500 
           ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        </div>
      </a>
      <a href="#" className="bg-white rounded-3xl p-2 sm:w-8/12 w-full flex flex-row justify-center shadow-xs 
        duration-500 
           ">
        <h1 className="w-11/12">O que é a SISMS?</h1>
        <div className="">
          <img className="transform transform-gpu scale-150 hover:rotate-45" src="./plus.svg" alt=""/> 
        </div>
      </a>
    </div>
  )
}

const Footer = () => {
  return(
    <div className="p-16 flex flex-row w-full bg-green mt-10 space-x-4"
    style={{ background: "url(./background.svg) no-repeat center/cover" }}>
      <div className="flex w-1/2 flex-row  ">
      <span className="hidden sm:flex flex-row items-center" >Fale conosco</span>
        <ul className="flex flex-row space-x-2">
          <li>
         
            <a href="">
              <img className=" rounded-full w-12 p-2" src="./mail.svg" alt=""/>
            </a>
          </li>
          <li>
          <a href="">
              <img className=" rounded-full w-12 p-2" src="./whats2.svg" alt=""/>
            </a>
          </li>
          <li>
            <a href="">
              <img className=" rounded-full w-8/12 " src="./instagram.svg" alt=""/>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex w-1/2 flex-row justify-end ">
     
        <img className="w-24 mr-8" src="./Logo.svg" alt=""/>
      </div>
    </div>
  )
}

const LandigPage = () => {
  return(
    <>
    <Nav/>
    
    <div className="flex flex-row sm:w-8/12 bg-auto bg-white w-11/12 items-center justify-center h-64 mb-32 sm:mt-2 mt-32 sm:mb-4 sm:h-screen text-3xl text-green  "
     style={{ background: "url(./ilustracao01.svg)  no-repeat center/cover"} }>
      <div className="flex flex-col mt-60 mx-4">
        <div className="fixed w-5/12 pr-2  py-40 mr-6 mt-12 flex flex-row justify-end">
          <a className="-mr-22  " href="https://wa.me/message/TR5VNKOMUBYSK1">
            <img className="w-16 " src="./whats.png" alt=""/>
          </a>
        </div>
    
        
    </div> 
    
    </div>
    <h1 className="-mt-24 mb-32 mx-6 text-center text-3xl">Seja muito bem-vindo ao SIMS - Sistema de Monitormento de Saúde</h1>
      
      <About/>
      <Contact/>
      <Faqs/>
      <Footer/>
   </>
  )
}

export default LandigPage;
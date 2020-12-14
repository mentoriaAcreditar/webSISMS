import Input from '../../components/Input';

const User = () => {
  return (
    <div className="sm:px-10 ">
      <div className="flex flex-col items-center justify-center bg-green3 shadow-lg">
        <h1 className="text-white text-3xl">Seu perfil</h1>
        <div className="  flex rounded-full border-4 border-white">
          <img className="w-20 h-20 rounded-full" src="./avatar.png" alt=""/>
        </div>
        <span className="text-white">24 anos, auxiliar de enfermagem</span>
      </div>
      <div className="mt-4 shadow-lg sm:px-48 flex flex-col  n items-center">
        <div className="">
          <div className="divide-y divide-green"> 
             <h1 className="text-green text-2xl">Seus dados pessoais</h1>
             <p><br/></p>
          </div>
     
        <div className="sm:flex flex-row">
          <Input name="Nome" placeholder="Antonio Carlos"/>
          <Input name="Sobrenome" placeholder="Rocha de Lima"/>
        </div>
        <div className="sm:flex flex-row">
          <Input name="E-mail" placeholder="limaantoniocarlos@gmail.com"/>
          <Input name="Telefone" placeholder="(88)9.9215-0699"/>
        </div>
        <div className="sm:flex flex-row">
          <Input name="RG" placeholder="122.213.656-25"/>
          <Input name="CPF" placeholder="200788652-2"/>
        </div>
        <Input name="Endereço" placeholder="Rua José Siqueira, S/N, Centro - Viçosa do Ceará"/>

        <div className="divide-y divide-green mt-8"> 
             <h1 className="text-green text-2xl">Dados profissionais</h1>
             <p><br/></p>
          </div>
        <div className="sm:flex flex-row">
          <Input name="Cargo" placeholder="Enfermagem"/>
          <Input name="Especialidade" placeholder="Enfermagem cirurgica"/>
        </div>

        <div className="divide-y divide-green mt-8"> 
             <h1 className="text-green text-2xl">Local de trabalho</h1>
             <p><br/></p>
          </div>
        <div className="sm:flex flex-row">
          <Input name="PSF" placeholder="Cacimbão"/>
          <Input name="Enfereço" placeholder="Sitio Cacimbão"/>
        </div>
        

      </div>

      
      <button className="bg-green3 text-white rounded-3xl w-1/2 h-10 my-8">Atualizar dados</button>
      </div>
    
    </div>
  )
}

export default User;
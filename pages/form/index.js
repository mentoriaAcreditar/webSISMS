import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';

const Form = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col items-center justify-center rounded-xl p-8 shadow bg-white ">
        <h1 className="text-2xl text-green font-bold">Conte-nos como está se sentindo hoje.</h1>
        <form action="">
          <div className="py-6">
            <h1>Sente dores de cabeça?</h1>
            <div className="flex flex-row space-x-2">
            <CheckBox type="radio" id="male" name="dor" value="Sim"/>
            <CheckBox type="radio" id="male" name="dor" value="Não"/>
          
            </div>
          </div>
         
        
          <Input name="Há algo a mais que queira reportar?" type="text"/>
         
       
        </form>
      </div>
    </div>
  )
}

export default Form;
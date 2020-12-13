import '../styles/main.css';

const CheckBox = ({name, placeholder, id, value}) => {
  return (
    <div className="flex flex-row items-center space-x-2 ">
    
          
            <input type="radio" id={id} name={name} value={value}/>
            <label for={name}>{value}</label>
           
    </div>
  );
}

export default CheckBox;

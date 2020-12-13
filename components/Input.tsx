import "../styles/main.css";
interface IInput {
  name?: string;
  placeholder?: string;
}
const Input = ({ name, placeholder }: IInput) => {
  return (
    <div className="flex flex-col p-2  ">
      <label className="text-green mx-2" htmlFor="">
        {name}
      </label>
      <input
        placeholder={placeholder}
        className="p-4 h-10  bg-input box-border  text-green bg-input border-color rounded-3xl"
        type="text"
      />
    </div>
  );
};

export default Input;

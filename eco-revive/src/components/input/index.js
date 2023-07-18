import { Content } from "./style";

function Input({item, type, label, placeholder}) {
  return (
    <Content>
      <label for={item}>{label}</label>
      <input type={type} id={item} placeholder={placeholder}/>
    </Content>
  );
}

export default Input;

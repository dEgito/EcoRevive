import { Content } from "./style";

function Input({item,type,children}) {
  return (
    <Content>
      <label for={item}>{children}</label>
      <input type={type} id={item} name={item} required/>
    </Content>
  );
}

export default Input;
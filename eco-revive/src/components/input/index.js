import { Content } from "./style";

function Input({ type, item, label }) {
  return (
    <Content>
      <label for={item}>{label}</label>
      <input type={type} item={item} />
    </Content>
  );
}

export default Input;

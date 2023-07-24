import { Content } from "./style";

function Input({ category, type, item, label }) {
  return (
    <Content category={category}>
      <label for={item}>{label}</label>
      <input type={type} item={item} />
    </Content>
  );
}

export default Input;

import { Content } from "./style";

function Input({ category, type, item, label, data }) {
  return (
    <Content category={category}>
      <label for={item}>{label}</label>
      <input type={type} item={item} data={data}/>
    </Content>
  );
}

export default Input;

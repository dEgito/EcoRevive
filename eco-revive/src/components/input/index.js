import { Content } from "./style";

function Input({ category, type, item, label, data, onChangeSet }) {

  const inputChangeHandler = (event) => {
    onChangeSet(event.target.value);
  };


  return (
    <Content category={category}>
      <label for={item}>{label}</label>
      <input type={type} item={item} data={data} onChange={inputChangeHandler}/>
    </Content>
  );
}

export default Input;

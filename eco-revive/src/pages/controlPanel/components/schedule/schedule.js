import { Item } from "./style";

function Schedule({id_schedule, item}) {
  return (
    <Item>
      <div>
        <p>{id_schedule}</p>
        <p>{item}</p>
      </div>

      <button>Detalhes</button>
    </Item>
  );
}

export default Schedule;
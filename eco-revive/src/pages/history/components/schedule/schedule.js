import { useState } from "react";

import { Item } from "./style";

function Schedule({ id_schedule, item, openModalFollow }) {
  return (
    <Item>
      <div>
        <p>{id_schedule}</p>
        <p>{item}</p>
      </div>

      <button onClick={openModalFollow}>Detalhes</button>
    </Item>
  );
}

export default Schedule;

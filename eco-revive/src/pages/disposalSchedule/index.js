//Hooks useStates
import { useState } from "react";

//api
import { api } from "../../Services/Api";

// Style
import {
  BtnExit,
  BtnSubmit,
  Card,
  Container,
  ContainerButton,
  Input,
} from "./style";

function DisposalSchedule({ isOpen, closeModalSchedule }) {
  const [item, setItem] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState("");
  const [responsible, setResponsible] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    api
      .post(
        "/discardd",
        {
          disc_item: item,
          disc_address: address,
          disc_date: data,
          disc_responsible_name: responsible,
          disc_status: status,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.message.errors) {
          return alert("Falha ao agendar descarte");
        }
        alert("Descarte agendado ");
        closeModalSchedule();
      })
      .catch((error) => {
        console.log(error);
        return alert("Descarte não agendado");
      });
  }

  if (isOpen) {
    return (
      <Container>
        <Card>
          <h1>Agendar Descarte</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="item">Item:</label>
              <Input
                type="text"
                id="item"
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="unidades">Unidades:</label>
              <Input
                type="text"
                id="unidades"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="data">Data:</label>
              <Input
                type="date"
                id="data"
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="responsible">Responsável:</label>
              <Input
                type="text"
                id="responsible"
                onChange={(e) => setResponsible(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <Input
                type="text"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <ContainerButton>
              <BtnExit onClick={closeModalSchedule}>cancelar</BtnExit>
              <BtnSubmit type="submit">Agendar</BtnSubmit>
            </ContainerButton>
          </form>
        </Card>
      </Container>
    );
  } else {
    return null;
  }
}
export default DisposalSchedule;

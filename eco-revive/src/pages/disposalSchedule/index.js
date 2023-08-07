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
  InputContent,
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
            <InputContent>
              <label htmlFor="item">Item:</label>
              <input
                type="text"
                id="item"
                onChange={(e) => setItem(e.target.value)}
              />
            </InputContent>
            <div>
              <InputContent>
                <label htmlFor="unidades">Unidades:</label>
                <input
                  type="text"
                  id="unidades"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </InputContent>
              <InputContent>
                <label htmlFor="data">Data:</label>
                <input
                  type="date"
                  id="data"
                  onChange={(e) => setData(e.target.value)}
                />
              </InputContent>
            </div>
            <InputContent>
              <label htmlFor="responsible">Responsável:</label>
              <input
                type="text"
                id="responsible"
                onChange={(e) => setResponsible(e.target.value)}
              />
            </InputContent>
            <InputContent>
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </InputContent>
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

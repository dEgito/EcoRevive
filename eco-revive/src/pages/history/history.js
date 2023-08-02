import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o componente Link aqui
import Header from "./components/header/header";
import Navbar from "../../components/navbar/navbar";
import Schedule from "./components/schedule/schedule";
import { Container, Content, Section } from "./style";
import Follow from "../../pages/follow/follow";
import NavBarInner from "../../components/navbarSimple/navbar";

const schedules = [
  {
    id: 1,
    id_schedule: "BV-001",
    item: "Lorem Ipsum",
  },
  {
    id: 2,
    id_schedule: "BV-002",
    item: "Lorem Ipsum",
  },
  {
    id: 3,
    id_schedule: "BV-003",
    item: "Lorem Ipsum",
  },
  {
    id: 4,
    id_schedule: "CA-001",
    item: "Lorem Ipsum",
  },
];

// Painel de controle | Rota "/painel"
function ControlPanel() {
  const [openFollow, setOpenModalFollow] = useState(false);

  return (
    <Container>
      <NavBarInner />
      <Follow
        isOpen={openFollow}
        closeModalFollow={() => setOpenModalFollow(!openFollow)}
      />
      <Section>
        <Header />
        <Content>
          <h1>Painel de controle</h1>

          {schedules.map((schedule) => {
            return (
              <Schedule
                key={schedule.id}
                id_schedule={schedule.id_schedule}
                item={schedule.item}
                openModalFollow={() => setOpenModalFollow(true)}
              />
            );
          })}
        </Content>
      </Section>
    </Container>
  );
}

export default ControlPanel;

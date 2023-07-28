import Header from "./components/header/header";
import Navbar from "../../components/navbar/navbar";
import Schedule from "./components/schedule/schedule";
import { Container, Content, Section } from "./style";

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
  return (
    <Container>
      <Navbar />
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
              />
            );
          })}
        </Content>
      </Section>
    </Container>
  );
}

export default ControlPanel;

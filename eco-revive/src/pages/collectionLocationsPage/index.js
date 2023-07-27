import { useState } from "react";
import { Container, Map, ConteinerMain, Cont } from "./style";
import NavBarInner from "./components/navbar/navbar";
import FiltersModal from "./components/filter/filter";
import Button from "../../components/button/index";
import ListLocations from "./components/listCompanies/listCompanies";
import Copyright from "../../components/copyright/copyright";
import DisposalSchedule from "../disposalSchedule";

const companies = [
  {
    id: 1,
    name: "Accenture",
    address: "Av. Alfredo Lisboa, 268 - Recife",
  },

  {
    id: 2,
    name: "Avanade",
    address: "Rua - Cais do Apolo, 222 - Recife",
  },

  {
    id: 3,
    name: "CESAR",
    address: "R. do Bom Jesus, 10 - Recife",
  },

  {
    id: 4,
    name: "Be Work",
    address: "Praça de Casa Forte, 465 - Casa Forte",
  },

  {
    id: 5,
    name: "Escola Técnica Estadual Porto Digital",
    address: "Av. Rio Branco, 193 - Recife",
  },

  {
    id: 6,
    name: "Ecodigital",
    address: "R. Barão de Souza Leão, 1000 - Boa Viagem",
  },
];

function ColletionLocations() {
  const [openModal, setOpenModal] = useState(false);
  const [openSchedule, setOpenModalSchedule] = useState(false);

  return (
    <Container>
      <FiltersModal
        isOpen={openModal}
        closeModalFilter={() => setOpenModal(!openModal)}
      />
      <DisposalSchedule
        isOpen={openSchedule}
        closeModalSchedule={() => setOpenModalSchedule(!openSchedule)}
      />
      <NavBarInner />

      <Cont>
        <Button category="filter" openModalFilter={() => setOpenModal(true)}>
          Todos os filtros
        </Button>

        <ConteinerMain>
          <ul>
            {companies.map((company) => {
              return (
                <ListLocations
                  key={company.id}
                  name={company.name}
                  address={company.address}
                  openModalSchedule={() => setOpenModalSchedule(true)}
                />
              );
            })}
          </ul>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.905759609186!2d-34.87211069223108!3d-8.06342139952157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a39e2f54e3%3A0x7a7c2545d48886c0!2sAccenture%20-%20Armaz%C3%A9m%2012%20Innovation%20Center!5e0!3m2!1spt-BR!2sbr!4v1689635105857!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Map>
        </ConteinerMain>
      </Cont>
      <Copyright />
    </Container>
  );
}
export default ColletionLocations;

import { Li, BtnAgenda } from "./listCompaniesStyle";

function ListLocations({ name, address }) {
  return (
    <Li>
      <h2>{name}</h2>
      <p>{address}</p> {/*possivel mundaça para link */}
      <BtnAgenda>Agendar descarte</BtnAgenda>
    </Li>
  );
}
export default ListLocations;

import { Li, Btn } from "./listCompaniesStyle";

function ListLocations({ name, address }) {
  return (
    <Li>
      <h2>{name}</h2>
      <p>{address}</p> {/*possivel mundaça para link */}
      <Btn>Agendar descarte</Btn>
    </Li>
  );
}
export default ListLocations;

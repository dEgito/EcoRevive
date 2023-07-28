import { Conteiner } from "./selectStyle";

function Select() {
  return (
    <Conteiner>
      <select name="tiposEmpresas">
        <option value="tiposEmpresas"> Tipos de empresas </option>
        <option value="artesanato"> Artesanato </option>
        <option value="educacional "> Educacional </option>
        <option value="empresarial"> Empresarial </option>
        <option value="recicladora"> Recicladora </option>
        <option value="tecnica">Técnica </option>
      </select>
      <select name="locais">
        <option value="tiposEmpresas"> Locais </option>
        <option value="apipucos"> Apipucos </option>
        <option value=" boaViagem "> Boa Viagem </option>
        <option value="candeias"> Candeias </option>
        <option value="campoGrande"> Campo Grande </option>
        <option value="casaForte">Casa Forte </option>
        <option value="derby"> Derby </option>
        <option value="encruzilhada ">Encruzilhada </option>
        <option value="espinheiro">Espinheiro</option>
        <option value="imbiribeira">Imbiribeira</option>
        <option value="jaqueira">Jaqueira </option>
        <option value="madalena">Madalena </option>
        <option value="parnamirim">Parnamirim</option>
        <option value="pina">Pina </option>
        <option value="piedade">Piedade</option>
        <option value="recife">Recife</option>
        <option value="rosarinho">Rosarinho </option>
        <option value="santo Antônio">Santo Antônio</option>
        <option value="setubal">Setubal </option>
        <option value="tamarineira">Tamarineira</option>
        <option value="torre">Torre</option>
      </select>
    </Conteiner>
  );
}

export default Select;

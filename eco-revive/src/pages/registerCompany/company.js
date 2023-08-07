// Libs
import { Link, useNavigate } from "react-router-dom";

//Hooks useStates
import { useState } from "react";

//api
import { api } from "../../Services/Api";

// Components
import Button from "../../components/button/index";
import InternalNavbar from "../../components/internalNavbar/navbar";

// Styles
import {
  ContainerSmal,
  ButtonBox,
  Container,
  Content,
  InputContent,
} from "./style";

// Assets
import Logo from "../../assets/Logo320.png";

function RegisterCompany() {
  const [compName, setCompName] = useState("");
  const [compCnpj, setCompCnpj] = useState("");
  const [compCnae, setCompCnae] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [compPassword, setCompPassword] = useState("");
  const [compPhone, setCompPhone] = useState("");
  const [compType, setCompType] = useState("");
  const [compAddressCep, setCompAddressCep] = useState("");
  const [compAddressRoad, setCompAddressRoad] = useState("");
  const [compAddressNumber, setCompAddressNumber] = useState("");
  const [compAddressDiscrict, setCompAddressDiscrict] = useState("");
  const [compAddressCity, setCompAddressCity] = useState("");
  const [compAddressState, setCompAddressState] = useState("");
  const [compAddressComplement, setCompAddressComplement] = useState("");
  const history = useNavigate();
  const token = localStorage.getItem("token");

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post("/company", {
        comp_name: compName,
        comp_cnpj: compCnpj,
        comp_cnae: compCnae,
        comp_email: compEmail,
        comp_password: compPassword,
        comp_phone: compPhone,
        comp_type: compType,
        comp_addrress_cep: compAddressCep,
        comp_addrress_road: compAddressRoad,
        comp_addrress_number: compAddressNumber,
        comp_addrress_district: compAddressDiscrict,
        comp_addrress_city: compAddressCity,
        comp_addrress_state: compAddressState,
        comp_addrress_complement: compAddressComplement,
      })
      .then((response) => {
        if (token) {
          history("/home");
        } else {
          history("/loginCompany");
        }

        if (response.data.message.errors) {
          return alert("Falha ao cadastrar Empresa");
        }
        return alert("Empresa Cadastrada com Sucesso");
      })
      .catch((error) => {
        console.log(error);
        return alert("Empresa Não Cadastrada");
      });
  }

  return (
    <>
      <InternalNavbar />
      <Container>
        <Content>
          <h1>Cadastro empresa</h1>
          <form onSubmit={handleSubmit}>
            <InputContent category={"secundary"}>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setCompName(e.target.value)}
              />
            </InputContent>

            <ContainerSmal size={"small"}>
              <InputContent category={"small"}>
                <label htmlFor="compCnpj">CNPJ:</label>
                <input
                  type="text"
                  id="compCnpj"
                  onChange={(e) => setCompCnpj(e.target.value)}
                />
              </InputContent>

              <InputContent category={"small"}>
                <label htmlFor="compCnae">CNAE:</label>
                <input
                  type="text"
                  id="compCnae"
                  onChange={(e) => setCompCnae(e.target.value)}
                />
              </InputContent>
            </ContainerSmal>
            <InputContent category={"secundary"}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setCompEmail(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="CompPassword">Senha:</label>
              <input
                type="password"
                id="CompPassword"
                onChange={(e) => setCompPassword(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="phone">Telefone:</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setCompPhone(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="CompType">Tipo de empresa:</label>
              <input
                type="text"
                id="CompType"
                onChange={(e) => setCompType(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="CompAddressCep">Cep:</label>
              <input
                type="text"
                id="CompAddressCep"
                onChange={(e) => setCompAddressCep(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="CompAddressRoad">Rua/ Avenida:</label>
              <input
                type="text"
                id="CompAddressRoad"
                onChange={(e) => setCompAddressRoad(e.target.value)}
              />
            </InputContent>

            <ContainerSmal size={"small"}>
              <InputContent category={"small"}>
                <label htmlFor="CompAddressNumber">Número:</label>
                <input
                  type="text"
                  id="CompAddressNumber"
                  onChange={(e) => setCompAddressNumber(e.target.value)}
                />
              </InputContent>

              <InputContent category={"small"}>
                <label htmlFor="CompAddressComplement">Complemento:</label>
                <input
                  type="text"
                  id="CompAddressComplement"
                  onChange={(e) => setCompAddressComplement(e.target.value)}
                />
              </InputContent>
            </ContainerSmal>

            <InputContent category={"secundary"}>
              <label htmlFor="CompAddressDiscrict">Bairro:</label>
              <input
                type="text"
                id="CompAddressDiscrict"
                onChange={(e) => setCompAddressDiscrict(e.target.value)}
              />
            </InputContent>

            <ContainerSmal size={"small"}>
              <InputContent category={"small"}>
                <label htmlFor="CompAddressCity">Cidade:</label>
                <input
                  type="text"
                  id="CompAddressCity"
                  onChange={(e) => setCompAddressCity(e.target.value)}
                />
              </InputContent>

              <InputContent category={"small"}>
                <label htmlFor="CompAddressState">Estado:</label>
                <input
                  type="text"
                  id="CompAddressState"
                  onChange={(e) => setCompAddressState(e.target.value)}
                />
              </InputContent>
            </ContainerSmal>
            <ButtonBox>
              <Button category={"primary"} type={"submit"}>
                Cadastrar
              </Button>
            </ButtonBox>
          </form>
          <div>
            {token ? null : (
              <ButtonBox>
                <Link to={"/loginCompany"}>
                  <a href="#">Já possuo conta! Entrar</a>
                </Link>
              </ButtonBox>
            )}
          </div>
        </Content>

        <img src={Logo} alt="Eco Revive" />
      </Container>
    </>
  );
}
export default RegisterCompany;

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
import { Box, ButtonBox, Container, Content, ContainerSmal, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [addressCep, setAddressCep] = useState("");
  const [userAddressRoad, setUserAddressRoad] = useState("");
  const [userAddressNumber, setUserAddressNumber] = useState("");
  const [userAddressDiscrict, setUserAddressDiscrict] = useState("");
  const [userAddressCity, setUserAddressCity] = useState("");
  const [userAddressState, setUserAddressState] = useState("");
  const [userAddressComplement, setUserAddressComplement] = useState("");
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
      api.post("/users", {
        user_name: name,
        user_email: email,
        user_password: password,
        user_phone: phone,
        user_addrress_cep: addressCep,
        user_addrress_road: userAddressRoad,
        user_addrress_number: userAddressNumber,
        user_addrress_district: userAddressDiscrict,
        user_addrress_city: userAddressCity,
        user_addrress_state: userAddressState,
        user_addrress_complement: userAddressComplement,
      })
      .then((response) => {
        history("/login");
        if (response.data.message.errors) {
          return alert("Falha ao cadastrar Usuario");
        }
        return alert("Usuario Cadastrado com Sucesso");
        
      })
      .catch((error) => {
        console.log(error);
        return alert("Usuario Não Cadastrado");
      });

  }

  return (
    <Box>
      <InternalNavbar />
      <Container>
        <Content>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <InputContent category={"secundary"}>
              <label htmlFor="name">Nome completo:</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="phone">Telefone:</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="addressCep">Cep:</label>
              <input
                type="text"
                id="addressCep"
                onChange={(e) => setAddressCep(e.target.value)}
              />
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="AddressRoad">Rua/ Avenida:</label>
              <input
                type="text"
                id="AddressRoad"
                onChange={(e) => setUserAddressRoad(e.target.value)}
              />
            </InputContent>

            <ContainerSmal size={"small"}>
              <InputContent category={"small"}>
                <label htmlFor="AddressNumber">Número:</label>
                <input
                  type="text"
                  id="AddressNumber"
                  onChange={(e) => setUserAddressNumber(e.target.value)}
                />
              </InputContent>

              <InputContent category={"small"}>
                <label htmlFor="AddressComplement">Complemento:</label>
                <input
                  type="text"
                  id="AddressComplement"
                  onChange={(e) => setUserAddressComplement(e.target.value)}
                />
              </InputContent>
            </ContainerSmal>

            <InputContent category={"secundary"}>
              <label htmlFor="AddressDiscrict">Bairro:</label>
              <input
                type="text"
                id="AddressDiscrict"
                onChange={(e) => setUserAddressDiscrict(e.target.value)}
              />
            </InputContent>

            <ContainerSmal size={"small"}>
              <InputContent category={"small"}>
                <label htmlFor="AddressCity">Cidade:</label>
                <input
                  type="text"
                  id="AddressCity"
                  onChange={(e) => setUserAddressCity(e.target.value)}
                />
              </InputContent>

              <InputContent category={"small"}>
                <label htmlFor="AddressState">Estado:</label>
                <input
                  type="text"
                  id="AddressState"
                  onChange={(e) => setUserAddressState(e.target.value)}
                />
              </InputContent>
            </ContainerSmal>
            <ButtonBox>
              <Button
                style={{ margin: "50%" }}
                category={"primary"}
                type={"submit"}
              >
                Cadastrar
              </Button>
            </ButtonBox>
          </form>

          <ButtonBox>
            <Link to={"/empresas"}>
              <a href="#">Cadastrar Empresa</a>
            </Link>
          </ButtonBox>

          <ButtonBox>
            <Link to={"/login"}>
              <a href="#">Já possuo conta! Entrar</a>
            </Link>
          </ButtonBox>
        </Content>

        <img src={Logo} alt="Eco Revive" />
      </Container>
    </Box>
  );
}
export default Register;

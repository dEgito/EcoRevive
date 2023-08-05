// Libs
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

//Hooks useStates
import { useState } from "react";

//api
import { api } from "../../Services/Api";

// Components
import Button from "../../components/button/index";
import Navbar from "../../components/defaultNavbar/navbar";

// Styles
import { Box, ButtonBox, Container, Content, Div, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [addressCep, setAddressCep] = useState("");
  const [userAddressRoad, setUserAddressRoad] = useState("")
  const [userAddressNumber, setUserAddressNumber] = useState("")
  const [userAddressDiscrict, setUserAddressDiscrict] = useState("")
  const [userAddressCity, setUserAddressCity] = useState("")
  const [userAddressState, setUserAddressState] = useState("")
  const [userAddressComplement, setUserAddressComplement] = useState("")

  const schema = yup.object().shape({
    name: yup
      .string()
      .max(99, "Limite de caracteres atingido.")
      .required("*Campo obrigatório!"),
    email: yup
      .string()
      .email("Insira um e-mail válido!")
      .required("*Campo obrigatório!"),
    password: yup.string().required("*Campo obrigatório!"),
    passwordConfirmation: yup
      .string()
      .required("*Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas não correspondentes!"),
    phone: yup.string().max(11),
    addressCep: yup.string().max(255),
    userAddressRoad: yup.string().max(255),
    userAddressNumber: yup.string().max(255),
    userAddressDiscrict: yup.string().max(255),
    userAddressCity: yup.string().max(255),
    userAddressState: yup.string().max(255),
    userAddressComplement: yup.string().max(255),
  });

  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post("/users", {
        user_name: name,
        user_email: email,
        user_password: password,
        user_phone: phone,
        addrress_cep: addressCep,
        user_addrress_road: userAddressRoad,
        user_addrress_number: userAddressNumber,
        user_addrress_district: userAddressDiscrict,
        user_addrress_city: userAddressCity,
        user_addrress_state: userAddressState,
        user_addrress_complement: userAddressComplement,
      })
      .then((response) => {
        if (response.data.message.errors) {
          return alert("Falha ao cadastrar Usuario");
        }
        return alert("Usuario Cadastrado com Sucesso");
      })
      .catch((error) => {
        console.log(error);
        return alert("Usuario Não Cadastrado");
      });

    //Adicionar lógica de armazenamento dos dados fornecidos no cadastro
  }

  return (
    <Box>
      <Navbar />
      <Container>
        <Content>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <InputContent category={"secundary"}>
              <label htmlFor="name">Nome completo:</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
              />
              <span>{errors.name?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                name="email"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>{errors.email?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>{errors.password?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="passwordConfirmation">Confirmar senha:</label>
              <input
                type="password"
                id="passwordConfirmation"
                {...register("passwordConfirmation")}
              />
              <span>{errors.passwordConfirmation?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="phone">Telefone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                {...register("phone")}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span>{errors.phone?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="addressCep">Cep:</label>
              <input
                type="text"
                id="addressCep"
                name="addressCep"
                {...register("addressCep")}
                onChange={(e) => setAddressCep(e.target.value)}
              />
              <span>{errors.addressCep?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="userAddressRoad">Rua/ Avenida:</label>
              <input
                type="text"
                id="userAddressRoad"
                name="userAddressRoad"
                {...register("userAddressRoad")}
                onChange={(e) => setUserAddressRoad(e.target.value)}
              />
              <span>{errors.userAddressRoad?.message}</span>
            </InputContent>

            <Div size={"small"}>
              <InputContent category={"secundary"}>
                <label htmlFor="userAddressNumber">Número:</label>
                <input
                  type="text"
                  id="userAddressNumber"
                  name="userAddressNumber"
                  {...register("userAddressNumber")}
                  onChange={(e) => setUserAddressNumber(e.target.value)}
                />
                <span>{errors.userAddressNumber?.message}</span>
              </InputContent>

              <InputContent category={"secundary"}>
                <label htmlFor="userAddressComplement">Complemento:</label>
                <input
                  type="text"
                  id="userAddressComplement"
                  name="userAddressComplement"
                  {...register("userAddressComplement")}
                  onChange={(e) => setUserAddressComplement(e.target.value)}
                />
                <span>{errors.userAddressComplement?.message}</span>
              </InputContent>
            </Div>

            <InputContent category={"secundary"}>
              <label htmlFor="userAddressDiscrict">Bairro:</label>
              <input
                type="text"
                id="userAddressDiscrict"
                name="userAddressDiscrict"
                {...register("userAddressDiscrict")}
                onChange={(e) => setUserAddressDiscrict(e.target.value)}
              />
              <span>{errors.userAddressDiscrict?.message}</span>
            </InputContent>

            <Div size={"small"}>
              <InputContent category={"secundary"}>
                <label htmlFor="userAddressCity">Cidade:</label>
                <input
                  type="text"
                  id="userAddressCity"
                  name="userAddressCity"
                  {...register("userAddressCity")}
                  onChange={(e) => setUserAddressCity(e.target.value)}
                />
                <span>{errors.userAddressCity?.message}</span>
              </InputContent>

              <InputContent category={"secundary"}>
                <label htmlFor="userAddressState">Estado:</label>
                <input
                  type="text"
                  id="userAddressState"
                  name="userAddressState"
                  {...register("userAddressState")}
                  onChange={(e) => setUserAddressState(e.target.value)}
                />
                <span>{errors.userAddressState?.message}</span>
              </InputContent>
            </Div>
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

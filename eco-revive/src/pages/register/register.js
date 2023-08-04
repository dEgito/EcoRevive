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
import { ButtonBox, Container, Content, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <>
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

            <Button category={"primary"} type={"submit"}>
              Cadastrar
            </Button>
          </form>

          <ButtonBox>
            <Link to={"/login"}>
              <a href="#">Já possuo conta! Entrar</a>
            </Link>
          </ButtonBox>
        </Content>

        <img src={Logo} alt="Eco Revive" />
      </Container>
    </>
  );
}
export default Register;

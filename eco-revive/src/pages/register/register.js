import { ButtonBox, Container, Content, InputContent } from "./style";
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import Logo from "../../assets/Logo320.png";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

function Register() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(99, "Limite de caracteres atingido.")
      .matches(/^[a-zA-Z0-9]+$/, "Não pode possuir caracteres especiais.")
      .required("*Campo obrigatório!"),
    email: yup
      .string()
      .email("Insira um e-mail válido!")
      .required("*Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .required("*Campo obrigatório!"),
    passwordConfirmation: yup
      .string()
      .required("*Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas não correspondentes!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)

    //Adicionar lógica de armazenamento dos dados fornecidos no cadastro
  }

  return (
    <Container>
      <Content>
        <img src={Logo} />
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContent category={"secundary"}>
            <label htmlFor="name">Nome completo:</label>
            <input type="text" id="name" {...register("name")} />
            <span>{errors.name?.message}</span>
          </InputContent>

          <InputContent category={"secundary"}>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" {...register("email")} />
            <span>{errors.email?.message}</span>
          </InputContent>

          <InputContent category={"secundary"}>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" {...register("password")} />
            <span>{errors.password?.message}</span>
          </InputContent>

          <InputContent category={"secundary"}>
            <label htmlFor="passwordConfirmation">Senha:</label>
            <input
              type="password"
              id="passwordConfirmation"
              {...register("passwordConfirmation")}
            />
            <span>{errors.passwordConfirmation?.message}</span>
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
  );
}
export default Register;

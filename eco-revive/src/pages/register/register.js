import { ButtonBox, Container, Content } from "./style";
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

  return (
    <Container>
      <Content>
        <img src={Logo} />
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <span>{errors.name?.message}</span>
          <Input
            category="secundary"
            type={"text"}
            item={"name"}
            label={"Nome completo:"}
            {...register("name")}
          />
          <span>{errors.email?.message}</span>
          <Input
            category="secundary"
            type={"text"}
            item={"email"}
            label={"E-mail:"}
          />
          <span>{errors.password?.message}</span>
          <Input
            category="secundary"
            type={"password"}
            item={"password"}
            label={"Senha:"}
          />
          <span>{errors.passwordConfirmation?.message}</span>
          <Input
            category="secundary"
            type={"password"}
            item={"passwordConfirm"}
            label={"Confirme a senha:"}
          />

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

      <img src={Logo} />
    </Container>
  );
}
export default Register;

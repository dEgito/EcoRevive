// Libs
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Components
import Button from "../../components/button/index";
import Navbar from "../../components/defaultNavbar/navbar";

// Styles
import { Div, ButtonBox, Container, Content, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";

function RegisterCompany() {
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
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    //Adicionar lógica de armazenamento dos dados fornecidos no cadastro
  };

  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContent category={"secundary"}>
              <label htmlFor="name">Nome:</label>
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
              <label htmlFor="passwordConfirmation">Confirmar senha:</label>
              <input
                type="password"
                id="passwordConfirmation"
                {...register("passwordConfirmation")}
              />
              <span>{errors.passwordConfirmation?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="name">Telefone:</label>
              <input type="text" id="name" {...register("name")} />
              <span>{errors.name?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="name">Tipo de empresa:</label>
              <input type="text" id="name" {...register("name")} />
              <span>{errors.name?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Cep:</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Rua/ Avenida:</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
            </InputContent>

            <Div size={"small"}>
              <InputContent category={"secundary"}>
                <label htmlFor="password">Número:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                />
                <span>{errors.password?.message}</span>
              </InputContent>

              <InputContent category={"secundary"}>
                <label htmlFor="password">Complemento:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                />
                <span>{errors.password?.message}</span>
              </InputContent>
            </Div>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Bairro:</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
            </InputContent>

            <Div size={"small"}>
              <InputContent category={"secundary"}>
                <label htmlFor="password">Cidade:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                />
                <span>{errors.password?.message}</span>
              </InputContent>

              <InputContent category={"secundary"}>
                <label htmlFor="password">Estado:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                />
                <span>{errors.password?.message}</span>
              </InputContent>
            </Div>
            <ButtonBox>
              <Button category={"primary"} type={"submit"}>
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
    </>
  );
}
export default RegisterCompany;

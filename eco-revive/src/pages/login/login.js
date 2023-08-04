// Libs
import { useNavigate, Link } from "react-router-dom";

//useStates
import { useState } from "react";

//api
import { api } from "../../Services/Api";

// Components
import Button from "../../components/button/index";
import DefaultNavbar from "../../components/defaultNavbar/navbar";

// Styles
import { ButtonBox, Container, Content, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";
import { set } from "react-hook-form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post("/login", {
        user_email: email,
        user_password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history("/home");
      })
      .catch((error) => {
        return alert("Erro inesperado");
      });
  }

  return (
    <>
      <DefaultNavbar />
      <Container>
        <img src={Logo} alt="Eco Revive" />

        <Content>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <InputContent category={"secundary"}>
              <input
                type="text"
                label="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContent>
            <InputContent category={"secundary"}>
              <input
                type="password"
                label="Senha"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContent>

            <Button category={"primary"} type={"submit"}>
              Entrar
            </Button>
          </form>

          <ButtonBox>
            <Link to={"/cadastro"}>Crie uma conta</Link>
          </ButtonBox>
        </Content>
      </Container>
    </>
  );
}
export default Login;

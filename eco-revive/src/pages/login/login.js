// Libs
import { useNavigate, Link } from "react-router-dom";

//useStates
import { useState } from "react";

//api
import { api } from "../../Services/Api";

// Components
import Button from "../../components/button/index";
import InternalNavbar from "../../components/internalNavbar/navbar";

// Styles
import { ButtonBox, Container, Content, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";

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
        console.log(error)
        return alert("Senha incorreta!");
      });
  }

  return (
    <>
      <InternalNavbar />
      <Container>
        <img src={Logo} alt="Eco Revive" />

        <Content>
          <h1>Login usuário</h1>
          <form onSubmit={handleSubmit}>
            <InputContent>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </InputContent>

            <Button category={"primary"} type={"submit"}>
              Entrar
            </Button>
          </form>

          <ButtonBox>
            <Link to={"/loginCompany"}>Logar como empresa</Link>
          </ButtonBox>
        </Content>
      </Container>
    </>
  );
}
export default Login;

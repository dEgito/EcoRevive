// Libs
import { Link } from "react-router-dom";

// Components
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import DefaultNavbar from "../../components/defaultNavbar/navbar";

// Styles
import { ButtonBox, Container, Content } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";


function Login() {
  return (
    <>
      <DefaultNavbar />
      <Container>
        <img src={Logo} alt="Eco Revive" />

        <Content>
          <h1>Login</h1>
          <form>
            <Input
              category="secundary"
              type={"text"}
              item={"user"}
              label={"Email"}
            />
            <Input
              category="secundary"
              type={"password"}
              item={"password"}
              label={"Senha"}
            />

            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <Button category={"primary"} type={"submit"}>
                Entrar
              </Button>
            </Link>
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

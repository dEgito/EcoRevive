import { ButtonBox, Container, Content } from "./style";
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import Logo from "../../assets/Logo320.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
        <img src={Logo} />
      <Content> 
        <img src={Logo} />
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
          <Link to={"/cadastro"}>
            <a href="#">Crie uma conta</a>
          </Link>
        </ButtonBox>
      </Content>
    </Container>
  );
}
export default Login;

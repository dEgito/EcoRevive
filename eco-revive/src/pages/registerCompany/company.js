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
import { Div, ButtonBox, Container, Content, InputContent } from "./style";

// Assets
import Logo from "../../assets/Logo320.png";

function RegisterCompany() {
  const [compName, setCompName] = useState("");
  const [compCnpj, setCompCnpj] = useState("");
  const [compCnae, setCompCnae] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [compPassword, setCompPassword] = useState("");
  const [compPhone, setCompPhone] = useState("");
  const [compType, setCompType] = useState("");
  const [compAddressCep, setCompAddressCep] = useState("");
  const [compAddressRoad, setCompAddressRoad] = useState("");
  const [compAddressNumber, setCompAddressNumber] = useState("");
  const [compAddressDiscrict, setCompAddressDiscrict] = useState("");
  const [compAddressCity, setCompAddressCity] = useState("");
  const [compAddressState, setCompAddressState] = useState("");
  const [compAddressComplement, setCompAddressComplement] = useState("");

  const schema = yup.object().shape({
    compName: yup
      .string()
      .max(99, "Limite de caracteres atingido.")
      .required("*Campo obrigatório!"),
    compCnpj: yup.string().max(14),
    compCnae: yup.string(),
    compEmail: yup
      .string()
      .email("Insira um e-mail válido!")
      .required("*Campo obrigatório!"),
    compPassword: yup.string().required("*Campo obrigatório!"),
    compPasswordConfirmation: yup
      .string()
      .required("*Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas não correspondentes!"),
    compPhone: yup.string().max(11),
    compType: yup.string(),
    compAddressCep: yup.string().max(255),
    compAddressRoad: yup.string().max(255),
    compAddressNumber: yup.string().max(255),
    compAddressDiscrict: yup.string().max(255),
    compAddressCity: yup.string().max(255),
    compAddressState: yup.string().max(255),
    compAddressComplement: yup.string().max(255),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post("/company", {
        comp_name: compName,
        comp_cnpj: compCnpj,
        comp_cnae: compCnae,
        comp_email: compEmail,
        comp_password: compPassword,
        comp_phone: compPhone,
        comp_type: compType,
        comp_addrress_cep: compAddressCep,
        comp_addrress_road: compAddressRoad,
        comp_addrress_number: compAddressNumber,
        comp_addrress_district: compAddressDiscrict,
        comp_addrress_city: compAddressCity,
        comp_addrress_state: compAddressState,
        comp_addrress_complement: compAddressComplement,
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
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                onChange={(e) => setCompName(e.target.value)}
              />
              <span>{errors.name?.message}</span>
            </InputContent>

            <Div>
              <InputContent category={"secundary"}>
                <label htmlFor="compCnpj">CNPJ:</label>
                <input
                  type="text"
                  id="compCnpj"
                  {...register("compCnpj")}
                  onChange={(e) => setCompCnpj(e.target.value)}
                />
                <span>{errors.compCnpj?.message}</span>
              </InputContent>

              <InputContent category={"secundary"}>
                <label htmlFor="compCnae">CNAE:</label>
                <input
                  type="text"
                  id="compCnae"
                  {...register("compCnae")}
                  onChange={(e) => setCompCnae(e.target.value)}
                />
                <span>{errors.compCnae?.message}</span>
              </InputContent>
            </Div>
            <InputContent category={"secundary"}>
              <label htmlFor="compCnpj">CNPJ:</label>
              <input
                type="text"
                id="compCnpj"
                {...register("compCnpj")}
                onChange={(e) => setCompCnpj(e.target.value)}
              />
              <span>{errors.compCnpj?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="compCnae">CNAE:</label>
              <input
                type="text"
                id="compCnae"
                {...register("compCnae")}
                onChange={(e) => setCompCnae(e.target.value)}
              />
              <span>{errors.compCnae?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                id="email"
                {...register("email")}
                onChange={(e) => setCompEmail(e.target.value)}
              />
              <span>{errors.email?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                {...register("password")}
                onChange={(e) => setCompPassword(e.target.value)}
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
              <label htmlFor="name">Telefone:</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                onChange={(e) => setCompPhone(e.target.value)}
              />
              <span>{errors.name?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="name">Tipo de empresa:</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                onChange={(e) => setCompType(e.target.value)}
              />
              <span>{errors.name?.message}</span>
            </InputContent>

            <InputContent category={"secundary"}>
              <label htmlFor="password">Cep:</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
                onChange={(e) => setCompAddressCep(e.target.value)}
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
                onChange={(e) => setCompAddressRoad(e.target.value)}
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
                  onChange={(e) => setCompAddressNumber(e.target.value)}
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
                  onChange={(e) => setCompAddressComplement(e.target.value)}
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
                onChange={(e) => setCompAddressDiscrict(e.target.value)}
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
                  onChange={(e) => setCompAddressCity(e.target.value)}
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
                  onChange={(e) => setCompAddressState(e.target.value)}
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

import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto;

  height: 100vh;
  background-color: rgba(34, 34, 34, 0.80);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-family: Montserrat, sans-serif;
  width: 100%;
  max-width: 45rem;
  background-color: #ffffff;

  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);

  h1 {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 30rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Div = styled.div``;

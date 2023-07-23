import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-family: Montserrat, sans-serif;
  width: 100%;
  max-width: 45rem;

  padding: 2rem;
  margin: auto;
  border-radius: 0.8rem;

  background-color: #4eb969;

  h1 {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: aqua;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 30rem;
  }

  div {
    background-color: aliceblue;
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
`;

export const Div = styled.div``;

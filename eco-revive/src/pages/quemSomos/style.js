import styled from "styled-components";

import Background from "../../assets/bg-quem-somos.jpg";

export const Container = styled.body`
  font-family: Montserrat, sans-serif;
  color: #002454;
  margin: 0;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.09rem;
    width: 100%;
    max-width: 34rem;
  }
`;

export const Inicio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  gap: 0.5rem;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100%;
  color: #f2f2f2;

  h1 {
    font-size: 2rem;
  }
  p {
    text-align: center;
  }
  span {
    color: #4eb969;
    font-weight: bold;
  }
`;

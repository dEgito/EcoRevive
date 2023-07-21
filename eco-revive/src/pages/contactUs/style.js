import { styled } from "styled-components";

export const Container = styled.div`
  font-family: Montserrat, sans-serif;
  color: #002454;
  margin: 0;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 1rem; /* Porcentagem do tamanho da tela */
    }
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 0.14rem;
    text-transform: uppercase;
  }

  P {
    margin: 0;
    @media (max-width: 480px) {
      font-size: .8rem; /* Porcentagem do tamanho da tela */
    }

  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;

  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    max-width: 20rem;
    min-width: 15rem;
    column-gap: 3rem;
    row-gap: 1rem;
    padding: 2rem 0;

    label {
      font-size: 0.8rem;
    }

    textarea {
      border: 1px solid #4eb969;
      border-radius: 0.25rem;
      resize: none;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 0.6875rem;
  background: rgba(111, 145, 61, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    font-size: 0.8rem;
    margin: 0;
  }
`;

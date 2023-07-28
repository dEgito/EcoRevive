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
      font-size: 1rem;
    }
  }

  P {
    margin: 0;
    @media (max-width: 480px) {
      font-size: 0.8rem;
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
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  width: 100%;

`;

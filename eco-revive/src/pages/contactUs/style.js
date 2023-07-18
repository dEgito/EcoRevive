import { styled } from "styled-components";

export const Container = styled.div`
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
    font-size: 1rem;
    letter-spacing: 0.09rem;
    width: 100%;
    max-width: 32rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;
  padding: 2rem 0;

  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  label {
    font-size: .8rem;
  }

  textarea {
    resize: none;
  }
`;
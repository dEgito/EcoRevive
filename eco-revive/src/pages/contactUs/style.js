import { styled } from "styled-components";

export const Container = styled.div`
  color: var(--blue-700);
  margin: 0;

  h2 {
    font-size: 1.5rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  h3 {
    font-size: 1rem;
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

    color: var(--green-700);
    font-weight: 700;
    gap: 0.4rem;

    label {
      font-size: 0.8rem;
    }

    textarea {
      border: 1px solid var(--green-500);
      border-radius: 0.25rem;
      resize: none;

      @media (max-width: 600px) {
        margin-bottom: 0;
      }
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0.6875rem;
  background: rgba(111, 145, 61, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--green-700);

  p {
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 550px) {
    margin-top: 2rem;
  }
`;

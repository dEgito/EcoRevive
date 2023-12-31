import { styled } from "styled-components";

export const Container = styled.div`
  color: var(--blue-700);
  margin: 0;

  h1 {
    font-size: 1.8rem;
    @media (max-width: 800px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
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
  padding: 2rem 2;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
`;

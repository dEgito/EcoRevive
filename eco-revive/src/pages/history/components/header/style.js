import { styled } from "styled-components";

export const Box = styled.header`
  width: 90%;
  max-width: 50rem;
  min-width: 10rem;
  padding: 1rem 0;
  margin: auto;

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

  span {
    color: var(--blue-500);
    font-weight: 800;
  }
`;

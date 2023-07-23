import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  color: #014538;

  label {
    font-size: 0.8rem;
    font-weight: 600;
  }

  input {
    border: 1px solid #4eb969;
    border-radius: 0.25rem;
    min-height: 1.4rem;
    resize: none;

    @media (max-width: 600px) {
      margin-bottom: 0;
    }
  }
`;

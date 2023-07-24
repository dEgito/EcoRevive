import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  gap: 0.5rem;
  color: #014538;

  label {
    font-size: 0.8rem;
    font-weight: 600;

    color: ${(props) => {
      return props.category === "secundary" ? "#fff" : "#014538";
    }};
  }

  input {
    border: 1px solid #4eb969;
    min-height: 1.4rem;
    resize: none;
    padding: 0.2rem 1rem;

    @media (max-width: 600px) {
      margin-bottom: 0;
    }

    border-radius: ${(props) => {
      return props.category === "secundary" ? "8rem" : ".25rem";
    }};
  }
`;

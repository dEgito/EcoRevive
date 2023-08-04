import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  gap: 0.5rem;
  color: var(--green-700);

  label {
    font-size: 0.8rem;
    font-weight: 600;

    color: ${(props) => {
      return props.category === "secundary" ? "var(--white)" : "var(--green-700)";
    }};
  }

  input {
    border: 1px solid var(--green-500);
    min-height: 1.4rem;
    resize: none;
    padding: 0.2rem 1rem;

    @media (max-width: 600px) {
      margin-bottom: 0;
    }

    border-radius: ${(props) => {
      return props.category === "secundary" ? "0.6rem" : ".25rem";
    }};
  }
`;

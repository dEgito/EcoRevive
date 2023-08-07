import { styled } from "styled-components";

export const Container = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: rgba(94, 94, 94, 0.6);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-family: Montserrat, sans-serif;
  width: 100%;
  max-width: 35rem;
  background-color: var(--white);

  padding: 4rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);

  h1 {
    margin: 0;

    @media (max-width: 500px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 40rem;
  }

  div {
    display: flex;
    column-gap: 1rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  width: 100%;
  min-width: ${(props) => {
    return props.size === "small" ? "250px" : "unset";
  }};
  gap: 0.5rem;
  color: var(--green-700);

  label {
    font-size: 0.8rem;
    font-weight: 600;

    color: ${(props) => {
      switch (props.category) {
        case "secundary":
          return "var(--white)";
        case "small":
          return " var(--white)";
        default:
          return "var(--green-700)";
      }
    }};
  }

  input {
    border: 1px solid var(--green-500);
    min-height: 1.4rem;
    resize: none;
    border-radius: 0.25rem;

    @media (max-width: 399px) {
      max-width: ${(props) => {
        return props.category === "small" ? "100%" : "unset";
      }};
    }

    @media (max-width: 600px) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 399px) {
    width: 100%;
    max-width: ${(props) => {
      return props.category === "small" ? "8rem" : "90%";
    }};
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  margin-top: 1rem;
`;
export const BtnExit = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 4.98rem;
  border: 1.058px solid var(--black-700);
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: var(--gray-300);
    transition: 0.2s;
  }
`;

export const BtnSubmit = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 4.98rem;
  border: none;
  background: var(--green-500);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: var(--green-500);
    transition: 0.5s;
  }
`;

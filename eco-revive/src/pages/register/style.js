import { styled } from "styled-components";
import Background from "../../assets/Login_Background.png";

export const Box = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap-reverse;
  color: var(--white);
  overflow: hidden;

  img {
    margin: auto;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0;

  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
    overflow-y: scroll;

    @media (max-width: 399px) {
      align-items: center;
      overflow-x: hidden;
      width: 80%;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray-600);

      border-radius: 4px;
    }
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(30, 30, 30, 0.62);
      border-radius: 4px;
    }
  }

  img {
    display: flex;
    width: 20%;
    min-width: 8rem;
    margin: 0 0 1rem 0;

    @media (min-width: 800px) {
      display: none;
    }
  }

  span {
    display: flex;
    width: 100%;
    color: var(--yellow-500);
    font-size: 0.8rem;
    font-weight: 700;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
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

export const ContainerSmal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 50%;

  @media (max-width: 399px) {
    width: 100%;
    max-width: 90%;
    justify-content: ${(props) => {
      return props.size === "small" ? "center" : "unset";
    }};
    gap: 1rem;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0 0;

  a {
    color: var(--white);
    text-decoration: none;
    transition: all ease-in-out 0.5s;

    &:hover {
      color: var(--yellow-500);
    }
  }
`;

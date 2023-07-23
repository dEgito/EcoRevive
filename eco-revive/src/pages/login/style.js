import { styled } from "styled-components";

import Background from "../../assets/Login_Background.png"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  font-family: Monteserrat, sans-serif;
  height: 100vh;
  color: #ffffff;

  img {
    margin: auto;
  }
  
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 50%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: 2rem 0;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: all ease-in-out .5s;

    &:hover {
      color: #E89F10;
    }
  }
`;

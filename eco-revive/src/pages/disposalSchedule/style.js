import { styled } from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
  padding-top: 7%;
  font-family: montserrat, sans-serif;
  width: 80%;
  height: 80%;
  h1 {
    text-align: center;
  }

  form {
    width: max-content;
    margin: 0 auto;
    padding-left: 10%;
  }
  div {
    display: flex;
    padding: 10px;
    input[type="text"],
    input[type="date"] {
      padding: 5px;
      border: 1px solid #4eb969;
      border-radius: 5px;
      box-sizing: border-box;
      width: 100%;
      height: 30px;
    }
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16rem;
`;

 export const Div = styled.div`
  width: 40rem;
 `;
import { styled } from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
  padding-top: 7%;
  justify-content: center;
  font-family: montserrat, sans-serif;
  width: 80%;
  height: 80%;

  form {
    width: max-content;
    margin: 0 auto;
    padding-left: 10%;
} 
  div {
    display: flex;
    padding: 10px;
    margin-top: 10px;
    align-items: center;
    input[type="text"],
    input[type="date"] {
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #4EB969;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    }
}
`;
export const ContainerButton = styled.div `
   display:flex;
   flex-direction: row;
   gap: 2rem;
`;
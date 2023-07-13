import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  padding: 1%.5 0;

  div {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  img {
    width: 100%;
    max-width: 5rem;
    border-radius: 4px;
  }

  h4, a {
    margin: 0;
    text-align: center;
  }

  h4 {
    font-size: .9rem;
  }

  a {
    font-size: .8rem;
    color: #004BB0;
    font-weight: bold;
    text-decoration: none;
  }

`;
import { styled } from "styled-components";

export const Copy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  background-color: var(--black-500);

  p, a {
    color: var(--white);
    margin: 0;
    padding: 0;
    font-size: .6rem;
    font-weight: bolder;
    align-items: center;
    text-decoration: none;
  }
`;
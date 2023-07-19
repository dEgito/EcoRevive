import styled from "styled-components";

export const Li = styled.div`
  font-family: Montserrat, sans-serif;
  width: 100%;
  max-width: 22.25rem;
  border: 1px solid #014538;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;

  p {
    margin: 0;
    padding: 0 0 1.5rem 2.6rem;
  }

  h2 {
    padding: 1.6rem 3.75rem 1.2rem 2.6rem;
    margin: 0;
    font-size: 1.25rem;
  }
`;

export const Btn = styled.button`
  width: 100%;
  max-width: 8.87rem;
  min-height: 2.11rem;
  border: none;
  border-radius: 0.6rem;
  background-color: #4eb969;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 0.7rem;
  letter-spacing: 0.02rem;
  align-self: center;
  margin-bottom: 1.06rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e86310;
  }
`;
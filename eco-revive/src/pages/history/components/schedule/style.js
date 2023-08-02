import { styled } from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 50rem;
  min-width: 10rem;
  min-height: 1.9rem;

  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #4eb969;
  background-color: #ffffff;

  &:hover button {
    display: block;
  }

  &:hover {
    border: 2px solid #4eb969;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  button {
    display: none;

    background-color: #4eb969;
    color: #ffffff;
    border: 1px solid #4eb969;
    border-radius: 0.6rem;
    padding: 0.4rem 1.5rem;
    font-weight: 600;

    &:hover {
      font-weight: 600;
      color: #4eb969;
      border: 1px solid #4eb969;
      background: rgba(78, 185, 105, 0.12);
    }
  }
`;

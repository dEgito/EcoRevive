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
  border: 1px solid var(--green-500);
  background-color: var(--white);

  &:hover button {
    display: block;
  }

  &:hover {
    border: 2px solid var(--green-500);
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  button {
    display: none;

    background-color: var(--green-500);
    color: var(--white);
    border: 1px solid var(--green-500);
    border-radius: 7rem;
    padding: 0.4rem 1.5rem;
    font-weight: 600;

    &:hover {
      font-weight: 600;
      color: var(--green-500);
      border: 1px solid var(--green-500);
      background: var(--green-300);
    }
  }
`;

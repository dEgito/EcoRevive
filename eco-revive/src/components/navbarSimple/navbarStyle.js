import styled from "styled-components";

export const Header = styled.div`
  background-color: var(--gray-600);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 6.5rem;

  @media (max-width: 599px) {
    padding: 0.5rem 1rem;
    img {
      max-width: 80px;
    }
  }
  @media (min-width: 599px) and (max-width: 800px) {
    padding: 0.5rem 4.5rem;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  color: var(--black-700);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--green-500);
  }

  @media (max-width: 599px) {
    font-size: 14px;
    padding: 0.3rem 0.7rem;
  }
`;
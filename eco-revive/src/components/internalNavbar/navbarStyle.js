import styled from "styled-components";

export const NavbarContainerInterna = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 3rem;

  background: var(--gray-600);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  svg {
    display: none;

    @media (max-width: 1000px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 2.5rem;
  }
  img {
    display: block;
    width: 100%;
    max-width: 80px;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  a {
    font-weight: 600;
    color: var(--black-500);

    &:hover {
      color: var(--green-500);
      font-weight: 800;
    }
  }
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none;

  sgv {
    display: none;
    color: var(--white);
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
  color: var(--white);
  text-decoration: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  /* width: 10rem; */

  @media (max-width: 1000px) {
    display: none !important;
  }
`;

export const ButtonExit = styled.button`
  width: 100%;
  max-width: 10rem;
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid var(--green-500);
  background-color: var(--white);
  color: var(--green-500);
  border-radius: 4.98rem;

  &:hover {
    transition: all ease-in-out 0.5s;
    border: 2px solid var(--blue-600);
    background-color: var(--blue-700);
    color: var(--white);
  }
`;

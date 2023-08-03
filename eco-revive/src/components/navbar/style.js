import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 7.5rem;

  background: var(--gray-600);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
  img {
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
  }

  @media (min-width: 1000px) {
    display: block;

    svg {
      display: block;
    }
  }
`;

export const Menu = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  list-style: none;
  width: 55%;

  @media (min-width: 1000px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0.5rem;
    background-color: var(--gray-600);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;

    width: 100%;
    max-width: 180px;
  }

  @media (max-width: 400px) {
    align-items: center;
    width: 100%;
    max-width: none;
    right: 0;
  }

  div {
    display: flex;
    flex-direction: row;

    @media (min-width: 1000px) {
      flex-direction: column;
    }
  }
`;

export const MenuItem = styled.li`
  text-decoration: none;
`;

export const MenuLink = styled.a`
  color: var(--white);
  text-decoration: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 10rem;

  @media (min-width: 1000px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

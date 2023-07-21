import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7.5rem;

  font-family: Montserrat, sans-serif;

  background: #f4f4f4;
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
    color: #222222;

    &:hover {
      color: #4eb969;
      font-weight: 800;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  max-width: 25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 1000px) {
    display: block;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  list-style: none;

  @media (max-width: 1000px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0.5rem;
    background-color: #f4f4f4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;
  }

  div {
    width: 100%;
  }
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

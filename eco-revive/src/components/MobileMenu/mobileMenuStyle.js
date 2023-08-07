import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  position: absolute;
  /* Altura do mobile menu em relação a navbar*/
  top: 85px;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const Container = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  margin: 0.45rem;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Menu = styled.ul`
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 1rem;
`;

export const MenuLink = styled.a`
  color: #000;
  text-decoration: none;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

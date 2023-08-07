import styled from "styled-components";

export const MobileInternaMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  position: absolute;
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

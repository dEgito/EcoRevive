import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.span`
  font-size: 1.5rem;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 16px;
  height: 16px;
  background-color: #ffffff;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 1rem;
    background-color: #444;
    padding: 1rem;
  }
`;

const MenuItem = styled.li`
  margin-bottom: 1rem;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <Logo>Logo</Logo>
      <HamburgerIcon onClick={toggleMenu}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
      </HamburgerIcon>
      
      <Menu isOpen={isOpen}>
        <MenuItem>
          <MenuLink href="#">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </Navbar>
  );
};

export default MenuHamburguer;

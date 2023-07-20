// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/">React ECom</NavLogo>
      Here we need to add a search option
      <NavMenu>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

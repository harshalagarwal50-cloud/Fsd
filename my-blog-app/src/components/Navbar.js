// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #2c3e50;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Brand = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #bdc3c7;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: white;
    background-color: #34495e;
  }

  &.active {
    color: white;
    background-color: #007bff;
    font-weight: bold;
  }
`;

function Navbar() {
  return (
    <NavWrapper>
      <Brand to="/">MyBlog</Brand>
      <NavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavLinks>
    </NavWrapper>
  );
}

export default Navbar;
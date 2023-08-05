// Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.button`
  color: #fff;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};



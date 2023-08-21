import React, { useState, useRef } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarContainer = styled.nav`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
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

const NavLink = styled(AnchorLink)`
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink href="#profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

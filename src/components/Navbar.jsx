import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Logo>My Portfolio</Logo>
      {/* Add navigation links here */}
    </Nav>
  );
};

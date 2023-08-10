import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.3s;
  margin: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="hero" smooth={true} duration={500}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about" smooth={true} duration={500} id="about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="services" smooth={true} duration={500} id="services">
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="contact" smooth={true} duration={500} id="contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="projects" smooth={true} duration={500} id="projects">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="profile" smooth={true} duration={500}>
            Profile
          </NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

// // Navbar.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-scroll';

// const NavbarContainer = styled.nav`
//   background-color: #333;
//   padding: 20px;

//   @media (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// const NavList = styled.ul`
//   list-style: none;
//   padding: 0;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const NavItem = styled.li`
//   margin: 0 10px;
// `;

// const NavLink = styled(Link)`
//   color: #fff;
//   cursor: pointer;
//   font-size: 16px;
//   transition: opacity 0.3s;

//   &:hover {
//     opacity: 0.7;
//   }
// `;

// const MenuIcon = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//     cursor: pointer;
//     font-size: 24px;
//   }
// `;

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <NavbarContainer>
//       <NavList className={isMenuOpen ? 'active' : ''}>
//         <MenuItem>
//           <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
//         </MenuItem>
//         <NavItem>
//           <NavLink to="hero" smooth={true} duration={500} onClick={toggleMenu}>
//             Home
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
//             About
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="services" smooth={true} duration={500} onClick={toggleMenu}>
//             Services
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
//             Contact
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>
//             Projects
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="profile" smooth={true} duration={500} onClick={toggleMenu}>
//             Profile
//           </NavLink>
//         </NavItem>
//       </NavList>
//     </NavbarContainer>
//   );
// };

// export default Navbar;

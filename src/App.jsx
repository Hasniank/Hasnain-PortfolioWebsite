import React from "react";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Service";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Profile } from "./components/Profile";

const AppContainer = styled.div`
  /* Styles for the main app container */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MainContainer = styled.main`
  // max-width: 1200px;
  margin: 0 auto;
  // padding: 20px;
`;

export const App = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Hero name="hero" />
        <Profile />
        <About name="about" />
        <Services name="services" />
        <Projects name="projects" />
        <Contact name="contact" />
      </MainContainer>
      <Footer />
    </>
  );
};

// <>
// <Navbar />
// <MainContainer>
//   <Hero />
//   <About />
//   <Services />
//   <Contact />
//   <Projects />
//   <Profile /> {/* Add the Profile component here */}
// </MainContainer>
// {/* Add the Footer component here */}
// </>

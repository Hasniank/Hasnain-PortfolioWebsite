import React from "react";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Service";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

const AppContainer = styled.div`
  /* Styles for the main app container */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Hero name="hero" />
      <About name="about" />
      <Services name="services" />
      <Projects name="projects" />
      <Contact name="contact" />
      <Footer />
    </AppContainer>
  );
};



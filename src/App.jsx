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
import { HashRouter as Router, Route, BrowserRouter } from "react-router-dom";

const MainContainer = styled.main``;

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        <MainContainer>
          <Hero />
          <Profile />
          <About />
          <Services />
          <Projects />

          <Contact />
        </MainContainer>
        <Footer />
      </>
    </BrowserRouter>
  );
};

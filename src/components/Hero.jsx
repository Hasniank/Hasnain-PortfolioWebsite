import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background-color: transparent; 
  // padding: 100px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const HeroTitle = styled.h1`
color: hsl(0, 0%, 28%);
font-size: 30px!important;
font-weight: bold!important;
font-family: monospace;
letter-spacing: 2px!important;
cursor: pointer;
text-transform: uppercase;
// padding: 24px;
  background: linear-gradient(to right, hsl(150, 0%, 100%) 0, hsl(0, 0%, 30%) 10%, hsl(150, 0%, 100%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 600px;
    }
    100% {
      background-position: 600px;
    }
  }
`;

const HeroSubtitle = styled.p`
color: hsl(150, 0%, 100%);
font-size: 50px!important;
font-weight: bold!important;
font-family: monospace;
letter-spacing: 7px!important;
cursor: pointer;
text-transform: uppercase;
// padding: 64px;
  background: linear-gradient(to right, hsl(150, 0%, 100%) 0, hsl(0, 0%, 30%) 10%, hsl(150, 0%, 100%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 600px;
    }
    100% {
      background-position: 600px;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>Discover my work and skills</HeroSubtitle>
    </HeroSection>
  );
};


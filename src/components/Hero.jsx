// Hero.js
import React from "react";
import styled from "styled-components";


const HeroSection = styled.section`
  background-color: #f9f9f9;
  padding: 100px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px; /* Increase the height */
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #555;
`;

export const Hero = () => {
  const onEnterViewport = () => {
    // Add animations when the component enters the viewport
    // For example, you can use CSS animations, GSAP, etc.
  };

  return (
    <HeroSection>
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>Discover my work and skills</HeroSubtitle>
    </HeroSection>
  );
};

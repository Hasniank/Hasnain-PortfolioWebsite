import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  background-image: url(./images/heroSection.jpg);
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  height: 50vh;
  justify-content: center;
  align-items: center;

`;
const HeroTitle = styled.h2`
  font-size: 46px;
  color:#fff
//   margin-bottom: 20px;

`;

const HeroSubtitle = styled.p`
  font-size: 28px;
  margin-bottom: 30px;
  color:#fff
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>
        Hi, I'm Hasnain Khan, a passionate React Native developer.
      </HeroSubtitle>
      {/* Add call-to-action button here */}
    </HeroSection>
  );
};



import React from "react";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const ServiceSection = styled.section`
  text-align: center;
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  width: 200px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${bounceAnimation} 1s ease-in-out; 
`;

const ServiceTitle = styled.h3`
  color: hsl(150, 0%, 100%);
  font-size: 20px !important;
  font-weight: bold !important;
  font-family: monospace;
  letter-spacing: 7px !important;
  cursor: pointer;
  text-transform: uppercase;
  // padding: 64px;
  background: linear-gradient(
    to right,
    hsl(150, 0%, 100%) 0,
    hsl(0, 0%, 30%) 10%,
    hsl(150, 0%, 100%) 20%
  );
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

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const Services = () => {
  return (
    <ServiceSection id="services">
      <ServiceContainer>
        <ServiceCard>
          <ServiceTitle>React Native Development</ServiceTitle>
          <ServiceDescription>
            A skilled React Native developer proficient in building
            cross-platform mobile apps using JavaScript, React, and native
            components. Experience in UI/UX and performance optimization.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Front-End Development</ServiceTitle>
          <ServiceDescription>
            A Front-End developer creates engaging and user-friendly website
            interfaces by coding HTML, CSS, and JavaScript, enhancing the user's
            digital experience.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>React Developer</ServiceTitle>
          <ServiceDescription>
            Bringing a year of experience to the table, the React developer
            adeptly crafts dynamic and responsive user interfaces while
            seamlessly integrating with back-end systems for robust web
            applications.
          </ServiceDescription>
        </ServiceCard>
      </ServiceContainer>
    </ServiceSection>
  );
};

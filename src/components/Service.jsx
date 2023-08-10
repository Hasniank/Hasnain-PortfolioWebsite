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
  /* Your existing styles for Service section */
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
  animation: ${bounceAnimation} 1s ease-in-out; /* Apply the bounce animation */
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const Services = () => {
  return (
    <ServiceSection>
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
          <ServiceTitle>Service 3</ServiceTitle>
          <ServiceDescription>Description for Service 3</ServiceDescription>
        </ServiceCard>
      </ServiceContainer>
    </ServiceSection>
  );
};

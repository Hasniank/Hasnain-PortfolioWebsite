// Services.js
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
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

export const Services = () => {
  return (
    <ServiceSection>
      <ServiceContainer>
        <ServiceCard>
          <ServiceTitle>Service 1</ServiceTitle>
          <ServiceDescription>Description for Service 1</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Service 2</ServiceTitle>
          <ServiceDescription>Description for Service 2</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Service 3</ServiceTitle>
          <ServiceDescription>Description for Service 3</ServiceDescription>
        </ServiceCard>
      </ServiceContainer>
    </ServiceSection>
  );
};

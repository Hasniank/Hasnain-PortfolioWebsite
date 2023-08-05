import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  background-color: #f0f0f0;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
`;

const ServicesTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #000;
  text-align: center;
`;

const ServiceItem = styled.div`
  margin-bottom: 30px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #000;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #000;
  font-size: 16px;
  text-align: center;
`;

export const Services = () => {
  return (
    <ServicesSection>
      <ServicesTitle>Services</ServicesTitle>
      <ServiceItem>
        <ServiceTitle>Web Development</ServiceTitle>
        <ServiceDescription>
          I can create modern and responsive websites using the latest
          technologies.
        </ServiceDescription>
      </ServiceItem>
      {/* Add other service items here */}
    </ServicesSection>
  );
};

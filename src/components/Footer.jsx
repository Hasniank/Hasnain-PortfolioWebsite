import React from "react";
import styled from "styled-components";

// Import the images
import githubIcon from "../../public/images/github.png";
import linkedinIcon from "../../public/images/linkedin.png";

const FooterContainer = styled.footer`
  // background-color: #032E23;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  display: inline-block;
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
`;

const FooterText = styled.p`
  margin-top: 10px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <IconLink href="https://github.com/Hasniank" target="_blank">
          <IconImage src={githubIcon} alt="GitHub" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/hasnain-khan-099295194/"
          target="_blank"
        >
          <IconImage src={linkedinIcon} alt="LinkedIn" />
        </IconLink>
      </FooterIcons>
      <FooterText>
        © {new Date().getFullYear()} HasnainKhan. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

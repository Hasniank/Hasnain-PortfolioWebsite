import React from "react";
import styled from "styled-components";

import githubIcon from "../../public/images/github.png";
import linkedinIcon from "../../public/images/linkedin.png";

const FooterContainer = styled.footer`
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
    <FooterContainer id="footer">
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

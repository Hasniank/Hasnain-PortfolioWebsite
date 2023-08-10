import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  // background-color: #f9f9f9;
  padding: 80px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
`;

const AboutContent = styled.p`
  font-size: 18px;
  color: #fff;
  line-height: 1.6;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

const SkillItem = styled.li`
  display: inline-block;
  margin: 5px;
  padding: 8px 16px;
  background-color: #194d33;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
`;
const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #194d33;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export const About = () => {
  return (
    <AboutSection>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        aliquet justo, eget congue nunc. Etiam in felis nec neque facilisis
        fringilla. Nulla facilisi.
      </AboutContent>
      <SkillList>
        <SkillItem>Web Development</SkillItem>
        <SkillItem>React.js</SkillItem>
        <SkillItem>HTML/CSS</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>UI/UX Design</SkillItem>
        <SkillItem>Responsive Design</SkillItem>
      </SkillList>
      <DownloadButton href="/resume.pdf" download>
        Download Resume
      </DownloadButton>
    </AboutSection>
  );
};

import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
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
  width:200px
  text-align: center;

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
    background-color: #4caf50;
    color: #fff;
  }
`;

const SkillTitle = styled.h2`
  font-size: 36px;
  color: #fff;
  margin-top: 40px;
`;

export const About = () => {
  return (
    <AboutSection id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        Experienced React Native developer adept at crafting dynamic and
        user-friendly mobile applications. Proficient in leveraging React
        Native's capabilities to deliver seamless cross-platform experiences.
        Skilled in UI design, API integration, and optimizing app performance.
        Passionate about creating innovative solutions to meet modern mobile
        development challenges.
      </AboutContent>
      <SkillTitle>Skill</SkillTitle>
      <SkillList>
        <SkillItem>Web Development</SkillItem>
        <SkillItem>React.js</SkillItem>
        <SkillItem>HTML/CSS</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>Firebase</SkillItem>
        <SkillItem>GitHub</SkillItem>
        <SkillItem>Responsive Design</SkillItem>
        <SkillItem>RestFul Api</SkillItem>
        <SkillItem>Context Api</SkillItem>
        <SkillItem>Android Development</SkillItem>
      </SkillList>
      <DownloadButton href="../../public/Resume/HasnainkhanResume.pdf" download>
        Download Resume
      </DownloadButton>
    </AboutSection>
  );
};

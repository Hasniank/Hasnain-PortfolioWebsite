import React from "react";
import styled from "styled-components";

import portFolioImage from "../../public/images/portFolio.png";
import IconImage from "../../public/images/icon.png";
import AICourse  from "../../public/images/AICourse .png"
import DigitalCounter from "../../public/images/DigitalCounter.png"

const ProjectsSection = styled.section`
  padding: 80px;
  text-align: center;
`;

const ProjectContainer = styled.div``;

const ProjectTitle = styled.h2`
  color: hsl(150, 0%, 100%);
  font-size: 50px !important;
  font-weight: bold !important;
  font-family: monospace;
  letter-spacing: 7px !important;
  cursor: pointer;
  text-transform: uppercase;

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

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectItem = styled.li`
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  transition: transform 0.2s ease;
  border: 1px solid #ccc;
  &:hover {
    transform: translateY(-25px);
  }
`;

const ProjectLink = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProjectDescription = styled.p`
  color: #fff;
`;

const ProjectGitHubLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

export const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      description:
        "This App is about to calculate the size of bra sizes and their article number and develop in React-Native",
      image: IconImage,
      githubLink: "https://github.com/your-username/project2",
    },
    {
      title: "Project 2",
      description:
        " Transform your learning experience with the AI Course Generator & Creator Unlock the potential of artificial intelligence with our cutting-edge tool, AI Course Generator! Whether you're a beginner or an expert, this groundbreaking tool revolutionizes the course creation process, ensuring accessible and efficient learning.",
      image: AICourse,
      githubLink: "https://play.google.com/store/apps/details?id=com.ford9.courseai.generator.creator.maker.online.syllabus&hl=en&gl=US",
    },
    {
      title: "Project 3",
      description:
        " Here is the Ultimate Digital Tally Counter: Digital Counter: Tasbih | Zikr An Essential Ramadan CompanionAre you in search of a versatile and feature-packed digital counter for your Tasbih (prayer beads) practice? Look no further! Our Digital Counter: Tasbih | Zikr App is meticulously designed to provide you with a seamless and spiritually enriching experience, whether you're new to Tasbih or someone with ample experience.",
      image: DigitalCounter,
      githubLink: "https://play.google.com/store/apps/details?id=com.ford9.digital.tally.counter.dhikr.tasbeeh&hl=en&gl=US",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectList>
          {projectData.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectLink>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectGitHubLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </ProjectGitHubLink>
            </ProjectItem>
          ))}
        </ProjectList>
      </ProjectContainer>
    </ProjectsSection>
  );
};

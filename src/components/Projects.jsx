import React from "react";
import styled from "styled-components";

import portFolioImage from "../../public/images/portFolio.png";
import IconImage from "../../public/images/icon.png";

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
      description: "This is portFolio website develop in React",
      image: portFolioImage,
      githubLink: "https://github.com/Hasniank/Hasnain-PortfolioWebsite",
    },
    {
      title: "Project 2",
      description:
        "This App is about to calculate the size of bra sizes and their article number and develop in React-Native",
      image: IconImage,
      githubLink: "https://github.com/your-username/project2",
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

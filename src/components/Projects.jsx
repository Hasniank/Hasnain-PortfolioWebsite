import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  // background-color: #f9f9f9;
  padding: 80px;
  text-align: center;
`;

const ProjectContainer = styled.div`
  /* Add your styles for the project container */
`;

const ProjectTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
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
  // background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  transition: transform 0.2s ease;
  border: 1px solid #ccc;
  &:hover {
    transform: translateY(-5px);
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
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 20px;
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
      imageLink: "../../public/images/portFolio.png",
      githubLink: "https://github.com/Hasniank/Hasnain-PortfolioWebsite",
    },
    {
      title: "Project 2",
      description:
        "This App is about to calculate the size of bra sizes and their article number and develop in React-Native",
      imageLink: "../../public/images/icon.png",
      githubLink: "https://github.com/Hasniank/MyBraSize",
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
                href={project.imageLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectImage src={project.imageLink} alt={project.title} />
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

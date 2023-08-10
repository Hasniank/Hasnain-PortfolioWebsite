import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  // background-color: #f9f9f9;
  padding: 80px;
  text-align: center;
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

const ProjectCard = styled.li`
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

const ProjectTitleLink = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
`;

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A short description of Project 1.",
      link: "https://github.com/your-username/project-1",
    },
    {
      title: "Project 2",
      description: "A short description of Project 2.",
      link: "https://github.com/your-username/project-2",
    },
    // Add more project objects as needed
  ];

  return (
    <ProjectsSection>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitleLink href={project.link} target="_blank">
              {project.title}
            </ProjectTitleLink>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

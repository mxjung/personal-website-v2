import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import Project from './Project';
import projectData from "./projectData";
import { v4 as uuidv4 } from "uuid";

// import styles
import Container from './styles/Container';
import Title from './styles/Title';

// We don't want margin top to be 20px (as it is in Container)
const ProjectContainer = styled(Container)`
  margin-top: 0px;
`;

function ProjectList() {
  return (
    <ProjectContainer>
      <div id="section1" >
        <Title style={{ 'marginTop': '20px' }} >
          Things I've Built
        </Title>
        {projectData.map(project => (
          <Project
            key={uuidv4()}
            title={project.title}
            description={project.description}
            stack={project.stack}
            tools={project.tools}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </ProjectContainer>
  );
}

export default ProjectList;
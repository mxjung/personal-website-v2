import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import Project from './Project';
import projectData from "./projectData";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  // border: 2px solid green;
  height: auto;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  color: #115293;
  // border: 2px solid blue;
  height: auto;
  display: flex;
  width: 90%;
  margin: 10px;
`;

function ProjectList() {
  return (
    <Container>
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
    </Container>
  );
}

export default ProjectList;
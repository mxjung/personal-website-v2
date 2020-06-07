import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import Project from './Project';
import projectData from "./projectData";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";

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
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      <div id="section1" >
        <Title style={{ 'margin-top': '20px' }} >
          Things I've Built
        </Title>
        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
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
import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import Project from './Project';
import projectData from "./projectData";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";
import Section from './Section.js';

function ProjectList() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 2px solid green;
    height: auto;
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    border: 2px solid blue;
    height: auto;
    display: flex;
  `;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work
      random work

      <div id="section1">
        <Title>
          Things I've Built
        </Title>

        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
            tools={project.tools}
          />
        ))}

        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
            tools={project.tools}
          />
        ))}

        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
            tools={project.tools}
          />
        ))}
      </div>

      <div id="section2">
        <Title>
          Things I've Built
        </Title>

        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
            tools={project.tools}
          />
        ))}

        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
            tools={project.tools}
          />
        ))}

        {projectData.map(project => (
          <Project
            title={project.title}
            description={project.description}
            frameworks={project.frameworks}
            tools={project.tools}
          />
        ))}
      </div>
    </Container>
  );
}

export default ProjectList;
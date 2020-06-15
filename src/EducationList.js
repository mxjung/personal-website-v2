import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
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

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 15px 20px;
  margin: 10px;
  background-color: rgb(245, 245, 245);
  border-radius: 4px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: rgb(235, 235, 235);
  }
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
`;


const Degree = styled.div`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 4px;
  // border: 2px solid blue;
`;

const College = styled.div`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 6px;
  // border: 2px solid blue;
`;


const Duration = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  width: 70px;
  color: rgb(120, 120, 120);
  // border: 2px solid blue;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 6px 0px;
  line-height: 140%;
`;

const TitleProjects = styled.div`
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin: 4px 0px;
  color: rgb(70, 70, 70);
`;

const ListItem = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 2px 10px;
  line-height: 140%;
  text-indent: -10px;
  display: flex;
  align-items: center;
`;

const IconLink = styled.div`
  color: grey;
  margin: 2px 2px 0px 0px;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    color: black;
    cursor: pointer;
  }

  &:active {
    cursor: pointer;
    transform: scale(1);
  }
`;

function EducationList() {
  return (
    <Container>
      <div id="section3" >
        <Title>
          Education
        </Title>
        <ContainerCard>
          <TitleCard>
            <Card>
              <img src="https://ieor.berkeley.edu/wp-content/uploads/2017/05/berkeley-engineering-logo.jpg" alt="education-pic" style={{ 'height': '40px' }} />
              <div style={{ 'display': 'flex', 'flex-direction': 'column', 'margin-left': '10px' }}>
                <Degree>{'M.S. Systems Engineering'}</Degree>
                <College>{'UC Berkeley'}</College>
              </div>
            </Card>
            <Duration>{'Aug 2017 - Jun 2018'}</Duration>
          </TitleCard>
          <List>
            <Description>
              The purpose of systems engineering is to better understand and analyze large processes and systems. My focus of study/coursework dealt with the design and creation of better tools and products for this purpose. Projects I was part of included sensing sap flow in trees using thermal sensors, creating an IoT seat tracker, and working with industry members to bring wind power to Marin County.
            </Description>
            <TitleProjects>Projects</TitleProjects>
            <ListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/nanjing-metro-system-optimization/'>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'font-size':'12px', 'margin-right':'4px' }} />
                </IconLink>
              </a>
              Nanjiing Metro System Optimization
            </ListItem>
            <ListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/wind-power/'>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'font-size':'12px', 'margin-right':'4px' }} />
                </IconLink>
              </a>
              Marin County Wind Power Research
            </ListItem>
            <ListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/openseats/'>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'font-size':'12px', 'margin-right':'4px' }} />
                </IconLink>
              </a>
              OpenSeat IoT Prototype
            </ListItem>
          </List>
        </ContainerCard>
        <ContainerCard>
          <TitleCard>
            <Card>
              <img src="https://ieor.berkeley.edu/wp-content/uploads/2017/05/berkeley-engineering-logo.jpg" alt="education-pic" style={{ 'height': '40px' }} />
              <div style={{ 'display': 'flex', 'flex-direction': 'column', 'margin-left': '10px' }}>
                <Degree>{'B.S. Civil and Environmental Engineering'}</Degree>
                <College>{'UC Berkeley'}</College>
              </div>
            </Card>
            <Duration>{'Aug 2013 - Jun 2017'}</Duration>
          </TitleCard>
          <List>
            <Description>
              Coursework: CS61A (Python), MATLAB Computer Science for Engineers, Cyber Physical Systems
            </Description>
            <TitleProjects>Projects</TitleProjects>
            <ListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/focal-solar-power-cooker/'>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'font-size':'12px', 'margin-right':'4px' }} />
                </IconLink>
              </a>
              IoT Solar Powered Cooker (using Arduino)
            </ListItem>
            <ListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/ford-inspire/'>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'font-size':'12px', 'margin-right':'4px' }} />
                </IconLink>
              </a>
              Ford Inspire Visual Design Project
            </ListItem>
            <ListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/inception-poster/'>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'font-size':'12px', 'margin-right':'4px' }} />
                </IconLink>
              </a>
              Visual Design Inception Movie Poster
            </ListItem>
          </List>
        </ContainerCard>
      </div>
    </Container>
  );
}

export default EducationList;
import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// import styles
import Container from './styles/Container';
import Title from './styles/Title';
import {
  CardContainer,
  ListItem
} from './styles/Card';
import {
  listSize,
  jobPositionSize,
  companySize,
  durationSize
} from './styles/FontSize';

const ContainerCard = styled(CardContainer)`
  flex-direction: column;
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  padding: 0px 5px 0px 0px;
`;

const Degree = styled.div`
  font-size: ${jobPositionSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 4px;
  // border: 2px solid blue;
`;

const College = styled.div`
  font-size: ${companySize};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 6px;
  // border: 2px solid blue;
`;

const Duration = styled.div`
  font-size: ${durationSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  width: 70px;
  min-width: 70px;
  color: rgb(120, 120, 120);
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  font-size: ${listSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 6px 0px;
  line-height: 140%;
`;

const TitleProjects = styled.div`
  font-size: ${companySize};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin: 4px 0px;
  color: rgb(70, 70, 70);
`;

const EducationListItem = styled(ListItem)`
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
    transform: scale(1.03);
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
              <div style={{ 'display': 'flex', 'flexDirection': 'column', 'marginLeft': '10px' }}>
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
            <EducationListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/nanjing-metro-system-optimization/' target="_blank" rel="noopener noreferrer" style={{'textDecoration':'none'}}>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'12px', 'marginRight':'6px' }} />
                  Nanjiing Metro System Optimization
                </IconLink>
              </a>
            </EducationListItem>
            <EducationListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/wind-power/' target="_blank" rel="noopener noreferrer" style={{'textDecoration':'none'}}>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'12px', 'marginRight':'4px' }} />
                  Marin County Wind Power Research
                </IconLink>
              </a>
            </EducationListItem>
            <EducationListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/openseats/' target="_blank" rel="noopener noreferrer" style={{'textDecoration':'none'}}>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'12px', 'marginRight':'4px' }} />
                  OpenSeat IoT Prototype
                </IconLink>
              </a>
            </EducationListItem>
          </List>
        </ContainerCard>
        <ContainerCard>
          <TitleCard>
            <Card>
              <img src="https://ieor.berkeley.edu/wp-content/uploads/2017/05/berkeley-engineering-logo.jpg" alt="education-pic" style={{ 'height': '40px' }} />
              <div style={{ 'display': 'flex', 'flexDirection': 'column', 'marginLeft': '10px' }}>
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
            <EducationListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/focal-solar-power-cooker/' target="_blank" rel="noopener noreferrer" style={{'textDecoration':'none'}}>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'12px', 'marginRight':'4px' }} />
                  IoT Solar Powered Cooker (using Arduino)
                </IconLink>
              </a>
            </EducationListItem>
            <EducationListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/ford-inspire/' target="_blank" rel="noopener noreferrer" style={{'textDecoration':'none'}}>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'12px', 'marginRight':'4px' }} />
                  Ford Inspire Visual Design Project
                </IconLink>
              </a>
            </EducationListItem>
            <EducationListItem>
              <a href='https://maxjungblog.wordpress.com/portfolio/inception-poster/' target="_blank" rel="noopener noreferrer" style={{'textDecoration':'none'}}>
                <IconLink>
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'12px', 'marginRight':'4px' }} />
                  Visual Design Inception Movie Poster
                </IconLink>
              </a>
            </EducationListItem>
          </List>
        </ContainerCard>
      </div>
    </Container>
  );
}

export default EducationList;
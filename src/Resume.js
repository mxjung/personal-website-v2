import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
// import { animateScroll as scroll } from "react-scroll";
import ResumePdf from "./docs/max-jung-resume-v3.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// import styles
import Container from './styles/Container';
import Title from './styles/Title';
import { ListItem } from './styles/Card';
import {
  descriptionSize,
  jobPositionSize,
} from './styles/FontSize';

const ResumeContainer = styled(Container)`
  min-height: 100vh;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 15px 20px;
  margin: 10px;
  border: 2px solid rgb(200, 200, 200);
  border-radius: 4px;
`;

const Description = styled.div`
  font-size: ${descriptionSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 6px 0px;
  line-height: 150%;
`;

const ResumeListItem = styled(ListItem)`
  font-size: ${jobPositionSize};
  padding: 0px 10px;
  display: flex;
  height: 30px;
  align-items: center;
`;

const IconLink = styled.div`
  color: grey;
  margin: 2px 2px 0px 0px;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    color: black;
    cursor: pointer;
  }

  &:active {
    cursor: pointer;
    transform: scale(1);
  }
`;

const Header = styled.div`
  font-size: ${jobPositionSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 6px;
`;

function Resume() {
  // Scrolling up to the top
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const resumeHandler = () => {
    window.open(ResumePdf);
  }

  return (
    <ResumeContainer>
      <div id="section4" >
        <Title style={{ 'marginTop': '20px' }} >
          Resume / Bio
        </Title>
        <ResumeListItem>
          <IconLink onClick={resumeHandler}>
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{'fontSize':'14px', 'marginRight':'4px' }} />
            Link to Resume
          </IconLink>
        </ResumeListItem>
        <ContainerCard>
          <Description>
            <Header>
              Background
            </Header>
            I was born and raised in South Korea, and on my 8th birthday, my parents, older sister, younger brother, and I immigrated to the United States. I lived in Kansas and Missouri for 2 years combined (my mother had two sisters who lived in Missouri), before moving to sunny Southern California (specifically, right next to Six Flags Magic Mountain). I lived there until 2013, when I moved up to the Bay Area to attend UC Berkeley. Ever since, I've been studying and working in and around East Bay.
            <Header style={{'marginTop':'10px'}}>
              My Interest in Software
            </Header>
            <div>
              Like a lot of people, I struggled to find what kind of work I wanted to do. In highschool I wanted to be an architect, but I panicked and applied as Pre-Med for college. And once I came into college, I spent 2 years trying - and finally succeeding - to change my major to Civil Engineering. I enjoyed the major, but in my first semester of Senior year of my undergraduate, I took a course on microcontrollers, and the Professor taught us a little bit of HTML, CSS, and Bootstrap. I really enjoyed the course, and realized that this technology had a lot of potential to change the civil infastructure industry. Because of this, I decided to stay an extra year to complete my Masters, taking courses similar to the one that I enjoyed.
            </div>
            <div style={{'marginTop': '6px'}}>
              Long story short, I spent my graduate years and internship at Plenty learning bits and pieces of programming, but I never had a full grasp of any particular technology/skill to be able to actually produce something. While working at Siemens as an HVAC Systems Engineer, I spent my after-work hours taking Udemy courses on web design. It reminded me a lot of the technology I fell in love with during college, which gave me the conviction to actually learn this... thing... that gave me so much fulfillment. That's when I decided to attend Rithm School, a Full Stack software engineering bootcamp in SF.
            </div>
          </Description>
        </ContainerCard>
      </div>
    </ResumeContainer>
  );
}

export default Resume;
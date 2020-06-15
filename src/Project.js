import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  width: auto;
  // border: 2px solid green;
  height: auto;
  padding: 15px 20px;
  margin: 10px;
  background-color: rgb(245, 245, 245);
  // background-color: #a8b2d1;
  border-radius: 4px;


  &:hover {
    transition: all .2s ease-in-out;
    // transform: scale(1.05);
    background-color: rgb(235, 235, 235);

    // img {
    //   transition: all .18s ease-in-out;
    //   opacity: 0.5;
    //   filter: alpha(opacity=100);
    // }
  }

  &:active {
    // transform: scale(1);
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
`;

const ExternalLinks = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid green;
  margin-left: 20px;
`;

const Description = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 150%;
  color: rgb(120, 120, 120);
  margin: 10px 0px 5px 0px;
`;

const Information = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 150%;
  color: rgb(120, 120, 120);
  margin: 5px 0px 0px 0px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  line-height: 130%;
`;

const ListItem = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 2px 10px 2px 0px;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 0px 0px;
  width: 60%;
  // border: 2px solid green;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  // flex-grow: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
  // border: 2px solid red;
`;

const IconLink = styled.div`
  color: grey;
  margin: 0px 6px;

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

function Project({
  title,
  description,
  stack,
  tools,
  imageUrl,
  githubLink,
  websiteLink
}) {
  return (
    <Container>
      <LeftPanel>
        <List>
          <Title>{title}</Title>
          <a href={githubLink}>
            <IconLink>
              <FontAwesomeIcon icon={faGithub} style={{ 'font-size': '20px' }} />
            </IconLink>
          </a>
          <a href={websiteLink}>
            <IconLink>
              <FontAwesomeIcon icon={faExternalLinkAlt} style={{ 'font-size': '20px' }} />
            </IconLink>
          </a>
        </List>
        <Description>{description}</Description>
        <Information>
          <div style={{'font-weight': '700'}}>Stack:</div>
          {stack.map((s,idx) => {
          if (idx === stack.length-1) {
            return s;
          } else {
            return ` ${s} / `;
          }
        })}
        </Information>
        <Information>
          <div style={{'font-weight': '700'}}>Packages:</div>
          <List>
            {tools.map(tool => (
              <ListItem>
                <FontAwesomeIcon icon={faChevronRight} size='sm' style={{ 'margin-right': '4px' }} />
                {tool}
              </ListItem>
            ))}
          </List>
        </Information>
      </LeftPanel>
      <RightPanel>
        <img src={imageUrl} alt="project-pic" style={{ 'width': '100%', 'height': 'auto'}} />
      </RightPanel>
    </Container>
  );
}

export default Project;
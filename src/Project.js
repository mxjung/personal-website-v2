import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuidv4 } from "uuid";

// import styles
import {
  CardContainer,
  ListItem
} from './styles/Card';
import {
  titleSize,
  descriptionSize,
  listSize
} from './styles/FontSize';

const Title = styled.div`
  font-size: ${titleSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-right: 6px;
`;

const Description = styled.div`
  font-size: ${descriptionSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 150%;
  color: rgb(120, 120, 120);
  margin: 10px 0px 5px 0px;
`;

const Information = styled.div`
  font-size: ${listSize};
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

const ProjectListItem = styled(ListItem)`
  margin-top: 0px;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 0px 0px;
  width: 60%;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  justify-content: center;
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
    <CardContainer>
      <LeftPanel>
        <List>
          <Title>{title}</Title>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <IconLink>
              <FontAwesomeIcon icon={faGithub} style={{ 'fontSize': '16px' }} />
            </IconLink>
          </a>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <IconLink>
              <FontAwesomeIcon icon={faExternalLinkAlt} style={{ 'fontSize': '15px' }} />
            </IconLink>
          </a>
        </List>
        <Description>{description}</Description>
        <Information>
          <div style={{'fontWeight': '700'}}>Stack:</div>
          {stack.map((s,idx) => {
          if (idx === stack.length-1) {
            return s;
          } else {
            return ` ${s} / `;
          }
        })}
        </Information>
        <Information>
          <div style={{'fontWeight': '700'}}>Packages:</div>
          <List>
            {tools.map(tool => (
              <ProjectListItem key={uuidv4()}>
                <FontAwesomeIcon icon={faChevronRight} size='sm' style={{ 'marginRight': '4px' }} />
                {tool}
              </ProjectListItem>
            ))}
          </List>
        </Information>
      </LeftPanel>
      <RightPanel>
        <img src={imageUrl} alt="project-pic" style={{ 'width': '100%', 'height': 'auto'}} />
      </RightPanel>
    </CardContainer>
  );
}

export default Project;
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
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


const Title = styled.div`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 4px;
  // border: 2px solid blue;
`;

const Company = styled.div`
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

const ListItem = styled.div`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 2px 10px;
  line-height: 140%;
  text-indent: -10px;
`;

function Work({ title, company, duration, tasks, imageUrl }) {
  return (
    <Container>
      <TitleCard>
        <Card>
          <img src={imageUrl} alt="work-pic" style={{ 'height': '40px' }} />
          <div style={{ 'display': 'flex', 'flex-direction': 'column', 'margin-left': '10px' }}>
            <Title>{title}</Title>
            <Company>{company}</Company>
          </div>
        </Card>
        <Duration>{duration}</Duration>
      </TitleCard>
      <List>
        {tasks.map(task => (
          <ListItem>
            <FontAwesomeIcon icon={faChevronRight} size='sm' style={{ 'margin-right': '4px' }} />
            {task}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Work;
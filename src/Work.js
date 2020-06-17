import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from "uuid";

// import styles
import {
  CardContainer,
  ListItem
} from './styles/Card';
import {
  jobPositionSize,
  companySize,
  durationSize
} from './styles/FontSize';

const Container = styled(CardContainer)`
  flex-direction: column;
`;

const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const Card = styled.div`
  display: flex;
  padding: 0px 5px 0px 0px;
  // border: 2px solid blue;
`;

const Title = styled.div`
  font-size: ${jobPositionSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgb(70, 70, 70);
  margin-bottom: 4px;
  // border: 2px solid blue;
`;

const Company = styled.div`
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
  // border: 2px solid blue;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkListItem = styled(ListItem)`
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
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'marginLeft': '10px' }}>
            <Title>{title}</Title>
            <Company>{company}</Company>
          </div>
        </Card>
        <Duration>{duration}</Duration>
      </TitleCard>
      <List>
        {tasks.map(task => (
          <WorkListItem key={uuidv4()}>
            <FontAwesomeIcon icon={faChevronRight} size='sm' style={{ 'marginRight': '4px' }} />
            {task}
          </WorkListItem>
        ))}
      </List>
    </Container>
  );
}

export default Work;
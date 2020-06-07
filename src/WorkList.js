import React from 'react';
import "./ProjectList.css";
import styled from 'styled-components';
import Work from './Work';
import workData from "./workData";

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

function WorkList() {
  return (
    <Container>
      <div id="section2" >
        <Title>
          Work Experience
        </Title>
        {workData.map(work => (
          <Work
            title={work.title}
            company={work.company}
            duration={work.duration}
            tasks={work.tasks}
            imageUrl={work.imageUrl}
          />
        ))}
      </div>
    </Container>
  );
}

export default WorkList;
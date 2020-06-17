import React from 'react';
import "./ProjectList.css";
import Work from './Work';
import workData from "./workData";
import { v4 as uuidv4 } from "uuid";

// import styles
import Container from './styles/Container';
import Title from './styles/Title';

function WorkList() {
  return (
    <Container>
      <div id="section2" >
        <Title>
          Work Experience
        </Title>
        {workData.map(work => (
          <Work
            key={uuidv4()}
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
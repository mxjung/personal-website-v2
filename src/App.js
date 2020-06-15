import React from 'react';
import './App.css';
import Contacts from "./Contacts";
import IntroCard from "./IntroCard";
import ProjectList from "./ProjectList";
import WorkList from "./WorkList";
import EducationList from "./EducationList";
import Resume from "./Resume";
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  font-size: 62.5%;
  display: flex;
  justify-content: center;
`;

const AppDetail = styled.div`
  display: flex;
  height: auto;
  background-color: rgb(255,255,255);
  max-width: 1000px;
  position: relative;

  @media only screen and (max-width: 790px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftPanel = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(255,255,255);
  width: 45%;
  height: 99vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0vh;

  @media only screen and (max-width: 790px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    justify-content: flex-start;
    height: auto;
  }
`;
// 99vh allows the panel to be taut and not jitter
// when moving from one navigation link to another

const ScrollPanel = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
// overflow: auto;

function App() {

  return (
    <Container >
      <AppDetail>
        <LeftPanel >
          <IntroCard />
          <Contacts />
        </LeftPanel>
        <ScrollPanel>
          <ProjectList />
          <WorkList />
          <EducationList />
          <Resume />
        </ScrollPanel>
      </AppDetail >
    </Container >
  );
}

export default App;

import React from 'react';
import './App.css';
import Contacts from "./Contacts";
import IntroCard from "./IntroCard";
import ProjectList from "./ProjectList";
import styled from 'styled-components';
import Section from "./Section.js";

function App() {
  const App = styled.div`
    box-sizing: border-box;
    font-size: 62.5%;
    display: flex;
    justify-content: center;
  `;
  const Container = styled.div`
    display: flex;
    height: auto;
    background-color: lightblue;
    width: 90%;
    max-width: 1000px;
    position: relative;
  `;

  const LeftPanel = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: beige;
    width: 45%;
    height: 99vh;
    border: 2px solid black;
    position: -webkit-sticky;
    position: sticky;
    top: 0vh;
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

  return (
    // <App>
    //   <Section />
    // </App>
    <App>
      <Container >
        <LeftPanel >
          <IntroCard />
          <Contacts />
        </LeftPanel>
        <ScrollPanel>
          <ProjectList />
          {/* <Section /> */}
        </ScrollPanel>
      </Container >
    </App >
  );
}

export default App;

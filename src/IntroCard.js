import React from 'react';
import './IntroCard.css';
import Navigation from "./Navigation";
import styled from 'styled-components';

function IntroCard() {
  const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px dotted black;
    height: auto;
  `;

  const Welcome = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    height: auto;
    font-size: 70px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding: 20px 0px 20px 20px;
    line-height: 100%;
    `;
  // font-family: 'Lato', sans-serif;

  // font-family: 'Source Sans Pro', sans-serif;;
  // font-weight: 600;

  const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
    height: auto;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding: 20px 0px 20px 24px;
    line-height: 100%;
  `;

  return (
    <Intro>
      <Welcome>
        Hello, I'm Max Jung.
      </Welcome>
      <Profile>
        I'm a student
      </Profile>
      <Navigation />
    </Intro>
  );
}

export default IntroCard;
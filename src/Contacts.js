import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    // border: 2px solid red;
    height: auto;
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    // border: 2px solid blue;
    height: auto;
    width: 85%;
    display: flex;
  `;

  const Icon = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    width: auto;
    font-size: 13px;
    color: grey;
    // border: 2px solid red;
    margin: 0px 20px 0px 0px;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      color: black;
    }

    &:active {
      cursor: pointer;
      transform: scale(1);
    }
  `;
  // font-size affects icon sizing

  const IconName = styled.div`
    margin-left: 8px;
    display: flex;
    align-items: center;
    font-size: 16px;
  `;

  return (
    <Container>
      <Title>
        <Icon>
          <FontAwesomeIcon icon={faGithub} size='lg' />
          <IconName>Github</IconName>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faLinkedin} size='lg' />
          <IconName>LinkedIn</IconName>
        </Icon>
      </Title>
    </Container>
  );
}

export default Contacts;
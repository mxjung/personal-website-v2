import React from 'react';
import styled from 'styled-components';

function Project({title, description, frameworks, tools}) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    border: 2px solid green;
    height: auto;
    padding: 10px;
  `;


  return (
    <Container>
      <h3>{title}</h3>
      <span>{description}</span>
      <div>{frameworks}</div>
      <div>{tools}</div>
    </Container>
  );
}

export default Project;
import styled from 'styled-components';
import { listSize } from "./FontSize";

const CardContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 20px 20px;
  margin: 15px 10px;
  background-color: rgb(245, 245, 245);
  border-radius: 4px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: rgb(235, 235, 235);
  }
`;

const ListItem = styled.div`
  font-size: ${listSize};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: rgb(120, 120, 120);
  padding: 2px 10px 2px 0px;
  margin-top: 4px;
`;

export {
  CardContainer,
  ListItem
};
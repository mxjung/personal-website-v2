import React from 'react';
import './Navigation.css';
import styled from 'styled-components';
import { Link } from "react-scroll";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border: 2px solid red;
  height: auto;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 100%;
  margin-top: 20px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  // border: 2px solid blue;
`;

const NavListItem = styled.li`
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;

  margin-bottom: 15px;
  margin-left: -15px;

  transform-origin: bottom left;
  transition: all .4s ease-in-out;

  &:hover {
    color: black;
    cursor: pointer;
    transform: scale(1.05);
  }

  & > .active {
    color: black;
    border-bottom: 2px solid #333;
    transform: scale(1.05);
`;
// active allows navigation links to underline when active
// margin left due to weird offset

function Navigation() {
  return (
    <>
      <Profile>
        <NavList>
          <NavListItem>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              01 Things I've Built
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              02 Work Experience
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              03 Education
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              04 Resume / Bio
            </Link>
          </NavListItem>
        </NavList>
      </Profile>
    </>
  );
}

export default Navigation;
import React from 'react';
import './Navigation.css';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {

  const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
    height: auto;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 100%;
  `;

  const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    border: 2px solid blue;
  `;

  const NavListItem = styled.li`
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;

    margin-bottom: 15px;
    margin-left: -18px;

    transform-origin: bottom left;
    transition: all .2s ease-in-out;

    &:hover {
      color: black;
      cursor: pointer;
      transform: scale(1.05);
    }

    & > .active {
      border-bottom: 2px solid #333;
      transform: scale(1.05);
  `;
  // active allows navigation links to underline when active
  // margin left due to weird offset

  return (
    <>
      <Profile>
        <NavList>
          {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                01 Work History
            </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                02 Education
            </Link>
            </li> */}
          <NavListItem>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              01 Work History
            </Link>
          </NavListItem>
          <NavListItem>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              02 Education
            </Link>
          </NavListItem>
        </NavList>
      </Profile>
    </>
  );
}

export default Navigation;
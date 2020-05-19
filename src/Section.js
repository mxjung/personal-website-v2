import React from 'react';
import { Link, animateScroll as scroll, Element, Events, scrollSpy, scroller } from "react-scroll";
import Sec from './Sec.js';
import "./ProjectList.css";

const Section = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <Link
        activeClass="active"
        to="section6"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Section 1
      </Link>

      <Sec
        title="Section 1"
        subtitle={"hello"}
        dark={true}
        id="section1"
      />
      <Sec
        title="Section 2"
        subtitle={"hello"}
        dark={false}
        id="section2"
      />
      <Sec
        title="Section 3"
        subtitle={"hello"}
        dark={true}
        id="section3"
      />
      <Sec
        title="Section 5"
        subtitle={"hello"}
        dark={true}
        id="section5"
      />
      <Sec
        title="Section 6"
        subtitle={"hello"}
        dark={false}
        id="section6"
      />
      <Sec
        title="Section 5"
        subtitle={"hello"}
        dark={true}
        id="section7"
      />

      <Sec
        title="Section 4"
        subtitle={"hello"}
        dark={false}
        id="section8"
      />
      <Sec
        title="Section 5"
        subtitle={"hello"}
        dark={true}
        id="section9"
      />
      <Sec
        title="Section 4"
        subtitle={"hello"}
        dark={false}
        id="section10"
      />
      <Sec
        title="Section 5"
        subtitle={"hello"}
        dark={true}
        id="section11"
      />
    </div>
  )
}

export default Section;

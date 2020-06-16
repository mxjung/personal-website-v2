import React from "react";
import { Carousel } from "react-responsive-carousel";
import profilePicSrc from './images/profile';
import { v4 as uuidv4 } from "uuid";

export default () => (
  <Carousel autoPlay showArrows={true} showThumbs={false}	showStatus={false} infiniteLoop={true} showIndicators={false} >
    {Object.values(profilePicSrc).map(imgSrc => (
      <div key={uuidv4()}>
        <img src={imgSrc} alt={`${imgSrc}`} />
      </div>
    ))}
  </Carousel>
);

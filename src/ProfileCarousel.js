import React from "react";
import { Carousel } from "react-responsive-carousel";
import profilePicSrc from './images/profile';

export default () => (
  <Carousel autoPlay showArrows={true} showThumbs={false}	showStatus={false} infiniteLoop={true} showIndicators={false} >
    {Object.values(profilePicSrc).map(imgSrc => (
      <div>
        <img src={imgSrc} alt={`${imgSrc}`} />
      </div>
    ))}
  </Carousel>
);

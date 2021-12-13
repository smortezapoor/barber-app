import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../components/tools/slide.css";
const slideImages = [
  "https://picsum.photos/id/234",
  "https://picsum.photos/id/267",
  "https://picsum.photos/id/27",
];
const Slider = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div
            style={
              ({ backgroundImage: `url(${slideImages[0]})` },
              { backgroundRepeat: "no-repeat" })
            }
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={
              ({ backgroundImage: `url(${slideImages[1]})` },
              { backgroundRepeat: "no-repeat" })
            }
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={
              ({ backgroundImage: `url(${slideImages[2]})` },
              { backgroundRepeat: "no-repeat" })
            }
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;

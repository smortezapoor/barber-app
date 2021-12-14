import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../components/tools/slide.css";
import slideImages from "../sliderImages";

class Slider extends React.Component {
  state = {
    images: slideImages,
  };
  render() {
    const images = this.state.images;

    console.log(images[0].imageUrl);
    return (
      <div>
        <Slide easing="ease">
          {images.map((image) => (
            <div className="each-slide">
              <div
                style={
                  ({ backgroundImage: `url(${image.imageUrl})` },
                  { backgroundRepeat: "no-repeat" },
                  { id: image.id })
                }
              >
                {<span>{image.imageName}</span>}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}

export default Slider;

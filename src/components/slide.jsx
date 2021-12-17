import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideImages from "../sliderImages";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "./tools/slide.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
class Slide extends Component {
  state = {
    images: slideImages,
  };
  render() {
    const images = this.state.images;
    return (
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="swiper-custom-style">
                <img
                  src={image.imageUrl}
                  alt=""
                  className="slide-image-style"
                />
                <div className="slide-image-content">
                  <h4>{image.imageName}</h4>
                  <p>{image.imageContent}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default Slide;

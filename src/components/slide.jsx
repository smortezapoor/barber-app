import React, { Component, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideImages from "../sliderImages";
import "swiper/swiper.min.css";
import "swiper/css/bundle";
import "./tools/components.css";
import foo from "foo";
// import "./tools/slide.css";
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
      <div className="container-fluid">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="homepage-gallerySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Slide;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div style={{height: "400px", width: "100%"}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide><img src="https://i.ibb.co/P6w80L4/gecomm-image1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,h=624,fit=crop/mP4obEx6alSpp0Kz/WEB-GECOMM-dOq2JR0NRXTDMDjK.png" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.zyrosite.com/mP4obEx6alSpp0Kz/logo-gecomm-Aq221Ww2qoF2egzq.png" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

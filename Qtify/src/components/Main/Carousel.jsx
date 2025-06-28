import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SingleCard from "./TopAlbums/SingleCard";
import LeftArrow from "../../assets/leftNav.svg";
import RightArrow from "../../assets/rightNav.svg";
import styles from "./Carousel.module.css";

const Carousel = ({ items, showLikes = false }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="carousel-container" style={{ position: "relative" }}>
      <img
        ref={prevRef}
        src={LeftArrow}
        alt="Previous"
        className={`${styles.customNavButton} ${styles.left}`}
      />
      <img
        ref={nextRef}
        src={RightArrow}
        alt="Next"
        className={`${styles.customNavButton} ${styles.right}`}
      />

      <Swiper
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={20}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          600: { slidesPerView: 4 },
          1024: { slidesPerView: 7 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <SingleCard album={item} showLikes={showLikes} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

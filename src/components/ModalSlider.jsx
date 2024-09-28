import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './ModalSlider.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-[480px] overflow-hidden"
      >
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[480px] overflow-hidden"
      >
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.image} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

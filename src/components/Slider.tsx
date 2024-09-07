"use client"; 
import './SliderCss.css';

import React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const Slider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div>
        <ul className=" w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={false}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}>
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id} className="relative">
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative h-[695px] container flex  items-center">
                  <div className="relative w-[570px] mr-4 px-[15px]">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-[--primary-text-clr]">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-[--primary-text-clr]">
                      {title}
                    </p>
                    <p>
                      Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor
                      incididunt ut labore et dolore magna
                    </p>
                    {buttons.length > 0 ? (
                      
                        <SliderButtons  buttons={buttons} />
                      
                    ) : null}
                  </div>
                  <div className="w-1/2 h-full flex items-center bg-contain right-0 top-0 px-[15px]">
                    <img width={540} height={458} src={image} alt="" className="align-middle" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Slider;

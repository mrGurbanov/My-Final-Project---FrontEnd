"use client";
import "./CircleSlider.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Link from "next/link";
import Flex from "./Flex";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper container">
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Bedroom</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Living</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Dining</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Lounge</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Office Chair</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Bedroom</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Living</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Dining</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Lounge</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Office Chair</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2FBella_0001_Double_Bed_Pink__27958.jpg%3Fv%3D1709185149&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Bedroom</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fliving-room.png%3Fv%3D1709185425&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Living</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Fdining_sets_luxury.jpg%3Fv%3D1709185177&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Dining</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Lounge</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'} className="slider-border w-[180px] h-[180px] border-2 border-[--border] rounded-full overflow-hidden">
            <Flex justifyContent={"center"} direction={"column"} alignItems="center" className="self-center text-center h-full">
              <div className="w-16 h-16 mb-2">
                <img src="https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75" alt="" />
              </div>
              <h4 className="text-base font-semibold">Office Chair</h4>
            </Flex>
          </Link>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

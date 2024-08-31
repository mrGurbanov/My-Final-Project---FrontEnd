"use client";
import Slider from "../components/Slider";
import dataSlider from "./data/slider-data.json";
import CircleSlider from "../components/CircleSlider";
import Flex from "../components/Flex";
import OurProducts from "../components/OurProducts";
import { StyledEngineProvider } from "@mui/material";
import { CartProvider } from "../components/CartContext";

export default function Home() {
  return (
    <>
      <Slider data={dataSlider} />
      <Flex className="py-[100px]">
        <CircleSlider />
      </Flex>

      <StyledEngineProvider injectFirst className="block">
        <OurProducts />
      </StyledEngineProvider>
    </>
  );
}

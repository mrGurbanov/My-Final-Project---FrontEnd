import Slider from "../components/Slider";
import dataSlider from './data/slider-data.json';
// import CircleSlider from "../components/CircleSlider";

export default function Home() {
  return (
    <>
      <Slider data={dataSlider}/>
      {/* <CircleSlider/> */}
    </>
  ); 
}

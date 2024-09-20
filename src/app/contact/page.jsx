"use client";
import Link from "next/link";
import Flex from "../../components/Flex";
import "../globals.css";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default () => {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };
  const center = {
    lat: 40.378959, // default latitude
    lng: 49.846647, // default longitude
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBDfOzqd7owmavaH1Jh6jU8WdxLhVhfagU",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <>
      <Flex
        as="section"
        justifyContent={"center"}
        className="py-[80px] mb-[100px] bg-[--view-cart-bg]">
        <Flex direction={"column"} className="container">
          <h2 className="text-3xl font-semibold uppercase">Contact</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <span>Contact</span>
          </div>
        </Flex>
      </Flex>
      <Flex className="container" direction={"column"}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
          <Marker position={center} />
        </GoogleMap>
        <Flex className="flex-wrap mt-[60px] w-full" alignItems="none">
          <Flex className="contact-wrapper w-full" justifyContent={"space-between"}>
            <Flex className="ct px-[15px]">
              <Flex className="py-[50px] px-[30px] w-full !h-full bg-[--contact-bg] rounded-sm">
                <h2 className="text-2xl mb-[30px] font-semibold">Contact Info</h2>
              </Flex>
            </Flex>
            <Flex className="gt px-[15px]">
              <Flex className="py-[50px] px-[30px] w-full !h-full bg-[--contact-bg] rounded-sm">
                <h2 className="text-2xl mb-[30px] font-semibold">Get in Touch</h2>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

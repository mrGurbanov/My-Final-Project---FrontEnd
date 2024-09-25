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
      </Flex>
      <Flex className="container mt-[60px]">
        <Flex className="w-full" alignItems="none">
          <div className="contact-wrapper w-full flex justify-between gap-x-[30px]">
            <div className="ct px-[15px] h-full">
              <Flex
                direction={"column"}
                alignItems="none"
                className="py-[50px] px-[30px] w-full h-full bg-[--contact-bg] rounded-sm">
                <h2 className="text-2xl mb-[30px] font-semibold">Contact Info</h2>
                <Flex alignItems="flex-start" className="mb-5">
                  <h3 className="w-[80px] font-semibold text-[--primary-text-clr]">Phone:</h3>
                  <Flex
                    direction={"column"}
                    className="text-[--primary-text-clr]"
                    alignItems="flex-start">
                    <p className="mb-[10px]">
                      <Link
                        href={"tel:+012 345 678 102"}
                        className="hover:text-[--primary-orange] duration-300">
                        +012 345 678 102
                      </Link>
                    </p>
                    <p>
                      <Link
                        href={"tel:+012 345 678 203"}
                        className="hover:text-[--primary-orange] duration-300">
                        +012 345 678 203
                      </Link>
                    </p>
                  </Flex>
                </Flex>
                <Flex alignItems="flex-start" className="mb-5">
                  <h3 className="w-[80px] font-semibold text-[--primary-text-clr]">Email:</h3>
                  <Flex
                    direction={"column"}
                    className="text-[--primary-text-clr]"
                    alignItems="flex-start">
                    <p className="mb-[10px]">
                      <Link
                        href={"mailto:email@here.com"}
                        className="hover:text-[--primary-orange] duration-300">
                        email@here.com
                      </Link>
                    </p>
                    <p>
                      <Link
                        href={"mailto:your@email.here"}
                        className="hover:text-[--primary-orange] duration-300">
                        your@email.here
                      </Link>
                    </p>
                  </Flex>
                </Flex>
                <Flex alignItems="flex-start">
                  <h3 className="w-[80px] font-semibold text-[--primary-text-clr]">Address:</h3>
                  <Flex
                    direction={"column"}
                    className="text-[--primary-text-clr]"
                    alignItems="flex-start">
                    <p className="mb-[10px]">Address goes here,</p>
                    <p>street, Crossroad 123.</p>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            <div className="gt px-[15px]">
              <Flex
                className="py-[50px] px-[30px] w-full bg-[--contact-bg] rounded-sm"
                direction={"column"}
                alignItems="flex-start">
                <h2 className="text-2xl mb-[30px] font-semibold">Get in Touch</h2>
                <div className="w-full">
                  <form className="w-full">
                    <div className="mb-[25px] w-full">
                      <Flex alignItems="none" className="-px-[15px]">
                        <Flex
                          className="w-full px-[15px]"
                          direction={"column"}
                          alignItems="flex-start">
                          <label htmlFor="firstname" className="mb-[10px] text-sm font-medium">
                            First Name
                          </label>
                          <input type="text" id="firstname" label="First Name" />
                        </Flex>
                        <Flex
                          className="w-full px-[15px]"
                          direction={"column"}
                          alignItems="flex-start">
                          <label htmlFor="lastname" className="mb-[10px] text-sm font-medium">
                            Last Name
                          </label>
                          <input type="text" id="lastname" label="Last Name" />
                        </Flex>
                      </Flex>
                    </div>
                    <div className="mb-[25px] w-full">
                      <Flex
                        className="w-full px-[15px]"
                        direction={"column"}
                        alignItems="flex-start">
                        <label htmlFor="subject" className="mb-[10px] text-sm font-medium">
                          Subject
                        </label>
                        <input type="text" id="subject" label="Subject" />
                      </Flex>
                    </div>
                    <div className="mb-[25px] w-full">
                      <Flex
                        className="w-full px-[15px]"
                        direction={"column"}
                        alignItems="flex-start">
                        <label htmlFor="message" className="mb-[10px] text-sm font-medium">
                          Message
                        </label>
                        <textarea rows={8} id="message" label="Message"></textarea>
                      </Flex>
                    </div>
                    <div className="px-[15px]">
                      <button
                        type="submit"
                        className="text-white bg-[--primary-orange] hover:bg-[--primary-bg] w-full py-3 px-[15px] duration-300">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

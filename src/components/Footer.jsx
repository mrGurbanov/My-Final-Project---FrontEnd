import "../app/globals.css";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Flex from "./Flex";
import { LiaTelegram } from "react-icons/lia";

export default function Footer({ buttons }) {
  return (
    <>
    <div className="footer bg-[--primary-bg] py-[100px]">
      <Flex className="container" alignItems="none">
        <div className="col-about w-1/3 px-[15px] text-white">
          <h4 className="text-[15px] mb-[15px] font-semibold">ABOUT US</h4>
          <div className="col-wrapper">
            <p className="text-sm max-w-[290px] leading-6">
              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut
              labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <Flex as="ul" className="icon-ul mt-[15px]">
              <Flex
                as="li"
                justifyContent={"center"}
                className="mr-[5px] w-8 h-8 leading-9 bg-transparent hover:bg-[--primary-orange] duration-300 rounded-xl">
                <Link className="text-lg" href={"/"}>
                  <FaFacebook />
                </Link>
              </Flex>
              <Flex
                as="li"
                justifyContent={"center"}
                className="mr-[5px] w-8 h-8 leading-9 bg-transparent hover:bg-[--primary-orange] duration-300  rounded-xl">
                <Link className="text-lg" href={"/"}>
                  <AiFillTwitterCircle />
                </Link>
              </Flex>
              <Flex
                as="li"
                justifyContent={"center"}
                className="mr-[5px] w-8 h-8 leading-9 bg-transparent hover:bg-[--primary-orange] duration-300  rounded-xl">
                <Link className="text-lg" href={"/"}>
                  <FaLinkedin />
                </Link>
              </Flex>
              <Flex
                as="li"
                justifyContent={"center"}
                className="mr-[5px] w-8 h-8 leading-9 bg-transparent hover:bg-[--primary-orange] duration-300  rounded-xl">
                <Link className="text-lg" href={"/"}>
                  <FaYoutube />
                </Link>
              </Flex>
              <Flex
                as="li"
                justifyContent={"center"}
                className="w-8 h-8 leading-9 bg-transparent hover:bg-[--primary-orange] duration-300  rounded-xl">
                <Link className="text-lg" href={"/"}>
                  <FaPinterest />
                </Link>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="col-information w-1/4 px-[15px] text-white">
          <h4 className="text-[15px] mb-[15px] font-semibold">INFORMATION</h4>
          <div className="col-wrapper">
            <Flex as="ul" direction={"column"} alignItems="none" className="icon-ul mt-[15px]">
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm leading-6 duration-500" href={"/"}>
                  About Us
                </Link>
              </Flex>
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  Manufactures
                </Link>
              </Flex>
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  Tracking Order
                </Link>
              </Flex>
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  Privacy & Policy
                </Link>
              </Flex>
              <Flex as="li" className="[&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  Terms & Conditions
                </Link>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="col-my-account w-1/6 px-[15px] text-white">
          <h4 className="text-[15px] mb-[15px] font-semibold">MY ACCOUNT</h4>
          <div className="col-wrapper">
            <Flex as="ul" direction={"column"} alignItems="none" className="icon-ul mt-[15px]">
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm leading-6 duration-500" href={"/"}>
                  Login
                </Link>
              </Flex>
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  My Cart
                </Link>
              </Flex>
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  Wishlist
                </Link>
              </Flex>
              <Flex as="li" className="mb-2 [&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  Compare
                </Link>
              </Flex>
              <Flex as="li" className="[&>a]:hover:text-[--primary-orange] [&>a]:hover:ml-1">
                <Link className="text-sm duration-500" href={"/"}>
                  My Account
                </Link>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="col-newsletter w-1/4 px-[15px] text-white">
          <h4 className="text-[15px] mb-[15px] font-semibold">NEWSLETTER</h4>
          <div className="col-wrapper">
            <Flex as="ul" direction={"column"} alignItems="none" className="icon-ul mt-[15px]">
              <input
                name="search"
                type="search"
                placeholder="Enter your E-mail adress"
                className="modal-search-input footer-input bg-transparent border border-[--primary-text-clr] w-full pl-5 pr-[10px] py-3 outline-none"
              />
              <Link
                href={"/"}
                className="inline-flex justify-center items-center bg-[--primary-orange] hover:bg-black duration-300 px-9 py-3  text-white mt-4">
                    <LiaTelegram className="mr-2"/>Subscribe
                </Link>
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
      <Flex className="bg-black py-6">
        <Flex className="container text-white" justifyContent={"space-between"}>
            <div className="text-sm">© 2024, Furns. Made With by <span className="text-[--primary-orange]">mrGurbanov</span>.</div>
            <div><img src="https://furns-react.netlify.app/_ipx/w_256,q_75/%2Fimages%2Ficons%2Fpayment.png?url=%2Fimages%2Ficons%2Fpayment.png&w=256&q=75" alt="" /></div>
        </Flex>
      </Flex>
    </>
  );
}

"use client";
import Link from "next/link";
import Flex from "../../components/Flex";
import "../globals.css";
import { useState } from "react";

export default () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Flex as="section" justifyContent={"center"} className="py-[80px] bg-[--view-cart-bg]">
        <Flex direction={"column"}>
          <h2 className="text-3xl font-semibold uppercase">Create account</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <span>Sign up</span>
          </div>
        </Flex>
      </Flex>
      <Flex className="py-[80px]">
        <Flex className="container">
          <Flex justifyContent={"center"} className="w-full px-[15px] ">
            <Flex className="py-[50px] px-[30px] shadow w-[550px]">
              <form className="w-full">
                <Flex justifyContent={"space-between"}>
                  <Flex direction={"column"} className="mb-[25px]" alignItems="flex-start">
                    <label
                      htmlFor="first-name"
                      className="mb-[10px] text-[--product-text-clr] text-sm font-semibold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      label="first-name"
                      className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                    />
                  </Flex>
                  <Flex direction={"column"} className="mb-[25px]" alignItems="flex-start">
                    <label
                      htmlFor="last-name"
                      className="mb-[10px] text-[--product-text-clr] text-sm font-semibold">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      label="last-name"
                      className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                    />
                  </Flex>
                </Flex>
                <Flex direction={"column"} className="mb-[25px]" alignItems="flex-start">
                  <label
                    htmlFor="email"
                    className="mb-[10px] text-[--product-text-clr] text-sm font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    label="email"
                    placeholder="example@gmail.com"
                    className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                  />
                </Flex>
                <Flex direction={"column"} className="mb-[25px]" alignItems="flex-start">
                  <label
                    htmlFor="phone"
                    className="mb-[10px] text-[--product-text-clr] text-sm font-semibold">
                    Phone *
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    label="phone"
                    placeholder={"+994 (00) 000 00 00"}
                    className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                  />
                </Flex>
                <Flex direction={"column"} className="mb-[25px]" alignItems="flex-start">
                  <label
                    htmlFor="password"
                    className="mb-[10px] text-[--product-text-clr] text-sm font-semibold">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    label="password"
                    className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                  />
                </Flex>
                <Flex direction={"column"} className="mb-[25px]" alignItems="flex-start">
                  <label
                    htmlFor="confirm-password"
                    className="mb-[10px] text-[--product-text-clr] text-sm font-semibold">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="confirm-password"
                    label="confirm-password"
                    className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                  />
                </Flex>
                <Flex direction={"column"} alignItems="flex-start">
                  <Flex>
                    <input
                      type="checkbox"
                      id="policy"
                      name="policy"
                      className="w-4 h-4 cursor-pointer"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="policy" className="ml-2 cursor-pointer">
                      I've read and accept the Privacy Policy
                    </label>
                  </Flex>
                  <Flex className="rules text-sm my-[15px] text-[--primary-text-clr]">
                    <p>
                      By signing up, you agree to our{" "}
                      <span className="text-base font-semibold duration-300 hover:text-[--primary-orange]">
                        Terms of Service.
                      </span>{" "}
                      Learn how we collect and use your data in our{" "}
                      <span className="text-base font-semibold duration-300 hover:text-[--primary-orange]">
                        Privacy Policy.
                      </span>
                    </p>
                  </Flex>
                </Flex>
                <button
                  disabled={!isChecked}
                  type="submit"
                  className="signup text-white duration-300 py-[17px] px-9 bg-[--primary-orange] w-full hover:bg-[--primary-bg] mb-[25px]">
                  Sign up
                </button>
                <Flex>
                  <Flex className="grow text-center">
                    <Link
                      href={"/sign-in"}
                      className=" py-[17px] px-9 w-full text-sm uppercase duration-300 text-[--primary-bg] hover:text-white bg-[--border-clr] hover:bg-[--primary-bg]">
                      Forget Password?
                    </Link>
                  </Flex>
                </Flex>
              </form>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

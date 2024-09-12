"use client";
import Link from "next/link";
import Flex from "../../components/Flex";
import "../globals.css";

export default () => {
  return (
    <div>
      <Flex as="section" justifyContent={"center"} className="py-[80px] bg-[--view-cart-bg]">
        <Flex direction={"column"}>
          <h2 className="text-3xl font-semibold uppercase">Login</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <span>Sign in</span>
          </div>
        </Flex>
      </Flex>
      <Flex className="py-[80px]">
        <Flex className="container">
          <Flex justifyContent={"center"} className="w-full px-[15px] ">
            <Flex className="py-[50px] px-[30px] shadow w-[500px]">
              <form className="w-full">
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
                    value={"example@gmail.com"}
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
                    value={"78952"}
                    className="w-full py-3 px-[15px] duration-300 font-sm border border-[235,235,235] outline-none rounded-[4px]"
                  />
                </Flex>
                <button
                  type="submit"
                  className="text-white duration-300 py-[17px] px-9 bg-[--primary-orange] w-full hover:bg-[--primary-bg] mb-[25px]">
                  <Link href={"/"} className="inline-block w-full">Sign in</Link>
                </button>
                <Flex>
                  <Flex className="grow -mx-[15px]" justifyContent={"space-between"}>
                    <Flex className="create">
                      <Link
                        href={"/sign-up"}
                        className=" py-[17px] px-9 w-full text-sm duration-300 text-white hover:text-[--primary-bg] bg-[--primary-bg] hover:bg-[--border-clr]">
                        Create an Account
                      </Link>
                    </Flex>
                    <Flex className="forget">
                      <Link
                        href={"/"}
                        className=" py-[17px] px-9 w-full text-sm duration-300 text-[--primary-bg] hover:text-white bg-[--border-clr] hover:bg-[--primary-bg]">
                        Forget Password?
                      </Link>
                    </Flex>
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

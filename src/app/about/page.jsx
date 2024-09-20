import Flex from "../../components/Flex";
import Link from "next/link";
import "../globals.css";

export default () => {
  return (
    <>
      <Flex as="section" justifyContent={"center"} className="py-[80px] mb-[100px] bg-[--view-cart-bg]">
        <Flex direction={"column"} className="container">
          <h2 className="text-3xl font-semibold uppercase">About Us</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <span>About</span>
          </div>
        </Flex>
      </Flex>
      <Flex as="section" direction={"column"}>
        <Flex className="container">
          <h2 className="text-[32px] font-bold">
            Furns is a global furniture destination for somethings. We sell cutting-edge furniture
            and offer a wide variety of fashion-related content.
          </h2>
        </Flex>
        <Flex className="mt-12 -mx-[15px]">
          <Flex className="flex-wrap px-[15px] overflow-hidden">
            <Flex className="relative w-[730px] h-[486px] overflow-x-hidden">
              <img className="bg-cover" src="https://furns-react.netlify.app/_ipx/w_1080,q_75/%2Fimages%2Fabout%2F02.jpg?url=%2Fimages%2Fabout%2F02.jpg&w=1080&q=75" alt="" />
            </Flex>
          </Flex>
          <Flex className="flex-wrap px-[15px]">
            <Flex className="relative w-[730px] h-[486px]">
              <img className="h-full" src="https://furns-react.netlify.app/_ipx/w_1080,q_75/%2Fimages%2Fabout%2F01.jpg?url=%2Fimages%2Fabout%2F01.jpg&w=1080&q=75" alt="" />
            </Flex>
          </Flex>
        </Flex>
        <Flex className="container mt-12">
          <Flex className="row-span-2">
            <Flex className="px-[15px]">
              <Flex direction={"column"} alignItems="flex-start">
                <h4 className="mb-[15px] text-xl font-semibold">OUR STORES</h4>
                <p className="text-[--primary-text-clr] text-sm leading-6 tracking-widest">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
              </Flex>
            </Flex>
            <Flex className="px-[15px]">
              <Flex direction={"column"} alignItems="flex-start">
                <h4 className="mb-[15px] text-xl font-semibold">OUR MISSION</h4>
                <p className="text-[--primary-text-clr] text-sm leading-6 tracking-widest">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

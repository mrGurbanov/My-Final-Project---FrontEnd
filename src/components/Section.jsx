import Link from "next/link";
import "../app/globals.css";
import Flex from "../components/Flex";

export default function Section() {
  return (
    <>
      <section className="py-[100px] block">
        <Flex className="container section-container" direction={"column"}>
          <Flex className="wrapper gap-12">
            <Flex className="wrapper-in">
              <Link
                href={"/product"}
                className="relative overflow-hidden mt-[30px] cursor-pointer duration-300 bg-transparent">
                <figure>
                  <div>
                    <img
                      src="https://furns-react.netlify.app/_ipx/w_1920,q_75/%2Fimages%2Fbanner%2F1.jpg?url=%2Fimages%2Fbanner%2F1.jpg&w=1920&q=75"
                      alt=""
                      className="overflow-clip"
                    />
                  </div>
                </figure>
                <Flex
                  className="absolute top-0 left-0 w-full h-full p-10"
                  direction={"row"}
                  justifyContent={"flex-end"}>
                  <Flex
                    direction={"column"}
                    alignItems="none"
                    className="self-center cursor-pointer max-w-52">
                    <h3 className="text-[30px] leading-10 mb-4 text-[--product-text-clr] font-semibold">
                      Sale Furniture For Summer
                    </h3>
                    <p className="text-left">Great Discounts Here</p>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
            <Flex className="wrapper-in">
              <Link
                href={"/product"}
                className="relative overflow-hidden mt-[30px] cursor-pointer duration-300 bg-transparent">
                <figure>
                  <div>
                    <img
                      src="https://furns-react.netlify.app/_ipx/w_1920,q_75/%2Fimages%2Fbanner%2F2.jpg?url=%2Fimages%2Fbanner%2F2.jpg&w=1920&q=75"
                      alt=""
                      className="overflow-clip"
                    />
                  </div>
                </figure>
                <Flex
                  className="absolute top-0 left-0 w-full h-full p-10"
                  direction={"row"}
                  justifyContent={"flex-start"}>
                  <Flex
                    direction={"column"}
                    alignItems="none"
                    className="self-center cursor-pointer max-w-52">
                    <h3 className="text-[30px] leading-10 mb-4 text-[--product-text-clr] font-semibold">
                      Office Chair For Best Offer
                    </h3>
                    <p className="text-left">Great Discounts Here</p>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </section>
      <section>
        <Flex className="container" direction={"column"}>
          <Flex className="lnews grow px-[15px] mb-12" direction={"column"}>
            <h3 className="text-4xl text-[--product-text-clr] font-semibold mb-2">Latest News</h3>
            <p className="text-[--primary-text-clr] max-w-[495px] mx-auto text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, placeat ea nobis iste
              quidem voluptatum tempora repellendus.
            </p>
          </Flex>
          <h3 className="text-[28px] text-[--product-text-clr] font-medium">There are no articles found!</h3>
        </Flex>
      </section>
    </>
  );
}

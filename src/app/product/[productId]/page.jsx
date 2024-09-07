"use client";
import Link from "next/link";
import Flex from "../../../components/Flex";
import { products } from "../../data/product-data";
import Input from "../../../components/Input"
import { useCart } from "../../../components/CartContext";

export default ({ params }) => {
  const { addToCart } = useCart();

  const product = products.find((item) => item.id == params.productId);

  const handleAddToCart = (inputQuantity) => {
    addToCart(product, inputQuantity);
  };

  return (
    <div key={product.id}>
      <Flex as="section" justifyContent={"center"} className="py-[80px] bg-[--view-cart-bg]">
        <Flex direction={"column"}>
          <h2 className="text-3xl font-semibold uppercase">{product.category}</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <Link href={"/product"}>Products</Link>
            <span className="px-2">/</span>
            <span>{product.category}</span>
          </div>
        </Flex>
      </Flex>
      <Flex as="section" className="py-5">
        <div className="container">
          <div className="grid grid-cols-2 py-5">
            <Flex className="w-full grow" justifyContent={"center"}>
              <img className="w-[500px] overflow-hidden px-6" src={product.image} alt="" />
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems="flex-start"
              className="w-[636px] px-6">
              <div className="mb-1 text-sm">SKU</div>
              <h1 className="text-5xl mb-2 font-bold">{product.name}</h1>
              <Flex className="price text-xl">
                <span>${product.price}</span>
              </Flex>
              <p className="my-4 text-lg font-light ">{product.productDetail.description}</p>
              <Input handleAddToCart={handleAddToCart} />
            </Flex>
          </div>
        </div>
      </Flex>
    </div>
  );
};

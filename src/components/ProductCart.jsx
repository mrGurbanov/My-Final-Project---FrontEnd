// ProductCard.js
"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useWishlist } from "./WhisListContext";
import ProductModals from "./ProductModals";
import Flex from "./Flex";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { MdDeleteForever, MdShoppingCart } from "react-icons/md";
import { BiExpand, BiGitCompare } from "react-icons/bi";

export default function ProductCart({ product }) {
  const { addToCart } = useCart();
  const { wishlist, setWishlist , addToWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };

  console.log(wishlist);
  
  const handleAddToWishlist = () => {
    const existProduct = wishlist.some((item) => item.id === product.id)
console.log(existProduct);

    if(existProduct) {
      removeFromWishlist(product.id);
    }
    else {
      addToWishlist(product);
    }
  };


  const [openIsModal, setISOpenModal] = useState(false);

  const toggleModal = () => {
    setISOpenModal(!openIsModal);
  };

  return (
    <>
      <div className="px-[15px] relative bg-[--view-cart-bg]">
        <div className="mt-[30px] overflow-hidden">
          <figure className="overflow-hidden">
            <Flex justifyContent={"center"} className="thumb ">
              <Link href={`/product/${product.id}`}>
                <img className="object-fill h-[200px]" src={product.image} alt="thumb" />
              </Link>
            </Flex>
            <Flex
              direction={"column"}
              className="cart-icons absolute top-[32px] right-[24px] duration-500">
              <Flex direction={"column"} className="btn-single-product relative">
                <Flex>
                  <Flex
                    onClick={handleAddToWishlist}
                    as="button"
                    justifyContent={"center"} 
                    className="btn-action">
                    {!wishlist.some((item) => item.id === product.id ) ? (
                      <FaRegHeart />
                    ) : (
                      <MdDeleteForever className="text-[--primary-orange] hover:text-white" />
                    )}
                  </Flex>
                  <Flex className="action absolute">
                    {!wishlist.some((item) => item.id === product.id ) ? "Add" : "Remove"} to Wishlist
                  </Flex>
                </Flex>
                <Flex className="action-icon">
                  <Flex
                    onClick={toggleModal}
                    as="button"
                    justifyContent={"center"}
                    className="btn-action">
                    <BiExpand />
                  </Flex>
                  <Flex className="action absolute">Quick view</Flex>
                </Flex>
                <Flex className="action-icon">
                  <Flex
                    // onClick={toogleCompareIcons}
                    as="button"
                    justifyContent={"center"}
                    className="btn-action">
                    {!wishlist.some((item) => item.id === product.id) ? (
                      <BiGitCompare />
                    ) : (
                      <MdDeleteForever className="text-[--primary-orange] hover:text-white" />
                    )}
                  </Flex>
                  <Flex className="action absolute">
                    {/* {!wishlist.some((item) => item.id === product.id) ? "Add" : "Remove"} to Compare */}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <button onClick={handleAddToCart} className="addToCartBtn w-full">
              <MdShoppingCart className="mr-2" /> Add To Cart
            </button>
            <Flex direction={"column"} justifyContent={"center"} className="px-[15px] pt-5">
              <h2 className="hover:text-[--primary-orange] duration-300">{product.name}</h2>
              <div className="font-medium">
                <del className="mr-2 text-[#999]">${product.price + 11}</del>
                <span>${product.price}</span>
              </div>
            </Flex>
          </figure>
        </div>
      </div>
      <ProductModals product={product} isOpen={openIsModal} onClose={()=>setISOpenModal(false)}/>
    </>
  );
}

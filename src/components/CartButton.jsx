"use client";
import Flex from "./Flex";
import "../app/globals.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from "./CartContext";
import { useState } from "react";
import CartMenu from "./CartMenu";

export default function CartButton() {
  const { cart, totalPrice } = useCart();
  const [ openCart, setOpenCart ] = useState(false);

  const toggleOpenCart = () => {
    setOpenCart(!openCart);
  };
  return (
    <>
      <Flex
        as="button"
        direction={"column"}
        className="cartButton right-0 p-[15px] fixed rounded-l rounded-r-none"
        onClick={toggleOpenCart}>
        <Flex>
          <HiOutlineShoppingBag className="text-[20px] text-[--primary-orange]" />
        </Flex>
        <Flex className="mt-1">
          <span className="text-white text-sm">{cart.length} Items</span>
        </Flex>
        <Flex className="mt-1">
          <span className="w-[65px] h-[25px] px-[5px] leading-6 text-[--primary-orange] bg-white rounded-[4px] text-sm font-bold">
            $ {totalPrice}
          </span>
        </Flex>
      </Flex>
      <CartMenu isOpen={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}

"use client";
import { GrFormClose } from "react-icons/gr";
import { useCart } from "./CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import Flex from "./Flex";
import Link from "next/link";

export default ({ isOpen, onClose }) => {
  const { cart, removeFromCart, totalPrice, updateQuantity, clearCart } = useCart();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[430px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-4 h-full">
          <div className="border-b border-[--primary-bg]">
            <h2 className="text-xl font-bold mb-4">Cart</h2>
            <button
              onClick={onClose}
              className="absolute text-center top-4 right-4 text-[--primary-orange] p-1 bg-transparent border border-[--primary-orange] rounded-md hover:bg-[--primary-orange] hover:text-white duration-200">
              <GrFormClose />
            </button>
          </div>
          <Flex direction={"column"} className="py-4 ">
            {cart.length === 0 ? (
              <Flex justifyContent={"center"}>
                <Flex
                  direction={"column"}
                  justifyContent={"center"}
                  className="text-center mt-[100px]">
                  <HiOutlineShoppingBag className="text-[100px] text-[--primary-orange]" />
                  <h2 className="mt-[15px] text-xl">There are no products!</h2>
                </Flex>
              </Flex>
            ) : (
              <>
                {cart.map((item) => (
                  <Flex key={item.id} justifyContent={"space-between"} className="w-11/12 max-h-20 mx-auto mb-4 overflow-hidden">
                    <div className="mr-4 max-w-[115px] overflow-hidden"><img src={item.image} alt="" className="cover"/></div>
                    <Flex direction={"column"} alignItems="left" className="w-1/3">
                      <span className="text-ellipsis truncate">{item.name}</span>
                      <span className="px-4">{item.price}$</span>
                      <Flex>
                        <button
                          className="px-1 border w-6 h-4 flex justify-center items-center"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >-</button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="px-1 border w-6 h-4 flex justify-center items-center"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >+</button>
                      </Flex>
                    </Flex>
                    <button onClick={() => removeFromCart(item.id)}>
                      <MdDeleteForever className="w-8 h-8" />
                    </button>
                  </Flex>
                ))}
              </>
            )}
            <Flex className="p-5 w-[350px] absolute bottom-0">
              <Link
                href={"/cart"}
                className="text-white mr-4 hover:bg-[--primary-bg] duration-200 pl-5 px-9 py-2 flex justify-between items-center bg-[--primary-orange] font-medium w-full text-left rounded-[4px]">
                View Cart
                <span className="top-1/2 right-0 h-[37px] flex px-[10px] text-sm text-[--primary-orange] bg-white font-medium rounded-[4px] items-center">
                  $ {totalPrice.toFixed(2)}
                </span>
              </Link>
              <button
                onClick={clearCart}
                className="text-white hover:bg-[--primary-bg] duration-200 p-2 leading-5 flex justify-between items-center bg-[--primary-orange] font-medium text-left rounded-[4px]">
                <MdDeleteForever className="w-8 h-9" />
              </button>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

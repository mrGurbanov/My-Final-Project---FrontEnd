"use client";
import Link from "next/link";
import Flex from "../../components/Flex";
import "../globals.css";
import { useCart } from "../../components/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default () => {
  const { cart, removeFromCart, totalPrice, updateQuantity, clearCart } = useCart();

  return (
    <>
      <Flex as="section" justifyContent={"center"} className="py-[80px] bg-[--view-cart-bg]">
        <Flex direction={"column"}>
          <h2 className="text-3xl font-semibold uppercase">Cart</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <span>Cart</span>
          </div>
        </Flex>
      </Flex>
      <Flex className="py-[100px]">
        <Flex className="container">
          {cart.length === 0 ? (
            <Flex justifyContent={"center"} className="grow">
              <Flex direction={"column"} justifyContent={"center"} className="text-center">
                <HiOutlineShoppingBag className="text-[100px] text-[--primary-orange]" />
                <h2 className="mt-[15px] text-xl">There are no products!</h2>
              </Flex>
            </Flex>
          ) : (
            <>
              <Flex className="px-[15px] grow">
                <div className="overflow-x-auto w-full block">
                  <table className="mb-4 w-full max-w-full bg-transparent border border-[--border-clr]">
                    <thead className="bg-[--border-clr] border-collapse">
                      <tr className="text-sm">
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          image
                        </th>
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          product name
                        </th>
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          until price
                        </th>
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          qty
                        </th>
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          subtotal
                        </th>
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <>
                          <tr className="border-b border-[--border-clr]">
                            <td className="p-3 align-middle w-[135px]">
                              <Link href={"/"} className="block">
                                <div className="overflow-hidden !h-[90px]">
                                  <img className="overflow-clip" src={item.image} alt="" />
                                </div>
                              </Link>
                            </td>
                            <td className="p-3 align-middle w-[435px] text-[15px] text-center">
                              <Link
                                href={"/"}
                                className="hover:text-[--primary-orange] duration-200">
                                {item.name}
                              </Link>
                            </td>
                            <td className="p-3 align-middle w-[435px] text-[15px] text-center">
                              $ {item.price}
                            </td>
                            <td className="p-3 align-middle text-center ">
                              <Flex
                                className="mx-auto w-[90px] h-[35px] px-[10px] rounded-[4px] bg-[--border-clr]"
                                justifyContent={"center"}>
                                <button
                                  className="text-xs text-[--primary-text-clr]"
                                  onClick={() =>
                                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                                  }>
                                  <FaMinus />
                                </button>
                                <span className="bg-transparent w-full text-sm border-none text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  className="text-xs text-[--primary-text-clr]"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                  <FaPlus />
                                </button>
                              </Flex>
                            </td>
                            <td className="p-3 align-middle text-center ">
                              $ {(item.quantity * item.price).toFixed(2)}
                            </td>
                            <td className="p-3 align-middle text-center ">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-white mx-auto hover:bg-[--primary-bg] duration-200 p-2 leading-5 flex justify-between items-center bg-[--primary-orange] font-medium text-left rounded-[4px]">
                                <MdDeleteForever className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-9 ">
                    <Flex className="bg-[--border-clr] p-[20px]">
                      <Flex className="px-[15px] grow">
                        <input
                          type="text"
                          placeholder="Enter your coupon code if you have one"
                          className="leading-6 w-80 max-w-full grow h-12 text-sm border-r-0 px-[15px] py-3 rounded-tl-[4px] rounded-bl-[4px]"
                        />
                        <Flex
                          as="button"
                          display={"inline-block"}
                          className="py-4 px-9 h-12 rounded-tr-[4px] rounded-br-[4px] bg-[--primary-orange] hover:bg-[--primary-bg] duration-200 text-white text-sm text-center">
                          Apply Coupon
                        </Flex>
                      </Flex>
                      <Flex className="px-[15px] grow text-right" justifyContent={"space-between"}>
                        <Link href={"/login"}>
                          <Flex
                            as="button"
                            display={"inline-block"}
                            className="py-4 px-9 h-12 rounded-[4px] bg-[--primary-bg] hover:bg-[--primary-orange] duration-200 text-white text-sm text-center">
                            PROCEED TO CHECKOUT
                            <span className="top-1/2 ml-4 right-0 h-[37px] flex px-[10px] text-sm text-[--primary-orange] bg-white font-medium rounded-[4px] items-center">
                              $ {totalPrice.toFixed(2)}
                            </span>
                          </Flex>
                        </Link>
                        <Flex
                          as="button"
                          display={"inline-block"}
                          onClick={clearCart}
                          className="py-4 px-9 h-12 rounded-[4px] bg-[--primary-orange] hover:bg-[--primary-bg] duration-200 text-white text-sm text-center">
                          Clear Cart
                        </Flex>
                      </Flex>
                    </Flex>
                  </div>
                </div>
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

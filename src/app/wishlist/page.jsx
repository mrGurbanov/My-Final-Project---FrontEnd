"use client";
import Link from "next/link";
import Flex from "../../components/Flex";
import "../globals.css";
import { useCart } from "../../components/CartContext";
import { useWishlist } from "../../components/WhisListContext";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";

export default () => {
  const { addToCart } = useCart();

  const {  wishlist, removeFromWishlist } = useWishlist();


  const handleAddToCart = (id) => {    
    let selectedProductToAddToCart = wishlist.find(w => w.id === id);
    addToCart(selectedProductToAddToCart);
  };

  return (
    <>
      <Flex as="section" justifyContent={"center"} className="py-[80px] bg-[--view-cart-bg]">
        <Flex direction={"column"}>
          <h2 className="text-3xl font-semibold uppercase">Wishlist</h2>
          <div className="mt-3">
            <Link href={"/"}>Home</Link>
            <span className="px-2">/</span>
            <span>Wishlist</span>
          </div>
        </Flex>
      </Flex>
      <Flex className="py-[100px]">
        <Flex className="container">
          {wishlist.length === 0 ? (
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
                          Add To Cart
                        </th>
                        <th className="pt-[21px] pb-[22px] px-[45px] uppercase align-bottom whitespace-nowrap text-center">
                          action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map((item) => (
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
                            <td className="p-3 align-middle w-[200px] text-[12px] text-center">
                                <button onClick={() => handleAddToCart(item.id)} className="p-[10px] bg-[--primary-orange] text-white hover:bg-[--primary-bg] duration-300 rounded-[4px]">Add To Cart</button>
                            </td>
                            <td className="p-3 align-middle text-center ">
                              <button
                                onClick={() => removeFromWishlist(item.id)}
                                className="text-white mx-auto hover:bg-[--primary-bg] duration-200 p-[10px] leading-5 flex justify-between items-center bg-[--primary-orange] font-medium text-left rounded-[4px]">
                                <MdDeleteForever className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

"use client";
import "../app/globals.css";
import Link from "next/link";
import Flex from "./Flex";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CartMenu from "./CartMenu";
import { useCart } from "./CartContext";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const toggleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const { cart } = useCart()

  return (
    <div className="relative">
      <header className="w-full">
        <Flex className="header-top py-3 bg-[--primary-bg]">
          <Flex className="container text-[14px]" justifyContent={"space-between"}>
            <Flex className="logo px-[15px]">
              <p className="italic text-[--primary-orange]">Default welcome massage</p>
            </Flex>
            <Flex className="px-[15px] font-thin text-white">
              <Flex className="px-[15px] relative py-[1px] border-r border-r-zinc-600">
                <Flex
                  as="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-[--primary-orange] duration-200">
                  English
                  <FaChevronDown className="ml-1 duration-300" />
                </Flex>
                {isOpen && (
                  <Flex
                    display={"none"}
                    as="ul"
                    direction={"column"}
                    alignItems="none"
                    className="top-dropdown absolute z-10 overflow-hidden duration-[400] px-[15px] top-[35px] text-[--primary-text-clr] [&>li]:border-b border-[235, 235, 235] bg-white">
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/">English</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/">Italiano</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/">Français</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200 border-none">
                      <Link href="/">Türkçe</Link>
                    </li>
                  </Flex>
                )}
              </Flex>
              <Flex className="px-[15px] relative py-[1px]">
                <Flex
                  as="button"
                  onClick={() => setOpen(!Open)}
                  className="hover:text-[--primary-orange] duration-200">
                  USD
                  <FaChevronDown className="ml-1 duration-300" />
                </Flex>
                {Open && (
                  <Flex
                    as="ul"
                    direction={"column"}
                    alignItems="none"
                    className="top-dropdown absolute z-10 overflow-hidden duration-[400] px-[15px] top-[35px] text-[--primary-text-clr] [&>li]:border-b border-[235, 235, 235] bg-white">
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/">$ - USD</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/">Є - EUR</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/">£ - POUND</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200 border-none">
                      <Link href="/">₺ - TRY</Link>
                    </li>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="header-middle py-[30px]">
          <Flex className="container" justifyContent={"space-between"}>
            <Flex className="logo px-[15px]">
              <img
                src="https://furns-react.netlify.app/_ipx/w_1920,q_75/%2Fimages%2Flogo%2Flogo.png?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75"
                alt=""
              />
            </Flex>
            <Flex className="px-[15px] font-thin text-white">
              <Flex className="px-[15px] py-[1px] border-r-2 border-[#ebebeb]">
                <button onClick={toggleOpenSearch} className="text-zinc-600">
                  <FiSearch className="w-6 h-6 hover:text-[--primary-orange] duration-200" />
                </button>
              </Flex>
              <Flex className="px-[15px] py-[1px] border-r-2 border-[#ebebeb]">
                <button onClick={() => setOpenUser(!openUser)} className="text-zinc-600">
                  <FaRegUser className="w-6 h-6 hover:text-[--primary-orange] duration-200" />
                </button>
                {openUser && (
                  <Flex
                    display={"none"}
                    as="ul"
                    direction={"column"}
                    alignItems="none"
                    className="user-dropdown absolute z-10 overflow-hidden duration-[400] right-[165px] px-[15px] top-[115px] text-[--primary-text-clr] [&>li]:border-b border-[235, 235, 235] bg-white">
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/sign-in">Sign in</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200">
                      <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li className="dorpdown-item px-3 py-2 hover:text-[--primary-orange] duration-200 border-none">
                      <Link href="/compare">Compare</Link>
                    </li>
                  </Flex>
                )}
              </Flex>
              <Flex className="px-[15px] py-[1px] relative">
                <button onClick={toggleOpenCart} className="text-zinc-600">
                  <HiOutlineShoppingBag className="w-6 h-6 hover:text-[--primary-orange] duration-200" />
                  <Flex
                    as="span"
                    justifyContent={"center"}
                    className="absolute w-4 h-4 rounded-full text-[11px] -top-0 right-2 bg-[--primary-orange] text-white">
                    {cart.length}
                  </Flex>
                </button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="header-bottom bg-[--primary-bg]">
          <Flex className="container ">
            <Flex className="px-[15px] w-full" justifyContent={"center"}>
              <Flex as="nav" justifyContent={"center"} className="w-full">
                <Flex as="ul">
                  <li className="dropdown-li">
                    <Link href={"/"} className="flex items-center ">
                      Home
                      <FaChevronDown />
                    </Link>
                    <ul>
                      <li><Link href={"/"}>Home 1</Link></li>
                      <li><Link href={"/"}>Home 2</Link></li>
                    </ul>
                  </li>
                  <li className="ml-10 text-white [&>a]:hover:text-[--primary-orange]">
                    <Link className="duration-200 text-sm" href={"/about"}>About</Link>
                  </li>
                  <li className="dropdown-li">
                    <Link href={"/"} className="flex items-center ">
                      Home Furniture <FaChevronDown />
                    </Link>
                    <ul>
                          <li><Link href={"/collection/bedroom"}>Bedroom</Link></li>
                          <li><Link href={"/collection/dining"}>Dining</Link></li>
                          <li><Link href={"/collection/living"}>Living</Link></li>
                        </ul>
                  </li>
                  <li className="dropdown-li">
                    <Link href={"/"} className="flex items-center ">
                      Office Furniture <FaChevronDown />
                    </Link>
                    <ul>
                          <li><Link href={"/collection/lounge"}>Lounge</Link></li>
                          <li><Link href={"/collection/office-chair"}>Office Chair</Link></li>
                          <li><Link href={"/collection/office-table"}>Office Table</Link></li>
                        </ul>
                  </li>
                  <li className="dropdown-li">
                    <Link href={"/"} className="flex items-center ">
                      Hospital Furniture <FaChevronDown />
                    </Link>
                    <ul>
                          <li><Link href={"/collection/hospital-bed"}>Hospital Bed</Link></li>
                          <li><Link href={"/collection/hospital-utility"}>Hospital Utility</Link></li>
                        </ul>
                  </li>
                  <li className="ml-10 text-white [&>a]:hover:text-[--primary-orange]">
                    <Link className="duration-200 text-sm" href={"/contact"}>Contact</Link>
                  </li>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </header>
      <SearchBar isOpen={openSearch} onClose={() => setOpenSearch(false)} />
      <CartMenu isOpen={openCart} onClose={() => setOpenCart(false)} />
    </div>
  );
};

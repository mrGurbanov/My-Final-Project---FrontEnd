import Link from "next/link";
import Flex from "./Flex";
import { GrFormClose } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";

export default ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Flex
          onClick={onClose}
          alignItems="flex-start"
          className=" fixed inset-0 w-fultop-0 duration-300 z-40 bg-[--bg-shadow]"></Flex>
      )}

      <Flex alignItems="start" className={`fixed top-0 pt-[30px] px-[25px] z-50 pb-[25px] duration-500 bg-white w-full ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      >
        <div className="w-1/2 mx-auto text-center">
          <Flex>
            <input
              name="search"
              type="search"
              placeholder="Enter your search keyword..."
              className="modal-search-input border border-r-0 border-[--primary-text-clr] rounded-tr-none rounded-br-none rounded-md w-full px-2 py-3 outline-none"
            />
            <Flex
              as="button"
              justifyContent={"center"}
              type="submit"
              className="w-[60px] h-[50px] text-center text-white bg-[--primary-orange] rounded-tr-md rounded-br-md">
              <FiSearch className="text-xl" />
            </Flex>
          </Flex>
          <Flex className="mt-2">
            <h4>Popular Searches:</h4>
            <Flex as="ul" className="ml-2 [&>li]:mr-2 transition-all">
              <li className="[&>a]:hover:text-[--primary-orange]">
                <Link className="underline duration-150" href={"/search/bed"}>
                  bed
                </Link>
              </li>
              <li className="[&>a]:hover:text-[--primary-orange]">
                <Link className="underline duration-150" href={"/search/chair"}>
                  chair
                </Link>
              </li>
            </Flex>
          </Flex>
          <button
            onClick={onClose}
            className="mt-4 text-center text-[--primary-orange] p-2 bg-transparent border border-[--primary-orange] rounded-md hover:bg-[--primary-orange] hover:text-white duration-200">
            <GrFormClose />
          </button>
        </div>
      </Flex>
    </>
  );
};

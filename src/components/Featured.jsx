import { HiOutlineShoppingBag } from "react-icons/hi2";
import Flex from "./Flex";

export default () => {
  return (
    <Flex justifyContent={"center"}>
      <Flex direction={"column"} justifyContent={"center"} className="text-center mt-[100px]">
        <HiOutlineShoppingBag className="text-[100px] text-[--primary-orange]" />
        <h2 className="mt-[15px] text-xl font-medium">There are no products!</h2>
      </Flex>
    </Flex>
  );
};

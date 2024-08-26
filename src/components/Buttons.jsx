import Link from "next/link";
import SliderButtons from "./SliderButtons";

export default ({buttons}) => {
  return (
    <Link
      href={"/"}
      className=" bg-[--primary-orange] hover:bg-[--primary-bg] duration-200 hover:text-[--primary-orange] inline-block px-9 py-2 text-white mt-10 lg:mt-20">
      <SliderButtons buttons={buttons} />
    </Link>
  );
};

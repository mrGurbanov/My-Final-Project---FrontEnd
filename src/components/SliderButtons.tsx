import Link from "next/link";

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

const SliderButtons: React.FC<{ buttons: ButtonProps[] }> = ({ buttons }) => {
  return buttons.map(({ id, link, text }) => (
    <Link key={id} href={link} className="bg-[--primary-orange] hover:bg-[--primary-bg] duration-200 hover:text-[--primary-orange] inline-block px-9 py-2 text-white mt-10 lg:mt-20">
      <span>{text}</span>
    </Link>
  ));
};

export default SliderButtons;
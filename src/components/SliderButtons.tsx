import Link from "next/link";

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

const SliderButtons: React.FC<{ buttons: ButtonProps[] }> = ({ buttons }) => {
  return buttons.map(({ id, link, text }) => (
    <Link target="_blank" key={id} href={link}>
      <span>{text}</span>
    </Link>
  ));
};

export default SliderButtons;
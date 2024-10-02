import Link from "next/link";
import Flex from "./Flex";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalSlider from "./ModalSlider";
import { GrFormClose } from "react-icons/gr";
import { Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WhisListContext";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1080,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function ProductModals({ isOpen, onClose, product }) {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const {addToWishlist} = useWishlist();

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };


  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <>
      {isOpen && (
        <Flex
          onClick={onClose}
          className=" fixed inset-0 w-fultop-0 duration-300 z-40 bg-[--bg-shadow]"></Flex>
      )}

      <Flex className={`fixed top-0 pt-[30px] px-[25px] z-50 pb-[25px] duration-500 w-full`}>
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <button
              onClick={onClose}
              className="-mt-[10px] -right-[10px] absolute text-center text-white p-1 bg-[--primary-orange] border border-[--primary-orange] rounded-md hover:bg-white hover:text-[--primary-orange] duration-200">
              <GrFormClose />
            </button>
            <Flex className="py-[30px] px-[15px] flex-auto overflow-hidden text-left">
              <Flex className="-mx-[15px] w-full">
                <Flex className="px-[15px] h-[600px] overflow-hidden">
                  <div>
                    <div className="duration-300 relative">
                      <ModalSlider product={product} />
                    </div>
                  </div>
                </Flex>
              </Flex>
              <div className="-mx-[15px] w-full">
                <div className="px-[15px] overflow-hidden">
                  <div className=" p-4 w-full">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">SKU: 1501</p>
                      <p className="text-sm text-gray-600">
                        Availability: 123 in Stock
                      </p>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-orange-500">
                        ${product.price}
                      </span>
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        ${product.price + 22}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Size</label>
                      <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Color</label>
                      <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500">
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                      </select>
                    </div>
                    <div className="flex items-center mb-4">
                      <button
                        onClick={decrementQuantity}
                        className="bg-gray-200 px-3 py-1 rounded-l">
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-10 text-[15px] text-center border-t border-b border-gray-200 py-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none"
                      />
                      <button
                        onClick={incrementQuantity}
                        className="bg-gray-200 px-3 py-1 rounded-r">
                        +
                      </button>
                      <button onClick={handleAddToCart} className="ml-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                        Add to Cart
                      </button>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <button onClick={handleAddToWishlist} className="flex items-center hover:text-[--primary-orange] duration-200">
                        <Heart size={16} className="mr-1" /> Add to wishlist
                      </button>
                      <button className="flex items-center hover:text-[--primary-orange] duration-200">
                        <Share2 size={16} className="mr-1" /> Add to Compare
                      </button>
                    </div>
                    <Flex className="mt-4">
                      <p className="text-sm mr-3 text-gray-600">Share:</p>
                      <div className="flex space-x-2 mt-1">
                        <Link href="#" className="text-gray-600 text-xl hover:text-[--primary-orange] duration-200">
                        <FaFacebookSquare />
                        </Link>
                        <Link href="#" className="text-gray-600 text-xl hover:text-[--primary-orange] duration-200">
                        <FaSquareTwitter />
                        </Link>
                        <Link href="#" className="text-gray-600 text-xl hover:text-[--primary-orange] duration-200">
                        <FaLinkedin />
                        </Link>
                      </div>
                    </Flex>
                  </div>
                </div>
              </div>
            </Flex>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          </Box>
        </Modal>
      </Flex>
    </>
  );
}

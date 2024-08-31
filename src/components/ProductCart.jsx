// ProductCard.js
'use client'
import Link from 'next/link';
import { useCart } from './CartContext';
import Flex from './Flex';

export default function ProductCart({product}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} səbətə əlavə edildi!`);
  };


  return (
    <Flex
            as='article'
            direction={'column'}
            alignItems={"stretch"}
            justifyContent={'space-between'}
            className=" p-4 rounded-xl h-[350px]" 
            >
                <div className="relative w-full">
                    <Link href={`/product/${product.id}`}>
                        <img 
                            className="w-full h-[150px] object-contain rounded-lg rounded-b-none" 
                            src={product.image} 
                            alt="product-img" 
                        />
                    </Link>
                    <span className="absolute capitalize -top-2 right-[-10px] text-[12px] bg-[black] text-white rounded-md px-2 ">{product.category}</span>
                </div>
                <div alignitems={"flex-start"} className="w-full">
                    <h3 className="truncate text-black font-semibold">{product.name}</h3>
                    <span>{product.price} $</span>
                    <span className="ml-3 [&>i]:text-[#FFD43B]" >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        {/* <span> ({product.rating.rate})</span>
                        <div>Seller ({product.rating.count})</div> */}
                    </span>
                </div>
                <button onClick={handleAddToCart} className='text-center bg-black text-white py-2 px-14 rounded-md whitespace-nowrap'>Add to Cart</button>
            </Flex>
  );
};


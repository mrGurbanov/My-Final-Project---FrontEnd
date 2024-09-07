'use client'
import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from './CartContext';

export default function Input({handleAddToCart}) {
  
  const { updateQuantity } = useCart()

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 100) {
      setQuantity(value);
    }
  };

  const incQuantity = () => {
    if (quantity < 100) {
      setQuantity(state => state + 1);
    }
  };

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  };


  return (
    <form onSubmit={e => {
      e.preventDefault();
      
      handleAddToCart(e.currentTarget.quantity.value);
    }} className="flex items-center">
      <div className="flex items-center mr-2">
        <button onClick={e => {
          e.preventDefault();
          decQuantity();
        }} 
        className="px-5 py-1 border rounded-full">-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="100"
          step="1"
          name="quantity"
          className="w-16 text-center bg-white [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button onClick={e => {
          e.preventDefault(); 
          incQuantity()
        }} 
          className="px-4 py-1 border rounded-full">+</button>
      </div>
      <button
      type='submit'
      className="whitespace-nowrap ml-6 flex items-center py-[10px] px-[22px] bg-[--primary-orange] text-white rounded-[4px] cursor-pointer hover:bg-[--primary-bg] duration-200">
        <FaCartShopping className="mr-1" />
        Add to cart
      </button>
    </form>
  );
}
'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import {toast} from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);
  const [totalPrice, setTotalPrice] = useState(0);


////////////////////LOCAL STORAGE/////////////////////////

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalPrice();
  }, [cart]);

//////////////////////////////////////////////////////////

  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const addToCart = (product, inputQuantity) => { 
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + Number(inputQuantity) } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast.success("Product added to Cart")
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => prevCart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
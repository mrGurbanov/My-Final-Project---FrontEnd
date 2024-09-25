"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import products from "../app/data/product-data"; 

const WishListContext = createContext();

const product = products;

export const WishlistProvider = ({ children }) => {
  const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const [wishlist, setWishlist] = useState(savedWishlist);
  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((item) => item.id === product.id);
      if (existingItem) {
        return prevWishlist.map((item) => 
          item.id === product.id ? { ...item, ...product } : item 
        );
      }
      return [...prevWishlist, { ...product }];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  return (
    <WishListContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishlist = () => useContext(WishListContext);
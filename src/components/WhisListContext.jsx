"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const [wishlist, setWishlist] = useState(savedWishlist);
  console.log(wishlist);
  
  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
    toast.success("Product added to Wishlist")
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => [...prevWishlist.filter((item) => item.id !== productId)]);
    toast.error("Product removed to Wishlist")
  };

  return (
    <WishListContext.Provider value={{ wishlist, setWishlist , addToWishlist, removeFromWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishlist = () => useContext(WishListContext);
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartButton from "../components/CartButton";
import { CartProvider } from "../components/CartContext";
import Head from "next/head";
import { WishlistProvider } from "../components/WhisListContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My Final Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <body className="overflow-visible"> 
        <CartProvider>
          <WishlistProvider>
        <Toaster toastOptions={
          {
            position:"top-right",
            style: {
              backgroundColor: "#777",
              color: "white",
            }
          }
        }/>
            <Header />
            <CartButton />
            {children}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

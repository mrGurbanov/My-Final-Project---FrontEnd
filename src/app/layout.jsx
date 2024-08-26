import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Final Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="overflow-visible">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import NavbarVertical from "./components/NavbarVertical";
import MouseLight from "./ui/MouseLight";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="mouse-light">

        <Header />
        <MouseLight />
        </div>
        <div className='flex flex-col md:flex-row md:overflow-hidden'>
          <div className='w-full flex-none md:w-24 fixed '>
            {isSmallScreen ? null : <NavbarVertical />}
          </div>
          <div className='p-6 md:p-12'>
            {children}
          </div>
        </div>
        {isSmallScreen ? <NavbarVertical /> : null}
      </body>
    </html>
  );
};
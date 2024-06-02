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
      <head>
        <link rel="icon" href="/miLogo.jpg" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5F48TGPR');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5F48TGPR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div id="mouse-light">
          <Header />
          <MouseLight />
        </div>
        <div className='flex flex-col md:flex-row md:overflow-hidden'>
          <div className='w-full flex-none md:w-24 fixed'>
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

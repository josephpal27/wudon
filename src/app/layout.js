import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const clashGroteskVariable = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash",
  weight: "100 900",
});

export const metadata = {
  title: "Wudon - A Vision to Deliver World-Class Engineered Wood Solutions for Modern India",
  description: "Wudon embodies a vision to deliver world-class engineered wood solutions for modern India. From our early beginnings, we rapidly built a strong presence across multiple states, driven by quality, technology, and consistent performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${clashGroteskVariable.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

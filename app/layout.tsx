// "use client"
import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const bebas_neue = Bebas_Neue({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-bebas_neue",
  weight: "400"
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins"
});
export const metadata: Metadata = {
  title: "Olufikayomi S. Jetawo",
  description: "Meet Fikayo an highly skilled Fullstack Developer."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas_neue.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}

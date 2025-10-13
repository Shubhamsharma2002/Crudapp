import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navabar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Navabar />
        </div>

        <main className="flex-grow min-h-screen">{children}</main>
        <Footer className="bg-gray-800 text-white text-center p-4" />
      </body>
    </html>
  );
}

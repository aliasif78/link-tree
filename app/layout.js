// Fonts
import { Geist, Geist_Mono } from "next/font/google";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Dependancies
import { ToastContainer } from "react-toastify";

// Styles
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Link Tree",
  description: "A simple link tree for your social media profiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}

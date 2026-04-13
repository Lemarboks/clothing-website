import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Street Wear Co.",
  description: "Urban street wear fashion with customizable options and working cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-gray-900`}
    >
      <body className="min-h-full flex flex-col bg-gray-900">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactButtons />
        </CartProvider>
      </body>
    </html>
  );
}

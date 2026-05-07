import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

export const metadata: Metadata = {
  title: "Sench//Store",
  description: "Mzansi x LDN streetwear shop with editorial product drops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased bg-[#080808]">
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f3efe5]">
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

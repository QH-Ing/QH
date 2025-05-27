import "./globals.css";
import { Inter } from "next/font/google";
import Head from "./head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QH Ingeniería y Servicios",
  description: "Mantenimiento e instalación de bombas hidráulicas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head />
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}> 
        <Header />
        
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

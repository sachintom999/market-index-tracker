"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { AuthProvider } from "@/contexts/auth";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { MarketDataProvider } from "@/contexts/marketData";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <MarketDataProvider>
            {pathname !== "/" ? <Navbar /> : null}
            {children}
            <div>
              <ToastContainer />
            </div>
          </MarketDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

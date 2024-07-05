"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { AuthProvider } from "@/contexts/auth";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { MarketDataProvider } from "@/contexts/marketData";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "IndexPulse",
//   description:
//     "IndexPulse: Your comprehensive tool for tracking stock index values. Stay informed with real-time data, set custom alerts, and visualize market trends effortlessly.",
// };

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
          </MarketDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

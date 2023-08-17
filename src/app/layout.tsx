import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import StoreProvider from "@/redux/StoreProvider";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kubik",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import StoreProvider from "@/providers/StoreProvider";
import Header from "@/components/header/Header";
import {NextSessionProvider} from "@/providers/NextSessionProvider";
import JwtSessionProvider from "@/providers/JwtSessionProvider";
import AppThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kubik",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NextSessionProvider>
            <JwtSessionProvider>
              <AppThemeProvider>
                <Header />
                {children}
              </AppThemeProvider>
            </JwtSessionProvider>
          </NextSessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;

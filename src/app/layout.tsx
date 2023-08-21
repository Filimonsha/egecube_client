import "./globals.css";
import {Inter} from "next/font/google";
import React from "react";
import StoreProvider from "@/redux/StoreProvider";
import Header from "@/components/header/Header";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Kubik",
};

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StoreProvider>
                <Header/>
                {children}
        </StoreProvider>
        </body>
        </html>
    );
};

export default RootLayout;

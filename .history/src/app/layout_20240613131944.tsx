import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miners Nation",
  description: "Staking App for GSD NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThirdwebProvider>
       {children}
</ThirdwebProvider>
        
        
        
        </body>
    </html>
  );
}
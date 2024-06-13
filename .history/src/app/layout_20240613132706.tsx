import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

const laser =localfont(
  {
    src: [
      {
        path: "../fonts/Lazer.ttf",
        weight:"700",
      },
    ],
variable: 
  }
);

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

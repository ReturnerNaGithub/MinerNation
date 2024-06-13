import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

const laser =localFont(
  {
    src: [
      {
        path: "../fonts/Lazer.ttf",
        weight:"700",
      },
    ],
variable: "--font-laser",
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
    <html lang="en" clas {
      constructor(parameters) {
        
      }
    }>
      <body className={inter.className}>

        <ThirdwebProvider>
       {children}
</ThirdwebProvider>
        
        
        
        </body>
    </html>
  );
}

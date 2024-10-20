import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Favicon from './images/favicon.ico';
import BL_logo from './images/BL_logo.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florence Bon Lacorte",
  description: "Florence Bon Lacorte's Portfolio",
  icons: [{ rel: 'icon', url: BL_logo }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="https://johnermy.vercel.app/featuredimg.png" />
      </head>
      <body className={inter.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}

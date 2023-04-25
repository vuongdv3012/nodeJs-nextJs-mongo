import "./globals.css";
import { Nunito } from "next/font/google";
import Head from "./head";
import Navbar from "@/app/components/rootLayout/Navbar";

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={font.className}>{children}</body>
    </html>
  );
}

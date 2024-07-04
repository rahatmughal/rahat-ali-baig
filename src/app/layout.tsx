import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/app/AppLayout";
import { ReactNode } from "react";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

// Define metadata type
export const metadata: Metadata = {
  title: "Rahat Ali Baig | Portfolio",
  description: "Powered by Full Stack Web Developer",
};

// RootLayout component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

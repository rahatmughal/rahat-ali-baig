import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import AppLayout from "@/app/AppLayout";
import { ReactNode } from "react";

// Initialize Inter font
const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300", "400", "500","600","700"] });

// Define metadata type
export const metadata: Metadata = {
  title: "Rahat Ali Baig | Portfolio",
  description: "Powered by Full Stack Web Developer",
};

// RootLayout component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import AppLayout from "@/app/AppLayout";
import { ReactNode } from "react";

// Initialize Inter font
const inter = DM_Sans({ subsets: ["latin"] });

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

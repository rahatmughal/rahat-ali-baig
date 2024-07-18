"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <About />
      <div className="h-screen"></div>
    </main>
  );
}

"use client";

import About from "@/components/About";
import Career from "@/components/Career";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
      <Career />
      <div className="w-full h-screen bg-white/10"></div>
      {/* <Services /> */}
    </main>
  );
}

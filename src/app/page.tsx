"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      {/* <About /> */}
    </main>
  );
}

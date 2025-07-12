"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle, 
  NavbarLogo, 
  NavbarButton 
} from "@/components/ui/resizable-navbar";
import { WobbleCard as WobbleCardHome } from "@/components/ui/wobble-card";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Typewriter effect for supporting text
  function useTypewriter(text: string, speed: number) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(0);
      if (!text) return;
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);

    return text.slice(0, index);
  }
  const typewriterText = useTypewriter(
    "We help digital creators and personal brands scale with strategy, authenticity, and automation",
    80
  );

  return (
    <div className="relative min-h-screen w-full scroll-smooth">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-[860px] opacity-50" />
      
      {/* Navigation */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="text-xl" />
          <NavbarButton href="/dashboard" variant="primary" className="text-xl px-8 py-3">
            Dashboard
          </NavbarButton>
        </NavBody>
      </Navbar>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={false} onClick={() => {}} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={false} onClose={() => {}}>
          <NavItems items={navItems} onItemClick={() => {}} className="text-xl" />
          <NavbarButton href="/dashboard" variant="primary" className="w-full text-xl px-8 py-3">
            Dashboard
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>

      {/* Home Section */}
      <section id="home" className="relative z-10 flex min-h-screen items-center justify-center scroll-mt-32">
        <div className="text-center text-white">
          <motion.h1
            className="mb-6 text-6xl font-bold tracking-tight"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, duration: 0.7 }}
          >
            GAIA
          </motion.h1>
          <h2 className="mb-4 text-3xl font-semibold text-gray-200">
            Empowering Creators.  Evolving Brands.
          </h2>
          <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto min-h-[2.5em]">
            {typewriterText}
          </p>
          <div className="flex justify-center">
            <NavbarButton href="/dashboard" variant="primary" className="text-lg px-8 py-3 mx-auto">
              Dashboard
            </NavbarButton>
          </div>
        </div>
      </section>
      {/* 3-card grid using WobbleCardHome */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mx-auto mt-16 px-4">
        <WobbleCardHome containerClassName="bg-gradient-to-br from-pink-400 to-purple-400 w-[300px] h-[300px]" className="w-full h-full">
          <div className="flex flex-col h-full items-center justify-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Box 1</h3>
            <p className="text-lg text-white/90">Box 1 text</p>
          </div>
        </WobbleCardHome>
        <WobbleCardHome containerClassName="bg-gradient-to-br from-blue-400 to-indigo-400 w-[300px] h-[300px]" className="w-full h-full">
          <div className="flex flex-col h-full items-center justify-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Box 2</h3>
            <p className="text-lg text-white/90">Box 2 text</p>
          </div>
        </WobbleCardHome>
        <WobbleCardHome containerClassName="bg-gradient-to-br from-cyan-400 to-blue-300 w-[300px] h-[300px]" className="w-full h-full">
          <div className="flex flex-col h-full items-center justify-center">
            <h3 className="text-2xl font-bold mb-2 text-white">Box 3</h3>
            <p className="text-lg text-white/90">Box 3 text</p>
          </div>
        </WobbleCardHome>
      </div>
      <Footer />
    </div>
  );
}

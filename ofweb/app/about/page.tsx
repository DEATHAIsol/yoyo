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
import Footer from "../components/Footer";

export default function About() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative min-h-screen w-full scroll-smooth">
      <BackgroundBeams className="opacity-50" />
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="text-xl" />
          <NavbarButton href="/dashboard" variant="primary" className="text-xl px-8 py-3">
            Dashboard
          </NavbarButton>
        </NavBody>
      </Navbar>
      <section className="min-h-screen flex flex-col items-center justify-center scroll-mt-32">
        <h2 className="text-5xl font-bold text-white mb-6">About Us</h2>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-8">
          Learn more about our mission, our team, and how we are changing the web development landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="rounded-2xl bg-white/80 dark:bg-black/60 p-8 shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">Box 1</h3>
            <p className="text-lg">Box 1 text</p>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-black/60 p-8 shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">Box 2</h3>
            <p className="text-lg">Box 2 text</p>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-black/60 p-8 shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">Box 3</h3>
            <p className="text-lg">Box 3 text</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 
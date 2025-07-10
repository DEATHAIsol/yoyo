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

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black scroll-smooth">
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
          <h1 className="mb-6 text-6xl font-bold tracking-tight">
            GAIA
          </h1>
          <h2 className="mb-4 text-3xl font-semibold text-gray-200">
            Empowering Creators. Evolving Brands.
          </h2>
          <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto">
            We help digital creators and personal brands scale with strategy, authenticity, and automation.
          </p>
          <div className="flex justify-center">
            <NavbarButton href="/dashboard" variant="primary" className="text-lg px-8 py-3 mx-auto">
              Dashboard
            </NavbarButton>
          </div>
        </div>
      </section>
      {/* Black spacer for two full scrolls at the bottom */}
      <div className="w-full h-[200vh] bg-black" />
    </div>
  );
}

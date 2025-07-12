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
import { WobbleCard } from "@/components/ui/wobble-card";
import Footer from "../components/Footer";

export default function Contact() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative min-h-screen w-full scroll-smooth flex flex-col items-center justify-center">
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
      <section className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-16">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <WobbleCard containerClassName="bg-gradient-to-br from-pink-500 to-purple-500" className="h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">General Contact</h3>
                <p className="text-lg text-white/90 mb-6">Have a question or want to say hello? Reach out and we’ll get back to you as soon as possible.</p>
              </div>
              <div className="text-white/80 text-sm">Email: hello@gaia.com</div>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="bg-gradient-to-br from-blue-500 to-indigo-500" className="h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Partnerships</h3>
                <p className="text-lg text-white/90 mb-6">Interested in collaborating or partnering with Gaia? Let’s create something amazing together.</p>
              </div>
              <div className="text-white/80 text-sm">Email: partners@gaia.com</div>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="bg-gradient-to-br from-cyan-500 to-blue-400" className="h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Support</h3>
                <p className="text-lg text-white/90 mb-6">Need help or have an issue? Our support team is here to assist you with anything you need.</p>
              </div>
              <div className="text-white/80 text-sm">Email: support@gaia.com</div>
            </div>
          </WobbleCard>
        </div>
      </section>
      <Footer />
    </div>
  );
} 
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
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black scroll-smooth">
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
        <div className="w-full max-w-4xl">
          <Timeline
            data={[
              {
                title: "Founded 2022",
                content: <p className="text-white text-lg">Gaia was founded with a vision to empower creators and brands through strategy, authenticity, and automation.</p>,
              },
              {
                title: "First 100 Clients",
                content: <p className="text-white text-lg">We quickly grew our client base, helping digital creators scale their presence and impact across platforms.</p>,
              },
              {
                title: "Team Expansion",
                content: <p className="text-white text-lg">Our team expanded with talented strategists, designers, and engineers dedicated to our mission.</p>,
              },
              {
                title: "New Services Launched",
                content: <p className="text-white text-lg">We introduced new automation and analytics services, making it easier for creators to grow and monetize.</p>,
              },
              {
                title: "Looking Ahead",
                content: <p className="text-white text-lg">We continue to innovate, building tools and strategies to help the next generation of creators thrive.</p>,
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
} 
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
import { Tabs } from "@/components/ui/tabs";
import Footer from "../components/Footer";

export default function Services() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative min-h-[120vh] w-full scroll-smooth">
      <BackgroundBeams className="absolute inset-0 w-full h-full opacity-50" />
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="text-xl" />
          <NavbarButton href="/dashboard" variant="primary" className="text-xl px-8 py-3">
            Dashboard
          </NavbarButton>
        </NavBody>
      </Navbar>
      <section className="min-h-screen flex flex-col items-center justify-center pt-0 pb-24">
        <h2 className="text-5xl font-bold text-white mb-6">Services</h2>
        <p className="text-xl text-gray-300 max-w-2xl text-center mb-8">
          Discover our range of services designed to help you build, launch, and scale your projects efficiently.
        </p>
        <div className="w-full max-w-2xl">
          <Tabs
            containerClassName="justify-center"
            tabs={[
              {
                title: "Strategy",
                value: "strategy",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Strategy</h3>
                    <p>
                      We analyze the latest shifts in digital platforms and combine them with your unique objectives to craft a personalized roadmap for growth. Our strategies are data-driven, leveraging insights from top-performing creators and emerging trends to ensure you’re always ahead of the curve. We work with you to set clear milestones, identify key opportunities, and adapt your approach as the landscape evolves, ensuring sustainable and scalable success.
                    </p>
                  </div>
                ),
              },
              {
                title: "Automation",
                value: "automation",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Automation</h3>
                    <p>
                      We implement cutting-edge automation solutions that handle repetitive tasks, from content scheduling to audience engagement. Our systems integrate seamlessly with your existing workflow, allowing you to focus on creativity while we take care of the logistics. With automated analytics, reminders, and publishing, you’ll save hours each week and maintain a consistent, professional presence across all platforms.
                    </p>
                  </div>
                ),
              },
              {
                title: "Branding",
                value: "branding",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Branding</h3>
                    <p>
                      We help you define and refine every aspect of your brand, from logo and color palette to voice and messaging. Our branding experts work closely with you to ensure your online presence is cohesive, memorable, and authentic. We create brand guidelines, design assets, and storytelling frameworks that resonate with your target audience and set you apart from the competition.
                    </p>
                  </div>
                ),
              },
              {
                title: "Monetization",
                value: "monetization",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Monetization</h3>
                    <p>
                      We develop comprehensive monetization strategies tailored to your niche and audience. From digital products and memberships to sponsorships and ad revenue, we identify the best opportunities for income growth. Our team assists with pricing models, value proposition development, and targeted marketing campaigns to ensure you’re capturing maximum value from every channel.
                    </p>
                  </div>
                ),
              },
              {
                title: "Content Planning",
                value: "content-planning",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Content Planning</h3>
                    <p>
                      We provide you with detailed content calendars, including topic ideas, posting schedules, and format recommendations based on current trends. Our team analyzes what’s working in your space and crafts content formulas designed to boost engagement and conversions. You’ll always know what to post, when to post, and how to optimize your content for maximum impact.
                    </p>
                  </div>
                ),
              },
              {
                title: "Audience Growth",
                value: "audience-growth",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Audience Growth</h3>
                    <p>
                      We use proven growth tactics tailored to each platform’s unique algorithm and culture. Our approach focuses on building genuine relationships with your audience, encouraging interaction, and fostering community. We help you identify and leverage growth opportunities, from collaborations and challenges to targeted outreach and viral content strategies.
                    </p>
                  </div>
                ),
              },
              {
                title: "Creative Direction",
                value: "creative-direction",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Creative Direction</h3>
                    <p>
                      Our creative team collaborates with you to develop compelling concepts and visual themes that reflect your unique voice. We create moodboards, storyboards, and narrative structures that guide your content creation process. Whether you’re launching a new series or refreshing your brand, we ensure every piece of content aligns with your vision and resonates with your audience.
                    </p>
                  </div>
                ),
              },
              {
                title: "Analytics",
                value: "analytics",
                content: (
                  <div className="p-6 text-lg text-gray-200">
                    <h3 className="text-2xl font-semibold mb-2">Analytics</h3>
                    <p>
                      We set up custom analytics dashboards that track your key metrics across all platforms. Our weekly reports break down what’s working, what needs improvement, and where new opportunities lie. With actionable insights and clear visualizations, you’ll make informed decisions and continuously refine your strategy for optimal results.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
} 
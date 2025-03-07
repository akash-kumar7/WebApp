import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

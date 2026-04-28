import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ExperienceSection from "../components/ExperienceSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const navLinks = [
  { id: "about", label: "About" },
  { id: "stats", label: "Stats" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function KingsleyPortfolio({ navigateTo }) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 80);
      const sections = ["home", "about", "stats", "experience", "services", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#000", color: "#fff", minHeight: "100vh" }}>
      <NavBar navScrolled={navScrolled} activeSection={activeSection} navLinks={navLinks} scrollTo={scrollTo} navigateTo={navigateTo} />
      <HeroSection scrollTo={scrollTo} />
      <AboutSection scrollTo={scrollTo} navigateTo={navigateTo} />
      <StatsSection />
      <ExperienceSection scrollTo={scrollTo} />
      <ServicesSection />
      <ContactSection />
      <Footer navLinks={navLinks} scrollTo={scrollTo} navigateTo={navigateTo} />
    </div>
  );
}

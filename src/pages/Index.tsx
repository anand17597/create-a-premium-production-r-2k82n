import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import OurStory from "@/components/OurStory";
import GuestReviews from "@/components/GuestReviews";
import FeaturedMenu from "@/components/FeaturedMenu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const sections = ["hero", "specialties", "our-story", "menu", "reviews", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <main>
        <Hero id="hero" scrollToSection={scrollToSection} />
        <Specialties id="specialties" />
        <OurStory id="our-story" />
        <FeaturedMenu id="menu" />
        <GuestReviews id="reviews" />
        <Contact id="contact" />
      </main>
      <Footer />
      <BackToTopButton />
      <FloatingWhatsAppButton />
    </>
  );
};

export default Index;
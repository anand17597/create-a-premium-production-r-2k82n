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
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Adjust this to make it active when section is in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = sectionRefs.current[id];
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = sectionRefs.current[id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Helper to assign refs
  const setSectionRef = useCallback((id: string) => (node: HTMLElement | null) => {
    sectionRefs.current[id] = node;
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="min-h-screen">
        <Hero id="hero" ref={setSectionRef("hero")} scrollToSection={scrollToSection} />
        <Specialties id="specialties" ref={setSectionRef("specialties")} />
        <OurStory id="our-story" ref={setSectionRef("our-story")} />
        <FeaturedMenu id="menu" ref={setSectionRef("menu")} />
        <GuestReviews id="reviews" ref={setSectionRef("reviews")} />
        <Contact id="contact" ref={setSectionRef("contact")} />
      </main>
      <Footer />
      <BackToTopButton scrollToSection={scrollToSection} />
      <FloatingWhatsAppButton phoneNumber="+917010190110" />
    </>
  );
};

export default Index;
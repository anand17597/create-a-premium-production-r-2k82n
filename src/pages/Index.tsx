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
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Callback to scroll to a specific section
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Effect to handle scroll and update active section
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Handle back-to-top button visibility
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

      <Hero id="hero" scrollToSection={scrollToSection} ref={(el) => (sectionRefs.current.hero = el)} />
      <Specialties id="specialties" ref={(el) => (sectionRefs.current.specialties = el)} />
      <OurStory id="our-story" ref={(el) => (sectionRefs.current.our_story = el)} />
      <GuestReviews id="reviews" ref={(el) => (sectionRefs.current.reviews = el)} />
      <FeaturedMenu id="menu" ref={(el) => (sectionRefs.current.menu = el)} />
      <Contact id="contact" ref={(el) => (sectionRefs.current.contact = el)} />
      <Footer scrollToSection={scrollToSection} />

      <FloatingWhatsAppButton />
      {showBackToTop && <BackToTopButton scrollToSection={scrollToSection} />}
    </div>
  );
};

export default Index;
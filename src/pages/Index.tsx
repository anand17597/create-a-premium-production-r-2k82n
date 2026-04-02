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

  // Intersection Observer to determine active section
  useEffect(() => {
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
        rootMargin: '-50% 0px -50% 0px', // When the middle of the section is in the viewport
        threshold: 0, // No threshold, just entry.isIntersecting
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  // Scroll listener for BackToTopButton
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

      <Hero id="hero" ref={(el) => (sectionRefs.current.hero = el)} scrollToSection={scrollToSection} />
      <Specialties id="specialties" ref={(el) => (sectionRefs.current.specialties = el)} />
      <OurStory id="our-story" ref={(el) => (sectionRefs.current['our-story'] = el)} />
      <FeaturedMenu id="menu" ref={(el) => (sectionRefs.current.menu = el)} />
      <GuestReviews id="reviews" ref={(el) => (sectionRefs.current.reviews = el)} />
      <Contact id="contact" ref={(el) => (sectionRefs.current.contact = el)} />
      <Footer scrollToSection={scrollToSection} />

      <BackToTopButton show={showBackToTop} />
      <FloatingWhatsAppButton phoneNumber="1234567890" message="Hello, I'd like to inquire about Workfast Restaurant." />
    </div>
  );
};

export default Index;
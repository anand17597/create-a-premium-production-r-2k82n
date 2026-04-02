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
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Not directly used in Index.tsx, but good to have.

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
        rootMargin: '0px',
        threshold: 0.3, // Percentage of the target element which is currently visible
      }
    );

    // Observe all sections
    // This effect runs once on mount, so sectionRefs.current will be populated
    // after the initial render of child components.
    // We need to re-observe if sectionRefs.current changes, but for static sections,
    // it's fine to observe once.
    const currentRefs = Object.values(sectionRefs.current);
    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Helper to set refs dynamically
  const setRef = useCallback((id: string) => (element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  }, []);

  return (
    <>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <main>
        <Hero id="hero" ref={setRef("hero")} scrollToSection={scrollToSection} />
        <Specialties id="specialties" ref={setRef("specialties")} />
        <OurStory id="our-story" ref={setRef("our-story")} />
        <FeaturedMenu id="menu" ref={setRef("menu")} scrollToSection={scrollToSection} />
        <GuestReviews id="guest-reviews" ref={setRef("guest-reviews")} />
        <Contact id="contact" ref={setRef("contact")} />
      </main>
      <Footer scrollToSection={scrollToSection} />
      <BackToTopButton scrollToSection={scrollToSection} />
      <FloatingWhatsAppButton phoneNumber="+917010190110" />
    </>
  );
};

export default Index;
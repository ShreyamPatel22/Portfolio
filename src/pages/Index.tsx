import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation
            key="intro"
            onComplete={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      {!showIntro && (
        <main className="bg-background min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;

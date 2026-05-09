import { useState } from "react";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";
import { ScrollProgress } from "../components/ui/ScrollProgress";
import { AnimatePresence } from "motion/react";

export function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

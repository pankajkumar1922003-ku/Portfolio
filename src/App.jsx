import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HackerIntro from "./Components/HackerIntro";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Experience from "./Components/Experience";
import FeaturedProjects from "./Components/FeaturedProjects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <AnimatePresence mode="wait">
        {showIntro && (
          <HackerIntro
            onComplete={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <Hero />
          <About/>
          <TechStack/>
          <Experience/>
          <FeaturedProjects/>
          <Education/>
          <Contact/>
        </>
      )}
    </main>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Your section and component imports
import { HeroSection } from './sections/HeroSection';
import { WorkSection } from './sections/WorkSection';
import { TechnologiesSection } from './sections/TechnologiesSection';
import { ContactFooterSection } from './sections/ContactFooterSection';
import { SocialLinks } from './components/SocialLinks';
import { LoadingScreen } from './components/LoadingScreen'; // Import the new, advanced loading screen

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Using a timer to simulate asset loading.
    // 3000ms (3 seconds) is a good duration to see the new animation.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-['Poppins'] text-white bg-[#0F0E0E]">
      {/* AnimatePresence is crucial for the exit animation to work */}
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* When loading is finished, the main app content appears.
          The `!isLoading` check prevents it from rendering in the background. */}
      {!isLoading && (
        <motion.div
          key="main-app"
          className="relative" // Changed from static for proper stacking
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Delay ensures loading screen is gone
        >
          {/* Hero Section (Sticky) */}
          <HeroSection />

          {/* Scrollable Content */}
          <div className="relative z-10 bg-[#0F0E0E]">
            <WorkSection />
            <TechnologiesSection />
            <ContactFooterSection />
          </div>

          {/* Side Elements (Fixed) */}
          <SocialLinks />
        </motion.div>
      )}
    </div>
  );
};

export default App;
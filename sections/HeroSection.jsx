import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollIndicator } from "../components/ScrollIndicator";
import heroBgImage from "../src/assets/img5.png";
import logo from "../src/assets/logo.svg";

export const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const positions = [
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
  ];
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositionIndex(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [positions.length]);

  const navItems = [
    { number: "01.", label: "Work", href: "#work" },
    { number: "02.", label: "Contact", href: "#contact" },
  ];

  // --- OPTIMIZED ANIMATION VARIANTS ---

  // 1. Controls the header's staggered animation (logo and nav)
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3, // Wait a moment before the header appears
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Controls the main content's staggered animation (intro, name, role)
  const mainContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8, // Starts after the header is visible
        staggerChildren: 0.4, // Controls the delay between intro, name, and role
      },
    },
  };

  // General variant for individual items sliding in
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  // Stagger container for the name's letters
  const titleVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  // Animation for each individual letter
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150, // Slightly softer spring for a smoother effect
      },
    },
  };

  const positionVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const firstName = "Kavishka";
  const lastName = "Rashanga";

  return (
    <section className="sticky top-0 h-screen flex flex-col z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at center, rgba(14, 116, 144, 0.3) 0%, transparent 70%),
            linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)),
            url(${heroBgImage})
          `,
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(45, 212, 191, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 212, 191, 0.15) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage: "linear-gradient(90deg, transparent, #fff 50%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #fff 50%, transparent)",
            maskSize: "200% 100%",
            WebkitMaskSize: "200% 100%",
          }}
          initial={{ maskPosition: "150% 0%", WebkitMaskPosition: "150% 0%" }}
          animate={{ maskPosition: "-50% 0%", WebkitMaskPosition: "-50% 0%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />
      </div>

      <div className="relative flex flex-col flex-grow p-6 sm:p-8 md:p-12">
        <motion.header 
          className="flex justify-between items-center z-10"
          initial="hidden"
          animate="visible"
          variants={headerVariants} // Using the new header variant
        >
          <motion.a href="#" className="flex items-center" variants={itemVariants}>
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </motion.a>
          <nav>
            <motion.ul className="flex items-center space-x-6 md:space-x-8" variants={itemVariants}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group flex items-center space-x-2 text-sm leading-5 text-white/90 hover:text-white transition-colors duration-300">
                    <span className="text-white/50 group-hover:text-white/80">{item.number}</span>
                    <span className="font-['Montserrat'] font-semibold uppercase tracking-widest">{item.label}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </nav>
        </motion.header>

        <main className="flex-grow flex items-end justify-center text-center z-10 pb-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={mainContentVariants} // Using the new main content variant
          >
            {/* Each of these direct children will now animate one by one */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-sm leading-10 tracking-widest text-teal-300 mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-8xl font-semibold text-white flex justify-center overflow-hidden"
                variants={titleVariants}
                // No initial/animate needed here, it's controlled by the parent
              >
                {firstName.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-8xl font-semibold text-white flex justify-center overflow-hidden"
                variants={titleVariants}
              >
                {lastName.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPositionIndex}
                  variants={positionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="max-w-xl mx-auto mt-6 text-[15px] font-normal leading-[28px] text-white/70"
                >
                  {positions[currentPositionIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </main>

        <footer className="h-16 z-10" />
        <AnimatePresence>
          {showScrollIndicator && <ScrollIndicator />}
        </AnimatePresence>
      </div>
    </section>
  );
};
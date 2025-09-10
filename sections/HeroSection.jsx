import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ScrollIndicator } from '../components/ScrollIndicator';
import heroBgImage from '../src/assets/img7.png';
import logo from '../src/assets/logo.svg';

export const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const positions = [
    'Full-Stack Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer',
  ];
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { number: '01.', label: 'Work', href: '#work' },
    { number: '02.', label: 'Contact', href: '#contact' },
  ];

  // Logic for interactive background glow
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = { stiffness: 200, damping: 40, mass: 0.1 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
        const { left, top } = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }
  };

  // Animation Variants
  const headerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.2 } } };
  const mainContentVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.2, staggerChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
  const titleVariants = { visible: { transition: { staggerChildren: 0.05 } } };
  const letterVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 150 } } };
  const positionVariants = { enter: { opacity: 0, y: 20 }, center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeIn' } } };

  const firstName = 'Kavishka';
  const lastName = 'Rashanga';

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="sticky top-0 h-screen flex flex-col z-0"
    >
      {/* Backgrounds and Static Grids (Layer 0) */}
      <div className="absolute inset-0 bg-[#0F0E0E] z-0" />
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

       {/* Decorative Background Glows */}
       <motion.div aria-hidden="true" className="absolute inset-0 w-full h-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, ease: "easeOut" }}>
          <div className="absolute top-0 left-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-transparent to-transparent blur-3xl" />
          <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent blur-3xl" />
      </motion.div>

      {/* Main Content Container (Layer 10) - Everything else goes inside here */}
      <div className="relative flex flex-col flex-grow p-6 sm:p-8 md:p-12 z-10">
        <motion.header
          className="relative flex justify-between items-center z-30" // Added 'relative' for glow positioning
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          {/* Header Glow Effect */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-teal-900/50 to-transparent blur-2xl"
            variants={itemVariants}
          />
          <motion.a href="#" className="relative z-10 flex items-center" variants={itemVariants}>
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </motion.a>
          <nav className="relative z-10">
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

        <main className="relative flex-grow flex flex-col items-center justify-end text-center pb-8">
          {/* Image (Layer 10) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <motion.img
              src={heroBgImage}
              alt="Kavishka Rashanga"
              className="w-auto h-full max-h-[85vh] object-contain"
              style={{
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 95%)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Dark Gradient (Layer 20) - Sits on top of the image */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-3/4 bg-gradient-to-t from-[#0F0E0E] via-[#0F0E0E]/90 to-transparent" />

          {/* Interactive Glow (Layer 25) - Sits on top of the gradient */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-25"
            style={{
                background: `radial-gradient(
                    800px circle at ${smoothMouseX}px ${smoothMouseY}px,
                    rgba(45, 212, 191, 0.15),
                    transparent 80%
                )`,
            }}
          />

          {/* Text and Scroll Indicator Container (Layer 30) - Sits on top of everything */}
          <div className="relative z-30 flex flex-col items-center sm-gap-4 md-gap-6">
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              animate="visible"
              variants={mainContentVariants}
            >
              <motion.p variants={itemVariants} className="font-mono text-sm tracking-widest text-teal-300 mb-2">
                Hello, I'm
              </motion.p>

              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.h1 className="text-5xl sm-text-6xl lg-text-8xl font-bold text-white flex justify-center overflow-hidden" variants={titleVariants}>
                  {firstName.split('').map((char, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block">{char}</motion.span>
                  ))}
                </motion.h1>
                <motion.h1 className="text-5xl sm-text-6xl lg-text-8xl font-bold text-white flex justify-center overflow-hidden" variants={titleVariants}>
                  {lastName.split('').map((char, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block">{char}</motion.span>
                  ))}
                </motion.h1>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-4 h-8">
                <AnimatePresence mode="wait">
                  <motion.p key={currentPositionIndex} variants={positionVariants} initial="enter" animate="center" exit="exit" className="text-base font-normal tracking-wider text-white/70">
                    {positions[currentPositionIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </section>
  );
};
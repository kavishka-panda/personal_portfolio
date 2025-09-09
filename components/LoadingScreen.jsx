import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---

// This container now just staggers the exit animation of its children (the stripes)
const stripeContainerVariants = {
  initial: {}, // No initial animation needed for the container itself
  exit: {
    transition: {
      staggerChildren: 0.1, // This delay is applied to each stripe's exit animation
    },
  },
};

// Controls the fade-out of the "Loading..." text
const textContainerVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeOut' }, // Fades out quickly
  },
};

// Pulsing and blinking animations for the text and dots remain the same
const loadingTextVariants = {
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};
const dotsContainerVariants = {
  animate: { transition: { staggerChildren: 0.25 } },
};
const dotVariants = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
};

// A helper function to create the complex, sequential variant for each stripe
const createStripeVariant = (targetColor) => ({
  initial: {
    backgroundColor: '#0F0E0E', // All stripes start black
    y: 0,
  },
  exit: {
    backgroundColor: targetColor, // The final color state
    y: '-100%', // The final position state
    transition: {
      // Animate the background color first
      backgroundColor: { duration: 0.4, ease: 'easeIn' },
      // Animate the y position after a delay, allowing the color change to finish
      y: { duration: 0.8, ease: [0.87, 0, 0.13, 1], delay: 0.4 },
    },
  },
});

export const LoadingScreen = () => {
  // Define the target colors for our stripes
  const stripeColors = ['#22d3ee', '#22d3ee', '#22d3ee']; // Tailwind: cyan-400, cyan-800, cyan-400

  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Three Stripes Background with Staggered, Sequential Exit */}
      <motion.div
        className="absolute inset-0 flex"
        variants={stripeContainerVariants}
        initial="initial"
        exit="exit"
      >
        {stripeColors.map((color, index) => (
          <motion.div
            key={index}
            // Each stripe gets its own complex variant with its target color
            variants={createStripeVariant(color)}
            className="flex-1"
          />
        ))}
      </motion.div>

      {/* Flashing "Loading..." Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={textContainerVariants}
        exit="exit" // This makes the text fade out on exit
      >
        <div className="flex items-baseline text-3xl font-light text-white/80 tracking-widest">
          <motion.span variants={loadingTextVariants} animate="animate">
            LOADING
          </motion.span>
          <motion.div className="flex" variants={dotsContainerVariants} animate="animate">
            {['.', '.', '.'].map((dot, index) => (
              <motion.span key={index} variants={dotVariants}>
                {dot}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
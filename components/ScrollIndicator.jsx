import React from 'react';
import { motion } from 'framer-motion';

const ScrollMouseIcon = () => (
    <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="24" height="38" rx="12" stroke="white" strokeWidth="2" />
        <motion.circle
            cx="13"
            cy="13"
            r="3"
            fill="white"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        />
    </svg>
);

export const ScrollIndicator = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
    >
        <ScrollMouseIcon />
    </motion.div>
);
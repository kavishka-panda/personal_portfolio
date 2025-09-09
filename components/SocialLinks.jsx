import React from 'react';
import { motion } from 'framer-motion';
import { BehanceIcon, DribbbleIcon, LinkedInIcon } from './icons';

const SocialLink = ({ children }) => (
    <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

export const SocialLinks = () => (
    <>
        <motion.div
            className="fixed bottom-0 left-6 sm:left-8 md:left-12 z-20 hidden md:flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
        >
            <div className="flex flex-col items-center space-y-6">
                <SocialLink><BehanceIcon className="w-5 h-5" /></SocialLink>
                <SocialLink><DribbbleIcon className="w-5 h-5" /></SocialLink>
                <SocialLink><LinkedInIcon className="w-5 h-5" /></SocialLink>
            </div>
            <div className="h-24 w-px bg-white/20 mt-6"></div>
        </motion.div>

        <motion.div
            className="fixed bottom-0 right-6 sm:right-8 md:right-12 z-20 hidden md:flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
        >
            <a href="mailto:kavishkarashanga111@gmail.com" className="[writing-mode:vertical-rl] font-normal text-sm leading-5 uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300 pb-6">
                kavishkarashanga111@gmail.com
            </a>
            <div className="h-24 w-px bg-white/20"></div>
        </motion.div>
    </>
);
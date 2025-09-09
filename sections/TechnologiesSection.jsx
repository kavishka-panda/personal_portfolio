import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    HtmlIcon,
    CssIcon,
    JavaScriptIcon, 
    TypeScriptIcon, 
    ReactIcon, 
    NextjsIcon, 
    TailwindCssIcon,
    BootstrapIcon,
    NodejsIcon, 
    PythonIcon,
    JavaIcon, 
    PhpIcon,
    LaravelIcon,
    SqlIcon,
    FirebaseIcon,
    MongoDbIcon
} from '../components/TechIcons';
import { ConnectingLines } from '../components/ConnectingLines';

export const TechnologiesSection = () => {
    const frontendTechs = [
        { name: "HTML5", icon: <HtmlIcon /> },
        { name: "CSS3", icon: <CssIcon /> },
        { name: "JavaScript", icon: <JavaScriptIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "Next.js", icon: <NextjsIcon /> },
        { name: "Tailwind CSS", icon: <TailwindCssIcon /> },
        { name: "Bootstrap", icon: <BootstrapIcon /> },
    ];
    
    const backendTechs = [
        { name: "Node.js", icon: <NodejsIcon /> },
        { name: "Python", icon: <PythonIcon /> },
        { name: "Java", icon: <JavaIcon /> },
        { name: "PHP", icon: <PhpIcon /> },
        { name: "Laravel", icon: <LaravelIcon /> },
        { name: "SQL", icon: <SqlIcon /> },
        { name: "Firebase", icon: <FirebaseIcon /> },
        { name: "MongoDB", icon: <MongoDbIcon /> },
    ];
    
    // ... All hooks and logic remain unchanged ...
    const [frontendPositions, setFrontendPositions] = useState([]);
    const [backendPositions, setBackendPositions] = useState([]);
    const frontendContainerRef = useRef(null);
    const backendContainerRef = useRef(null);
    const frontendItemRefs = useRef([]);
    const backendItemRefs = useRef([]);
    
    useLayoutEffect(() => {
        const calculatePositions = (containerRef, itemRefs, setPositions) => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const newPositions = itemRefs.current.map((el) => {
                    if (!el) return { x: 0, y: 0 };
                    const rect = el.getBoundingClientRect();
                    return {
                        x: rect.left - containerRect.left + rect.width / 2,
                        y: rect.top - containerRect.top + rect.height / 2,
                    };
                });
                setPositions(newPositions);
            }
        };
        const runCalculations = () => {
            calculatePositions(frontendContainerRef, frontendItemRefs, setFrontendPositions);
            calculatePositions(backendContainerRef, backendItemRefs, setBackendPositions);
        };
        runCalculations();
        const resizeObserver = new ResizeObserver(runCalculations);
        if (frontendContainerRef.current) resizeObserver.observe(frontendContainerRef.current);
        if (backendContainerRef.current) resizeObserver.observe(backendContainerRef.current);
        window.addEventListener("resize", runCalculations);
        return () => {
            window.removeEventListener("resize", runCalculations);
            if (frontendContainerRef.current) resizeObserver.unobserve(frontendContainerRef.current);
            if (backendContainerRef.current) resizeObserver.unobserve(backendContainerRef.current);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
    };

    return (
        <section id="tech" className="relative overflow-hidden py-24 px-6 sm:px-8 md:px-12 lg:px-24">
             <motion.div aria-hidden="true" className="absolute inset-0 w-full h-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, ease: "easeOut" }}>
                <div className="absolute top-0 left-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-transparent to-transparent blur-3xl" />
                {/* REVERTED: Background glow is amber-themed */}
                <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent blur-3xl" />
            </motion.div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="font-semibold text-sm uppercase tracking-[2px] text-white/80 whitespace-nowrap">My Toolkit</h2>
                        <div className="w-full h-px bg-white/20" />
                    </div>
                    <h3 className="text-5xl sm:text-6xl font-semibold text-white mb-8">Technologies I Use</h3>
                    <p className="max-w-3xl text-[15px] font-normal leading-[28px] text-white/70 mb-16">
                        I leverage a modern tech stack for both frontend and backend development, focusing on creating efficient, scalable, and user-friendly applications.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {/* Frontend Section */}
                    <div>
                        <h4 className="text-2xl font-bold text-teal-300 mb-8">Frontend Development</h4>
                        <div className="relative">
                            <ConnectingLines 
                                positions={frontendPositions} 
                                color="rgb(45, 212, 191)" 
                                glowColor="rgba(45, 212, 191, 0.4)" 
                                staticColor="rgba(255, 255, 255, 0.07)" // Default faint white static line
                            />
                            <motion.ul ref={frontendContainerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-mono relative z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                                {frontendTechs.map((tech, index) => (
                                    <motion.li key={tech.name} ref={(el) => { frontendItemRefs.current[index] = el; }} className="bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:border-teal-300/30 hover:text-teal-300 hover:scale-105 transition-all duration-300 rounded-lg p-4 flex flex-col items-center justify-center text-center relative gap-3 shadow-lg" variants={itemVariants}>
                                        {tech.icon}
                                        <span>{tech.name}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                    {/* Backend Section */}
                    <div>
                        {/* REVERTED: Title color is now amber */}
                        <h4 className="text-2xl font-bold text-amber-400 mb-8">Backend Development</h4>
                        <div className="relative">
                            {/* REVERTED & UPDATED: Line/glow colors are amber, and the static line is now a faint amber */}
                            <ConnectingLines 
                                positions={backendPositions} 
                                color="rgb(251, 191, 36)" 
                                glowColor="rgba(251, 191, 36, 0.4)" 
                                staticColor="rgba(251, 191, 36, 0.1)"
                            />
                            <motion.ul ref={backendContainerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-mono relative z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                                {backendTechs.map((tech, index) => (
                                    <motion.li 
                                        key={tech.name} 
                                        ref={(el) => { backendItemRefs.current[index] = el; }} 
                                        // REVERTED: Hover colors are now amber
                                        className="bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:border-amber-400/30 hover:text-amber-400 hover:scale-105 transition-all duration-300 rounded-lg p-4 flex flex-col items-center justify-center text-center relative gap-3 shadow-lg" 
                                        variants={itemVariants}
                                    >
                                        {tech.icon}
                                        <span>{tech.name}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
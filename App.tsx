// Remember to install framer-motion: npm install framer-motion
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BehanceIcon,
  DribbbleIcon,
  LinkedInIcon,
  WebflowIcon,
  ExternalLinkIcon,
} from "./components/icons";
// import { ConnectingLines } from "./components/ConnectingLines";
import {
  FigmaIcon,
  JavaIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from "./components/TechIcons";

const SocialLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="text-white/60 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

interface Position {
  x: number;
  y: number;
}

const WorkSection: React.FC = () => {
  const workProjects = [
    {
      category: 'User Interface',
      title: 'mint of creativity',
      description: 'Duis rutrum in purus a tristique. Integer id rhoncus elit. Praesent pellentesque libero massa, non pretium urna porttitor id. Curabitur nec nisl ut diam porttitor placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
      imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projectUrl: '#',
      tags: ['UI/UX Design', 'Figma', 'Branding']
    },
    {
      category: 'Web Development',
      title: 'Project Alpha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projectUrl: '#',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel']
    },
    {
      category: 'Software Build',
      title: 'Innovate App',
      description: 'Aenean et tortor at risus viverra adipiscing at in. Nunc sed velit dignissim sodales ut eu sem. Sit amet consectetur adipiscing elit duis tristique. Pharetra sit amet aliquam id diam maecenas ultricies mi.',
      imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projectUrl: '#',
      tags: ['Node.js', 'TypeScript', 'GraphQL', 'Docker']
    }
  ];

  return (
    <section id="work" className="relative overflow-hidden py-24 px-6 sm:px-8 md:px-12 lg:px-24">
      {/* ===== START: Animated Background Effect ===== */}
      <motion.div 
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/5 h-3/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-800/30 via-transparent to-transparent blur-3xl"
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
      {/* ===== END: Animated Background Effect ===== */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4" >
            <h2 className="font-semibold text-sm uppercase tracking-[2px] text-white/80 whitespace-nowrap">Some things I've built</h2>
            <div className="w-full h-px bg-white/20"></div>
          </div>
          <h3 className="text-5xl sm:text-6xl font-semibold text-white mb-8">my work</h3>
          <p className="max-w-3xl text-[15px] font-normal leading-[28px] text-white/70 mb-16">
            I am a Web Designer from Wisconsin, USA. I've been designing for over a decade. Throughout that time, I've worked remotely with exciting startups and established companies. I provide website design services, working with startups and established companies to improve performance and ease-of-use of their products.
          </p>
        </motion.div>

        <div className="space-y-20">
          {workProjects.map((project, index) => (
            <motion.div 
              key={project.title} 
              className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a 
                href={project.projectUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className={`relative group md:col-span-3 transition-all duration-300 block ${index % 2 !== 0 ? 'md:order-last' : ''}`}
              >
                <img src={project.imageUrl} alt={`${project.title} project`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-teal-900/70 mix-blend-color group-hover:bg-transparent transition-all duration-300"></div>
              </a>
              
              <div className={`md:col-span-2 ${index % 2 !== 0 ? 'text-left' : 'md:text-right'}`}>
                <p className="font-mono text-sm leading-5 text-teal-300 mb-2">{project.category}</p>
                <h4 className="text-2xl font-bold text-white mb-4">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">{project.title}</a>
                </h4>
                
                <p className="text-white/70 text-[14px] leading-relaxed mb-6 text-left">
                  {project.description}
                </p>

                <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-white/60 mb-6 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>

                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-teal-300 hover:text-teal-200 font-semibold text-sm leading-5 group">
                  <span>Visit Website</span>
                  <ExternalLinkIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologiesSection: React.FC = () => {
  const technologies = [
    { name: "JavaScript (ES6+)", icon: <JavaScriptIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextjsIcon /> },
    { name: "Node.js", icon: <NodejsIcon /> },
    { name: "Tailwind CSS", icon: <TailwindCssIcon /> },
    { name: "Java", icon: <JavaIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
  ];

  const [positions, setPositions] = useState<Position[]>([]);

  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useLayoutEffect(() => {
    const calculatePositions = () => {
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

    calculatePositions();

    const resizeObserver = new ResizeObserver(calculatePositions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", calculatePositions);
    return () => {
      window.removeEventListener("resize", calculatePositions);
      resizeObserver.disconnect();
    };
  }, [technologies.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="tech" className="py-24 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-semibold text-sm uppercase tracking-[2px] text-white/80 whitespace-nowrap">
              My Toolkit
            </h2>
            <div className="w-full h-px bg-white/20"></div>
          </div>
          <h3 className="text-5xl sm:text-6xl font-semibold text-white mb-8">
            Technologies I Use
          </h3>
          <p className="max-w-3xl text-[15px] font-normal leading-[28px] text-white/70 mb-16">
            I'm always learning and experimenting with new technologies. Here
            are some of the tools and languages I've been working with recently
            to build modern, scalable web applications.
          </p>
        </motion.div>

        <div className="relative">
          <ConnectingLines positions={positions} />

          <motion.ul
            ref={containerRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-mono relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologies.map((tech, index) => (
              <motion.li
                key={tech.name}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`
                                    bg-[#112240] border border-transparent 
                                    hover:border-teal-300/30 hover:text-teal-300 hover:scale-105
                                    transition-all duration-300 rounded-md p-4 
                                    flex items-center justify-center text-center 
                                    text-white/70 relative
                                `}
                variants={itemVariants}
              >
                <div className="flex items-center gap-4">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

const ContactFooterSection: React.FC = () => (
  <motion.section
    id="contact"
    className="py-24 px-6 sm:px-8 md:px-12 lg:px-24"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-left">
        <div className="flex flex-col items-start mb-8">
          <div className="w-full flex items-center gap-4 mb-4">
            <p className="font-semibold text-sm uppercase tracking-[2px] text-white/80 whitespace-nowrap">
              Contact
            </p>
            <div className="w-full h-px bg-white/20"></div>
          </div>
          <h3 className="text-5xl sm:text-6xl font-semibold text-white">
            say hello
          </h3>
        </div>

        <p className="text-[15px] font-normal leading-[28px] text-white/70 mb-10">
          Although I'm not currently looking for freelance opportunities, my
          inbox is always open. Whether for a potential project or just to say
          hi, I'll try my best to answer your email!
        </p>

        <a
          href="mailto:hello@adrianmurphy.com"
          className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-normal text-sm leading-5 group"
        >
          <span>Send Email</span>
          <ExternalLinkIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>
      </div>

      <footer className="mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <p>© 2019 . WebDev For You . All Rights Reserved</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white/80 transition-colors">
            Style Guide
          </a>
          <a href="#" className="hover:text-white/80 transition-colors">
            Image Licenses
          </a>
        </div>
      </footer>
    </div>
  </motion.section>
);

const App: React.FC = () => {
  const navItems = [
    { number: "01.", label: "Work", href: "#work" },
    { number: "02.", label: "Contact", href: "#contact" },
  ];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-['Poppins'] text-white bg-[#0A192F]">
      {/* Hero Section (Sticky) */}
      <section className="sticky top-0 h-screen flex flex-col z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1609106658915-454eef456286?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#43389F] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#43389F]/30 via-transparent to-transparent"></div>
        <div
          className="absolute top-0 right-0 bottom-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        ></div>

        <div className="relative flex flex-col flex-grow p-6 sm:p-8 md:p-12">
          <header className="flex justify-between items-center z-10">
            <a href="#" className="text-3xl font-bold">
              a.
            </a>
            <nav>
              <ul className="flex items-center space-x-6 md:space-x-8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center space-x-2 text-sm leading-5 text-white/90 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-white/50 group-hover:text-white/80 transition-colors duration-300">
                        {item.number}
                      </span>
                      <span className="font-['Montserrat'] font-semibold uppercase tracking-widest">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <main className="flex-grow flex items-center justify-center text-center z-10 -mt-16">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={heroItemVariants}
                className="relative inline-block mb-4"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-16 h-px bg-white/50"></div>
                <p className="font-semibold text-sm leading-10 uppercase tracking-[2px] text-white/80">
                  Hello
                </p>
              </motion.div>
              <motion.h1
                variants={heroItemVariants}
                className="text-6xl md:text-7xl lg:text-[100px] font-semibold lg:leading-[110px]"
              >
                my name is
                <br />
                adrian murphy
              </motion.h1>
              <motion.p
                variants={heroItemVariants}
                className="max-w-xl mx-auto mt-6 text-[15px] font-normal leading-[28px] text-white/70"
              >
                I work with startups and top companies to design comprehensive,
                compelling, and impactful web designs, specializing in custom
                Webflow theme development.
              </motion.p>
            </motion.div>
          </main>

          <footer className="h-16 z-10"></footer>
        </div>
      </section>

      {/* Scrollable Content */}
      <div className="relative z-10 bg-[#0A192F]">
        <WorkSection />
        <TechnologiesSection />
        <ContactFooterSection />
      </div>

      {/* Side Elements (Fixed) */}
      <motion.div
        className="fixed bottom-0 left-6 sm:left-8 md:left-12 z-20 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="flex flex-col items-center space-y-6">
          <SocialLink>
            <BehanceIcon className="w-5 h-5" />
          </SocialLink>
          <SocialLink>
            <DribbbleIcon className="w-5 h-5" />
          </SocialLink>
          <SocialLink>
            <LinkedInIcon className="w-5 h-5" />
          </SocialLink>
        </div>
        <div className="h-24 w-px bg-white/20 mt-6"></div>
      </motion.div>

      <motion.div
        className="fixed bottom-0 right-6 sm:right-8 md:right-12 z-20 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <a
          href="mailto:hello@adrianmurphy.com"
          className="[writing-mode:vertical-rl] font-normal text-sm leading-5 uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300 pb-6"
        >
          hello@adrianmurphy.com
        </a>
        <div className="h-24 w-px bg-white/20"></div>
      </motion.div>
    </div>
  );
};

export default App;


interface Position {
  x: number;
  y: number;
}

interface ConnectingLinesProps {
  positions: Position[];
}

const getCircuitPathD = (
  startPos: Position,
  endPos: Position,
  index: number
): string => {
  const midX = startPos.x + (endPos.x - startPos.x) / 2;
  const midY = startPos.y + (endPos.y - startPos.y) / 2;

  const style = index % 4;

  switch (style) {
    case 0: // Horizontal -> Vertical -> Horizontal
      return `M${startPos.x},${startPos.y} L${midX},${startPos.y} L${midX},${endPos.y} L${endPos.x},${endPos.y}`;
    case 1: // Vertical -> Horizontal -> Vertical
      return `M${startPos.x},${startPos.y} L${startPos.x},${midY} L${endPos.x},${midY} L${endPos.x},${endPos.y}`;
    case 2: // Horizontal -> Vertical
      return `M${startPos.x},${startPos.y} L${endPos.x},${startPos.y} L${endPos.x},${endPos.y}`;
    case 3: // Vertical -> Horizontal
      return `M${startPos.x},${startPos.y} L${startPos.x},${endPos.y} L${endPos.x},${endPos.y}`;
    default:
      return `M${startPos.x},${startPos.y} L${endPos.x},${endPos.y}`;
  }
};

export const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  positions,
}) => {
  if (positions.length < 2) return null;

  return (
    <>
      <style>
        {`
                    @keyframes flow {
                        from {
                            stroke-dashoffset: 200;
                        }
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                `}
      </style>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ filter: "drop-shadow(0 0 5px rgba(45, 212, 191, 0.2))" }}
      >
        {positions.map((pos1, i) =>
          positions.slice(i + 1).map((pos2, j) => {
            const uniqueKey = `line-${i}-${i + j + 1}`;
            const pathD = getCircuitPathD(pos1, pos2, i + j);
            const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s

            return (
              <g key={uniqueKey}>
                {/* The static background "wire" */}
                <path
                  d={pathD}
                  stroke="rgba(255, 255, 255, 0.07)"
                  strokeWidth="1"
                  fill="none"
                />
                {/* The animated "current" */}
                <path
                  d={pathD}
                  stroke="rgb(45, 212, 191)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="20 180" // A 20px dash followed by a 180px gap
                  style={{
                    animation: `flow ${duration}s linear infinite`,
                  }}
                />
              </g>
            );
          })
        )}
      </svg>
    </>
  );
};

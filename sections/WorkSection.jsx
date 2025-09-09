import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "../components/icons";
import webImage from "../src/assets/web.jpg";
import seImage from "../src/assets/se1.jpg";
import mobileImage from "../src/assets/mobile.jpg";

export const WorkSection = () => {
  // Sample project data restored
  const workProjects = [
    {
      category: "Web Development",
      title: "Mint of Creativity",
      description:
        "I design and develop modern, responsive, and user-friendly websites that blend functionality with aesthetics. My focus is on building scalable web solutions that enhance user experience, optimize performance, and align with client goals. From landing pages to complex platforms, I ensure clean code and seamless deployment.",
      imageUrl: webImage,
      projectUrl: "#",
      tags: ["React.js", "Next.js", "Tailwind", "REST APIs", "MySQL", "Firebase"],
    },
    {
      category: "Mobile Application",
      title: "Pulse of Mobility",
      description:
        "I develop intuitive and engaging mobile applications for both iOS and Android platforms. With a focus on smooth navigation, appealing UI, and optimized performance, my apps are designed to deliver value to users while meeting business objectives. From concept to launch, I ensure a polished and reliable mobile experience.",
      imageUrl: mobileImage,
      projectUrl: "#",
      tags: ["React Native", "Kotlin (Android)", "Firebase", "REST APIs", "Expo"],
    },
    {
      category: "Software Build",
      title: "Forge of Innovation",
      description:
        "I create robust, efficient, and scalable software solutions tailored to solve real-world problems. My expertise spans from designing system architecture to implementing backend logic, ensuring security, and delivering maintainable code. Every build is engineered with performance, flexibility, and future growth in mind.",
      imageUrl: seImage,
      projectUrl: "#",
      tags: ["JavaFX", "Java", "MySQL", "Docker"],
    },
  ];

  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 px-6 sm:px-8 md:px-12 lg:px-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-semibold text-sm uppercase tracking-[2px] text-white/80 whitespace-nowrap">
              Some things I've built
            </h2>
            <div className="w-full h-px bg-white/20" />
          </div>
          <h3 className="text-5xl sm:text-6xl font-semibold text-white mb-8">
            MyWork
          </h3>
          <p className="max-w-3xl text-[15px] font-normal leading-[28px] text-white/70 mb-16">
            I’m a full-stack developer specializing in end-to-end solutions
            across web, mobile, and desktop platforms. Beyond writing code, I
            design and build complete applications—from user interfaces to
            databases and server-side logic—ensuring every layer works
            seamlessly together.
            <br /><br />
            I stay ahead of industry trends by continuously
            learning new tools and frameworks, allowing me to deliver modern,
            scalable, and reliable solutions. Passionate about user experience,
            I focus on building intuitive interfaces while maintaining clean,
            efficient, and maintainable code.
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
              <div
                className={`relative group md:col-span-3 ${
                  index % 2 !== 0 ? "md:order-last" : ""
                }`}
              >
                {/* The Glow: Added saturation for more vibrant color */}
                <div
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                  className="absolute -inset-6 bg-cover bg-center rounded-xl filter blur-3xl saturate-150 opacity-80 transition-all duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block transition-all duration-300"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} project`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </a>
              </div>

              <div
                className={`md:col-span-2 ${
                  index % 2 !== 0 ? "text-left" : "md:text-right"
                }`}
              >
                <p className="font-mono text-sm leading-5 text-teal-300 mb-2">
                  {project.category}
                </p>
                <h4 className="text-2xl font-bold text-white mb-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 transition-colors"
                  >
                    {project.title}
                  </a>
                </h4>

                <p className="text-white/70 text-[14px] leading-relaxed mb-6 text-left">
                  {project.description}
                </p>

                <ul
                  className={`flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-white/60 mb-6 ${
                    index % 2 !== 0 ? "justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-teal-300 hover:text-teal-200 font-semibold text-sm leading-5 group"
                >
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

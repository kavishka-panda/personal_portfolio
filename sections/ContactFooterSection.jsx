import React, { useState } from "react"; // 1. Import useState
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "../components/icons";

// --- Social Icon Components (remain the same) ---
const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
);
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.78-1.75-1.75S5.53 3.23 6.5 3.23s1.75.78 1.75 1.75S7.47 6.73 6.5 6.73zM19 19h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94V19h-3V8h2.88v1.32h.04c.4-.76 1.37-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6V19z"></path></svg>
);
const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.5 19.5h1.5l-8.5-11.25h-1.6l8.6 11.25z"></path></svg>
);
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

export const ContactFooterSection = () => {
  // --- STATE MANAGEMENT FOR FORM INPUTS ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // --- HANDLE FORM SUBMISSION ---
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission (page reload)

    // Format the message with the form data
    const formattedMessage = `Hello, my name is ${name}.\n\nMy email is ${email}.\n\nMessage:\n${message}`;
    
    // URL-encode the message to make it safe for a URL
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // Your WhatsApp number without the '+' or any special characters
    const phoneNumber = "94769690251";
    
    // Construct the WhatsApp "click to chat" URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open the URL in a new browser tab
    window.open(whatsappUrl, "_blank");
  };

  // --- Animation Variants (remain the same) ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const formVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden py-24 px-6 sm:px-8 md:px-12 lg:px-24"
    >
      {/* ... Background glow ... */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-transparent to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
      >
        {/* ... Header and Paragraph Blocks (remain the same) ... */}
        <motion.div className="text-left" variants={itemVariants}>
          <div className="flex flex-col items-start mb-8">
            <div className="w-full flex items-center gap-4 mb-4"><p className="font-semibold text-sm uppercase tracking-[2px] text-white/80 whitespace-nowrap">Contact</p><div className="w-full h-px bg-white/20"></div></div>
            <h3 className="text-5xl sm:text-6xl font-semibold text-white">Say Hello</h3>
          </div>
        </motion.div>
        <motion.p variants={itemVariants} className="text-[15px] font-normal leading-[28px] text-white/70 mb-10 text-left">
          Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
        </motion.p>

        {/* --- UPDATED FORM with onSubmit handler and controlled inputs --- */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
          variants={formVariants}
        >
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" autoComplete="name" placeholder="Your Name" required className="block w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white/80 placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition duration-300"/>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" autoComplete="email" placeholder="Your Email" required className="block w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white/80 placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition duration-300"/>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" rows={4} placeholder="Your Message" required className="block w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white/80 placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-teal-500 transition duration-300"/>
          </motion.div>
          <motion.div variants={itemVariants}>
            <button type="submit" className="inline-flex items-center gap-2 text-teal-300 hover:bg-teal-400/10 font-semibold text-sm leading-5 group px-6 py-3 rounded-md transition-colors duration-300">
              <span>Send Message</span>
              <ExternalLinkIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.form>

        {/* ... Footer Block (remains the same) ... */}
        <motion.footer variants={itemVariants} className="mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-white/50">
          <p className="order-last sm:order-first">© {new Date().getFullYear()}. All Rights Reserved</p>
          <div className="flex items-center gap-x-6">
            <a href="https://github.com/kavishka-panda" aria-label="GitHub" className="hover:text-white/80 transition-colors"><GitHubIcon className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/kavishka-rashanga-18a683232/" aria-label="LinkedIn" className="hover:text-white/80 transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
            <a href="https://x.com/kavishka_2" aria-label="Twitter" className="hover:text-white/80 transition-colors"><TwitterIcon className="w-5 h-5" /></a>
            <a href="https://wa.me/+94769690251" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-white/80 transition-colors"><WhatsAppIcon className="w-5 h-5" /></a>
            <div className="w-px h-5 bg-white/10" aria-hidden="true"></div>
            <a href="mailto:kavishkarashanga111@gmail.com" className="hover:text-white/80 transition-colors">kavishkarashanga111@gmail.com</a>
          </div>
        </motion.footer>
      </motion.div>
    </motion.section>
  );
};
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Download, ArrowDown } from "lucide-react";
import Image from "next/image";

const titles = [
  "Senior Software Engineer",
  "Cloud Infrastructure Engineer",
  "Full-Stack Developer",
  "DevOps Practitioner",
];

function TypewriterText() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 h-10" style={{ color: 'var(--accent)' }}>
      {displayed}
      <span className="animate-pulse opacity-70">|</span>
    </h2>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f7f4] via-white to-blue-50 dark:from-[#070c1a] dark:via-[#0a1020] dark:to-[#070c1a] px-4 overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-25"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200 dark:bg-amber-900/60 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20"
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group/photo"
          >
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500 to-amber-500 p-1 shadow-2xl transition-shadow duration-300 group-hover/photo:shadow-blue-300/50 dark:group-hover/photo:shadow-blue-700/50 group-hover/photo:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/IMG-1327.jpg"
                  alt="Abhishek Mathews"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-right"
                  priority
                />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-4 border-blue-500"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Info Section */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight">
                Abhishek Mathews
              </h1>
              <TypewriterText />
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Senior Software Engineer with 7+ years of experience leading the design and delivery of
                high-impact systems, specializing in cloud infrastructure, DevOps, and full-stack development.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-6"
            >
              <a
                href="https://4y8e8soqjtsaruy1.public.blob.vercel-storage.com/AbhishekM_Updated_Resume_IntroUpdate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                View My Work
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start text-slate-600 dark:text-slate-300 mb-8"
            >
              <a
                href="mailto:abhishekd.mathews@gmail.com"
                className="group/link flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 transition-transform duration-200 group-hover/link:-translate-y-0.5" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 group-hover/link:after:w-full">abhishekd.mathews@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>McLean, VA</span>
              </div>
              <a
                href="https://linkedin.com/in/mathewsabhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 transition-transform duration-200 group-hover/link:-translate-y-0.5" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 group-hover/link:after:w-full">LinkedIn</span>
              </a>
              <a
                href="https://github.com/shaker-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5 transition-transform duration-200 group-hover/link:-translate-y-0.5" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 group-hover/link:after:w-full">GitHub</span>
              </a>
            </motion.div>

            {/* Scroll nudge — visible on mobile */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors md:hidden"
            >
              <ArrowDown className="w-4 h-4" />
              See my experience
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-md flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-slate-500 dark:bg-slate-400 rounded-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

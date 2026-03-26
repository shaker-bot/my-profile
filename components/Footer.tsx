"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>

          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="https://linkedin.com/in/mathewsabhishek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/shaker-bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-sm font-semibold"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              GitHub
            </motion.a>
            <motion.a
              href="mailto:abhishekd.mathews@gmail.com"
              aria-label="Send email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors text-sm font-semibold"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Email
            </motion.a>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Abhishek Mathews. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

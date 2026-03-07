"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="https://linkedin.com/in/mathewsabhishek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://github.com/shaker-bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <Github className="w-6 h-6" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="mailto:abhishekd.mathews@gmail.com"
              aria-label="Send email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <Mail className="w-6 h-6" aria-hidden="true" />
            </motion.a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Abhishek Mathews. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:abhishekd.mathews@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500" /> using Next.js & TypeScript
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Abhishek Mathews. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 px-5 sm:px-6 md:px-10"
      style={{
        borderTop: "1px solid var(--rule)",
        background: "var(--foreground)",
        color: "var(--background)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-8 sm:gap-10"
        >
          {/* ── Signature ── */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="kicker mb-4"
              style={{ color: "color-mix(in oklab, var(--background) 55%, transparent)" }}
            >
              § 04 · Colophon
            </div>
            <h3
              id="footer-heading"
              className="hd-signature text-[2.75rem] min-[400px]:text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] text-[color:var(--signal)]"
            >
              Let&apos;s Connect
            </h3>
            <p
              className="mt-6 max-w-md text-[0.98rem] leading-relaxed"
              style={{ color: "color-mix(in oklab, var(--background) 75%, transparent)" }}
            >
              Drop a line if you&apos;re shipping something interesting, breaking
              something in production, or just want to talk about the future
              of developer tooling.
            </p>
          </div>

          {/* ── Channels ── */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="kicker mb-6"
              style={{ color: "color-mix(in oklab, var(--background) 55%, transparent)" }}
            >
              — Channels
            </div>

            <ul
              className="divide-y"
              style={{
                borderTop: "1px solid color-mix(in oklab, var(--background) 18%, transparent)",
                borderBottom: "1px solid color-mix(in oklab, var(--background) 18%, transparent)",
                borderColor: "color-mix(in oklab, var(--background) 18%, transparent)",
              }}
            >
              <li style={{ borderBottom: "1px solid color-mix(in oklab, var(--background) 18%, transparent)" }}>
                <motion.a
                  href="https://linkedin.com/in/mathewsabhishek"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 min-h-[44px]"
                >
                  <span className="flex items-center gap-4">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    <span className="font-display text-2xl md:text-3xl leading-none group-hover:italic group-hover:text-[color:var(--signal)] transition-colors">
                      LinkedIn
                    </span>
                  </span>
                  <span className="font-mono-tight text-xs opacity-70">
                    /mathewsabhishek →
                  </span>
                </motion.a>
              </li>
              <li style={{ borderBottom: "1px solid color-mix(in oklab, var(--background) 18%, transparent)" }}>
                <motion.a
                  href="https://github.com/shaker-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 min-h-[44px]"
                >
                  <span className="flex items-center gap-4">
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span className="font-display text-2xl md:text-3xl leading-none group-hover:italic group-hover:text-[color:var(--signal)] transition-colors">
                      GitHub
                    </span>
                  </span>
                  <span className="font-mono-tight text-xs opacity-70">
                    /shaker-bot →
                  </span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:abhishekd.mathews@gmail.com"
                  aria-label="Send email"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 min-h-[44px]"
                >
                  <span className="flex items-center gap-4">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span className="font-display text-2xl md:text-3xl leading-none group-hover:italic group-hover:text-[color:var(--signal)] transition-colors">
                      Email
                    </span>
                  </span>
                  <span className="font-mono-tight text-xs opacity-70 break-all">
                    abhishekd.mathews@gmail.com&nbsp;→
                  </span>
                </motion.a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── Imprint line ── */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{ borderTop: "1px solid color-mix(in oklab, var(--background) 18%, transparent)" }}
        >
          <p
            className="font-mono-tight text-xs tracking-[0.1em]"
            style={{ color: "color-mix(in oklab, var(--background) 60%, transparent)" }}
          >
            © {year} Abhishek Mathews. All rights reserved.
          </p>
          <p
            className="font-mono-tight text-[0.65rem] tracking-[0.24em] uppercase flex items-center gap-2"
            style={{ color: "color-mix(in oklab, var(--background) 45%, transparent)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--signal)" }}
            />
            Set in Fraunces, Instrument Sans &amp; JetBrains Mono
          </p>
        </div>
      </div>
    </footer>
  );
}

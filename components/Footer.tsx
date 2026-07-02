"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const channels = [
  {
    label: "LinkedIn",
    detail: "/mathewsabhishek",
    href: "https://linkedin.com/in/mathewsabhishek",
    ariaLabel: "LinkedIn profile",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    detail: "/shaker-bot",
    href: "https://github.com/shaker-bot",
    ariaLabel: "GitHub profile",
    icon: Github,
    external: true,
  },
  {
    label: "Email",
    detail: "abhishekd.mathews@gmail.com",
    href: "mailto:abhishekd.mathews@gmail.com",
    ariaLabel: "Send email",
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative pt-16 sm:pt-20 pb-8 sm:pb-10 px-5 sm:px-6 md:px-10"
      style={{
        background: "var(--ink-block)",
        color: "var(--ink-block-fg)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          viewport={{ once: true }}
        >
          {/* ── Index strip ── */}
          <div
            className="flex items-baseline justify-between gap-4 pb-3 mb-10"
            style={{ borderBottom: "1px solid color-mix(in oklab, var(--ink-block-fg) 18%, transparent)" }}
          >
            <span className="meta" style={{ color: "var(--ink-block-accent)" }}>05</span>
            <span
              className="meta"
              style={{ color: "color-mix(in oklab, var(--ink-block-fg) 55%, transparent)" }}
            >
              Contact
            </span>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            {/* ── Heading ── */}
            <div className="col-span-12 lg:col-span-6">
              <h2
                id="footer-heading"
                className="type-display text-[2.75rem] min-[420px]:text-[3.25rem] sm:text-6xl md:text-7xl"
              >
                Let&apos;s Connect
                <span
                  className="stop-block"
                  style={{ background: "var(--ink-block-accent)" }}
                  aria-hidden="true"
                />
              </h2>
              <p
                className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-pretty"
                style={{ color: "color-mix(in oklab, var(--ink-block-fg) 72%, transparent)" }}
              >
                Drop a line if you&apos;re shipping something interesting, breaking
                something in production, or just want to talk about the future
                of developer tooling.
              </p>
            </div>

            {/* ── Channels ── */}
            <div className="col-span-12 lg:col-span-6">
              <ul
                style={{
                  borderTop: "1px solid color-mix(in oklab, var(--ink-block-fg) 18%, transparent)",
                }}
              >
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <li
                      key={channel.label}
                      style={{
                        borderBottom: "1px solid color-mix(in oklab, var(--ink-block-fg) 18%, transparent)",
                      }}
                    >
                      <motion.a
                        href={channel.href}
                        aria-label={channel.ariaLabel}
                        {...(channel.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 min-h-[44px]"
                      >
                        <span className="flex items-center gap-4">
                          <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span className="type-title text-2xl md:text-[1.75rem] leading-none transition-colors group-hover:text-[color:var(--ink-block-accent)]">
                            {channel.label}
                          </span>
                        </span>
                        <span className="mono text-xs opacity-70 break-all">
                          {channel.detail}&nbsp;<span className="inline-shift" aria-hidden="true">→</span>
                        </span>
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Imprint ── */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{ borderTop: "1px solid color-mix(in oklab, var(--ink-block-fg) 18%, transparent)" }}
        >
          <p
            className="mono text-xs"
            style={{ color: "color-mix(in oklab, var(--ink-block-fg) 60%, transparent)" }}
          >
            © {year} Abhishek Mathews. All rights reserved.
          </p>
          <p
            className="meta flex items-center gap-2"
            style={{ color: "color-mix(in oklab, var(--ink-block-fg) 45%, transparent)" }}
          >
            <span
              className="w-1.5 h-1.5"
              style={{ background: "var(--ink-block-accent)" }}
              aria-hidden="true"
            />
            Set in Archivo &amp; IBM Plex Mono
          </p>
        </div>
      </div>
    </footer>
  );
}

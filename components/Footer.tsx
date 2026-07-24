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
  const fgMix = (pct: number) =>
    `color-mix(in oklab, var(--ink-block-fg) ${pct}%, transparent)`;

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
          {/* ── Module strip ── */}
          <div
            className="flex items-baseline justify-between gap-4 pb-3 mb-10"
            style={{ borderBottom: `1px solid ${fgMix(18)}` }}
          >
            <span className="meta" style={{ color: "var(--ink-block-accent)" }}>
              MODULE 05
            </span>
            <span className="meta" style={{ color: fgMix(55) }}>
              Comms
            </span>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            {/* ── Heading ── */}
            <div className="col-span-12 lg:col-span-5">
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
                style={{ color: fgMix(72) }}
              >
                Drop a line if you&apos;re shipping something interesting, breaking
                something in production, or just want to talk about the future
                of developer tooling.
              </p>
            </div>

            {/* ── Terminal ── */}
            <div className="col-span-12 lg:col-span-7">
              <div
                className="overflow-hidden"
                style={{ border: `1px solid ${fgMix(18)}` }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5"
                  style={{
                    borderBottom: `1px solid ${fgMix(18)}`,
                    background: fgMix(4),
                  }}
                >
                  <span aria-hidden="true" className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: fgMix(25) }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: fgMix(25) }} />
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "var(--ink-block-accent)" }}
                    />
                  </span>
                  <span className="mono text-[0.7rem] ml-2" style={{ color: fgMix(55) }}>
                    guest@mathews:~/contact
                  </span>
                </div>

                {/* Session */}
                <div className="px-4 sm:px-5 py-4">
                  <p className="mono text-[0.8rem]" style={{ color: fgMix(55) }} aria-hidden="true">
                    <span style={{ color: "var(--ink-block-accent)" }}>$</span> ls ./channels
                  </p>

                  <ul className="mt-1 mb-4">
                    {channels.map((channel) => {
                      const Icon = channel.icon;
                      return (
                        <li
                          key={channel.label}
                          style={{ borderBottom: `1px solid ${fgMix(12)}` }}
                        >
                          <motion.a
                            href={channel.href}
                            aria-label={channel.ariaLabel}
                            {...(channel.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 min-h-[44px]"
                          >
                            <span className="flex items-center gap-4">
                              <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                              <span className="type-title text-xl md:text-2xl leading-none transition-colors group-hover:text-[color:var(--ink-block-accent)]">
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

                  <p className="mono text-[0.8rem]" aria-hidden="true">
                    <span style={{ color: "var(--ink-block-accent)" }}>$</span>{" "}
                    <span className="caret" style={{ background: "var(--ink-block-accent)" }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Imprint ── */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${fgMix(18)}` }}
        >
          <p className="mono text-xs" style={{ color: fgMix(60) }}>
            © {year} Abhishek Mathews. All rights reserved.
          </p>
          <p className="meta flex items-center gap-2" style={{ color: fgMix(45) }}>
            <span
              className="w-1.5 h-1.5"
              style={{ background: "var(--ink-block-accent)" }}
              aria-hidden="true"
            />
            Set in Archivo &amp; IBM Plex Mono — EOF
          </p>
        </div>
      </div>
    </footer>
  );
}

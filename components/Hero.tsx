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
    <h2 className="font-mono-tight text-base md:text-lg text-[color:var(--foreground)]">
      <span className="kicker mr-2 text-[color:var(--muted)]">// currently</span>
      <span className="text-[color:var(--signal)]">{displayed}</span>
      <span className="caret-blink ml-0.5 text-[color:var(--signal)]">|</span>
    </h2>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-24 px-6 md:px-10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        {/* ── Masthead strip ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10 pb-3"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <span className="kicker">Vol. VII · No. 26 · McLean, VA</span>
          <span className="kicker hidden sm:inline">
            §&nbsp;00 — Curriculum&nbsp;Vitæ
          </span>
          <span className="kicker">Est.&nbsp;2018</span>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          {/* ── Left: Masthead headline ── */}
          <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div className="kicker mb-4">§ 00 · Mastheads &amp; matters</div>
              <h1 className="hd-signature text-[3.25rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] text-[color:var(--foreground)] text-balance">
                Abhishek Mathews
              </h1>

              <div
                className="mt-6 mb-5 h-px w-28"
                style={{ background: "var(--foreground)" }}
              />

              <TypewriterText />
            </motion.div>

            {/* ── Lede ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-2xl"
            >
              <p className="text-lg md:text-xl leading-relaxed text-[color:var(--foreground)] text-pretty">
                <span className="font-display text-4xl mr-1 leading-none align-[-0.15em] text-[color:var(--signal)]">
                  A
                </span>
                Senior Software Engineer with 7+ years of experience leading the design and delivery of
                high-impact systems — specializing in cloud infrastructure, DevOps, and full-stack
                development that has to <em className="font-display-italic">actually</em> work at scale.
              </p>
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://4y8e8soqjtsaruy1.public.blob.vercel-storage.com/AbhishekM_Updated_Resume_IntroUpdate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 pl-5 pr-4 py-3 rounded-none font-mono-tight text-xs uppercase tracking-[0.18em] text-[color:var(--background)] transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--signal)" }}
              >
                <Download className="w-4 h-4" />
                Download Resume
                <span className="inline-shift">→</span>
              </a>

              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-3 pl-5 pr-4 py-3 font-mono-tight text-xs uppercase tracking-[0.18em] text-[color:var(--foreground)] transition-colors hover:text-[color:var(--signal)]"
                style={{ border: "1px solid var(--foreground)" }}
              >
                View My Work
                <span className="inline-shift">↓</span>
              </button>
            </motion.div>

            {/* ── Contact "colophon" ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl"
              style={{ borderTop: "1px solid var(--rule)", paddingTop: "1rem" }}
            >
              <div className="flex items-center gap-3">
                <span className="kicker w-14 shrink-0">E-mail</span>
                <a
                  href="mailto:abhishekd.mathews@gmail.com"
                  className="link-underline font-mono-tight text-[0.88rem] text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
                >
                  <Mail className="inline w-3.5 h-3.5 mr-1.5 align-[-2px]" />
                  abhishekd.mathews@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="kicker w-14 shrink-0">Loc.</span>
                <span className="font-mono-tight text-[0.88rem] text-[color:var(--foreground)]">
                  <MapPin className="inline w-3.5 h-3.5 mr-1.5 align-[-2px]" />
                  McLean, VA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="kicker w-14 shrink-0">Social</span>
                <a
                  href="https://linkedin.com/in/mathewsabhishek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono-tight text-[0.88rem] text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
                >
                  <Linkedin className="inline w-3.5 h-3.5 mr-1.5 align-[-2px]" />
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="kicker w-14 shrink-0">Code</span>
                <a
                  href="https://github.com/shaker-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono-tight text-[0.88rem] text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
                >
                  <Github className="inline w-3.5 h-3.5 mr-1.5 align-[-2px]" />
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* ── Mobile scroll nudge ── */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 inline-flex items-center gap-2 kicker hover:text-[color:var(--signal)] transition-colors md:hidden"
            >
              <ArrowDown className="w-3.5 h-3.5" />
              Continue reading
            </motion.button>
          </div>

          {/* ── Right: Portrait column ── */}
          <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="kicker mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
                Plate&nbsp;I — Portrait
              </div>

              <div className="relative">
                {/* Corner ticks */}
                <span className="absolute -top-2 -left-2 w-3 h-3 border-l border-t" style={{ borderColor: "var(--foreground)" }} />
                <span className="absolute -top-2 -right-2 w-3 h-3 border-r border-t" style={{ borderColor: "var(--foreground)" }} />
                <span className="absolute -bottom-2 -left-2 w-3 h-3 border-l border-b" style={{ borderColor: "var(--foreground)" }} />
                <span className="absolute -bottom-2 -right-2 w-3 h-3 border-r border-b" style={{ borderColor: "var(--foreground)" }} />

                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{
                    filter: "contrast(1.02) saturate(0.9)",
                    boxShadow: "0 0 0 1px var(--rule)",
                  }}
                >
                  <Image
                    src="/IMG-1327.jpg"
                    alt="Abhishek Mathews"
                    fill
                    sizes="(max-width: 1024px) 60vw, 28vw"
                    className="object-cover object-right"
                    priority
                  />
                  {/* Halftone/duotone wash */}
                  <div
                    className="absolute inset-0 mix-blend-multiply pointer-events-none dark:mix-blend-screen"
                    style={{
                      background:
                        "linear-gradient(200deg, color-mix(in oklab, var(--signal) 22%, transparent) 0%, transparent 55%)",
                    }}
                  />
                </div>

                {/* Caption */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="kicker">IMG_1327 · 2024</span>
                  <span className="font-mono-tight text-[0.72rem] text-[color:var(--muted)]">
                    — in situ
                  </span>
                </div>
              </div>

              {/* Stat ledger */}
              <div
                className="mt-6 grid grid-cols-3 text-center"
                style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
              >
                <div className="py-3" style={{ borderRight: "1px solid var(--rule)" }}>
                  <div className="font-display text-3xl leading-none text-[color:var(--signal)]">7+</div>
                  <div className="kicker mt-1.5">Years</div>
                </div>
                <div className="py-3" style={{ borderRight: "1px solid var(--rule)" }}>
                  <div className="font-display text-3xl leading-none">4</div>
                  <div className="kicker mt-1.5">Posts</div>
                </div>
                <div className="py-3">
                  <div className="font-display text-3xl leading-none">2</div>
                  <div className="kicker mt-1.5">Certs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to experience"
          className="cursor-pointer hidden md:flex absolute left-10 bottom-4 flex-col items-center gap-2"
        >
          <span className="kicker rotate-180" style={{ writingMode: "vertical-rl" }}>
            Continue
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "var(--foreground)" }}
          />
        </motion.button>
      </div>
    </section>
  );
}

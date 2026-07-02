"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number, y = 18) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* ── Meta strip ── */}
        <motion.div
          {...fadeUp(0, 8)}
          className="flex items-baseline justify-between gap-3 pb-3 mb-10 sm:mb-14"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <span className="meta">Curriculum Vitæ</span>
          <span className="meta hidden min-[420px]:inline">Cloud · DevOps · Full-Stack</span>
          <span className="meta">Est. 2018</span>
        </motion.div>

        {/* ── Name ── */}
        <motion.div {...fadeUp(0.05, 28)}>
          <h1
            id="hero-heading"
            className="type-display text-[color:var(--foreground)] text-[clamp(3rem,12.5vw,9.5rem)]"
          >
            <span className="block">Abhishek</span>{" "}
            <span className="block">
              Mathews<span className="stop-block" aria-hidden="true" />
            </span>
          </h1>
        </motion.div>

        {/* ── Designation ── */}
        <motion.div
          {...fadeUp(0.16)}
          className="mt-6 sm:mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1"
        >
          <h2 className="mono text-sm sm:text-base font-medium uppercase tracking-[0.08em] text-[color:var(--accent)]">
            Senior Software Engineer
          </h2>
        </motion.div>

        {/* ── Body grid ── */}
        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-x-8 gap-y-12 items-start">
          {/* Left: lede + CTAs */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div {...fadeUp(0.24)}>
              <p className="text-lg sm:text-xl md:text-[1.375rem] leading-relaxed text-[color:var(--foreground)] max-w-2xl text-pretty">
                A Senior Software Engineer with 7+ years of experience leading the
                design and delivery of high-impact systems — specializing in cloud
                infrastructure, DevOps, and full-stack development that has to
                actually work at scale.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://4y8e8soqjtsaruy1.public.blob.vercel-storage.com/AbhishekM_Resume_03132026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume PDF (opens in a new tab)"
                className="group inline-flex items-center gap-3 px-5 py-3 min-h-[44px] mono text-xs font-medium uppercase tracking-[0.08em] transition-opacity hover:opacity-85"
                style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Resume
                <span className="inline-shift" aria-hidden="true">↗</span>
              </a>

              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-3 px-5 py-3 min-h-[44px] mono text-xs font-medium uppercase tracking-[0.08em] text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent)] hover:border-[color:var(--accent)]"
                style={{ border: "1px solid var(--foreground)" }}
              >
                View My Work
                <span className="inline-shift" aria-hidden="true">↓</span>
              </button>
            </motion.div>

            {/* Contact index */}
            <motion.div
              {...fadeUp(0.42)}
              className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              <div
                className="flex items-baseline gap-4 py-3 min-w-0"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <span className="meta w-16 shrink-0">Email</span>
                <span className="min-w-0">
                  <a
                    href="mailto:abhishekd.mathews@gmail.com"
                    className="link-underline mono text-[0.82rem] text-[color:var(--foreground)] hover:text-[color:var(--accent)] break-all"
                  >
                    abhishekd.mathews@gmail.com
                  </a>
                </span>
              </div>
              <div
                className="flex items-baseline gap-4 py-3"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <span className="meta w-16 shrink-0">Base</span>
                <span className="mono text-[0.82rem] text-[color:var(--foreground)]">
                  McLean, VA
                </span>
              </div>
              <div
                className="flex items-baseline gap-4 py-3"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <span className="meta w-16 shrink-0">Social</span>
                <span>
                  <a
                    href="https://linkedin.com/in/mathewsabhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mono text-[0.82rem] text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
                  >
                    LinkedIn ↗
                  </a>
                </span>
              </div>
              <div
                className="flex items-baseline gap-4 py-3"
                style={{ borderBottom: "1px solid var(--rule)" }}
              >
                <span className="meta w-16 shrink-0">Code</span>
                <span>
                  <a
                    href="https://github.com/shaker-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mono text-[0.82rem] text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
                  >
                    GitHub ↗
                  </a>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <motion.div
              {...fadeUp(0.28, 24)}
              className="max-w-sm mx-auto lg:mx-0 lg:max-w-none"
            >
              <div
                className="portrait-frame relative aspect-[4/5] overflow-hidden"
                style={{ boxShadow: "0 0 0 1px var(--rule)" }}
              >
                <Image
                  src="/IMG-1327.jpg"
                  alt="Abhishek Mathews"
                  fill
                  sizes="(max-width: 1024px) 60vw, 26vw"
                  className="portrait-img object-cover object-right"
                  priority
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="meta">Portrait — 2024</span>
                <span className="meta" aria-hidden="true">fig. 01</span>
              </div>

              {/* Fact row */}
              <div
                className="mt-6 grid grid-cols-3 text-center"
                style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
              >
                <div className="py-3" style={{ borderRight: "1px solid var(--rule)" }}>
                  <div className="type-display text-2xl text-[color:var(--accent)]">07+</div>
                  <div className="meta mt-1">Years</div>
                </div>
                <div className="py-3" style={{ borderRight: "1px solid var(--rule)" }}>
                  <div className="type-display text-2xl">05</div>
                  <div className="meta mt-1">Roles</div>
                </div>
                <div className="py-3">
                  <div className="type-display text-2xl">02</div>
                  <div className="meta mt-1">Certs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

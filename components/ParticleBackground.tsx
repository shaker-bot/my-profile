"use client";

/*
  RuleFieldBackground
  Fixed, pointer-events:none decorative background for the broadsheet aesthetic:
  · A faint 12-column grid of hairlines (only visible at ≥md)
  · Soft corner register marks in each viewport corner (print crop marks)
  · A slow-breathing signal dot, bottom-right, like a publication colophon
  All decorative — purely visual. File kept as ParticleBackground.tsx to
  preserve the existing import in app/layout.tsx.
*/

import { motion } from "framer-motion";

const RegisterMark = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 32 32"
    className={`absolute w-5 h-5 text-[color:var(--rule)] ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="7" />
    <line x1="16" y1="0"  x2="16" y2="10" />
    <line x1="16" y1="22" x2="16" y2="32" />
    <line x1="0"  y1="16" x2="10" y2="16" />
    <line x1="22" y1="16" x2="32" y2="16" />
  </svg>
);

export default function ParticleBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      {/* 12-column hairline grid — very subtle, desktop only */}
      <div
        className="hidden md:block absolute inset-x-0 top-0 bottom-0 mx-auto max-w-[72rem] opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--rule) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      />

      {/* Register marks in corners */}
      <RegisterMark className="top-4 left-4" />
      <RegisterMark className="top-4 right-4" />
      <RegisterMark className="bottom-4 left-4" />
      <RegisterMark className="bottom-4 right-4" />

      {/* Colophon signal dot */}
      <motion.div
        className="absolute bottom-8 right-10 w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--signal)" }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

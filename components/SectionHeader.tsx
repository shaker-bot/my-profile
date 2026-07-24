"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { RegMark } from "./hud";

type Props = {
  index: string;
  heading: ReactNode;
  headingId: string;
  description: ReactNode;
  /** Flavor readout shown on the module strip, e.g. "LOGGED". */
  status?: string;
  className?: string;
};

export function SectionHeader({
  index,
  heading,
  headingId,
  description,
  status = "NOMINAL",
  className = "mb-12 sm:mb-16",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      viewport={{ once: true }}
      className={className}
    >
      {/* ── Module strip ── */}
      <div
        className="flex items-center justify-between gap-4 pb-3 mb-8 sm:mb-10"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <span className="flex items-center gap-3">
          <RegMark />
          <span className="index-num">MODULE {index}</span>
        </span>
        <span className="flex items-center gap-3">
          <span className="meta hidden sm:inline">
            STATUS: <span style={{ color: "var(--online)" }}>{status}</span>
          </span>
          <RegMark />
        </span>
      </div>

      <div className="grid grid-cols-12 gap-x-8 gap-y-5 items-end">
        <div className="col-span-12 md:col-span-8">
          <h2
            id={headingId}
            className="type-display text-[2.5rem] sm:text-6xl md:text-7xl text-[color:var(--foreground)]"
          >
            {heading}
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-[0.95rem] leading-relaxed text-[color:var(--muted)] md:text-right max-w-sm md:ml-auto text-pretty">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

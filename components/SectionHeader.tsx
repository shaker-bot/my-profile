"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index: string;
  heading: ReactNode;
  headingId: string;
  description: ReactNode;
  className?: string;
};

export function SectionHeader({
  index,
  heading,
  headingId,
  description,
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
      <div
        className="flex items-baseline justify-between gap-4 pb-3 mb-8 sm:mb-10"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <span className="index-num">{index}</span>
        <span className="meta hidden sm:inline">Abhishek Mathews — CV</span>
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

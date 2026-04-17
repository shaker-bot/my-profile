"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  kicker: ReactNode;
  heading: ReactNode;
  headingId: string;
  description: ReactNode;
  headingClassName?: string;
  className?: string;
};

const defaultHeadingClass =
  "hd-display text-[2.75rem] sm:text-6xl md:text-7xl text-[color:var(--foreground)]";

export function SectionHeader({
  kicker,
  heading,
  headingId,
  description,
  headingClassName = defaultHeadingClass,
  className = "mb-10 sm:mb-14",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`grid grid-cols-12 gap-6 sm:gap-8 items-end ${className}`}
    >
      <div className="col-span-12 md:col-span-7">
        <div className="kicker mb-3 flex items-center gap-2">{kicker}</div>
        <h2 id={headingId} className={headingClassName}>
          {heading}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-5 md:text-right">
        <p className="font-mono-tight text-sm text-[color:var(--muted)] max-w-sm md:ml-auto text-pretty">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

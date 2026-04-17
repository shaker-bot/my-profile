"use client";

import { motion } from "framer-motion";
import { HoverAccent } from "./HoverAccent";
import { SectionHeader } from "./SectionHeader";

const education = [
  {
    degree: "MS in Computer Science",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA, USA",
    gpa: "3.71",
    date: "08/2017 - 08/2022",
  },
  {
    degree: "BS in Computer Science",
    institution: "George Mason University",
    location: "Fairfax, VA, USA",
    gpa: "3.42",
    date: "08/2013 - 05/2017",
  },
];

const certifications = [
  { name: "Certified Solutions Architect Associate", issuer: "AWS" },
  { name: "Certified SysOps Associate",              issuer: "AWS" },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker={<>§ 03 · Formation &amp; Credentials</>}
          heading="Education"
          headingId="education-heading"
          headingClassName="font-display has-dot text-[2.75rem] sm:text-6xl md:text-7xl leading-[0.9] tracking-[-0.035em] text-[color:var(--foreground)]"
          description="Degrees in the field, plus a short ledger of credentials earned in the long shadow of cloud computing."
          className="mb-10 sm:mb-14"
        />

        {/* ── Degree ledger ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          {education.map((edu, index) => {
            const [start, end] = edu.date.split(" - ");
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group p-6 md:p-10 relative ${
                index === 0
                  ? "border-b md:border-b-0 md:border-r"
                  : ""
              }`}
              style={{ borderColor: "var(--rule)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="kicker">
                  Record № {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono-tight text-xs text-[color:var(--muted)]">
                  {start} - {end}
                </span>
              </div>

              <h3 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.02] tracking-[-0.025em] text-[color:var(--foreground)] mb-3">
                {edu.degree}
              </h3>

              <p className="font-mono-tight text-sm uppercase tracking-[0.18em] text-[color:var(--foreground)] mb-1">
                {edu.institution}
              </p>
              <p className="text-[0.95rem] text-[color:var(--muted)] mb-5">
                {edu.location}
              </p>

              {edu.gpa && (
                <div
                  className="inline-flex items-baseline gap-3 pt-4"
                  style={{ borderTop: "1px dashed var(--rule)" }}
                >
                  <span className="kicker">GPA: {edu.gpa}</span>
                  <span className="font-mono-tight text-[0.7rem] text-[color:var(--muted)]">
                    / 4.00
                  </span>
                </div>
              )}

              <HoverAccent />
            </motion.div>
          );})}
        </div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 mb-8 sm:mb-10"
        >
          <div className="kicker mb-3">§ 03b · Commendations</div>
          <h2
            id="certifications-heading"
            className="font-display has-dot text-[2.25rem] sm:text-5xl md:text-6xl leading-[0.92] tracking-[-0.035em] text-[color:var(--foreground)]"
          >
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-7 transition-colors overflow-hidden"
              style={{
                border: "1px solid var(--foreground)",
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-mono-tight text-[0.68rem] tracking-[0.2em] uppercase"
                  style={{ color: "color-mix(in oklab, var(--background) 60%, transparent)" }}
                >
                  ◆ Certified · {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-mono-tight text-xs px-2 py-0.5"
                  style={{
                    background: "var(--signal)",
                    color: "#14110a",
                  }}
                >
                  {cert.issuer}
                </span>
              </div>

              <h3 className="font-display text-[1.6rem] md:text-[1.85rem] leading-[1.05] tracking-[-0.02em] text-balance">
                {cert.name}
              </h3>

              {/* decorative seal */}
              <svg
                className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="0.5">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const a = (i * 15 * Math.PI) / 180;
                    const x1 = 50 + 35 * Math.cos(a);
                    const y1 = 50 + 35 * Math.sin(a);
                    const x2 = 50 + 45 * Math.cos(a);
                    const y2 = 50 + 45 * Math.sin(a);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                  })}
                </g>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

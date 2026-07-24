"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Corners } from "./hud";

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

/*
  Rotating credential stamp: ring text on a circular path, spinning
  slowly, with the issuer set in the middle. Ring is decorative.
*/
function Stamp({ issuer, id }: { issuer: string; id: string }) {
  return (
    <span className="relative inline-flex w-16 h-16 shrink-0 items-center justify-center">
      <svg viewBox="0 0 64 64" className="absolute inset-0 stamp-ring" aria-hidden="true">
        <defs>
          <path
            id={id}
            d="M32 6 a26 26 0 1 1 -0.01 0"
            fill="none"
          />
        </defs>
        <circle cx="32" cy="32" r="30" fill="none" stroke="var(--rule)" strokeWidth="1" />
        <text
          fill="var(--muted)"
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: "7.5px",
            letterSpacing: "0.18em",
          }}
        >
          <textPath href={`#${id}`}>CERTIFIED ✦ AMAZON WEB SERVICES ✦</textPath>
        </text>
      </svg>
      <span
        className="mono text-[0.7rem] font-medium px-1.5 py-0.5"
        style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
      >
        {issuer}
      </span>
    </span>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="03"
          heading="Education"
          headingId="education-heading"
          status="Verified"
          description="Two degrees in the field, plus the credentials collected in the long shadow of cloud computing."
        />

        {/* ── Academic records ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="hud-panel armable group p-6 sm:p-8 flex flex-col"
            >
              <Corners />

              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-6">
                <span className="index-num">
                  REC {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mono text-[0.82rem] text-[color:var(--foreground)] whitespace-nowrap">
                  {edu.date}
                </span>
                <span className="meta">{edu.location}</span>
              </div>

              <h3 className="type-title text-[1.5rem] sm:text-3xl text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)] mb-1.5">
                {edu.degree}
              </h3>
              <p className="mono text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[color:var(--muted)]">
                {edu.institution}
              </p>

              {edu.gpa && (
                <div className="mt-auto pt-6">
                  <p className="flex items-baseline gap-2 mb-2">
                    <span className="meta">GPA: {edu.gpa}</span>
                    <span className="mono text-[0.7rem] text-[color:var(--muted)]">/ 4.00</span>
                  </p>
                  {/* Gauge bar */}
                  <div
                    aria-hidden="true"
                    className="h-[3px] w-full"
                    style={{ background: "var(--rule)" }}
                  >
                    <div
                      className="h-full"
                      style={{
                        width: `${(parseFloat(edu.gpa) / 4) * 100}%`,
                        background: "var(--accent)",
                        boxShadow: "0 0 10px var(--glow)",
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 mb-6 flex items-baseline justify-between gap-4"
        >
          <h3
            id="certifications-heading"
            className="type-display text-[1.75rem] sm:text-4xl text-[color:var(--foreground)]"
          >
            Certifications
          </h3>
          <span className="index-num">MODULE 03.1</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="hud-panel armable group p-5 sm:p-6 flex items-center gap-5"
            >
              <Corners />
              <Stamp issuer={cert.issuer} id={`stamp-ring-${index}`} />
              <p className="type-title text-lg sm:text-xl text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

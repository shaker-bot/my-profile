"use client";

import { motion } from "framer-motion";
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
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="03"
          heading="Education"
          headingId="education-heading"
          description="Two degrees in the field, plus the credentials collected in the long shadow of cloud computing."
        />

        {/* ── Degrees ── */}
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="group grid grid-cols-12 gap-x-8 gap-y-4 py-8 sm:py-10 transition-colors hover:bg-[color:var(--surface)]"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <div className="col-span-12 md:col-span-3 flex flex-wrap md:flex-col gap-x-5 gap-y-1.5 items-baseline md:items-start">
                <span className="index-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="mono text-[0.82rem] text-[color:var(--foreground)] whitespace-nowrap">
                  {edu.date}
                </span>
                <span className="meta">{edu.location}</span>
              </div>

              <div className="col-span-12 md:col-span-9">
                <h3 className="type-title text-[1.6rem] sm:text-3xl md:text-[2.1rem] text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)] mb-1.5">
                  {edu.degree}
                </h3>
                <p className="mono text-[0.8rem] font-medium uppercase tracking-[0.08em] text-[color:var(--muted)]">
                  {edu.institution}
                </p>
                {edu.gpa && (
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="meta">GPA: {edu.gpa}</span>
                    <span className="mono text-[0.7rem] text-[color:var(--muted)]">/ 4.00</span>
                  </p>
                )}
              </div>
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
          <span className="index-num">03.1</span>
        </motion.div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="group grid grid-cols-12 gap-x-8 gap-y-2 py-5 sm:py-6 items-baseline transition-colors hover:bg-[color:var(--surface)]"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <div className="col-span-12 md:col-span-3 flex items-baseline gap-5">
                <span className="index-num">{String(index + 1).padStart(2, "0")}</span>
                <span
                  className="mono text-[0.7rem] font-medium px-2 py-0.5"
                  style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
                >
                  {cert.issuer}
                </span>
              </div>
              <p className="col-span-12 md:col-span-9 type-title text-lg sm:text-xl text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

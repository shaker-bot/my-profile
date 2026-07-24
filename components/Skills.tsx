"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Corners } from "./hud";

type Category = {
  title: string;
  skills: string[];
  /** Line-art glyph for the module, drawn in currentColor. */
  glyph: React.ReactNode;
};

const glyphProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "w-5 h-5",
} as const;

const skillCategories: Category[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "Java", "Golang"],
    glyph: (
      <svg {...glyphProps}>
        <path d="M9 4c-2 0-2.5 1.5-2.5 3v2c0 1.5-.8 2.5-2.5 3 1.7.5 2.5 1.5 2.5 3v2c0 1.5.5 3 2.5 3" />
        <path d="M15 4c2 0 2.5 1.5 2.5 3v2c0 1.5.8 2.5 2.5 3-1.7.5-2.5 1.5-2.5 3v2c0 1.5-.5 3-2.5 3" />
      </svg>
    ),
  },
  {
    title: "Cloud Platforms",
    skills: ["Amazon Web Services (AWS)"],
    glyph: (
      <svg {...glyphProps}>
        <path d="M7 18a4 4 0 1 1 .6-7.95 5.5 5.5 0 0 1 10.7 1.45A3.5 3.5 0 0 1 17.5 18H7Z" />
      </svg>
    ),
  },
  {
    title: "DevOps Tools",
    skills: ["AWS CDK", "Terraform", "Jenkins", "Docker", "Kubernetes"],
    glyph: (
      <svg {...glyphProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2" />
      </svg>
    ),
  },
  {
    title: "Developer Tools",
    skills: ["GitHub", "Cursor", "GitHub Copilot", "Claude Code"],
    glyph: (
      <svg {...glyphProps}>
        <path d="M4 5h16v14H4z" />
        <path d="M7 9l3 3-3 3M12 15h5" />
      </svg>
    ),
  },
  {
    title: "Databases",
    skills: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL"],
    glyph: (
      <svg {...glyphProps}>
        <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
        <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
        <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
      style={{ background: "color-mix(in oklab, var(--surface) 72%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          heading={<>Skills &amp; Expertise</>}
          headingId="skills-heading"
          status="Armed"
          description="The working inventory — languages, platforms, and the tools kept within arm's reach."
        />

        {/* ── Module bay ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="hud-panel armable group p-6 sm:p-7 flex flex-col"
            >
              <Corners />

              <div className="flex items-center justify-between mb-7">
                <span className="index-num">
                  MOD {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[color:var(--muted)] transition-colors group-hover:text-[color:var(--accent)]">
                  {category.glyph}
                </span>
              </div>

              <h3 className="type-title text-xl sm:text-2xl text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)] mb-5">
                {category.title}
              </h3>

              <ul className="mt-auto flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="chip text-[color:var(--foreground)]">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Expansion slot keeps the bay symmetrical on lg */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: skillCategories.length * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
            viewport={{ once: true }}
            aria-hidden="true"
            className="hidden lg:flex flex-col justify-between p-6 sm:p-7"
            style={{ border: "1px dashed var(--border)" }}
          >
            <span className="index-num" style={{ color: "var(--muted-2)" }}>
              MOD 06
            </span>
            <span className="meta">Expansion slot — awaiting next stack</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

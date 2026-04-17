"use client";

import { motion } from "framer-motion";

type Category = {
  title: string;
  skills: string[];
  glyph: string;
};

const skillCategories: Category[] = [
  { title: "Programming Languages", glyph: "{ }",      skills: ["Python", "TypeScript", "Java", "Golang"] },
  { title: "Cloud Platforms",       glyph: "☁",        skills: ["Amazon Web Services (AWS)"] },
  { title: "DevOps Tools",          glyph: "⚙",        skills: ["AWS CDK", "Terraform", "Jenkins", "Docker", "Kubernetes"] },
  { title: "Developer Tools",       glyph: "⌘",        skills: ["GitHub", "Cursor", "GitHub Copilot", "Claude Code"] },
  { title: "Databases",             glyph: "▤",        skills: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL"] },
];

const allSkillsStrip = skillCategories.flatMap((c) => c.skills);

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
      style={{ borderTop: "1px solid var(--rule)", background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section head ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-12 items-end"
        >
          <div className="col-span-12 md:col-span-7">
            <div className="kicker mb-3 flex items-center gap-2">
              § 02 · Technical Inventory
              <span
                className="font-mono-tight text-[0.62rem] tracking-[0.18em] px-1.5 py-0.5"
                style={{ background: "var(--glow)", color: "#14110a" }}
              >
                WIP
              </span>
            </div>
            <h2
              id="skills-heading"
              className="hd-display text-[2.75rem] sm:text-6xl md:text-7xl text-[color:var(--foreground)]"
            >
              Skills &amp; Expertise
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <p className="font-mono-tight text-sm text-[color:var(--muted)] max-w-sm md:ml-auto text-pretty">
              The tools of the trade — languages, platforms, and the
              opinionated software I keep close at hand.
            </p>
          </div>
        </motion.div>

        {/* ── Marquee strip ── */}
        <div
          className="relative mb-14 overflow-hidden"
          style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
          aria-hidden="true"
        >
          <div className="marquee-track py-3">
            {[...allSkillsStrip, ...allSkillsStrip].map((s, i) => (
              <span
                key={i}
                className="font-display-italic text-2xl md:text-3xl px-6 text-[color:var(--foreground)] opacity-90"
              >
                {s}
                <span className="text-[color:var(--signal)] ml-6">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Folios grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--rule)" }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group relative p-6 sm:p-7 md:p-8 transition-colors"
              style={{ background: "var(--surface)" }}
            >
              {/* Folio header */}
              <div className="flex items-start justify-between mb-6">
                <div className="kicker">
                  Folio&nbsp;№ {String(index + 1).padStart(2, "0")}
                </div>
                <span
                  className="font-display text-2xl text-[color:var(--signal)] leading-none translate-y-[-4px]"
                  aria-hidden="true"
                >
                  {category.glyph}
                </span>
              </div>

              <h3 className="font-display text-[1.75rem] md:text-[2rem] leading-[1.05] tracking-[-0.02em] text-[color:var(--foreground)] mb-6">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="group/item grid grid-cols-[auto,1fr,auto] items-baseline gap-3 py-1.5 border-b transition-colors"
                    style={{ borderColor: "var(--rule)" }}
                  >
                    <span className="font-mono-tight text-[0.7rem] tracking-[0.18em] text-[color:var(--muted)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[color:var(--foreground)] group-hover/item:text-[color:var(--signal)] transition-colors">
                      {skill}
                    </span>
                    <span
                      className="font-mono-tight text-[0.7rem] text-[color:var(--muted)] opacity-0 group-hover/item:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover accent bar */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
                style={{ background: "var(--signal)" }}
                aria-hidden="true"
              />
            </motion.div>
          ))}

          {/* Filler folio — keeps the grid visually complete on lg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: skillCategories.length * 0.06 }}
            viewport={{ once: true }}
            className="hidden lg:flex relative p-8 flex-col justify-between"
            style={{ background: "var(--surface)" }}
          >
            <div className="kicker">Folio&nbsp;— Editor&apos;s&nbsp;Note</div>
            <p className="font-display-italic text-2xl leading-snug text-[color:var(--foreground)] text-balance">
              &ldquo;Tools should disappear into the work.
              The work should be what you remember.&rdquo;
            </p>
            <div className="kicker text-right">— a.m.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Category = {
  title: string;
  skills: string[];
};

const skillCategories: Category[] = [
  { title: "Programming Languages", skills: ["Python", "TypeScript", "Java", "Golang"] },
  { title: "Cloud Platforms",       skills: ["Amazon Web Services (AWS)"] },
  { title: "DevOps Tools",          skills: ["AWS CDK", "Terraform", "Jenkins", "Docker", "Kubernetes"] },
  { title: "Developer Tools",       skills: ["GitHub", "Cursor", "GitHub Copilot", "Claude Code"] },
  { title: "Databases",             skills: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          heading={<>Skills &amp; Expertise</>}
          headingId="skills-heading"
          description="The working inventory — languages, platforms, and the tools kept within arm's reach."
        />

        {/* ── Inventory rows ── */}
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ once: true }}
              className="group grid grid-cols-12 gap-x-8 gap-y-3 py-6 sm:py-8 items-baseline transition-colors hover:bg-[color:var(--surface-alt)]"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <div className="col-span-12 md:col-span-1">
                <span className="index-num">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="col-span-12 md:col-span-4 type-title text-xl sm:text-2xl text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                {category.title}
              </h3>

              <ul className="col-span-12 md:col-span-7 dot-list">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="mono text-[0.82rem] text-[color:var(--foreground)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

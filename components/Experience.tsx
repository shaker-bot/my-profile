"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

function calcTenure(period: string): string {
  const parts = period.split(" - ");
  if (parts.length !== 2) return "";
  const parseDate = (s: string) => {
    const [m, y] = s.trim().split("/");
    return new Date(parseInt(y), parseInt(m) - 1);
  };
  const start = parseDate(parts[0]);
  const end = parts[1].trim().toLowerCase() === "present" ? new Date() : parseDate(parts[1]);
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts2 = [];
  if (years > 0) parts2.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts2.push(`${months} mo`);
  return parts2.join(" ");
}

const experiences = [
  {
    company: "Capital One",
    location: "McLean, VA, USA",
    period: "09/2022 - 04/2025",
    role: "Senior Software Engineer",
    badge: "Platform & Developer Tools",
    achievements: [
      "Led architecting and implementation of high risk issue resolution by creating just-in-time AWS access feature, resulting in fifty percent faster issue resolution time.",
      "Collaborated with team to improve app functionality, leading redesign of Auth and data access and achieving 20% decrease in user complaints.",
      "Implemented compliant database deployments by integrating with internal CI/CD tooling, reducing manual work by 50% and increasing data security.",
      "Released controlled deployment acceleration feature which runs on thousands of developer pipelines to save hundreds of hours and decreasing deployment time by 40%",
      "Overhauled user entitlement access in an internal CLI tooling in order to improve data retrieval/filtering around AWS IAM entitlements, especially for users with thousands of results",
    ],
    technologies: "Python, FastAPI, AWS Lambda, AWS DynamoDB, AWS RDS, Jenkins, Golang, Typescript, Angular, AWS IAM, Boto3, PostgreSQL, YAML, React, Redux, GraphQL",
  },
  {
    company: "Extend",
    location: "USA, Remote",
    period: "07/2021 - 07/2022",
    role: "Senior Software Engineer",
    badge: "Consumer Application",
    achievements: [
      "Designed and Released Customer-Facing Portal For Purchased Warranty Experience",
      "Helped design and build authentication flow along with the security team",
      "Built, updated, and maintained key API endpoints used by the application",
      "Brought new engineers up to speed with technology stack, architecture, and deployment patterns",
    ],
    technologies: "Typescript, NodeJS, AWS Lambda, AWS SQS, AWS DynamoDB/Table Streams, React/Redux, Chakra UI, AWS Cognito, Github Actions",
  },
  {
    company: "Capital One",
    location: "McLean, VA, USA",
    period: "03/2019 - 07/2021",
    role: "Senior Software Engineer",
    badge: "Cloud Cost & Compliance",
    achievements: [
      "Led refactor and implementation of EC2/ECS off-hours solution that optimized cost for AWS resources across thousands of non-production accounts.",
      "Implemented Cloud Custodian policies and visual emails to drive compliance and cost objectives",
      "Architected Off-Hours solution for database management in order to gain more cloud cost-savings.",
      "Designed and implemented a proof of concept solution to assist developers in producing IAM policies that used least-privilege principles based on their applications usage in non-production environments.",
    ],
    technologies: "Python, AWS Lambda, AWS DynamoDB, AWS RDS, AWS IAM, Boto3, Cloud Custodian, YAML",
  },
  {
    company: "Cloudreach",
    location: "Reston, VA, USA",
    period: "06/2018 - 03/2019",
    role: "Cloud Systems Developer",
    badge: "Consulting",
    achievements: [
      "Executed Cloud Infrastructure standups for a large Financial Organization",
      "Supported front door tickets and requests to build out one-off resources",
      "Conducted cloud platform auditing using Cloud Custodian policies",
    ],
    technologies: "",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker={<>§ 01 · Professional Record</>}
          heading="Work Experience"
          headingId="experience-heading"
          description="Four postings. 7+ years. Teams in the double digits, systems in the thousands, coffees in the thousands more."
          className="mb-12 sm:mb-16"
        />

        {/* ── Entries ── */}
        <div className="divide-y" style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", borderColor: "var(--rule)" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group grid grid-cols-12 gap-5 md:gap-10 py-8 sm:py-10 md:py-14"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              {/* Index + period */}
              <div className="col-span-12 md:col-span-3 lg:col-span-3 flex flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-2 items-start">
                <div className="font-mono-tight text-[0.72rem] tracking-[0.2em] text-[color:var(--muted)]">
                  ENTRY № {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono-tight text-sm text-[color:var(--foreground)] whitespace-nowrap">
                    {exp.period}
                  </span>
                  {calcTenure(exp.period) && (
                    <span className="kicker">· {calcTenure(exp.period)}</span>
                  )}
                </div>
              </div>

              {/* Core */}
              <div className="col-span-12 md:col-span-9 lg:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                  <h3 className="font-display text-[1.75rem] sm:text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--signal)] text-pretty">
                    {exp.company}
                    {exp.location && (
                      <span className="font-display-italic text-base sm:text-lg md:text-xl text-[color:var(--muted)]"> · {exp.location}</span>
                    )}
                  </h3>
                </div>

                <p className="font-mono-tight text-sm uppercase tracking-[0.18em] text-[color:var(--signal)] mb-1">
                  {exp.role}
                </p>

                {exp.badge && (
                  <p className="kicker text-[color:var(--muted)] mb-5">
                    — {exp.badge}
                  </p>
                )}

                <ol className="space-y-3 max-w-3xl">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto,1fr] gap-4 text-[0.98rem] leading-relaxed text-[color:var(--foreground)]"
                    >
                      <span className="font-mono-tight text-[0.72rem] tracking-[0.18em] text-[color:var(--muted)] pt-1.5 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ol>

                {exp.technologies && (
                  <div
                    className="mt-6 pt-5 flex flex-col md:grid md:grid-cols-[auto,1fr] gap-3 md:gap-4 md:items-start"
                    style={{ borderTop: "1px dashed var(--rule)" }}
                  >
                    <span className="kicker shrink-0 pt-0.5">
                      Technologies Used:
                    </span>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1.5" aria-label="Technologies used">
                      {exp.technologies.split(",").map((tech) => (
                        <li
                          key={tech.trim()}
                          className="font-mono-tight text-xs text-[color:var(--foreground)] px-2.5 py-1 transition-colors hover:text-[color:var(--signal)]"
                          style={{ border: "1px solid var(--rule)" }}
                        >
                          {tech.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

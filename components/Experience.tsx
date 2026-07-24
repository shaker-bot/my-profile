"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Corners, StatusDot } from "./hud";

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
    company: "Alarm.com",
    location: "Tysons, VA, USA",
    period: "04/2026 - Present",
    role: "Senior Software Engineer",
    badge: "Identity & Access Management",
    achievements: [
      "Manage the centralized authentication platform that provides sign-on across Alarm.com applications, as part of the IAM team.",
      "Administer and extend Keycloak, defining realm and client configuration as code for reviewable, repeatable changes across environments.",
      "Build platform services and supporting tooling in C#.",
    ],
    technologies: "C#, .NET, Keycloak, Configuration-as-Code",
  },
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

/*
  Drives the timeline rail's amber fill from scroll position: the fill
  tracks how far the viewport's midpoint has descended through the log.
*/
function useTimelineProgress(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      if (rect.height <= 0) return;
      const passed = Math.min(
        Math.max(window.innerHeight * 0.55 - rect.top, 0),
        rect.height
      );
      el.style.setProperty("--tl-progress", String(passed / rect.height));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
}

export default function Experience() {
  const logRef = useRef<HTMLDivElement>(null);
  useTimelineProgress(logRef);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20 sm:py-24 md:py-28 px-5 sm:px-6 md:px-10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="01"
          heading="Work Experience"
          headingId="experience-heading"
          status="Logged"
          description="Identity, platform engineering, cloud cost, and consumer products — the systems and the teams that ship them."
        />

        {/* ── Deployment log ── */}
        <div ref={logRef} className="relative">
          {/* Rail with scroll-driven fill */}
          <div className="tl-rail hidden md:block" aria-hidden="true">
            <div className="tl-fill" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => {
              const isActive = exp.period.endsWith("Present");
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="relative md:pl-12"
                >
                  {/* Rail node */}
                  <span
                    className={`tl-node hidden md:block ${isActive ? "tl-node--active" : ""}`}
                    aria-hidden="true"
                  />

                  <div className="hud-panel armable group p-6 sm:p-8 md:p-10">
                    <Corners />

                    {/* Log line */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-5">
                      <span className="index-num">
                        LOG {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mono text-[0.82rem] text-[color:var(--foreground)] whitespace-nowrap">
                        {exp.period}
                      </span>
                      {calcTenure(exp.period) && (
                        <span className="meta">· {calcTenure(exp.period)}</span>
                      )}
                      <span className="meta">{exp.location}</span>
                      {isActive && (
                        <span
                          className="chip ml-auto"
                          style={{
                            borderColor: "color-mix(in oklab, var(--online) 55%, var(--rule))",
                            color: "var(--online)",
                          }}
                        >
                          <StatusDot />
                          Active
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <h3 className="type-title text-[1.6rem] sm:text-3xl md:text-[2.1rem] text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                        {exp.company}
                      </h3>
                      {exp.badge && <span className="chip meta">{exp.badge}</span>}
                    </div>

                    <p className="mono text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[color:var(--accent)] mt-1.5 mb-6">
                      {exp.role}
                    </p>

                    <ol className="space-y-3 max-w-3xl">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[auto,1fr] gap-4 text-[0.95rem] leading-relaxed text-[color:var(--foreground)]"
                        >
                          <span className="mono text-[0.7rem] text-[color:var(--muted)] pt-1 tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-pretty">{achievement}</span>
                        </li>
                      ))}
                    </ol>

                    {exp.technologies && (
                      <div
                        className="mt-7 pt-5 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-3 md:gap-6 items-baseline"
                        style={{ borderTop: "1px solid var(--rule)" }}
                      >
                        <span className="meta shrink-0">Technologies Used:</span>
                        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                          {exp.technologies.split(",").map((tech) => (
                            <li key={tech.trim()} className="chip text-[color:var(--muted)]">
                              {tech.trim()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

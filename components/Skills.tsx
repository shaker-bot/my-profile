"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "Java", "Golang"],
    gradient: "from-blue-500 to-cyan-500",
    pill: "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)"],
    gradient: "from-orange-500 to-amber-500",
    pill: "bg-orange-50 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    title: "DevOps Tools",
    icon: Wrench,
    skills: ["AWS CDK", "Terraform", "Jenkins", "Docker", "Kubernetes"],
    gradient: "from-emerald-500 to-teal-500",
    pill: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["GitHub", "Cursor", "GitHub Copilot", "Claude Code"],
    gradient: "from-violet-500 to-indigo-500",
    pill: "bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["DynamoDB", "MongoDB", "PostgreSQL", "MySQL"],
    gradient: "from-rose-500 to-pink-500",
    pill: "bg-rose-50 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Skills & Expertise
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 self-center">
              WIP
            </span>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-sm"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`} />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-sm font-medium px-3 py-1.5 rounded-md ${category.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", proficiency: 5 },
      { name: "TypeScript", proficiency: 5 },
      { name: "Java", proficiency: 4 },
      { name: "Golang", proficiency: 3 },
    ],
    color: "blue",
    bar: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "Amazon Web Services (AWS)", proficiency: 5 },
    ],
    color: "orange",
    bar: "from-orange-500 to-amber-500",
  },
  {
    title: "DevOps Tools",
    icon: Wrench,
    skills: [
      { name: "AWS CDK", proficiency: 5 },
      { name: "Terraform", proficiency: 4 },
      { name: "Jenkins", proficiency: 4 },
      { name: "Docker / Kubernetes", proficiency: 4 },
    ],
    color: "green",
    bar: "from-green-500 to-emerald-500",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      { name: "Github", proficiency: 5 },
      { name: "AI Tooling (Cursor, Copilot, Claude Code)", proficiency: 4 },
    ],
    color: "purple",
    bar: "from-purple-500 to-indigo-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "NoSQL (DynamoDB / MongoDB)", proficiency: 4 },
      { name: "PostgreSQL", proficiency: 4 },
      { name: "MySQL", proficiency: 4 },
    ],
    color: "red",
    bar: "from-red-500 to-rose-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
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
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.bar} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.proficiency === 5 ? "Expert" : skill.proficiency === 4 ? "Advanced" : skill.proficiency === 3 ? "Intermediate" : "Beginner"}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + skillIndex * 0.08, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
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

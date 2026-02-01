"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "Golang", "Java"],
    color: "blue",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)"],
    color: "orange",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Github", "AI Tooling (Cursor, VSCode+CoPilot, Claude Code, etc.)"],
    color: "purple",
  },
  {
    title: "DevOps Tools",
    icon: Wrench,
    skills: ["AWS CDK", "Terraform", "Jenkins", "Docker/Kubernetes"],
    color: "green",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["NoSQL (DynamoDB/MongoDB)", "MySQL", "PostgreSQL"],
    color: "red",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Problem Solving",
      "Engineering Mentorship",
      "Communication",
      "Teamwork",
      "Leadership",
      "Adaptability/Flexible",
    ],
    color: "pink",
  },
];

const colorClasses = {
  blue: "from-blue-500 to-cyan-600",
  orange: "from-orange-500 to-amber-600",
  purple: "from-purple-500 to-indigo-600",
  green: "from-green-500 to-emerald-600",
  red: "from-red-500 to-rose-600",
  pink: "from-pink-500 to-fuchsia-600",
};

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
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${
                    colorClasses[category.color as keyof typeof colorClasses]
                  } mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                    >
                      {skill}
                    </motion.span>
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

"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", proficiency: 5 },
      { name: "TypeScript", proficiency: 5 },
      { name: "Golang", proficiency: 3 },
      { name: "Java", proficiency: 4 },
    ],
    color: "blue",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [{ name: "Amazon Web Services (AWS)", proficiency: 5 }],
    color: "orange",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      { name: "Github", proficiency: 5 },
      { name: "AI Tooling (Cursor, VSCode+CoPilot, Claude Code, etc.)", proficiency: 4 },
    ],
    color: "purple",
  },
  {
    title: "DevOps Tools",
    icon: Wrench,
    skills: [
      { name: "AWS CDK", proficiency: 5 },
      { name: "Terraform", proficiency: 4 },
      { name: "Jenkins", proficiency: 4 },
      { name: "Docker/Kubernetes", proficiency: 4 },
    ],
    color: "green",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "NoSQL (DynamoDB/MongoDB)", proficiency: 4 },
      { name: "MySQL", proficiency: 4 },
      { name: "PostgreSQL", proficiency: 4 },
    ],
    color: "red",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", proficiency: 5 },
      { name: "Engineering Mentorship", proficiency: 5 },
      { name: "Communication", proficiency: 5 },
      { name: "Teamwork", proficiency: 5 },
      { name: "Leadership", proficiency: 4 },
      { name: "Adaptability/Flexible", proficiency: 5 },
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
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>Proficiency:</span>
            {[
              { label: "Beginner", level: 1 },
              { label: "Intermediate", level: 3 },
              { label: "Expert", level: 5 },
            ].map(({ label, level }) => (
              <div key={label} className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < level
                          ? "bg-blue-500"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
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
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.proficiency
                                ? `bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]}`
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
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

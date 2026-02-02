"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "MS in Computer Science",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA, USA",
    gpa: "3.71",
    date: "08/2022",
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
  {
    name: "Certified Solutions Architect Associate",
    issuer: "AWS",
  },
  {
    name: "Certified SysOps Associate",
    issuer: "AWS",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {edu.location}
              </p>
              {edu.gpa && (
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  GPA: {edu.gpa}
                </p>
              )}
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {edu.date}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-green-100">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

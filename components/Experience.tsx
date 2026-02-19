"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Capital One",
    location: "McLean, VA, USA",
    period: "07/2021 - 04/2025",
    role: "Senior Software Engineer",
    badge: "Platform & Developer Tools",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
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
    company: "Capital One",
    location: "McLean, VA, USA",
    period: "03/2019 - 07/2021",
    role: "Senior Software Engineer",
    badge: "Cloud Cost & Compliance",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    achievements: [
      "Led refactor and implementation of EC2/ECS off-hours solution that optimized cost for AWS resources across thousands of non-production accounts.",
      "Implemented Cloud Custodian policies and visual emails to drive compliance and cost objectives",
      "Architected Off-Hours solution for database management in order to gain more cloud cost-savings.",
      "Designed and implemented a proof of concept solution to assist developers in producing IAM policies that used least-privilege principles based on their applications usage in non-production environments.",
    ],
    technologies: "Python, AWS Lambda, AWS DynamoDB, AWS RDS, AWS IAM, Boto3, Cloud Custodian, YAML",
  },
  {
    company: "Extend",
    location: "USA, Remote",
    period: "07/2021 - 07/2022",
    role: "Senior Software Engineer",
    badge: "Consumer Application",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    achievements: [
      "Designed and Released Customer-Facing Portal For Purchased Warranty Experience",
      "Helped design and build authentication flow along with the security team",
      "Built, updated, and maintained key API endpoints used by the application",
      "Brought new engineers up to speed with technology stack, architecture, and deployment patterns",
    ],
    technologies: "Typescript, NodeJS, AWS Lambda, AWS SQS, AWS DynamoDB/Table Streams, React/Redux, Chakra UI, AWS Cognito, Github Actions",
  },
  {
    company: "Cloudreach",
    location: "Reston, VA, USA",
    period: "06/2018 - 03/2019",
    role: "Cloud Systems Developer",
    badge: "Consulting",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
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
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-4 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[10px] top-0"></div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                        {exp.location && (
                          <span className="text-lg font-normal text-gray-600 dark:text-gray-400"> • {exp.location}</span>
                        )}
                      </h3>
                      {exp.badge && (
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Technologies Used:
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {exp.technologies}
                    </p>
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

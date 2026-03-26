"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Music, Code, Gamepad2, Tv, ArrowLeft } from "lucide-react";

interface HobbyItem {
  title: string;
  subtitle?: string;
  tag?: string;
}

interface Hobby {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bg: string;
  tagBg: string;
  tagText: string;
  items: HobbyItem[];
}

const hobbies: Hobby[] = [
  {
    icon: Gamepad2,
    title: "Video Games",
    description:
      "From RPGs to competitive shooters — always up for a good story or a ranked grind.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    tagBg: "bg-violet-100 dark:bg-violet-900/40",
    tagText: "text-violet-700 dark:text-violet-300",
    items: [
      { title: "League of Legends", subtitle: "MOBA · 2009", tag: "Playing" },
      { title: "Valorant", subtitle: "Tactical FPS · 2020", tag: "Playing" },
      { title: "Absolum", subtitle: "Roguelite Beat 'em Up · 2025", tag: "Backlog" },
    ],
  },
  {
    icon: Tv,
    title: "TV Shows",
    description:
      "A sucker for a well-written series. Always mid-rewatch of something and mid-watch of three other things.",
    color: "from-sky-500 to-cyan-600",
    bg: "bg-sky-50 dark:bg-sky-900/20",
    tagBg: "bg-sky-100 dark:bg-sky-900/40",
    tagText: "text-sky-700 dark:text-sky-300",
    items: [
      { title: "Law & Order: SVU", subtitle: "NBC · 1999", tag: "Watching" },
      { title: "Young Sherlock", subtitle: "Prime Video · 2026", tag: "Watching" },
      { title: "Superstore", subtitle: "NBC · 2015", tag: "Completed" },
    ],
  },
  {
    icon: BookOpen,
    title: "Reading",
    description:
      "Fiction, tech, and everything in between. Currently working through a backlog of sci-fi classics.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    tagBg: "bg-blue-100 dark:bg-blue-900/40",
    tagText: "text-blue-700 dark:text-blue-300",
    items: [
      { title: "Book Title", subtitle: "Author · Year", tag: "Reading" },
      { title: "Book Title", subtitle: "Author · Year", tag: "Completed" },
      { title: "Book Title", subtitle: "Author · Year", tag: "Queue" },
    ],
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Listening across genres and occasionally picking up a guitar to make noise.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    tagBg: "bg-purple-100 dark:bg-purple-900/40",
    tagText: "text-purple-700 dark:text-purple-300",
    items: [
      { title: "Artist / Album", subtitle: "Genre · Year", tag: "On Repeat" },
      { title: "Artist / Album", subtitle: "Genre · Year", tag: "Favorite" },
      { title: "Artist / Album", subtitle: "Genre · Year", tag: "Discovery" },
    ],
  },
  {
    icon: Code,
    title: "Side Projects",
    description:
      "Building things for fun — tools, experiments, and the occasional over-engineered solution to a simple problem.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    tagBg: "bg-rose-100 dark:bg-rose-900/40",
    tagText: "text-rose-700 dark:text-rose-300",
    items: [
      { title: "Project Name", subtitle: "Tech Stack", tag: "Active" },
      { title: "Project Name", subtitle: "Tech Stack", tag: "Shipped" },
      { title: "Project Name", subtitle: "Tech Stack", tag: "Paused" },
    ],
  },
];

// direction: 1 = forward (grid → detail), -1 = back (detail → grid)
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  }),
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Hobbies() {
  const [selected, setSelected] = useState<Hobby | null>(null);
  const [direction, setDirection] = useState(1);

  const openHobby = (hobby: Hobby) => {
    setDirection(1);
    setSelected(hobby);
  };

  const goBack = () => {
    setDirection(-1);
    setSelected(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 pt-28 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* Page header — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
              Beyond the Code
            </h1>
            <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800 self-center">
              WIP
            </span>
          </div>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A few things I enjoy when I&apos;m not in front of a terminal.
          </p>
        </motion.div>

        {/* Animated view switcher */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="popLayout" custom={direction}>
            {!selected ? (
              /* ── Grid view ── */
              <motion.div
                key="grid"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {hobbies.map((hobby) => {
                    const Icon = hobby.icon;
                    return (
                      <motion.button
                        key={hobby.title}
                        variants={gridItem}
                        onClick={() => openHobby(hobby)}
                        className={`group/hobby text-left rounded-xl p-6 ${hobby.bg} border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                      >
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${hobby.color} mb-4 shadow transition-transform duration-200 group-hover/hobby:scale-110`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                          {hobby.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                          {hobby.description}
                        </p>
                        <p className="mt-4 text-xs font-medium text-slate-400 dark:text-slate-500 transition-all duration-200 group-hover/hobby:text-slate-600 dark:group-hover/hobby:text-slate-300 group-hover/hobby:translate-x-1">
                          Tap to explore →
                        </p>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            ) : (
              /* ── Detail view ── */
              <motion.div
                key={selected.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Back navigation / breadcrumb */}
                <div className="flex items-center gap-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                  <button
                    onClick={goBack}
                    aria-label="Back to all hobbies"
                    className="group/back inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 font-medium text-slate-700 dark:text-slate-300"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/back:-translate-x-1" />
                    All Hobbies
                  </button>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {selected.title}
                  </span>
                </div>

                {/* Hobby header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.color} shadow-lg`}
                  >
                    <selected.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {selected.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                      {selected.description}
                    </p>
                  </div>
                </div>

                {/* Item list */}
                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                  className="space-y-3"
                >
                  {selected.items.map((hobbyItem, i) => (
                    <motion.div
                      key={i}
                      variants={listItem}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                    >
                      <span className="text-xl font-bold text-slate-200 dark:text-slate-700 w-7 shrink-0 text-center select-none tabular-nums">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white truncate">
                          {hobbyItem.title}
                        </p>
                        {hobbyItem.subtitle && (
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {hobbyItem.subtitle}
                          </p>
                        )}
                      </div>
                      {hobbyItem.tag && (
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-md shrink-0 ${selected.tagBg} ${selected.tagText}`}
                        >
                          {hobbyItem.tag}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

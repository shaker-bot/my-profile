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
  glyph: string;
  items: HobbyItem[];
}

const hobbies: Hobby[] = [
  {
    icon: Gamepad2,
    title: "Video Games",
    description:
      "From RPGs to competitive shooters — always up for a good story or a ranked grind.",
    glyph: "▶",
    items: [
      { title: "League of Legends", subtitle: "MOBA · 2009", tag: "Playing" },
      { title: "Valorant",          subtitle: "Tactical FPS · 2020", tag: "Playing" },
      { title: "Absolum",           subtitle: "Roguelite Beat 'em Up · 2025", tag: "Backlog" },
    ],
  },
  {
    icon: Tv,
    title: "TV Shows",
    description:
      "A sucker for a well-written series. Always mid-rewatch of something and mid-watch of three other things.",
    glyph: "◧",
    items: [
      { title: "Law & Order: SVU", subtitle: "NBC · 1999",       tag: "Watching" },
      { title: "Young Sherlock",   subtitle: "Prime Video · 2026", tag: "Watching" },
      { title: "Superstore",       subtitle: "NBC · 2015",       tag: "Completed" },
    ],
  },
  {
    icon: BookOpen,
    title: "Reading",
    description:
      "Fiction, tech, and everything in between. Currently working through a backlog of sci-fi classics.",
    glyph: "§",
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
    glyph: "♪",
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
    glyph: "⌥",
    items: [
      { title: "Project Name", subtitle: "Tech Stack", tag: "Active" },
      { title: "Project Name", subtitle: "Tech Stack", tag: "Shipped" },
      { title: "Project Name", subtitle: "Tech Stack", tag: "Paused" },
    ],
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }),
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
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
    <section
      className="relative min-h-screen px-6 md:px-10 pt-28 md:pt-32 pb-24"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Page head ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center justify-between mb-10 pb-3"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <span className="kicker">The Weekend Edition</span>
          <span className="kicker hidden sm:inline">§&nbsp;04 — Hobbies</span>
          <span
            className="font-mono-tight text-[0.62rem] tracking-[0.18em] px-1.5 py-0.5"
            style={{ background: "var(--glow)", color: "#14110a" }}
          >
            WIP
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid grid-cols-12 gap-8 mb-14 items-end"
        >
          <div className="col-span-12 md:col-span-8">
            <h1 className="hd-display text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] text-[color:var(--foreground)]">
              Beyond the Code
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <p className="font-mono-tight text-sm text-[color:var(--muted)] max-w-xs md:ml-auto text-pretty">
              A few things I enjoy when I&apos;m not in front of a terminal.
            </p>
          </div>
        </motion.div>

        {/* ── View switcher ── */}
        <div className="relative">
          <AnimatePresence mode="popLayout" custom={direction}>
            {!selected ? (
              <motion.div
                key="grid"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
                  style={{ background: "var(--rule)" }}
                >
                  {hobbies.map((hobby, index) => {
                    const Icon = hobby.icon;
                    return (
                      <motion.button
                        key={hobby.title}
                        variants={listItem}
                        onClick={() => openHobby(hobby)}
                        className="group relative text-left p-8 transition-colors hover:bg-[color:var(--surface)]"
                        style={{ background: "var(--background)" }}
                      >
                        <div className="flex items-start justify-between mb-6">
                          <span className="kicker">
                            Column&nbsp;№ {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className="font-display text-2xl leading-none translate-y-[-3px] text-[color:var(--signal)]"
                            aria-hidden="true"
                          >
                            {hobby.glyph}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-[color:var(--muted)]" />
                          <h3 className="font-display text-[1.9rem] md:text-[2.2rem] leading-[1.02] tracking-[-0.02em] text-[color:var(--foreground)] group-hover:text-[color:var(--signal)] transition-colors">
                            {hobby.title}
                          </h3>
                        </div>

                        <p className="text-[0.95rem] leading-relaxed text-[color:var(--muted)] mb-8 max-w-sm">
                          {hobby.description}
                        </p>

                        <p className="kicker flex items-center gap-2 transition-colors group-hover:text-[color:var(--signal)]">
                          Read More
                          <span className="inline-shift">→</span>
                        </p>

                        <span
                          className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
                          style={{ background: "var(--signal)" }}
                          aria-hidden="true"
                        />
                      </motion.button>
                    );
                  })}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={selected.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-10">
                  <button
                    onClick={goBack}
                    aria-label="Back to all hobbies"
                    className="group inline-flex items-center gap-2 px-3 py-1.5 font-mono-tight text-xs uppercase tracking-[0.18em] text-[color:var(--foreground)] hover:text-[color:var(--signal)] transition-colors"
                    style={{ border: "1px solid var(--rule)" }}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                    All Hobbies
                  </button>
                  <span className="kicker mx-2">/</span>
                  <span className="kicker text-[color:var(--foreground)]">
                    {selected.title}
                  </span>
                </div>

                {/* Article head */}
                <div
                  className="grid grid-cols-12 gap-6 pb-10 mb-10"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div className="col-span-12 md:col-span-2">
                    <span
                      className="font-display text-6xl md:text-7xl text-[color:var(--signal)] leading-none"
                      aria-hidden="true"
                    >
                      {selected.glyph}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <div className="flex items-center gap-3 mb-2">
                      <selected.icon className="w-4 h-4 text-[color:var(--muted)]" />
                      <span className="kicker">Feature · The Weekend Edition</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
                      <span className="font-display-italic">{selected.title}</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-[color:var(--foreground)] text-lg leading-relaxed">
                      {selected.description}
                    </p>
                  </div>
                </div>

                {/* Item ledger */}
                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                  className="divide-y"
                  style={{
                    borderTop: "1px solid var(--rule)",
                    borderBottom: "1px solid var(--rule)",
                    borderColor: "var(--rule)",
                  }}
                >
                  {selected.items.map((hobbyItem, i) => (
                    <motion.div
                      key={i}
                      variants={listItem}
                      className="grid grid-cols-[auto,1fr,auto] items-center gap-6 py-5 hover:bg-[color:var(--surface)] transition-colors"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      <span className="font-mono-tight text-[0.72rem] tracking-[0.18em] text-[color:var(--muted)] w-10 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-xl md:text-2xl leading-tight text-[color:var(--foreground)] truncate">
                          {hobbyItem.title}
                        </p>
                        {hobbyItem.subtitle && (
                          <p className="font-mono-tight text-xs text-[color:var(--muted)] mt-0.5">
                            {hobbyItem.subtitle}
                          </p>
                        )}
                      </div>
                      {hobbyItem.tag && (
                        <span
                          className="font-mono-tight text-[0.68rem] uppercase tracking-[0.18em] px-2.5 py-1 whitespace-nowrap"
                          style={{ border: "1px solid var(--rule)", color: "var(--signal)" }}
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

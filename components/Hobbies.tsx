"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Music, Code, Gamepad2, Tv, ArrowLeft } from "lucide-react";
import { Corners, RegMark } from "./hud";

interface HobbyItem {
  title: string;
  subtitle?: string;
  tag?: string;
}

interface Hobby {
  icon: React.ElementType;
  title: string;
  description: string;
  items: HobbyItem[];
}

const hobbies: Hobby[] = [
  {
    icon: Gamepad2,
    title: "Video Games",
    description:
      "From RPGs to competitive shooters — always up for a good story or a ranked grind.",
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
    items: [
      { title: "Project Name", subtitle: "Tech Stack", tag: "Active" },
      { title: "Project Name", subtitle: "Tech Stack", tag: "Shipped" },
      { title: "Project Name", subtitle: "Tech Stack", tag: "Paused" },
    ],
  },
];

/* Status semantics for tag chips: running / done / queued. */
const LIVE_TAGS = ["Playing", "Watching", "Reading", "On Repeat", "Active"];
const DONE_TAGS = ["Completed", "Shipped", "Favorite"];

function tagStyle(tag: string): React.CSSProperties {
  if (LIVE_TAGS.includes(tag)) {
    return {
      borderColor: "color-mix(in oklab, var(--online) 55%, var(--rule))",
      color: "var(--online)",
    };
  }
  if (DONE_TAGS.includes(tag)) {
    return { borderColor: "var(--rule)", color: "var(--muted)" };
  }
  return {
    borderColor: "color-mix(in oklab, var(--accent) 45%, var(--rule))",
    color: "var(--accent)",
  };
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }),
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const listItem = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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
      aria-labelledby="hobbies-heading"
      className="relative min-h-screen px-5 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Module strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex items-center justify-between gap-4 pb-3 mb-8 sm:mb-10"
          style={{ borderBottom: "1px solid var(--rule)" }}
        >
          <span className="flex items-center gap-3">
            <RegMark />
            <span className="index-num">MODULE 04</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="meta">Off-Duty</span>
            <RegMark />
          </span>
        </motion.div>

        {/* ── Page head ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid grid-cols-12 gap-x-8 gap-y-5 mb-12 sm:mb-16 items-end"
        >
          <div className="col-span-12 md:col-span-8">
            <h1
              id="hobbies-heading"
              className="type-display text-[2.5rem] min-[420px]:text-[3.25rem] sm:text-6xl md:text-7xl text-[color:var(--foreground)]"
            >
              Beyond the Code
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.95rem] leading-relaxed text-[color:var(--muted)] md:text-right max-w-sm md:ml-auto text-pretty">
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {hobbies.map((hobby, index) => {
                    const Icon = hobby.icon;
                    return (
                      <motion.button
                        key={hobby.title}
                        variants={listItem}
                        onClick={() => openHobby(hobby)}
                        aria-label={`Read more about ${hobby.title}`}
                        className="hud-panel armable group relative flex flex-col text-left p-6 sm:p-7 min-h-[44px]"
                      >
                        <Corners />

                        <div className="flex items-center justify-between mb-8">
                          <span className="index-num">
                            SLOT {String(index + 1).padStart(2, "0")}
                          </span>
                          <Icon
                            className="w-4 h-4 text-[color:var(--muted)] transition-colors group-hover:text-[color:var(--accent)]"
                            aria-hidden="true"
                          />
                        </div>

                        <h3 className="type-title text-2xl sm:text-[1.75rem] text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] transition-colors mb-3">
                          {hobby.title}
                        </h3>

                        <p className="text-[0.92rem] leading-relaxed text-[color:var(--muted)] mb-8 max-w-sm text-pretty">
                          {hobby.description}
                        </p>

                        <p className="meta mt-auto flex items-center gap-2 transition-colors group-hover:text-[color:var(--accent)]">
                          Read More
                          <span className="inline-shift" aria-hidden="true">→</span>
                        </p>
                      </motion.button>
                    );
                  })}

                  {/* Expansion slot keeps the bay symmetrical on lg */}
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex flex-col justify-between p-6 sm:p-7"
                    style={{ border: "1px dashed var(--border)" }}
                  >
                    <span className="index-num" style={{ color: "var(--muted-2)" }}>
                      SLOT 06
                    </span>
                    <span className="meta">— and whatever ships next</span>
                  </div>
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
                <div className="flex items-center gap-3 mb-10">
                  <button
                    onClick={goBack}
                    aria-label="Back to all hobbies"
                    className="group inline-flex items-center gap-2 px-3 py-1.5 min-h-[36px] meta text-[color:var(--foreground)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors"
                    style={{ border: "1px solid var(--rule)" }}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                    All Hobbies
                  </button>
                  <span className="meta" aria-hidden="true">/</span>
                  <span className="meta text-[color:var(--foreground)]">
                    {selected.title}
                  </span>
                </div>

                {/* Detail head */}
                <div
                  className="grid grid-cols-12 gap-x-8 gap-y-4 pb-8 mb-2 items-end"
                  style={{ borderBottom: "1px solid var(--rule)" }}
                >
                  <div className="col-span-12 md:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <selected.icon className="w-4 h-4 text-[color:var(--muted)]" aria-hidden="true" />
                      <span className="meta">Log Entry</span>
                    </div>
                    <h2 className="type-display text-[2.25rem] sm:text-5xl md:text-6xl text-[color:var(--foreground)]">
                      {selected.title}
                    </h2>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-[0.95rem] leading-relaxed text-[color:var(--muted)] md:text-right max-w-sm md:ml-auto text-pretty">
                      {selected.description}
                    </p>
                  </div>
                </div>

                {/* Item ledger */}
                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                >
                  {selected.items.map((hobbyItem, i) => (
                    <motion.div
                      key={i}
                      variants={listItem}
                      className="grid grid-cols-[auto,1fr,auto] items-baseline gap-6 py-5 hover:bg-[color:var(--surface)] transition-colors"
                      style={{ borderBottom: "1px solid var(--rule)" }}
                    >
                      <span className="index-num w-8 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="type-title text-lg md:text-xl text-[color:var(--foreground)] truncate">
                          {hobbyItem.title}
                        </p>
                        {hobbyItem.subtitle && (
                          <p className="mono text-xs text-[color:var(--muted)] mt-0.5">
                            {hobbyItem.subtitle}
                          </p>
                        )}
                      </div>
                      {hobbyItem.tag && (
                        <span
                          className="chip whitespace-nowrap uppercase tracking-[0.08em]"
                          style={tagStyle(hobbyItem.tag)}
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

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Corners } from "./hud";

/*
  Floating "return to top" control. Stays out of the way until the
  reader is most of a viewport down the page, then docks bottom-right.
*/
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="armable group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex h-11 w-11 items-center justify-center backdrop-blur-md text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
          style={{
            /* hud-panel look, minus its position: relative (which would
               override the fixed utility in the cascade) */
            background: "color-mix(in oklab, var(--surface) 88%, transparent)",
            border: "1px solid var(--rule)",
          }}
        >
          <Corners />
          <ArrowUp
            className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

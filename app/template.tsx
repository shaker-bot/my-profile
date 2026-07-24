"use client";

import { motion, MotionConfig } from "framer-motion";

/*
  Page transition: a short "signal tune-in" — content settles into
  focus as it rises. MotionConfig makes every framer-motion animation
  site-wide respect the user's reduced-motion preference.
*/
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

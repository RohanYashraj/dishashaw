"use client";

import { motion } from "motion/react";

/** A loose thread that slowly draws and drifts behind the hero type. */
export default function ThreadIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 900 700"
      fill="none"
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path
        d="M40 620 C 180 520, 90 400, 240 340 S 480 380, 520 260 S 420 90, 600 80 C 720 74, 800 150, 848 96"
        stroke="var(--color-ember)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3.2, delay: 1.6, ease: "easeInOut" }}
      />
      {/* needle at the thread's end */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 4.4 }}
        stroke="var(--color-charcoal)"
        strokeWidth="1.5"
      >
        <path d="M848 96 l34 -26" strokeLinecap="round" />
        <ellipse cx="878" cy="74" rx="3.4" ry="5.4" transform="rotate(38 878 74)" fill="none" />
      </motion.g>
    </motion.svg>
  );
}

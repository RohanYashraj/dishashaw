"use client";

import { motion } from "motion/react";

/** Dashed "running stitch" divider that sews itself in as it enters the viewport.
 *  Stitch colour comes from the text colour on `className` (defaults to stone). */
export default function StitchDivider({ className = "text-stone/60" }: { className?: string }) {
  return (
    <div aria-hidden className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      <svg viewBox="0 0 1200 24" fill="none" className="w-full">
        <motion.path
          d="M0 12 Q 150 2, 300 12 T 600 12 T 900 12 T 1200 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="10 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        >
          <path d="M598 6 l4 6 l-4 6 M602 6 l4 6 l-4 6" stroke="currentColor" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { EASE_LUXE } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Masked line reveal — content slides up from behind an invisible edge.
 * The viewport observer lives on the (never-transformed) wrapper: a child that
 * starts fully outside an overflow-hidden parent never intersects, so
 * whileInView on the child itself would never fire.
 */
export default function TextReveal({ children, delay = 0, className = "", as = "span" }: Props) {
  const Tag = motion[as];
  return (
    <motion.span
      // pb/-mb: descenders (italic serif g, y…) overflow the line box at
      // line-height 1 — let them render into the mask's padding without
      // changing the layout height. hidden y > 100% + padding keeps the
      // text fully clipped before the reveal.
      className="block overflow-hidden pb-[0.2em] -mb-[0.2em]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Tag
        variants={{ hidden: { y: "130%" }, visible: { y: 0 } }}
        transition={{ duration: 1, delay, ease: EASE_LUXE }}
        className={`block ${className}`}
      >
        {children}
      </Tag>
    </motion.span>
  );
}

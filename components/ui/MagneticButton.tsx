"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

/** Pill button that leans toward the cursor and morphs slightly on hover. */
export default function MagneticButton({ href, children, variant = "solid", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    solid: "bg-ink text-ivory hover:bg-ember",
    outline: "border border-ink/30 bg-ivory/85 text-ink backdrop-blur-sm hover:border-ember hover:text-ember",
    ghost: "text-ivory border border-ivory/40 hover:bg-ivory hover:text-ink",
  }[variant];

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`label inline-flex items-center gap-3 rounded-full px-8 py-4 transition-colors duration-500 hover:rounded-2xl ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}

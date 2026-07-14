"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { numbers } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export default function Numbers() {
  return (
    <section className="border-y border-ink/10 bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-[110rem] grid-cols-2 gap-y-14 px-6 md:grid-cols-4 md:px-12">
        {numbers.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
            className={`flex flex-col gap-3 ${i % 2 ? "md:mt-12" : ""}`}
          >
            <span className="headline-lg">
              <Counter value={n.value} suffix={n.suffix} />
            </span>
            <span className="label flex items-center gap-2 text-charcoal/60">
              <span aria-hidden className="text-ember">✻</span>
              {n.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

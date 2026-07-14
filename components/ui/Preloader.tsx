"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/** Brief editorial loading curtain: name reveal + count, then lifts. */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(id);
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1300;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setDone(true);
          document.documentElement.style.overflow = "";
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    // rAF starves in background/throttled tabs — never leave the curtain stuck
    const fallback = setTimeout(() => {
      setCount(100);
      setDone(true);
      document.documentElement.style.overflow = "";
    }, 2600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-ink text-ivory"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.65, 0.05, 0, 1] }}
          aria-hidden
        >
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
            className="headline-md"
          >
            Disha <span className="font-serif-editorial italic font-normal">Shaw</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="label mt-6 text-stone"
          >
            Bornfree Fashions
          </motion.p>
          <p className="label absolute bottom-10 right-10 tabular-nums text-stone">
            {count}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

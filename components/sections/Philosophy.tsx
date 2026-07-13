"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { philosophy } from "@/lib/content";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";

type ImageKey = keyof typeof images;

export default function Philosophy() {
  const [active, setActive] = useState(0);
  const pillar = philosophy.pillars[active];
  const img = images[pillar.imageKey as ImageKey] as { src: string; alt: string };

  return (
    <section id="philosophy" className="relative bg-ink py-28 text-ivory md:py-40">
      <span aria-hidden className="headline-xl text-outline pointer-events-none absolute left-4 top-10 select-none text-ivory/15">
        02
      </span>

      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <TextReveal className="label text-ember">02 — {philosophy.intro}</TextReveal>
        <h2 className="mt-10 max-w-4xl">
          <TextReveal as="span" className="headline-md font-serif-editorial italic font-normal text-ivory/90">
            “{philosophy.statement}”
          </TextReveal>
        </h2>

        <div className="mt-24 grid grid-cols-12 items-start gap-y-12 md:gap-x-12">
          <ul className="col-span-12 md:col-span-7">
            {philosophy.pillars.map((p, i) => (
              <li key={p.word} className="border-b border-ivory/15 first:border-t">
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline justify-between gap-6 py-6 text-left md:py-8"
                >
                  <span
                    className={`headline-lg transition-colors duration-700 ${
                      active === i ? "text-ember" : "text-outline text-ivory/60 group-hover:text-ivory"
                    }`}
                  >
                    {p.word}
                  </span>
                  <span className="label shrink-0 text-ivory/40">0{i + 1}</span>
                </button>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.65, 0.05, 0, 1] }}
                      className="max-w-xl overflow-hidden pb-8 font-serif-editorial text-xl italic text-ivory/70 md:text-2xl"
                    >
                      {p.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="col-span-12 md:col-span-4 md:col-start-9 md:sticky md:top-28">
            <div className="relative aspect-[3/4] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={pillar.word}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="label mt-4 flex justify-between text-ivory/50">
              <span>{pillar.word}</span>
              <span aria-hidden>✻</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

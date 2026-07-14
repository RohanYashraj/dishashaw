"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { work } from "@/lib/content";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";

type ImageKey = keyof typeof images;

export default function SelectedWork() {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 150, damping: 20 });
  const py = useSpring(my, { stiffness: 150, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  const hoveredImg =
    hovered !== null
      ? (images[work[hovered].imageKey as ImageKey] as { src: string; alt: string })
      : null;

  return (
    <section id="work" className="relative bg-ivory py-28 md:py-40" onMouseMove={onMove}>
      <span aria-hidden className="headline-xl text-outline pointer-events-none absolute right-4 top-10 select-none text-stone/30">
        03
      </span>

      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <TextReveal className="label text-ember">03 — Selected Work</TextReveal>
        <h2 className="mt-10">
          <TextReveal as="span" className="headline-lg">
            Case studies,
          </TextReveal>
          <TextReveal as="span" delay={0.12} className="headline-lg font-serif-editorial italic font-normal">
            told like editorials.
          </TextReveal>
        </h2>

        <ul className="mt-20 border-t border-ink/15">
          {work.map((w, i) => (
            <li key={w.slug} className="border-b border-ink/15">
              <Link
                href={`/work/${w.slug}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  posthog.capture("case_study_selected", {
                    case_study_slug: w.slug,
                    case_study_title: w.title,
                    case_study_category: w.category,
                    position: i + 1,
                    section: "selected_work",
                  });
                }}
                className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors duration-500 hover:bg-beige md:py-12"
              >
                <span className="label col-span-2 text-charcoal/50 md:col-span-1">{w.index}</span>
                <span className="headline-md col-span-10 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-4 md:col-span-7">
                  {w.title}
                </span>
                <span className="label col-span-8 col-start-3 text-charcoal/60 md:col-span-3 md:col-start-9 md:text-right">
                  {w.category}
                </span>
                <span className="label col-span-1 hidden text-right text-ember md:block" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* floating image preview following the cursor */}
      <AnimatePresence>
        {hoveredImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] }}
            style={{ x: px, y: py }}
            className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block"
            aria-hidden
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2 rotate-3">
              <div className="relative h-72 w-56 overflow-hidden shadow-2xl">
                <Image
                  src={hoveredImg.src}
                  alt=""
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

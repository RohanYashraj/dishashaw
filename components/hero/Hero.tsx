"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ThreadIllustration from "./ThreadIllustration";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-ivory">
      <ThreadIllustration className="pointer-events-none absolute -right-24 top-10 w-[60vw] max-w-4xl opacity-70" />

      <div className="relative mx-auto grid min-h-svh max-w-[110rem] grid-cols-12 items-center gap-y-10 px-6 pb-24 pt-36 md:px-12 lg:pt-28">
        {/* Type block */}
        <div className="relative z-10 col-span-12 lg:col-span-8">
          <TextReveal delay={1.5} className="label mb-8 text-ember">
            <span aria-hidden>✳ </span>
            {hero.eyebrow}
          </TextReveal>

          <h1 className="headline-xl">
            <TextReveal delay={1.65} as="span">
              {hero.line1}
            </TextReveal>
            <TextReveal delay={1.85} as="span" className="font-serif-editorial font-medium italic text-charcoal">
              {hero.line2}
            </TextReveal>
          </h1>

          <TextReveal delay={2.1} className="mt-10 max-w-md text-base leading-relaxed text-charcoal/80 md:text-lg">
            {hero.sub}
          </TextReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#story">{hero.ctaPrimary.label} →</MagneticButton>
            <MagneticButton href="#work" variant="outline">
              {hero.ctaSecondary.label}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Portrait overlapping the type on large screens */}
        <motion.figure
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ delay: 1.9, duration: 1.2, ease: [0.65, 0.05, 0, 1] }}
          className="relative z-0 col-span-10 col-start-2 aspect-[3/4] w-full lg:col-span-4 lg:col-start-9 lg:-ml-16 lg:mt-8"
        >
          <div className="zoom-frame relative h-full w-full">
            <Image
              src={images.heroPortrait.src}
              alt={images.heroPortrait.alt}
              fill
              priority
              sizes="(max-width: 1024px) 85vw, 32vw"
              className="object-cover"
            />
          </div>
          <figcaption className="label mt-3 flex items-baseline justify-between text-stone">
            <span>Disha Shaw</span>
            <span className="font-serif-editorial text-sm normal-case italic tracking-normal">
              fig. 01 — the founder
            </span>
          </figcaption>
          {/* small fabric detail, polaroid-style, overlapping the portrait */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: 20 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ delay: 2.6, duration: 0.9 }}
            className="absolute -bottom-10 -left-14 hidden w-36 bg-white p-2 pb-6 shadow-lg lg:block"
          >
            <span className="tape -top-2 left-1/2 -translate-x-1/2 rotate-3" />
            <div className="relative aspect-square">
              <Image
                src={images.heroDetail.src}
                alt={images.heroDetail.alt}
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.figure>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="label absolute bottom-8 left-6 flex items-center gap-3 text-charcoal/60 md:left-12"
      >
        <motion.span
          aria-hidden
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        Scroll
      </motion.a>
      <p className="label absolute bottom-8 right-6 text-charcoal/40 md:right-12" aria-hidden>
        Est. 2018 — Kolkata, India
      </p>
    </section>
  );
}

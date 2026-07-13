"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ThreadIllustration from "./ThreadIllustration";

const EASE = [0.65, 0.05, 0, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden bg-ivory">
      <ThreadIllustration className="pointer-events-none absolute -right-24 top-10 w-[60vw] max-w-4xl opacity-60" />

      {/* warm wall of light behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-[-20%] h-[80vh] w-[80vh] rounded-full bg-sand/50 blur-3xl"
      />

      {/* Type block */}
      <div className="relative z-10 mx-auto w-full max-w-[110rem] px-6 pb-10 pt-32 md:px-12 lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:pb-28 lg:pt-24">
        <div className="lg:max-w-[46vw]">
          <TextReveal delay={1.5} className="label mb-10 text-ink">
            {hero.eyebrow}{" "}
            <span className="text-ember" aria-hidden>
              ✳
            </span>
          </TextReveal>

          <h1 className="headline-lg">
            {hero.lines.map((line, i) => (
              <TextReveal
                key={line.text}
                delay={1.6 + i * 0.14}
                as="span"
                className={
                  line.style === "serif"
                    ? "font-serif-editorial font-medium italic text-ember"
                    : undefined
                }
              >
                {line.text}
              </TextReveal>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.8, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-charcoal/85"
          >
            {hero.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-x-3">
                {i > 0 && (
                  <span aria-hidden className="text-ember">
                    ·
                  </span>
                )}
                {role}
              </span>
            ))}
          </motion.p>

          <TextReveal delay={2.35} className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/70 md:text-base">
            {hero.sub}
          </TextReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.55, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#story">{hero.ctaPrimary.label} →</MagneticButton>
            <MagneticButton href="#work" variant="outline">
              {hero.ctaSecondary.label}
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9 }}
            className="label mt-10 text-charcoal/40"
          >
            Est. 2003 — Kolkata, India
          </motion.p>
        </div>
      </div>

      {/* Founder portrait — transparent cutout, anchored to the bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 1.3, ease: EASE }}
        className="pointer-events-none relative z-0 ml-auto mt-auto w-[min(94vw,36rem)] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[min(88svh,60rem)] lg:w-[58vw]"
      >
        <Image
          src={images.heroPortrait.src}
          alt={images.heroPortrait.alt}
          width={1110}
          height={951}
          priority
          sizes="(max-width: 1024px) 94vw, 58vw"
          className="h-auto w-full lg:h-full lg:w-full lg:object-contain lg:[object-position:right_bottom]"
        />
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="label absolute bottom-8 left-6 z-10 hidden items-center gap-3 text-charcoal/60 md:left-12 lg:flex"
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
    </section>
  );
}

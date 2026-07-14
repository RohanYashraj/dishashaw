"use client";

import posthog from "posthog-js";
import { motion } from "motion/react";
import { testimonials, press } from "@/lib/content";
import TextReveal from "@/components/ui/TextReveal";

export default function Testimonials() {
  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <TextReveal className="label text-ember">07 — Voices</TextReveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.65, 0.05, 0, 1] }}
              onViewportEnter={() => {
                posthog.capture("testimonial_viewed", {
                  testimonial_position: i + 1,
                  testimonial_role: t.role,
                  section: "testimonials",
                });
              }}
              className={`flex flex-col justify-between border-t-2 border-ink pt-8 ${i % 2 ? "md:mt-16" : ""}`}
            >
              <p className="font-serif-editorial text-2xl italic leading-snug text-charcoal md:text-[1.7rem]">
                “{t.quote}”
              </p>
              <footer className="mt-10">
                <p className="label">{t.name}</p>
                <p className="label mt-1 text-charcoal/50">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Press marquee — placeholder names, replace with real features */}
        <div className="mt-32 border-y border-ink/10 py-8" aria-label="Featured press (placeholder)">
          <div className="flex overflow-hidden" aria-hidden>
            <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
              {[...press, ...press].map((p, i) => (
                <span key={i} className="font-display text-2xl font-medium tracking-wide text-charcoal/30 md:text-3xl">
                  {p} <span className="text-ember/40">✻</span>
                </span>
              ))}
            </div>
          </div>
          <p className="label mt-4 text-center text-charcoal/40">as seen in — placeholder press</p>
        </div>
      </div>
    </section>
  );
}

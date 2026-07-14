"use client";

import { useState } from "react";
import Image from "next/image";
import posthog from "posthog-js";
import { motion } from "motion/react";
import { about, site } from "@/lib/content";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { EASE_LUXE } from "@/lib/motion";

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(1);

  return (
    <section id="story" className="relative bg-ivory py-28 md:py-40">
      <span aria-hidden className="headline-xl text-outline pointer-events-none absolute right-4 top-10 select-none text-stone/30">
        01
      </span>

      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <TextReveal className="label text-ember">01 — The Story</TextReveal>

        {/* Magazine spread: roles rail / story / portrait */}
        <div className="mt-14 grid grid-cols-12 gap-y-14 md:gap-x-10">
          <div className="col-span-12 md:col-span-3">
            <ul className="space-y-3 border-t border-ink/15 pt-6">
              {about.roles.map((role, i) => (
                <motion.li
                  key={role}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.6 }}
                  className="label flex items-baseline gap-3 text-charcoal/70"
                >
                  <span className="text-ember" aria-hidden>
                    ✻
                  </span>
                  {role}
                </motion.li>
              ))}
            </ul>
            <div className="zoom-frame relative mt-12 hidden aspect-[3/4] md:block">
              <Image
                src={images.storyAtelier.src}
                alt={images.storyAtelier.alt}
                fill
                sizes="(max-width: 768px) 0px, 22vw"
                className="object-cover"
              />
            </div>
            <p className="label mt-3 hidden text-stone md:block">fig. 02 — inside the studio</p>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-5">
            <h2 className="headline-md">
              <TextReveal as="span">The founder</TextReveal>
              <TextReveal as="span" delay={0.12} className="font-serif-editorial italic font-normal">
                behind the brand.
              </TextReveal>
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/85 md:text-lg">
              {about.story.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={i === 0 ? "drop-cap" : ""}
                >
                  {para}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <a
                  href={site.brandUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline label text-ember"
                  onClick={() => {
                    posthog.capture("brand_link_clicked", {
                      destination: site.brandUrl,
                      source: "about_story",
                    });
                  }}
                >
                  Explore the brand — bornfreefashions.com{" "}
                  <ArrowUpRight aria-hidden className="inline size-[1em] align-[-0.1em]" />
                </a>
              </motion.p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-10 md:mt-24">
            <ParallaxImage
              src={images.storyPortrait.src}
              alt={images.storyPortrait.alt}
              className="aspect-[3/4] w-full"
              sizes="(max-width: 768px) 100vw, 24vw"
            />
            <p className="label mt-3 flex justify-between text-stone">
              <span>fig. 03</span>
              <span className="font-serif-editorial text-sm normal-case italic tracking-normal">
                always at the sampling table
              </span>
            </p>
          </div>
        </div>

        {/* Interactive timeline */}
        <div className="mt-32">
          <TextReveal className="label mb-10 text-charcoal/60">Milestones</TextReveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-6">
            {about.timeline.map((m, i) => {
              const active = activeMilestone === i;
              return (
                <button
                  key={m.year}
                  onMouseEnter={() => setActiveMilestone(i)}
                  onFocus={() => setActiveMilestone(i)}
                  onClick={() => setActiveMilestone(i)}
                  aria-expanded={active}
                  className={`group relative flex min-h-44 flex-col items-start justify-between p-5 text-left transition-colors duration-700 md:min-h-56 ${
                    active ? "bg-ink text-ivory" : "bg-ivory text-ink hover:bg-beige"
                  }`}
                >
                  <span className={`font-serif-editorial text-3xl italic md:text-4xl ${active ? "text-ember" : "text-charcoal/50"}`}>
                    {m.year}
                  </span>
                  <span>
                    <span className="label block">{m.title}</span>
                    <motion.span
                      initial={false}
                      animate={{ opacity: active ? 1 : 0, height: active ? "auto" : 0 }}
                      transition={{ duration: 0.5, ease: EASE_LUXE }}
                      className="mt-2 block overflow-hidden text-sm leading-snug text-ivory/70"
                    >
                      {m.text}
                    </motion.span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

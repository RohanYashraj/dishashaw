"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { journal } from "@/lib/content";
import TextReveal from "@/components/ui/TextReveal";

export default function Journal() {
  return (
    <section id="journal" className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <TextReveal className="label text-ember">08 — Journal</TextReveal>
            <h2 className="mt-8">
              <TextReveal as="span" className="headline-lg">
                Notes from
              </TextReveal>
              <TextReveal as="span" delay={0.12} className="headline-lg font-serif-editorial italic font-normal">
                the studio.
              </TextReveal>
            </h2>
          </div>
          <TextReveal className="label max-w-56 text-charcoal/50">
            Fashion thoughts, founder notes, a creative diary
          </TextReveal>
        </div>

        <ul className="mt-20 border-t border-ink/15">
          {journal.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border-b border-ink/15"
            >
              <Link
                href={`/journal/${post.slug}`}
                className="group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors duration-500 hover:bg-beige md:py-10"
              >
                <span className="label col-span-12 text-charcoal/50 md:col-span-2">{post.date}</span>
                <span className="col-span-12 md:col-span-6">
                  <span className="headline-md block transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3">
                    {post.title}
                  </span>
                </span>
                <span className="col-span-10 font-serif-editorial text-lg italic text-charcoal/60 md:col-span-3">
                  {post.excerpt}
                </span>
                <span className="label col-span-2 text-right text-ember md:col-span-1" aria-hidden>
                  →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

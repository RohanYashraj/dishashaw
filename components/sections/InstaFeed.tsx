"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";
import { site } from "@/lib/content";
import TextReveal from "@/components/ui/TextReveal";

export default function InstaFeed() {
  return (
    <section className="bg-ivory pb-28 md:pb-40">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <div className="flex items-end justify-between">
          <TextReveal className="label text-ember">09 — Daily threads</TextReveal>
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noreferrer"
            className="link-underline label text-charcoal/70"
          >
            @bornfree__india
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {images.feed.map((img, i) => (
            <motion.a
              key={`${img.src}-${i}`}
              href={site.socials[0].href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ delay: i * 0.07, duration: 0.7, ease: [0.65, 0.05, 0, 1] }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-1000 ease-[var(--ease-luxe)] group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="label flex items-center gap-1 text-ivory">
                  View <ArrowUpRight aria-hidden className="size-4" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

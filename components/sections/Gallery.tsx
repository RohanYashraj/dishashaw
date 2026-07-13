"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";

/* Broken-grid masonry: spans + offsets tuned per slot, polaroid treatment on a few. */
const LAYOUT = [
  { span: "md:col-span-4 md:row-span-2", ratio: "aspect-[3/4]", offset: "" , polaroid: false },
  { span: "md:col-span-3", ratio: "aspect-square", offset: "md:mt-16", polaroid: true },
  { span: "md:col-span-5", ratio: "aspect-[4/3]", offset: "", polaroid: false },
  { span: "md:col-span-3", ratio: "aspect-[3/4]", offset: "md:-mt-24", polaroid: false },
  { span: "md:col-span-4", ratio: "aspect-square", offset: "md:mt-10", polaroid: false },
  { span: "md:col-span-5", ratio: "aspect-[3/4]", offset: "md:-mt-16", polaroid: false },
  { span: "md:col-span-3", ratio: "aspect-square", offset: "md:mt-20", polaroid: true },
  { span: "md:col-span-4", ratio: "aspect-[4/3]", offset: "", polaroid: false },
  { span: "md:col-span-4", ratio: "aspect-[3/4]", offset: "md:-mt-12", polaroid: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory py-28 md:py-40">
      <span aria-hidden className="headline-xl text-outline pointer-events-none absolute left-4 top-10 select-none text-stone/30">
        05
      </span>

      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <TextReveal className="label text-ember">05 — Gallery</TextReveal>
        <h2 className="mt-10 flex flex-wrap items-baseline gap-x-6">
          <TextReveal as="span" className="headline-lg">
            Moments,
          </TextReveal>
          <TextReveal as="span" delay={0.12} className="headline-lg font-serif-editorial italic font-normal text-charcoal/80">
            fabrics & frames.
          </TextReveal>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
          {images.gallery.map((img, i) => {
            const l = LAYOUT[i % LAYOUT.length];
            return (
              <motion.figure
                key={`${img.src}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.65, 0.05, 0, 1] }}
                className={`group relative ${l.span} ${l.offset} ${
                  l.polaroid ? "bg-white p-3 pb-12 shadow-md" : ""
                }`}
                style={l.polaroid ? { rotate: `${i % 2 ? 2 : -2}deg` } : undefined}
              >
                {l.polaroid && <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />}
                <div className={`zoom-frame relative w-full ${l.ratio}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                </div>
                <figcaption
                  className={`label mt-3 flex justify-between text-stone opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    l.polaroid ? "absolute bottom-4 left-3 right-3" : ""
                  }`}
                >
                  <span>fig. {String(i + 4).padStart(2, "0")}</span>
                  <span className="font-serif-editorial text-sm normal-case italic tracking-normal">{img.alt}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

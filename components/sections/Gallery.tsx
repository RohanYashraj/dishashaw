"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";

/*
 * Editorial polaroid wall: three rows of three on 12 columns. Every tile
 * gets the same white-frame treatment; each box uses its image's NATIVE
 * aspect ratio (the Bornfree shots are all 2:3 or 4:5 portrait), so nothing
 * gets cropped into a shape it wasn't composed for. Row tops align; a gentle
 * mt stagger and alternating tilt give the pinned-to-the-wall rhythm.
 */
const LAYOUT = [
  // row 1 — location triptych
  { span: "md:col-span-5", ratio: "aspect-[2/3]", offset: "", tilt: -1.6, tape: true },
  { span: "md:col-span-3", ratio: "aspect-[2/3]", offset: "md:mt-20", tilt: 2, tape: false },
  { span: "md:col-span-4", ratio: "aspect-[2/3]", offset: "md:mt-8", tilt: -1, tape: true },
  // row 2 — detail / lifestyle / print
  { span: "md:col-span-4", ratio: "aspect-[4/5]", offset: "md:mt-6", tilt: 1.4, tape: true },
  { span: "md:col-span-4", ratio: "aspect-[2/3]", offset: "", tilt: -2, tape: false },
  { span: "md:col-span-4", ratio: "aspect-[4/5]", offset: "md:mt-16", tilt: 1, tape: true },
  // row 3 — studio fits
  { span: "md:col-span-4", ratio: "aspect-[4/5]", offset: "", tilt: -1.2, tape: false },
  { span: "md:col-span-4", ratio: "aspect-[4/5]", offset: "md:mt-12", tilt: 1.8, tape: true },
  { span: "md:col-span-4", ratio: "aspect-[2/3]", offset: "", tilt: -1.5, tape: true },
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
                whileInView={{ opacity: 1, y: 0, rotate: l.tilt }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.65, 0.05, 0, 1] }}
                style={{ rotate: l.tilt }}
                className={`group relative bg-white p-3 pb-14 shadow-md transition-shadow duration-500 hover:shadow-xl ${l.span} ${l.offset}`}
              >
                {l.tape && (
                  <span className={`tape -top-3 left-1/2 z-10 -translate-x-1/2 ${i % 2 ? "rotate-3" : "-rotate-2"}`} />
                )}
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
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between gap-3">
                  <span className="label whitespace-nowrap text-stone">fig. {String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate font-serif-editorial text-sm italic text-charcoal/70">{img.alt}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { behind } from "@/lib/content";
import { getImage } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function BehindTheBrand() {
  return (
    <section id="behind" className="bg-beige py-28 md:py-40">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <TextReveal className="label text-ember">06 — Behind the Brand</TextReveal>

        <div className="mt-20 space-y-28 md:space-y-40">
          {behind.quotes.map((q, i) => {
            const img = getImage(q.imageKey);
            const flipped = i % 2 === 1;
            return (
              <div key={q.text} className="grid grid-cols-12 items-center gap-y-10 md:gap-x-12">
                <div className={`col-span-12 md:col-span-5 ${flipped ? "md:order-2 md:col-start-8" : ""}`}>
                  <ParallaxImage
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[3/4] w-full"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    speed={0.1}
                  />
                </div>
                <blockquote className={`col-span-12 md:col-span-6 ${flipped ? "md:order-1" : "md:col-start-7"}`}>
                  <span aria-hidden className="block font-serif-editorial text-8xl leading-none text-ember/60">
                    “
                  </span>
                  {/* negative margin must sit outside TextReveal's overflow-hidden
                      mask, or it drags the text past the clip edge */}
                  <div className="-mt-6">
                    <TextReveal as="p" className="headline-md font-serif-editorial italic font-normal">
                      {q.text}
                    </TextReveal>
                  </div>
                  <TextReveal as="p" delay={0.15} className="mt-8 max-w-md text-base leading-relaxed text-charcoal/75">
                    {q.sub}
                  </TextReveal>
                  <p className="label mt-8 text-charcoal/50">— Disha Shaw</p>
                </blockquote>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

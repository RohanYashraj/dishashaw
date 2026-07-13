"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/lib/content";
import { images } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";

type ImageKey = keyof typeof images;

/** GSAP-pinned horizontal storytelling strip: Research → Launch. */
export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return; // vertical stack on mobile

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="bg-paper">
      <div ref={sectionRef} className="overflow-hidden">
        <div className="mx-auto max-w-[110rem] px-6 pt-24 md:px-12 md:pt-32">
          <TextReveal className="label text-ember">04 — {process.title}</TextReveal>
          <h2 className="mt-8">
            <TextReveal as="span" className="headline-lg">
              From a feeling
              <span className="font-serif-editorial italic font-normal"> to a garment.</span>
            </TextReveal>
          </h2>
        </div>

        <div
          ref={trackRef}
          className="mt-16 flex flex-col gap-16 px-6 pb-24 md:mt-20 md:w-max md:flex-row md:items-center md:gap-10 md:px-12 md:pb-32"
        >
          {process.steps.map((step, i) => {
            const img = images[step.imageKey as ImageKey] as { src: string; alt: string };
            return (
              <div key={step.label} className="flex flex-col items-start gap-10 md:flex-row md:items-center">
                <article className={`w-full max-w-sm shrink-0 md:w-[24rem] ${i % 2 ? "md:mt-24" : "md:-mt-12"}`}>
                  <div className="relative bg-white p-3 pb-14 shadow-md" style={{ rotate: `${(i % 2 ? 1 : -1) * 1.6}deg` }}>
                    <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
                    <div className="zoom-frame relative aspect-[4/3]">
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 90vw, 384px" className="object-cover" />
                    </div>
                    <p className="absolute bottom-4 left-4 font-serif-editorial text-lg italic text-charcoal/80">
                      {String(i + 1).padStart(2, "0")}. {step.label}
                    </p>
                  </div>
                  <p className="label mt-6 max-w-xs leading-relaxed normal-case tracking-widest text-charcoal/70">
                    {step.text}
                  </p>
                </article>

                {i < process.steps.length - 1 && (
                  <svg
                    aria-hidden
                    viewBox="0 0 120 60"
                    className="hidden w-24 shrink-0 text-charcoal/50 md:block"
                    fill="none"
                  >
                    {/* hand-drawn arrow */}
                    <path
                      d="M6 38 C 34 18, 66 14, 104 26"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path d="M92 16 l14 9 l-17 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            );
          })}

          <div className="shrink-0 md:pl-16 md:pr-40">
            <p className="headline-md max-w-md">
              Then we start
              <span className="font-serif-editorial italic font-normal text-ember"> all over again.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

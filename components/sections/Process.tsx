"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { process } from "@/lib/content";
import { getImage } from "@/lib/images";
import TextReveal from "@/components/ui/TextReveal";

/** GSAP-pinned horizontal storytelling strip: Research → Launch. */
export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return; // vertical stack on mobile

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // GSAP is only needed for this pinned strip — load it on demand so it
    // stays out of the initial bundle.
    let cancelled = false;
    let ctx: { revert: () => void } | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
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
      }
    );

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section id="process" className="bg-paper">
      {/* Pinned block must fit exactly one viewport on desktop, or GSAP's
          top-top pin crops everything below the fold (incl. step captions). */}
      <div ref={sectionRef} className="overflow-hidden md:flex md:h-svh md:flex-col">
        <div className="mx-auto w-full max-w-[110rem] shrink-0 px-6 pt-24 md:px-12">
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
          className="mt-16 flex flex-col gap-16 px-6 pb-24 md:mt-0 md:min-h-0 md:w-max md:flex-1 md:flex-row md:items-center md:gap-10 md:px-12 md:pb-6"
        >
          {process.steps.map((step, i) => {
            const img = getImage(step.imageKey);
            return (
              <div key={step.label} className="flex flex-col items-start gap-10 md:flex-row md:items-center">
                <article className={`w-full max-w-sm shrink-0 md:w-[21rem] ${i % 2 ? "md:mt-14" : "md:-mt-6"}`}>
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

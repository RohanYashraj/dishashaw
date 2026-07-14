"use client";

import posthog from "posthog-js";
import { motion } from "motion/react";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { site } from "@/lib/content";
import { useLenis } from "@/lib/lenis";
import { EASE_LUXE } from "@/lib/motion";

export default function Footer() {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink pb-10 pt-24 text-ivory">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="label text-ivory/50">Founder · Creative Director</p>
            <p className="label mt-1 text-ivory/50">
              <a
                href={site.brandUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
                onClick={() => {
                  posthog.capture("brand_link_clicked", {
                    destination: site.brandUrl,
                    source: "footer",
                  });
                }}
              >
                {site.brand} <ArrowUpRight aria-hidden className="inline size-[1em] align-[-0.1em]" />
              </a>
            </p>
          </div>
          <ul className="flex gap-8">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-underline label text-ivory/70">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#home" onClick={toTop} className="link-underline label text-ivory/70">
            Back to top ↑
          </a>
        </div>

        {/* Oversized name */}
        <motion.p
          aria-hidden
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          transition={{ duration: 1.1, ease: EASE_LUXE }}
          className="text-outline mt-20 select-none whitespace-nowrap text-center font-display text-[13.5vw] font-semibold leading-none tracking-tight text-ivory/80"
        >
          DISHA&nbsp;SHAW
        </motion.p>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/10 pt-6">
          <p className="label text-ivory/40">© {year} Disha Shaw. All stories reserved.</p>
          <p className="label text-ivory/40">
            <span aria-hidden>✻ </span>Designed like a garment — with care.
          </p>
          <p className="label text-ivory/40" aria-hidden>pg. 10 / 10</p>
        </div>
      </div>
    </footer>
  );
}

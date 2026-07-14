"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "@/lib/lenis";
import { EASE_LUXE } from "@/lib/motion";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e: React.MouseEvent, href: string, label: string) => {
    if (!onHome) return; // let Link navigate to /#section
    e.preventDefault();
    posthog.capture("navigation_link_clicked", {
      navigation_label: label,
      navigation_target: href,
      location: onHome ? "home" : "detail_page",
      mobile_menu_open: open,
    });
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.9, ease: EASE_LUXE }}
        className="fixed left-1/2 top-5 z-[320] -translate-x-1/2"
        aria-label="Primary"
      >
        <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-ivory/70 px-2 py-2 shadow-[0_8px_30px_rgb(20_19_16/0.06)] backdrop-blur-xl">
          <Link
            href="/#home"
            onClick={(e) => go(e, "#home", "Home")}
            className="px-4 py-1.5 font-display text-sm font-semibold tracking-tight"
          >
            DS<span className="text-ember">.</span>
          </Link>
          <div className="hidden items-center md:flex">
            {LINKS.slice(1).map(({ label, href }) => (
              <Link
                key={href}
                href={`/${href}`}
                onClick={(e) => go(e, href, label)}
                className={`label rounded-full px-4 py-2 transition-all duration-500 hover:tracking-[0.4em] ${
                  active === href.slice(1) && onHome
                    ? "bg-ink text-ivory"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              posthog.capture("navigation_link_clicked", {
                navigation_label: open ? "Close" : "Menu",
                navigation_target: pathname,
                location: "mobile_toggle",
                mobile_menu_open: !open,
              });
              setOpen((v) => !v);
            }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="label flex items-center gap-2 rounded-full px-4 py-2 md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_LUXE }}
            className="fixed inset-0 z-[310] flex flex-col items-center justify-center gap-2 bg-ivory/95 backdrop-blur-2xl md:hidden"
          >
            {LINKS.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  href={`/${href}`}
                  onClick={(e) => go(e, href, label)}
                  className="headline-md block py-2 font-serif-editorial italic"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

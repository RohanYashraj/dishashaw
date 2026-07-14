"use client";

import posthog from "posthog-js";
import { contact, site } from "@/lib/content";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import StitchDivider from "@/components/ui/StitchDivider";

export default function Contact() {
  return (
    <section id="contact" className="bg-ember py-32 text-ivory md:py-44">
      <div className="mx-auto max-w-[110rem] px-6 text-center md:px-12">
        <TextReveal className="label text-ivory/70">10 — Say hello</TextReveal>

        <h2 className="mx-auto mt-12 max-w-5xl">
          <TextReveal as="span" className="headline-xl">
            Let&rsquo;s create
          </TextReveal>
          <TextReveal as="span" delay={0.15} className="headline-xl font-serif-editorial italic font-normal">
            something beautiful.
          </TextReveal>
        </h2>

        <TextReveal delay={0.3} className="mx-auto mt-10 max-w-lg text-lg leading-relaxed text-ivory/80">
          {contact.sub}
        </TextReveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href={`mailto:${site.email}`}
            variant="ghost"
            onClick={() => {
              posthog.capture("contact_email_clicked", {
                contact_method: "email",
                source_section: "contact",
              });
            }}
          >
            {contact.cta} — {site.email}
          </MagneticButton>
          <MagneticButton
            href={site.brandUrl}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("brand_link_clicked", {
                destination: site.brandUrl,
                source: "contact",
              });
            }}
          >
            Shop Bornfree ↗
          </MagneticButton>
        </div>

        <StitchDivider className="mt-24 text-ivory" />
      </div>
    </section>
  );
}

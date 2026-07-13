import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { work } from "@/lib/content";
import { images } from "@/lib/images";
import Footer from "@/components/sections/Footer";

type ImageKey = keyof typeof images;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = work.find((w) => w.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Disha Shaw`,
    description: study.intro,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = work.findIndex((w) => w.slug === slug);
  if (idx === -1) notFound();
  const study = work[idx];
  const next = work[(idx + 1) % work.length];
  const img = images[study.imageKey as ImageKey] as { src: string; alt: string };

  return (
    <main id="main" className="bg-ivory">
      <article className="mx-auto max-w-[110rem] px-6 pb-28 pt-32 md:px-12 md:pt-40">
        <Link href="/#work" className="link-underline label text-charcoal/60">
          ← Back to the work
        </Link>

        {/* Editorial header */}
        <header className="mt-14 grid grid-cols-12 gap-y-8 md:gap-x-10">
          <p aria-hidden className="headline-xl text-outline col-span-12 select-none text-stone/40 md:col-span-2">
            {study.index}
          </p>
          <div className="col-span-12 md:col-span-7">
            <h1 className="headline-lg">{study.title}</h1>
            <p className="mt-8 max-w-xl font-serif-editorial text-2xl italic leading-snug text-charcoal/80">
              {study.intro}
            </p>
          </div>
          <dl className="label col-span-12 space-y-4 text-charcoal/60 md:col-span-2 md:col-start-11 md:text-right">
            <div>
              <dt className="text-ember">Category</dt>
              <dd className="mt-1">{study.category}</dd>
            </div>
            <div>
              <dt className="text-ember">Timeline</dt>
              <dd className="mt-1">{study.year}</dd>
            </div>
          </dl>
        </header>

        {/* Full-bleed hero image */}
        <div className="zoom-frame relative mt-16 aspect-[16/9] w-full md:mt-24">
          <Image src={img.src} alt={img.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
        <p className="label mt-3 flex justify-between text-stone">
          <span>fig. {study.index}</span>
          <span className="font-serif-editorial text-sm normal-case italic tracking-normal">{img.alt}</span>
        </p>

        {/* Body — magazine columns */}
        <div className="mt-24 grid grid-cols-12 gap-y-10 md:gap-x-10">
          <blockquote className="col-span-12 md:col-span-4">
            <span aria-hidden className="block font-serif-editorial text-8xl leading-none text-ember/60">“</span>
            <p className="headline-md -mt-6 font-serif-editorial italic font-normal">{study.quote}</p>
          </blockquote>
          <div className="col-span-12 space-y-8 text-lg leading-relaxed text-charcoal/85 md:col-span-6 md:col-start-6">
            {study.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Next study */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-32 flex flex-col gap-2 border-t border-ink/15 pt-10"
        >
          <span className="label text-charcoal/50">Next study — {next.index}</span>
          <span className="headline-lg transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-4">
            {next.title} <span className="text-ember">→</span>
          </span>
        </Link>
      </article>
      <Footer />
    </main>
  );
}

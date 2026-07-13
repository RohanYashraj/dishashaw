import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { journal } from "@/lib/content";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journal.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Disha Shaw`,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: `${post.title} — Disha Shaw`,
      description: post.excerpt,
      url: `/journal/${post.slug}`,
      type: "article",
      images: [
        {
          url: "/hero.png",
          width: 1110,
          height: 951,
          alt: "Disha Shaw — Founder & Creative Director of Bornfree Fashions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Disha Shaw`,
      description: post.excerpt,
      images: ["/hero.png"],
    },
  };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = journal.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const post = journal[idx];
  const next = journal[(idx + 1) % journal.length];

  return (
    <main id="main" className="bg-ivory">
      <article className="mx-auto max-w-3xl px-6 pb-28 pt-32 md:pt-40">
        <Link href="/#journal" className="link-underline label text-charcoal/60">
          ← Back to the journal
        </Link>

        <header className="mt-14">
          <p className="label text-ember">
            <span aria-hidden>✻ </span>
            {post.date} — Founder notes
          </p>
          <h1 className="headline-lg mt-6">{post.title}</h1>
          <p className="mt-6 font-serif-editorial text-2xl italic text-charcoal/70">{post.excerpt}</p>
        </header>

        <div className="mt-16 space-y-8 border-t border-ink/15 pt-12 text-lg leading-relaxed text-charcoal/85">
          {post.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif-editorial first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-ember"
                  : ""
              }
            >
              {para}
            </p>
          ))}
        </div>

        <p className="label mt-16 text-charcoal/50">— Disha Shaw</p>

        <Link href={`/journal/${next.slug}`} className="group mt-24 block border-t border-ink/15 pt-10">
          <span className="label text-charcoal/50">Read next</span>
          <span className="headline-md mt-2 block transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3">
            {next.title} <span className="text-ember">→</span>
          </span>
        </Link>
      </article>
      <Footer />
    </main>
  );
}

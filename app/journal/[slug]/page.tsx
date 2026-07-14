import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { journal, site } from "@/lib/content";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import Footer from "@/components/sections/Footer";
import { PostHogEvent, PostHogLink } from "@/components/analytics/PostHogEvent";

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
    title: post.title,
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
        <PostHogEvent
          event="journal_entry_viewed"
          properties={{
            journal_slug: post.slug,
            journal_title: post.title,
            journal_date: post.date,
          }}
        />
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
              className={i === 0 ? "drop-cap" : ""}
            >
              {para}
            </p>
          ))}
        </div>

        <p className="label mt-16 text-charcoal/50">— Disha Shaw</p>

        <p className="mt-8">
          <PostHogLink
            href={site.brandUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline label text-ember"
            event="brand_link_clicked"
            properties={{
              destination: site.brandUrl,
              source: "journal_entry",
              journal_slug: post.slug,
            }}
          >
            Wear the philosophy — bornfreefashions.com{" "}
            <ArrowUpRight aria-hidden className="inline size-[1em] align-[-0.1em]" />
          </PostHogLink>
        </p>

        <PostHogLink
          href={`/journal/${next.slug}`}
          className="group mt-24 block border-t border-ink/15 pt-10"
          event="next_journal_entry_clicked"
          properties={{
            current_journal_slug: post.slug,
            next_journal_slug: next.slug,
            next_journal_title: next.title,
          }}
        >
          <span className="label text-charcoal/50">Read next</span>
          <span className="headline-md mt-2 block transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-3">
            {next.title} <span className="text-ember">→</span>
          </span>
        </PostHogLink>
      </article>
      <Footer />
    </main>
  );
}

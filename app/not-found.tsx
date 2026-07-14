import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-svh flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="label text-ember">
        <span aria-hidden>✻ </span>404
      </p>
      <h1 className="headline-lg mt-8">
        This page slipped
        <span className="block font-serif-editorial italic font-normal">a stitch.</span>
      </h1>
      <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
        The page you&rsquo;re looking for doesn&rsquo;t exist — or it was unpicked and resewn somewhere else.
      </p>
      <Link
        href="/"
        className="label mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-ivory transition-colors duration-500 hover:bg-ember"
      >
        Back to the homepage →
      </Link>
    </main>
  );
}

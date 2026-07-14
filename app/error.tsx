"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="label text-ember">
        <span aria-hidden>✻ </span>Something went wrong
      </p>
      <h1 className="headline-lg mt-8">
        A thread
        <span className="block font-serif-editorial italic font-normal">came loose.</span>
      </h1>
      <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
        An unexpected error interrupted the page. Try again — it usually holds on the second stitch.
      </p>
      <button
        onClick={reset}
        className="label mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-ivory transition-colors duration-500 hover:bg-ember"
      >
        Try again →
      </button>
    </main>
  );
}

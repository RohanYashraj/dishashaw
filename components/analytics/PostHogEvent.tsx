"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import Link from "next/link";
import posthog from "posthog-js";

type EventProps = {
  event: string;
  properties?: Record<string, string | number | boolean | null | undefined>;
};

/** Captures a view event exactly once per mount — re-renders must not
 *  re-fire it, and inline `properties` objects change identity every render,
 *  so they can't be effect dependencies. */
export function PostHogEvent({ event, properties }: EventProps) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    posthog.capture(event, properties);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fire once per mount
  }, []);

  return null;
}

type PostHogLinkProps = ComponentProps<typeof Link> & EventProps;

export function PostHogLink({ event, properties, onClick, ...props }: PostHogLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        posthog.capture(event, properties);
        onClick?.(e);
      }}
    />
  );
}

"use client";

import { useEffect, type ComponentProps } from "react";
import Link from "next/link";
import posthog from "posthog-js";

type EventProps = {
  event: string;
  properties?: Record<string, string | number | boolean | null | undefined>;
};

export function PostHogEvent({ event, properties }: EventProps) {
  useEffect(() => {
    posthog.capture(event, properties);
  }, [event, properties]);

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

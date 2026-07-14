import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

// Analytics must never take the site down: skip init (and warn in dev)
// instead of crashing when the token is absent.
if (token) {
  posthog.init(token, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-05-30",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
} else if (process.env.NODE_ENV === "development") {
  console.warn(
    "PostHog disabled: NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is not set."
  );
}

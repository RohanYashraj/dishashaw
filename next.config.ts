import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * CSP notes:
 * - script-src needs 'unsafe-inline' because Next.js emits inline bootstrap
 *   scripts on static pages (nonce-based CSP would force dynamic rendering).
 *   'unsafe-eval' is required by React Fast Refresh in dev only.
 * - PostHog and Vercel Analytics are reverse-proxied through this origin
 *   (/ingest and /_vercel), so connect-src stays first-party; the PostHog
 *   hosts are listed as a fallback in case the proxy is bypassed.
 * - worker-src blob: is needed if PostHog session replay is ever enabled.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://images.unsplash.com https://bornfreefashions.com",
  "font-src 'self'",
  "connect-src 'self' https://us.i.posthog.com https://us-assets.i.posthog.com",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "bornfreefashions.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

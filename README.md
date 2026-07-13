# Disha Shaw — Founder Portfolio

Editorial portfolio for Disha Shaw, Founder & Creative Director of [Bornfree Fashions](https://bornfreefashions.com).
One-page cinematic scroll with case-study and journal routes.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · GSAP ScrollTrigger · Lenis
Fonts: Clash Display (Fontshare, self-hosted) + Cormorant Garamond (Google, via `next/font`).

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (fully static)
```

## Swapping placeholder content

- **Copy** (bio, timeline, case studies, journal posts, numbers, testimonials, press): [lib/content.ts](lib/content.ts)
- **Images**: every slot lives in [lib/images.ts](lib/images.ts), tagged `bornfree` (real brand CDN imagery) or `unsplash` (editorial placeholders to replace with real photography).

## Notes

- Reduced-motion is respected everywhere (Lenis, GSAP pinning, reveals all disable).
- Press names in the marquee are placeholders — replace with real features before launch.
- Deploy target: Vercel (zero config).

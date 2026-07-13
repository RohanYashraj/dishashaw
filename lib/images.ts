/**
 * Central image manifest — every visual slot on the site resolves here.
 *
 * PLACEHOLDERS: swap any `src` with final photography of Disha / Bornfree.
 * `source` marks where each placeholder comes from:
 *   "bornfree" — real Bornfree Fashions CDN imagery (used in Work sections)
 *   "unsplash" — curated editorial placeholders, to be replaced later
 */

export type Img = {
  src: string;
  alt: string;
  source: "bornfree" | "unsplash";
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

const bf = (file: string) => `https://bornfreefashions.com/cdn/shop/files/${file}`;

export const images = {
  /* ————— Hero ————— */
  heroPortrait: {
    src: u("1502716119720-b23a93e5fe1b", 1000),
    alt: "Portrait placeholder — Disha Shaw, editorial style",
    source: "unsplash",
  },
  heroDetail: {
    src: u("1528459801416-a9e53bbf4e17", 700),
    alt: "Fabric pattern detail",
    source: "unsplash",
  },

  /* ————— Story / About ————— */
  storyPortrait: {
    src: u("1524504388940-b1c1722653e1", 900),
    alt: "Portrait placeholder — the founder at work",
    source: "unsplash",
  },
  storyAtelier: {
    src: u("1558769132-cb1aea458c5e", 900),
    alt: "Atelier — garments in progress",
    source: "unsplash",
  },

  /* ————— Philosophy pillar accents ————— */
  philosophyFreedom: {
    src: u("1529139574466-a303027c1d8b", 800),
    alt: "Movement — fashion in motion",
    source: "unsplash",
  },
  philosophyCraft: {
    src: u("1605518216938-7c31b7b14ad0", 800),
    alt: "Hands sewing — craftsmanship",
    source: "unsplash",
  },
  philosophyComfort: {
    src: u("1521572163474-6864f9cf17ab", 800),
    alt: "Soft cotton garment",
    source: "unsplash",
  },
  philosophyAuthenticity: {
    src: u("1515886657613-9f3515b0c78f", 800),
    alt: "Editorial portrait — quiet confidence",
    source: "unsplash",
  },
  philosophyLongevity: {
    src: u("1434389677669-e08b4cac3105", 800),
    alt: "Timeless garments on a rail",
    source: "unsplash",
  },

  /* ————— Selected Work (real Bornfree imagery) ————— */
  workBrand: {
    src: bf("13-06-2026--caio_jardel02430.jpg?v=1783493674&width=1100"),
    alt: "Bornfree Fashions campaign photography",
    source: "bornfree",
  },
  workSketch: {
    src: bf("10282-left-navy.jpg?v=1776752257&width=1100"),
    alt: "Bornfree navy garment — from sketch to production",
    source: "bornfree",
  },
  workProcess: {
    src: bf(
      "10435-MEDIUM_OLIVE-LEFT-Photoroom_2ec30766-9bd1-408e-bc31-e04b791812bb.jpg?v=1775736354&width=1100"
    ),
    alt: "Bornfree olive garment — design process",
    source: "bornfree",
  },
  workCustomer: {
    src: bf("002A5402_235ff6b6-69dd-46b8-8141-729b31e9806e.jpg?v=1773134508&width=1100"),
    alt: "Bornfree lifestyle photography",
    source: "bornfree",
  },
  workScale: {
    src: u("1441984904996-e0b6ba687e04", 1100),
    alt: "Retail space — scaling creativity",
    source: "unsplash",
  },

  /* ————— Process strip ————— */
  processResearch: {
    src: u("1512436991641-6745cdb1723f", 800),
    alt: "Moodboard research",
    source: "unsplash",
  },
  processSketch: {
    src: u("1558769132-cb1aea458c5e", 800),
    alt: "Design sketching",
    source: "unsplash",
  },
  processFabric: {
    src: u("1618354691373-d851c5c3a990", 800),
    alt: "Fabric selection",
    source: "unsplash",
  },
  processSampling: {
    src: u("1605518216938-7c31b7b14ad0", 800),
    alt: "Sampling at the machine",
    source: "unsplash",
  },
  processIteration: {
    src: u("1556905055-8f358a7a47b2", 800),
    alt: "Iterating on garments",
    source: "unsplash",
  },
  processLaunch: {
    src: u("1441984904996-e0b6ba687e04", 800),
    alt: "Collection launch",
    source: "unsplash",
  },

  /* ————— Gallery (masonry) ————— */
  gallery: [
    { src: u("1490481651871-ab68de25d43d", 900), alt: "Editorial fashion portrait", source: "unsplash" },
    { src: bf("13-06-2026--caio_jardel02430.jpg?v=1783493674&width=1100"), alt: "Bornfree campaign", source: "bornfree" },
    { src: u("1445205170230-053b83016050", 900), alt: "Garment rail", source: "unsplash" },
    { src: u("1537832816519-689ad163238b", 900), alt: "Editorial look", source: "unsplash" },
    { src: u("1618354691373-d851c5c3a990", 900), alt: "Fabric close-up", source: "unsplash" },
    { src: u("1591047139829-d91aecb6caea", 900), alt: "Coat editorial", source: "unsplash" },
    { src: bf("10282-left-navy.jpg?v=1776752257&width=1100"), alt: "Bornfree navy piece", source: "bornfree" },
    { src: u("1495385794356-15371f348c31", 900), alt: "Studio lifestyle", source: "unsplash" },
    { src: u("1487222477894-8943e31ef7b2", 900), alt: "Dresses hanging", source: "unsplash" },
  ] as Img[],

  /* ————— Behind the brand ————— */
  behindMovement: {
    src: u("1529139574466-a303027c1d8b", 1000),
    alt: "Everyday movement",
    source: "unsplash",
  },
  behindComfort: {
    src: u("1521572163474-6864f9cf17ab", 1000),
    alt: "Comfort as luxury",
    source: "unsplash",
  },
  behindConfidence: {
    src: u("1469334031218-e382a71b716b", 1000),
    alt: "Design disappearing into confidence",
    source: "unsplash",
  },

  /* ————— Instagram-style feed ————— */
  feed: [
    { src: u("1469334031218-e382a71b716b", 700), alt: "Feed — editorial look", source: "unsplash" },
    { src: u("1584917865442-de89df76afd3", 700), alt: "Feed — accessories", source: "unsplash" },
    { src: bf("002A5402_235ff6b6-69dd-46b8-8141-729b31e9806e.jpg?v=1773134508&width=1100"), alt: "Feed — Bornfree lifestyle", source: "bornfree" },
    { src: u("1620799140408-edc6dcb6d633", 700), alt: "Feed — garment production", source: "unsplash" },
    { src: u("1515886657613-9f3515b0c78f", 700), alt: "Feed — portrait", source: "unsplash" },
    { src: bf("10435-MEDIUM_OLIVE-LEFT-Photoroom_2ec30766-9bd1-408e-bc31-e04b791812bb.jpg?v=1775736354&width=1100"), alt: "Feed — Bornfree olive", source: "bornfree" },
  ] as Img[],
} as const;

/**
 * Central image manifest — every visual slot on the site resolves here.
 *
 * `source` marks where each image comes from:
 *   "bornfree" — real Bornfree Fashions CDN imagery (campaign + product photography)
 *   "unsplash" — editorial placeholders for slots that need photography the brand
 *                doesn't shoot (atelier hands, sketching, moodboards)
 *   "local"    — files in /public
 */

export type Img = {
  src: string;
  alt: string;
  source: "bornfree" | "unsplash" | "local";
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

const bf = (file: string, w = 1100) =>
  `https://bornfreefashions.com/cdn/shop/files/${file}?width=${w}`;

export const images = {
  /* ————— Hero ————— */
  heroPortrait: {
    src: "/hero.png", // transparent cutout, bleeds to the section's bottom edge
    alt: "Disha Shaw — Founder & Creative Director of Bornfree Fashions",
    source: "local",
  },

  /* ————— Story / About ————— */
  storyPortrait: {
    src: bf("002A5601_copy.jpg"),
    alt: "Bornfree campaign — navy cargos, shot on location",
    source: "bornfree",
  },
  storyAtelier: {
    src: u("1558769132-cb1aea458c5e", 900),
    alt: "Atelier — garments in progress",
    source: "unsplash",
  },

  /* ————— Philosophy pillar accents ————— */
  philosophyFreedom: {
    src: bf("13-06-2026--caio_jardel02435.jpg", 800),
    alt: "Bornfree — mid-stride in indigo cargos",
    source: "bornfree",
  },
  philosophyCraft: {
    src: u("1605518216938-7c31b7b14ad0", 800),
    alt: "Hands at the sewing machine — craftsmanship",
    source: "unsplash",
  },
  philosophyComfort: {
    src: bf("13-06-2026--caio_jardel03670.jpg", 800),
    alt: "Bornfree khaki joggers — drawstring detail",
    source: "bornfree",
  },
  philosophyAuthenticity: {
    src: bf("30-06-2025_mathews0561_1_2114edae-456f-48b1-9eed-88a7ce88b7df.jpg", 800),
    alt: "Bornfree editorial — olive cargos, studio",
    source: "bornfree",
  },
  philosophyLongevity: {
    src: bf("10645-FULL-dark-green.jpg", 800),
    alt: "Bornfree dark green joggers — built to last",
    source: "bornfree",
  },

  /* ————— Selected Work (real Bornfree imagery) ————— */
  workBrand: {
    src: bf("13-06-2026--caio_jardel02430.jpg"),
    alt: "Bornfree Fashions campaign photography",
    source: "bornfree",
  },
  workCargo: {
    src: bf("13-06-2026--caio_jardel03046_baa3d712-479d-4998-ba4b-9e2e43ed6106.jpg"),
    alt: "Bornfree taupe cargo joggers — pocket architecture",
    source: "bornfree",
  },
  workFit: {
    src: bf("13-06-2026--caio_jardel03671.jpg"),
    alt: "Bornfree khaki joggers — waistband and drawstring detail",
    source: "bornfree",
  },
  workQuality: {
    src: bf("10725leftolive.jpg"),
    alt: "Bornfree olive cargos — studio fit shot",
    source: "bornfree",
  },
  workD2C: {
    src: bf("002A5402_235ff6b6-69dd-46b8-8141-729b31e9806e.jpg"),
    alt: "Bornfree lifestyle photography",
    source: "bornfree",
  },

  /* ————— Process strip ————— */
  processResearch: {
    src: u("1523901839036-a3030662f220", 800),
    alt: "Tailor's measuring tape — where every fit begins",
    source: "unsplash",
  },
  processSketch: {
    src: u("1557777586-f6682739fcf3", 800),
    alt: "Fashion illustration sketches pinned on the studio wall",
    source: "unsplash",
  },
  processFabric: {
    src: u("1705250466297-90035b3a2b26", 800),
    alt: "Rolled bolts of cotton fabric in indigo and blue",
    source: "unsplash",
  },
  processSampling: {
    src: bf("13-06-2026--caio_jardel03670.jpg", 800),
    alt: "Bornfree sample — drawstring jogger",
    source: "bornfree",
  },
  processIteration: {
    src: bf("10645-FULL-dark-green.jpg", 800),
    alt: "Fit iteration on the dark green jogger",
    source: "bornfree",
  },
  processLaunch: {
    src: bf("002A5603_copy.jpg", 800),
    alt: "Campaign day — navy cargos on location",
    source: "bornfree",
  },

  /* ————— Gallery (broken grid) ————— */
  gallery: [
    { src: bf("002A5601_copy.jpg", 900), alt: "Navy cargos, white shirt — location campaign", source: "bornfree" },
    { src: bf("13-06-2026--caio_jardel02430.jpg", 900), alt: "Bornfree campaign", source: "bornfree" },
    { src: bf("30-06-2025_mathews0561_1_2114edae-456f-48b1-9eed-88a7ce88b7df.jpg", 900), alt: "Studio editorial — olive cargos", source: "bornfree" },
    { src: bf("13-06-2026--caio_jardel03670.jpg", 900), alt: "Khaki jogger — drawstring detail", source: "bornfree" },
    { src: bf("6full.jpg", 900), alt: "Ice-blue cargos with denim jacket", source: "bornfree" },
    { src: bf("30-06-2025-mathews00031_1.jpg", 900), alt: "Printed shorts — summer line", source: "bornfree" },
    { src: bf("10282-left-navy.jpg", 900), alt: "Navy piece — studio", source: "bornfree" },
    { src: bf("30-06-2025_mathews0522_1.jpg", 900), alt: "Olive cargo shorts — pocket detail", source: "bornfree" },
    { src: bf("13-06-2026--caio_jardel02435.jpg", 900), alt: "Indigo cargos in motion", source: "bornfree" },
  ] as Img[],

  /* ————— Behind the brand ————— */
  behindMovement: {
    src: bf("13-06-2026--caio_jardel02435.jpg", 1000),
    alt: "Mid-stride — Freedom of Body",
    source: "bornfree",
  },
  behindComfort: {
    src: bf("13-06-2026--caio_jardel03671.jpg", 1000),
    alt: "Softness you can see — special-wash khaki",
    source: "bornfree",
  },
  behindConfidence: {
    src: bf("6full.jpg", 1000),
    alt: "Worn like it's nothing — ice-blue cargos",
    source: "bornfree",
  },

  /* ————— Instagram-style feed ————— */
  feed: [
    { src: bf("002A5603_copy.jpg", 700), alt: "Feed — navy cargos on location", source: "bornfree" },
    { src: bf("30-06-2025_mathews0522_1.jpg", 700), alt: "Feed — olive cargo shorts", source: "bornfree" },
    { src: bf("002A5402_235ff6b6-69dd-46b8-8141-729b31e9806e.jpg", 700), alt: "Feed — Bornfree lifestyle", source: "bornfree" },
    { src: bf("30-06-2025-mathews00035_1.jpg", 700), alt: "Feed — printed summer shorts", source: "bornfree" },
    { src: bf("10645-FULL-dark-green.jpg", 700), alt: "Feed — dark green joggers", source: "bornfree" },
    { src: bf("10435-MEDIUM_OLIVE-LEFT-Photoroom_2ec30766-9bd1-408e-bc31-e04b791812bb.jpg", 700), alt: "Feed — olive fit", source: "bornfree" },
  ] as Img[],
} as const;

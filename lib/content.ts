/**
 * All site copy lives here — written in Disha's founder voice around the real
 * Bornfree Fashions story: 20+ years of men's bottomwear manufacturing in
 * Kolkata, the "Freedom of Body" philosophy, 25+ quality checks, special-wash
 * softness, 500+ people across three solar-powered units, fits cut for the
 * Indian body. Swap any remaining invented details (dates, quotes, names)
 * with confirmed ones when available.
 */

export const site = {
  name: "Disha Shaw",
  role: "Founder & Creative Director",
  brand: "Bornfree Fashions",
  /** Canonical site URL — used by the sitemap, robots.txt and Open Graph
   *  tags. Swap for the custom domain when one is connected. */
  url: "https://dishashaw.com",
  brandUrl: "https://bornfreefashions.com",
  email: "dishaw14july@gmail.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/bornfree__india/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/disha-shaw-5637481b8/" },
    { label: "Bornfree", href: "https://bornfreefashions.com" },
  ],
};

export const hero = {
  eyebrow: "Disha Shaw",
  /** style: "serif" renders as italic editorial serif in ember */
  lines: [
    { text: "Designing", style: "sans" },
    { text: "Freedom.", style: "serif" },
    { text: "One Collection", style: "sans" },
    { text: "at a Time.", style: "sans" },
  ] as { text: string; style: "sans" | "serif" }[],
  roles: ["Founder", "Creative Director", "Dreamer"],
  sub: "I am a D2C founder of the brand Bornfree — men's bottomwear made in Kolkata, cut for the Indian body, and built on one belief: Freedom of Body.",
  ctaPrimary: { label: "Explore my journey", href: "#story" },
  ctaSecondary: { label: "See the work", href: "#work" },
};

export const about = {
  roles: [
    "Founder",
    "Creative Director",
    "Manufacturer's Daughter",
    "Fit Obsessive",
    "Brand Builder",
    "Factory-Floor Designer",
  ],
  story: [
    "Bornfree didn't start in a boardroom. It started on a factory floor in Kolkata, in the rhythm of five hundred sewing machines — a sound I grew up inside. For over twenty years this house has made one thing, and made it seriously: men's bottomwear. Cargos, joggers, Bermudas, shorts. Nothing else.",
    "That focus is the entire design philosophy. When you make only bottomwear, you learn things generalists never will — how a waistband should sit through a Kolkata summer, where a pocket earns its place, why the Indian body deserves its own fit charts instead of borrowed ones. We call the result Freedom of Body: clothing that never asks you to adjust.",
    "My work is carrying that manufacturing legacy forward as a brand — taking garments that pass twenty-five quality checks and a softening wash before they earn the label, and putting them directly into the hands of the men they were measured for.",
  ],
  timeline: [
    { year: "2003", title: "The first floor", text: "A small unit in Kolkata starts stitching men's shorts — the beginning of a single-minded house." },
    { year: "2009", title: "The Bermuda years", text: "Bornfree Bermudas earn a reputation across eastern India. Retailers reorder before the season ends." },
    { year: "2015", title: "Three units, 500 people", text: "The house grows into three manufacturing units — later powered by the sun, with water treated on site." },
    { year: "2019", title: "The fit project", text: "We begin building our own measurement data — real Indian bodies, not imported size charts." },
    { year: "2022", title: "Factory to front door", text: "bornfreefashions.com launches. Twenty years of craft finally speaks directly to the wearer." },
    { year: "2025", title: "Freedom of Body", text: "The philosophy becomes the brand — campaigns, community, and a design language of ease." },
  ],
};

export const philosophy = {
  intro: "Why Bornfree exists",
  statement: "Freedom of Body — clothing should move the way you do, never the other way around.",
  pillars: [
    { word: "Freedom", text: "Our founding idea. If you have to adjust it, tug it, or think about it — we haven't finished designing it.", imageKey: "philosophyFreedom" },
    { word: "Craftsmanship", text: "Every pair survives more than twenty-five quality checks before it earns the label. Details nobody sees, everybody feels.", imageKey: "philosophyCraft" },
    { word: "Comfort", text: "A special softening wash before anything ships. Comfort here is engineered, not promised.", imageKey: "philosophyComfort" },
    { word: "Authenticity", text: "Cut for the Indian body — fit charts built from real measurements of real men, not borrowed from another continent.", imageKey: "philosophyAuthenticity" },
    { word: "Longevity", text: "Made in our own units by people we know, to survive years of everydays. Loved, not landfilled.", imageKey: "philosophyLongevity" },
  ],
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  imageKey: string;
  intro: string;
  body: string[];
  quote: string;
};

export const work: CaseStudy[] = [
  {
    slug: "building-bornfree",
    index: "01",
    title: "Building Bornfree",
    category: "Brand & Identity",
    year: "2003 — ongoing",
    imageKey: "workBrand",
    intro: "Turning twenty years of quiet manufacturing excellence into a brand men ask for by name.",
    body: [
      "For two decades, Bornfree's craft lived anonymously — beautifully made bottomwear sold through other people's shelves. The garments had a reputation. The name didn't. My job was to close that gap.",
      "We built the brand the way the factory builds a garment: from the inside out. Freedom of Body — the idea that clothing should never ask you to adjust — became the voice, the photography, the campaign language. Earthy, unhurried, worn by real builds in real light.",
      "A brand is a promise repeated until people believe it. Ours was easy to keep, because the factory had been keeping it for twenty years before anyone was watching.",
    ],
    quote: "The factory kept the promise for twenty years before anyone was watching.",
  },
  {
    slug: "the-cargo-rebuilt",
    index: "02",
    title: "The Cargo, Rebuilt",
    category: "Product Design",
    year: "2023 — ongoing",
    imageKey: "workCargo",
    intro: "Deconstructing menswear's most abused silhouette — and rebuilding it pocket by pocket.",
    body: [
      "The cargo is where lazy design goes to hide: pockets stitched on as decoration, bulk mistaken for utility. We started over. Every pocket on a Bornfree cargo had to justify its position against a simple test — what do Indian men actually carry, and where do their hands actually go?",
      "The answers redrew the garment. Phone pockets angled for a seated commute. Flaps that stay flat under a kurta or a tee. Volume balanced so the leg drapes instead of ballooning.",
      "The result is our best-selling line — a cargo that works as hard as the men wearing it, and looks like it never tried.",
    ],
    quote: "Every pocket has to justify its position.",
  },
  {
    slug: "fit-for-the-indian-body",
    index: "03",
    title: "A Fit for the Indian Body",
    category: "Fit & Pattern",
    year: "2019 — ongoing",
    imageKey: "workFit",
    intro: "Why we threw away imported size charts and built our own — one measurement at a time.",
    body: [
      "Most menswear in India is graded from Western blocks: longer rises, narrower seats, proportions borrowed from bodies that aren't ours. Wear one and you feel it — not wrong enough to return, never right enough to forget.",
      "So we built our own data. Thousands of measurements across ages and builds, turned into fit blocks that respect how Indian men are actually shaped and how they actually sit, squat, ride and work.",
      "It's invisible work — nobody photographs a rise curve. But it's why the review we get most often is some version of: finally, something that just fits.",
    ],
    quote: "Nobody photographs a rise curve. Everybody feels it.",
  },
  {
    slug: "twenty-five-checks",
    index: "04",
    title: "Twenty-Five Checks",
    category: "Craft & Quality",
    year: "Studio practice",
    imageKey: "workQuality",
    intro: "Inside the quality ritual every single garment survives before it earns the Bornfree label.",
    body: [
      "Twenty-five checks sounds like marketing until you stand on the floor and watch it happen: seam strength, stitch density, waistband recovery, pocket bartacks, shade matching, shrinkage after the wash — a garment interrogated at every station it passes.",
      "Then comes the special wash. Every piece is softened before it ships, so the first wear feels like the fiftieth. Comfort out of the packet is a manufacturing decision, not an accident.",
      "This discipline is slow, and it's the whole brand. Our garments are finished before launch — not after, by customer complaint.",
    ],
    quote: "Finished before launch — not after, by customer complaint.",
  },
  {
    slug: "factory-to-front-door",
    index: "05",
    title: "Factory to Front Door",
    category: "Direct to Consumer",
    year: "2022 — ongoing",
    imageKey: "workD2C",
    intro: "Removing every middle layer between three factories in Kolkata and the men who wear the work.",
    body: [
      "Going direct wasn't a distribution decision — it was a design one. Every layer between the factory and the wearer dilutes something: the price, the story, the feedback. Remove the layers and the maker finally hears the wearer clearly.",
      "Now the inbox is our best design brief. A pocket in the wrong place, a length that almost works — customers tell you exactly what to build if you're humble enough to listen. Several bestsellers began life as complaints.",
      "And because our own units make everything, a suggestion can become a sample in days. That loop — wearer to factory floor and back — is the most valuable thing we've ever built.",
    ],
    quote: "The inbox is the best design brief we have.",
  },
];

export const process = {
  title: "The Creative Process",
  steps: [
    { label: "Research", text: "Fits begin with bodies. Real measurements, real routines.", imageKey: "processResearch" },
    { label: "Sketch", text: "Draw fast, decide slow. Every pocket must argue for itself.", imageKey: "processSketch" },
    { label: "Fabric", text: "Cotton chosen by hand-feel and climate, not season names.", imageKey: "processFabric" },
    { label: "Sampling", text: "The first sample is always wrong. That's the point.", imageKey: "processSampling" },
    { label: "Iteration", text: "Worn, washed, squatted in, revised. Repeat.", imageKey: "processIteration" },
    { label: "Launch", text: "Only after twenty-five checks and a softening wash.", imageKey: "processLaunch" },
  ],
};

export const behind = {
  quotes: [
    { text: "Freedom of Body isn't a slogan. It's a spec.", sub: "Every fit decision traces back to one test: can you forget you're wearing it? Through a commute, a workday, a long evening on the floor with the kids.", imageKey: "behindMovement" },
    { text: "I believe comfort is a luxury.", sub: "The most expensive feeling in the world is being completely at ease. We manufacture that feeling — and soften it in the wash before it ships.", imageKey: "behindComfort" },
    { text: "We make bottomwear. Only bottomwear.", sub: "Twenty years on one garment family teaches you what generalists never learn. The focus is the design.", imageKey: "behindConfidence" },
  ],
};

export const numbers = [
  { value: 20, suffix: "+", label: "Years of craft" },
  { value: 500, suffix: "+", label: "Craftspeople" },
  { value: 25, suffix: "+", label: "Checks per garment" },
  { value: 3, suffix: "", label: "Solar-powered units" },
];

export const testimonials = [
  {
    quote: "The only cargos I've owned where the waistband doesn't fold by evening. You can tell somebody measured real people.",
    name: "A. Banerjee",
    role: "Customer since 2022",
  },
  {
    quote: "Bornfree understands the Indian build better than brands ten times their size. Their fits reorder themselves.",
    name: "R. Agarwal",
    role: "Menswear retailer, 14 years",
  },
  {
    quote: "Their floor runs with a pride you rarely see. Every pair is checked like it's the first one they ever made.",
    name: "S. Iyer",
    role: "Fabric mill partner",
  },
];

/** Placeholder press names — replace with real features when available. */
export const press = ["GQ INDIA", "MAN'S WORLD", "MENSXP", "YOURSTORY", "TEXTILE VALUE CHAIN", "ECONOMIC TIMES"];

export type JournalPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const journal: JournalPost[] = [
  {
    slug: "why-only-bottomwear",
    date: "March 2026",
    title: "Why We Only Make Bottomwear",
    excerpt: "Focus looks like a limitation until you see what it compounds into.",
    body: [
      "People ask when Bornfree will do shirts. The honest answer: hopefully never. Twenty years on one garment family — cargos, joggers, Bermudas, shorts — has compounded into knowledge you cannot rush. We know how a waistband behaves in week one and in year three. We know which pocket angles survive a scooter commute.",
      "Every category you add divides that attention. Every category you refuse deepens it. Our masterjis have sewn tens of thousands of the same seams — and it shows in the seam.",
      "Focus is the least glamorous strategy in fashion and the most honest one. We'd rather be the best in the country at half the wardrobe than forgettable at all of it.",
    ],
  },
  {
    slug: "twenty-five-checks-diary",
    date: "January 2026",
    title: "A Day on the Quality Line",
    excerpt: "What twenty-five checks actually look like from the factory floor.",
    body: [
      "Check eleven is my favourite: waistband recovery. A machine stretches the waistband a few hundred times and measures whether it returns home. Most brands never test it. It's why their garments loosen into shapelessness by the third month.",
      "The line isn't glamorous — chalk marks, calibrated pull-tests, a wash log thicker than a novel. But watch a pair fail at check nineteen and go back, and you understand the label differently.",
      "Quality isn't a department here. It's twenty-five small refusals to let something slide.",
    ],
  },
  {
    slug: "designing-for-the-indian-body",
    date: "November 2025",
    title: "Designing for the Indian Body",
    excerpt: "Borrowed size charts fit nobody. So we built our own.",
    body: [
      "The dirty secret of Indian menswear is that most of it is graded from Western fit blocks. The proportions — rise, seat, thigh — belong to somebody else's average. Wear it and you feel the borrowedness all day without being able to name it.",
      "We spent years building our own measurement data instead: real men, real builds, real postures. How Indians actually sit — cross-legged, on haunches, side-saddle on a bike. The fit block that came out of it looks unremarkable on paper and feels unmistakable on the body.",
      "The best compliment we get is silence — a man who put them on in the morning and didn't think about them again.",
    ],
  },
  {
    slug: "a-factory-that-runs-on-sunlight",
    date: "September 2025",
    title: "A Factory That Runs on Sunlight",
    excerpt: "Three units, five hundred people, solar on the roof and treated water below.",
    body: [
      "Sustainability in fashion is usually a hangtag. Ours is a roof. The three units that make every Bornfree garment run on solar power, and the water from our wash processes is treated on site before it leaves.",
      "The same philosophy applies to the five hundred people inside. Fair employment isn't a certification we chase — it's the only way a floor produces work with pride in it. You can genuinely see the difference in a seam.",
      "We build garments meant to last years. It would be absurd to build them in a way the neighbourhood can't live with.",
    ],
  },
];

export const contact = {
  title: "Let's create something beautiful.",
  sub: "For collaborations, retail partnerships, press, or a conversation about building brands with soul — and seams that hold.",
  cta: "Write to me",
};

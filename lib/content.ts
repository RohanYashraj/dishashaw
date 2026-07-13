/**
 * All site copy lives here — placeholder founder copy written in Disha's voice.
 * Swap facts (dates, numbers, quotes, press names) with real ones when available.
 */

export const site = {
  name: "Disha Shaw",
  role: "Founder & Creative Director",
  brand: "Bornfree Fashions",
  brandUrl: "https://bornfreefashions.com",
  email: "hello@dishashaw.com", // placeholder
  socials: [
    { label: "Instagram", href: "https://instagram.com/bornfreefashions" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Bornfree", href: "https://bornfreefashions.com" },
  ],
};

export const hero = {
  eyebrow: "Founder · Creative Director · Bornfree Fashions",
  line1: "I don't just build clothes.",
  line2: "I build stories people wear.",
  sub: "Designing freedom, one collection at a time — from a single sketchbook to a brand worn across India.",
  ctaPrimary: { label: "Explore my journey", href: "#story" },
  ctaSecondary: { label: "See the work", href: "#work" },
};

export const about = {
  roles: [
    "Founder",
    "Creative Director",
    "Entrepreneur",
    "Product Visionary",
    "Brand Builder",
    "Creative Strategist",
  ],
  story: [
    "Before Bornfree had a name, it had a feeling — the moment a garment stops being fabric and starts being confidence. I grew up around textiles, watching cloth move through hands that knew exactly what they were doing, and I never stopped chasing that quiet magic.",
    "Bornfree Fashions began as a refusal: a refusal to accept that comfort and beauty had to live in separate wardrobes. Every collection since has been an argument for both — precision craftsmanship, honest fabrics, and silhouettes that let people move through their lives freely.",
    "Today I lead design, product and brand at Bornfree. But my favourite place is still the sampling table, where an idea becomes a thing you can hold.",
  ],
  timeline: [
    { year: "2016", title: "The first sketchbook", text: "Filled three notebooks with silhouettes before touching a single metre of fabric." },
    { year: "2018", title: "Bornfree is born", text: "Registered the brand with one machine, one tailor, and an unreasonable amount of conviction." },
    { year: "2019", title: "First collection sells out", text: "A small run of comfort-first essentials disappears in eleven days." },
    { year: "2021", title: "Going online", text: "bornfreefashions.com launches, taking the brand from local racks to doorsteps across India." },
    { year: "2023", title: "50,000 customers", text: "The community outgrows every projection — and every warehouse we'd planned for." },
    { year: "2025", title: "The next chapter", text: "Expanding the design studio and building Bornfree into a house of comfort-led lines." },
  ],
};

export const philosophy = {
  intro: "Why Bornfree exists",
  statement: "Clothing should set people free — free to move, to work, to rest, to be entirely themselves.",
  pillars: [
    { word: "Freedom", text: "Every silhouette starts with a question: can you live your whole day in this?", imageKey: "philosophyFreedom" },
    { word: "Craftsmanship", text: "Precision stitching, honest construction, details nobody sees but everybody feels.", imageKey: "philosophyCraft" },
    { word: "Comfort", text: "Comfort is not the absence of style. It is the highest form of it.", imageKey: "philosophyComfort" },
    { word: "Authenticity", text: "We make what we believe in, at the pace belief requires.", imageKey: "philosophyAuthenticity" },
    { word: "Longevity", text: "Designed to be worn for years, not seasons. Loved, not landfilled.", imageKey: "philosophyLongevity" },
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
    category: "Brand Identity",
    year: "2018 — ongoing",
    imageKey: "workBrand",
    intro: "How a one-tailor operation became a brand with a point of view — the identity, voice and world of Bornfree.",
    body: [
      "A brand is a promise repeated until people believe it. For Bornfree, the promise was simple: clothes that feel like freedom. The identity had to carry that promise everywhere — from the stitch on a waistband to the tone of a delivery message.",
      "We built the brand around warmth rather than hype. Earthy colour, honest photography, and language that speaks like a person, not a catalogue. Every touchpoint was designed to feel like the garment itself: relaxed, considered, quietly confident.",
      "The result is a brand people describe in emotional words — comfortable, dependable, mine — which is the only brand test that matters.",
    ],
    quote: "A brand is a promise repeated until people believe it.",
  },
  {
    slug: "sketch-to-production",
    index: "02",
    title: "From Sketch to Production",
    category: "Product Development",
    year: "2019 — ongoing",
    imageKey: "workSketch",
    intro: "The unglamorous, beautiful pipeline that turns a pencil line into a garment on a doorstep.",
    body: [
      "Every Bornfree piece begins as a drawing and survives a gauntlet: fabric trials, fit sessions, stress tests, and the honest opinions of people who don't care about my feelings.",
      "I designed our production process around iteration. A style isn't approved until it has been worn — really worn — through commutes, workdays and long evenings. If it wrinkles wrong, pulls wrong, or sits wrong, it goes back.",
      "This discipline is slow and worth it. Our return rates stay low because the garment was finished before it was launched, not after.",
    ],
    quote: "A style isn't approved until it has been worn — really worn.",
  },
  {
    slug: "design-process",
    index: "03",
    title: "The Design Process",
    category: "Creative Direction",
    year: "Studio practice",
    imageKey: "workProcess",
    intro: "Inside the studio ritual — research, moodboards, fabric libraries and the discipline of subtraction.",
    body: [
      "My process is mostly subtraction. The first draft of anything has too much: too many seams, too many features, too much noise. The work is removing everything the wearer doesn't need until only intention remains.",
      "Research starts with people, not runways. We study how customers actually live — what they carry, how they sit, when they're too warm — and design backwards from those truths.",
      "The fabric library is the heart of the studio. Before a silhouette is drawn, the hand-feel is chosen. Fabric first, always.",
    ],
    quote: "The work is removing everything the wearer doesn't need.",
  },
  {
    slug: "customer-obsession",
    index: "04",
    title: "Customer Obsession",
    category: "Community & Experience",
    year: "2019 — ongoing",
    imageKey: "workCustomer",
    intro: "Reading every review, answering the hard messages, and letting customers co-author the product line.",
    body: [
      "In the early days I answered every customer message personally. As we grew, I refused to lose that — the inbox is still the best design brief we have.",
      "Multiple bestsellers began as complaints. A pocket in the wrong place, a waistband that rolled, a length that almost worked. Customers tell you exactly what to build if you're humble enough to listen.",
      "We measure success in repeat customers and in the messages that say some version of: these are the only ones I wear now.",
    ],
    quote: "The inbox is still the best design brief we have.",
  },
  {
    slug: "scaling-creativity",
    index: "05",
    title: "Scaling Creativity",
    category: "Founder Story",
    year: "2021 — ongoing",
    imageKey: "workScale",
    intro: "Growing from a founder's hands to a studio system — without letting the soul dilute.",
    body: [
      "The hardest design problem I've solved isn't a garment. It's a company that can create without me in every room.",
      "We scaled by writing taste down: fit standards, fabric standards, photography rules, tone of voice. Creativity scales when judgment becomes shared language instead of one person's instinct.",
      "The studio now ships more than I ever could alone — and the work still feels like Bornfree. That's the whole game.",
    ],
    quote: "Creativity scales when judgment becomes shared language.",
  },
];

export const process = {
  title: "The Creative Process",
  steps: [
    { label: "Research", text: "People first. Runways later, if ever.", imageKey: "processResearch" },
    { label: "Sketch", text: "Draw fast, decide slow.", imageKey: "processSketch" },
    { label: "Fabric", text: "Hand-feel is chosen before the silhouette.", imageKey: "processFabric" },
    { label: "Sampling", text: "The first sample is always wrong. That's the point.", imageKey: "processSampling" },
    { label: "Iteration", text: "Worn, washed, judged, revised. Repeat.", imageKey: "processIteration" },
    { label: "Launch", text: "Only when it's finished. Not when it's due.", imageKey: "processLaunch" },
  ],
};

export const behind = {
  quotes: [
    { text: "Inspiration comes from everyday movement.", sub: "Collections begin on train platforms, in kitchens, on long walks — wherever real bodies move through real days.", imageKey: "behindMovement" },
    { text: "I believe comfort is a luxury.", sub: "The most expensive feeling in the world is being completely at ease. We manufacture that feeling.", imageKey: "behindComfort" },
    { text: "Design should disappear into confidence.", sub: "When the garment is right, you stop thinking about it. What remains is you, amplified.", imageKey: "behindConfidence" },
  ],
};

export const numbers = [
  { value: 10, suffix: "+", label: "Collections" },
  { value: 50, suffix: "K+", label: "Customers" },
  { value: 100, suffix: "+", label: "Products" },
  { value: 1000, suffix: "+", label: "Happy stories" },
];

export const testimonials = [
  {
    quote: "The rare brand where the tenth purchase feels as considered as the first. You can tell a designer is still reading every review.",
    name: "A. Mehta",
    role: "Customer since 2019",
  },
  {
    quote: "Disha thinks about garments the way architects think about buildings — how people will live inside them.",
    name: "R. Kapoor",
    role: "Textile partner",
  },
  {
    quote: "Working with Bornfree changed how our unit thinks about quality. She raised the bar for everyone in the room.",
    name: "S. Iyer",
    role: "Production partner",
  },
];

/** Placeholder press names — replace with real features when available. */
export const press = ["VOGUE INDIA", "ELLE", "GQ", "GRAZIA", "HARPER'S BAZAAR", "COSMOPOLITAN"];

export type JournalPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const journal: JournalPost[] = [
  {
    slug: "lessons-from-building",
    date: "March 2026",
    title: "Lessons from Building a Fashion Brand",
    excerpt: "Seven years in — the mistakes I'd repeat and the ones I wouldn't.",
    body: [
      "Nobody tells you that building a fashion brand is mostly logistics wearing a beautiful coat. The sketches are five percent. The other ninety-five is fabric ledgers, fit sessions, courier disputes and the slow work of earning trust one parcel at a time.",
      "If I could send one note back to 2018, it would say: your taste is the business. Protect the hours where you actually design. Everything else can be shared, delegated or postponed — judgment can't.",
      "And keep the first sketchbook. On hard days it reminds you the whole company was once a drawing that refused to stay on paper.",
    ],
  },
  {
    slug: "designing-for-comfort",
    date: "January 2026",
    title: "How I Design for Comfort",
    excerpt: "Comfort is engineering. Here's the checklist behind the feeling.",
    body: [
      "Comfort has a reputation for being vague — a feeling you either get or don't. In the studio it's the opposite: a checklist of measurable decisions. Seam placement against the body's bend lines. Fabric weight matched to climate, not season names invented in colder countries.",
      "My rule: if a wearer notices the garment twice in a day, we've failed. Once when they put it on, delighted. Never again until they take it off.",
      "The irony of designing for comfort is how uncomfortable the process is — hundreds of rejected samples for every one that ships. That's the trade, and it's worth it.",
    ],
  },
  {
    slug: "behind-every-collection",
    date: "November 2025",
    title: "Behind Every Collection",
    excerpt: "A collection is an argument. Here's how ours get made.",
    body: [
      "Every collection starts with a sentence, not a sketch. One line that the whole range has to defend. If a piece doesn't argue for the sentence, it doesn't ship — no matter how beautiful it is.",
      "The moodboard stage is sacred and slightly chaotic: fabric swatches taped over photographs, handwritten notes, colours pulled from streets and kitchens rather than trend reports.",
      "By the time a collection launches, it's survived forty arguments. What you see online is the peace treaty.",
    ],
  },
  {
    slug: "why-details-matter",
    date: "September 2025",
    title: "Why Details Matter",
    excerpt: "The stitch nobody sees is the one that defines you.",
    body: [
      "There's a bartack inside every Bornfree waistband that costs us real money and that no customer will ever consciously notice. We keep it because garments communicate below the threshold of attention — things feel cheap or feel right long before anyone can say why.",
      "Details are also a message to the team: this is who we are when nobody's checking. Cut that corner and a hundred invisible corners follow.",
      "Luxury, to me, was never the logo. It's the sum of decisions made carefully in places nobody looks.",
    ],
  },
];

export const contact = {
  title: "Let's create something beautiful.",
  sub: "For collaborations, press, speaking, or a conversation about building things with soul.",
  cta: "Write to me",
};

import massage from "@/assets/massage.jpg";
import facial from "@/assets/facial.jpg";
import stones from "@/assets/stones.jpg";
import scrub from "@/assets/scrub.jpg";
import couples from "@/assets/couples.jpg";
import bamboo from "@/assets/bamboo.jpg";
import orchid from "@/assets/orchid.jpg";
import candles from "@/assets/candles.jpg";
import pool from "@/assets/pool.jpg";
import about from "@/assets/about.jpg";

export const services = [
  {
    slug: "thai-massage",
    name: "Traditional Thai Massage",
    tagline: "Ancient rhythm, restorative stretch.",
    description:
      "A 2,500-year-old practice of assisted stretching and rhythmic compression along the body's energy lines — performed on a warm floor mat in loose cotton attire.",
    duration: "60 / 90 min",
    price: "$165 / $225",
    image: massage,
  },
  {
    slug: "balinese-massage",
    name: "Balinese Warm Oil Massage",
    tagline: "Island stillness in every stroke.",
    description:
      "Long flowing strokes, gentle acupressure, and warm coconut and frangipani oil ease tension and reawaken circulation.",
    duration: "60 / 90 min",
    price: "$175 / $240",
    image: pool,
  },
  {
    slug: "signature-facial",
    name: "Signature Botanical Facial",
    tagline: "Radiance from clean, organic actives.",
    description:
      "A bespoke facial with hand-blended botanical serums, jade roller lymphatic drainage, and rose quartz gua sha to leave skin luminous.",
    duration: "75 min",
    price: "$195",
    image: facial,
  },
  {
    slug: "body-scrub",
    name: "Coconut & Frangipani Body Scrub",
    tagline: "Softened, polished, wholly renewed.",
    description:
      "House-blended sea salt, virgin coconut oil, and crushed frangipani petals exfoliate and hydrate, followed by a warm rinse and body butter.",
    duration: "60 min",
    price: "$155",
    image: scrub,
  },
  {
    slug: "hot-stone",
    name: "Volcanic Hot Stone Therapy",
    tagline: "Deep warmth. Complete surrender.",
    description:
      "Smooth basalt stones warmed to the perfect temperature glide across the body, releasing chronic tension and easing deep muscle strain.",
    duration: "90 min",
    price: "$245",
    image: stones,
  },
  {
    slug: "couples-suite",
    name: "Private Couples Spa Suite",
    tagline: "A sanctuary for two.",
    description:
      "Side-by-side massages in a private pavilion with floral bath, chilled hibiscus tea, and a hand-rolled tropical fruit platter.",
    duration: "120 min",
    price: "$495 / couple",
    image: couples,
  },
] as const;

export const gallery = [
  { src: pool, alt: "Sunset lotus pool" },
  { src: bamboo, alt: "Bamboo grove at dawn" },
  { src: candles, alt: "Candle-lit relaxation lounge" },
  { src: orchid, alt: "Orchid still life" },
  { src: couples, alt: "Couples pavilion" },
  { src: stones, alt: "Hot stones on bamboo" },
  { src: about, alt: "Zen stones and orchid" },
  { src: massage, alt: "Warm oil ritual" },
  { src: scrub, alt: "Botanical body scrub" },
];

export const testimonials = [
  {
    quote:
      "The most transportive spa experience I've had outside of Bali. From the moment you step in, the world quiets down.",
    author: "Sarah M.",
    location: "Los Angeles, CA",
  },
  {
    quote:
      "Immaculate suites, deeply skilled therapists, and details that rival any Four Seasons. Our couples ritual was unforgettable.",
    author: "David & Elena K.",
    location: "New York, NY",
  },
  {
    quote:
      "I fly in from Chicago every few months just for the Balinese massage. It's genuinely that good — worth every mile.",
    author: "Priya R.",
    location: "Chicago, IL",
  },
  {
    quote:
      "Beautiful, quiet, and clean. The organic products are extraordinary and my skin has never looked better after the facial.",
    author: "Jennifer T.",
    location: "Austin, TX",
  },
];

export const packages = [
  {
    name: "Half-Day Retreat",
    price: "$395",
    duration: "3 hours",
    inclusions: [
      "60-min Balinese massage",
      "Signature botanical facial",
      "Herbal steam & tea ceremony",
      "Access to relaxation lounge",
    ],
    featured: false,
  },
  {
    name: "Full-Day Sanctuary",
    price: "$795",
    duration: "6 hours",
    inclusions: [
      "90-min hot stone therapy",
      "Coconut & frangipani body scrub",
      "Signature botanical facial",
      "Herbal lunch & tropical fruit",
      "Private garden bath ritual",
    ],
    featured: true,
  },
  {
    name: "Couples Escape",
    price: "$1,150",
    duration: "4 hours / couple",
    inclusions: [
      "Private pavilion suite",
      "Side-by-side 90-min massage",
      "Floral rose petal bath",
      "Champagne & fruit platter",
    ],
    featured: false,
  },
] as const;

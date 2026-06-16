import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon } from "@/app/components/icons";
import { SOCIAL_LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Shows | Almyr Jules",
  description: "Upcoming live shows and tour dates for Almyr Jules.",
};

interface Show {
  date: string;
  name: string;
  venue: string;
  city: string;
  time: string;
  description: string;
  tag?: string;
}

const SHOWS: Show[] = [
  {
    date: "June 18, 2026",
    name: "Songs From The Shed",
    venue: "Sparks Street — The Shed",
    city: "Ottawa, ON",
    time: "12:05 PM (35-min set)",
    description: "Solo performance as part of the OMIC agreement.",
  },
  {
    date: "June 19, 2026",
    name: "Almyr Jules Live",
    venue: "Lili's Bar",
    city: "Ottawa, ON",
    time: "7:00 – 10:00 PM",
    description: "Live music performance at Lili's Bar.",
  },
  {
    date: "June 21, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch residency — live music every 1st & 3rd Sunday.",
    tag: "Residency",
  },
  {
    date: "June 26, 2026",
    name: "Almyr Jules Live",
    venue: "Lili's Bar",
    city: "Ottawa, ON",
    time: "7:00 – 10:00 PM",
    description: "Live music performance at Lili's Bar.",
  },
  {
    date: "July 5, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch residency — live music every 1st & 3rd Sunday.",
    tag: "Residency",
  },
  {
    date: "July 19, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch residency — live music every 1st & 3rd Sunday.",
    tag: "Residency",
  },
  {
    date: "July 26, 2026",
    name: "Songbird Coven Summer Bash & Fundraiser",
    venue: "Broadway Bar & Grill Central",
    city: "Ottawa, ON",
    time: "6:00 PM",
    description:
      "An intimate night of original songs and stories raising funds to keep the Songbird Coven Songwriter Show going. Lineup: Emma Lamontagne · Almyr Jules · Chase Van Dusen · TANAEYA · Gabrielle Goulet · Sam Wood · Rox Anne · Sam Davs. Free entry — reserve your spot at broadwayprince.com. Specialty drinks, raffles & more.",
    tag: "Free",
  },
  {
    date: "August 1, 2026",
    name: "BistroFest",
    venue: "Hog's Back Grill & Bistro",
    city: "Ottawa, ON",
    time: "6:00 – 9:00 PM",
    description:
      "Solo performance at BistroFest. Lineup: Finely Tuned Elephant (headline) · Almyr Jules · The Friendly Frogs Freak Show (opener). Free entry — tickets via Eventbrite at linktr.ee/bistrofest. All donations go directly to artists.",
    tag: "Free",
  },
  {
    date: "August 2, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch residency — live music every 1st & 3rd Sunday.",
    tag: "Residency",
  },
  {
    date: "August 16, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch residency — live music every 1st & 3rd Sunday.",
    tag: "Residency",
  },
];

const sorted = SHOWS.slice().sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

export default function ShowsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Live
      </p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
        Shows
      </h1>

      <div className="mt-16 divide-y divide-charcoal-line/40">
        {sorted.map((show) => (
          <div
            key={`${show.date}-${show.venue}`}
            className="grid gap-2 py-7 sm:grid-cols-[10rem_1fr]"
          >
            <div className="font-display text-sm text-gold pt-0.5">
              {show.date}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-semibold text-cream">{show.name}</p>
                {show.tag && (
                  <span className="rounded-full border border-gold/40 px-2 py-0.5 text-xs uppercase tracking-[0.15em] text-gold">
                    {show.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-cream-soft">
                {show.venue} &mdash; {show.city}
              </p>
              <p className="mt-0.5 text-sm text-cream-soft">{show.time}</p>
              <p className="mt-2 text-sm text-cream-soft/70">{show.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-charcoal-line/60 bg-charcoal-soft px-6 py-12 text-center">
        <h2 className="font-display text-xl text-cream sm:text-2xl">
          More dates coming soon
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream-soft">
          New shows are announced first on Instagram. Follow along so you
          don&rsquo;t miss the next one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow on Instagram
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-cream-soft/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Get Email Updates
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon } from "@/app/components/icons";
import { SOCIAL_LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Shows | Almyr Jules",
  description: "Upcoming live shows and tour dates for Almyr Jules.",
};

// Rebuild hourly so past dates drop off without a redeploy.
export const revalidate = 3600;

interface Show {
  date: string;
  name: string;
  venue: string;
  city: string;
  time: string;
  description?: string;
  tag?: string;
  ticketUrl?: string;
  ticketLabel?: string;
}

const SHOWS: Show[] = [
  {
    date: "July 31, 2026",
    name: "Almyr Jules Live",
    venue: "Li Li's Bar",
    city: "Ottawa, ON",
    time: "7:00 – 10:00 PM",
    description: "Solo set.",
  },
  {
    date: "August 1, 2026",
    name: "BistroFest",
    venue: "Hog's Back Grill & Bistro",
    city: "Ottawa, ON",
    time: "6:00 – 9:00 PM",
    description:
      "Solo set. With Finely Tuned Elephant (headliner) and The Friendly Frogs Freak Show. Free entry; donations go to the artists.",
    tag: "Free",
    ticketUrl: "https://linktr.ee/bistrofest",
    ticketLabel: "Get Tickets",
  },
  {
    date: "August 2, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch set, every first and third Sunday.",
    tag: "Residency",
  },
  {
    date: "August 7, 2026",
    name: "Live at 1818 Cidery",
    venue: "1818 Cidery",
    city: "Ottawa, ON",
    time: "6:00 – 7:30 PM",
  },
  {
    date: "August 16, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch set, every first and third Sunday.",
    tag: "Residency",
  },
  {
    date: "August 27, 2026",
    name: "Ash Ravens, Almyr Jules, ASIF",
    venue: "Rainbow Bistro",
    city: "Ottawa, ON",
    time: "Doors 8:00 PM · Music 8:30 PM",
    description:
      "With Ash Ravens and ASIF (Man on a Bike). 19+. $15 + tax online, $20 at the door.",
    ticketUrl: "https://therainbow.ca/event/6607806/766143442/ash-ravens-band-almyr-jules",
    ticketLabel: "Get Tickets",
  },
  {
    date: "September 6, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch set, every first and third Sunday.",
    tag: "Residency",
  },
  {
    date: "September 20, 2026",
    name: "Brunch Residency",
    venue: "Angelina's Restaurant",
    city: "Ottawa, ON",
    time: "11:00 AM – 2:00 PM",
    description: "Solo brunch set, every first and third Sunday.",
    tag: "Residency",
  },
  {
    date: "November 13, 2026",
    name: "Indie Week Canada",
    venue: "Rainbow Bistro",
    city: "Ottawa, ON",
    time: "8:00 PM",
    description: "Indie Week Canada showcase.",
    tag: "Indie Week",
  },
];

const DAY = 24 * 60 * 60 * 1000;

// Keep a show listed through the end of its day (with slack for time zones).
function getUpcomingShows(): Show[] {
  const cutoff = Date.now() - DAY;
  return SHOWS.filter((s) => new Date(s.date).getTime() >= cutoff).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export default function ShowsPage() {
  const upcoming = getUpcomingShows();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Live
      </p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
        Shows
      </h1>

      {upcoming.length === 0 && (
        <p className="mt-16 text-cream-soft">
          No dates on the calendar right now. New shows are announced on
          Instagram first.
        </p>
      )}

      <div className="mt-16 divide-y divide-charcoal-line/40">
        {upcoming.map((show) => (
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
                {show.venue}, {show.city}
              </p>
              <p className="mt-0.5 text-sm text-cream-soft">{show.time}</p>
              {show.description && (
                <p className="mt-2 text-sm text-cream-soft/70">{show.description}</p>
              )}
              {show.ticketUrl && (
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-4 inline-block rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal"
                >
                  {show.ticketLabel ?? "Get Tickets"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-charcoal-line/60 bg-charcoal-soft px-6 py-12 text-center">
        <h2 className="font-display text-xl text-cream sm:text-2xl">
          More dates coming soon
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream-soft">
          New shows are announced on Instagram first.
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
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

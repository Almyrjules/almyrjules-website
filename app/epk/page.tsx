import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VideoEmbed from "@/app/components/VideoEmbed";
import {
  BOOKING_EMAIL,
  LISTEN_NOW_URL,
  SOCIAL_LINKS,
  SPOTIFY_FEATURED_TRACK_EMBED,
  VIDEOS,
} from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Press Kit (EPK) | Almyr Jules",
  description:
    "Electronic press kit for Almyr Jules — bio, photos, music, videos, live setup, and booking contact.",
};

const FACTS = [
  { label: "Genre", value: "Soul · R&B · Folk" },
  { label: "Based In", value: "Ottawa, Ontario, Canada" },
  { label: "Latest Single", value: "“If You Come Back For More”" },
  { label: "Upcoming Album", value: "Essentials Vol. 1 (13 tracks) — June 27, 2026" },
  { label: "Live", value: "Performs solo, acoustic duo, or with full band SWAY" },
];

const PRESS_PHOTOS = [
  { src: "/images/portrait-studio.jpg", alt: "Almyr Jules studio portrait", width: 1200, height: 1800 },
  { src: "/images/live-club-1.jpg", alt: "Almyr Jules performing live at Overflow Brewing Company", width: 1800, height: 1200 },
  { src: "/images/band-group.jpg", alt: "Almyr Jules and the band SWAY", width: 1800, height: 1200 },
  { src: "/images/portrait-chair.jpg", alt: "Almyr Jules portrait with guitar", width: 1200, height: 1800 },
  { src: "/images/live-festival-1.jpg", alt: "Almyr Jules and band performing at City Folk Fest", width: 1800, height: 1199 },
  { src: "/images/portrait-noir.jpg", alt: "Almyr Jules portrait in black", width: 800, height: 1200 },
];

export default function EPKPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Press Kit
      </p>
      <h1 className="text-shine mt-3 text-4xl font-light tracking-[0.05em] sm:text-5xl">
        Almyr Jules
      </h1>
      <p className="mt-4 max-w-2xl text-cream-soft">
        Electronic Press Kit &mdash; biography, photos, music, videos, live
        setup, and booking information for press, promoters, and venues.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/epk/almyr-jules-epk.pdf"
          download
          className="btn-gold rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
        >
          Download EPK (PDF)
        </a>
        <a
          href={`mailto:${BOOKING_EMAIL}`}
          className="rounded-full border border-cream-soft/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
        >
          Booking Inquiries
        </a>
      </div>

      {/* At a glance */}
      <div className="mt-16 grid gap-6 rounded-2xl border border-charcoal-line/60 bg-charcoal-soft p-8 sm:grid-cols-2 lg:grid-cols-5">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              {fact.label}
            </p>
            <p className="mt-2 text-sm text-cream-soft">{fact.value}</p>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="mt-20 grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Biography
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream">
            Redefining modern ballad R&amp;B and soul
          </h2>
          <div className="mt-6 space-y-5 text-cream-soft">
            <p>
              Almyr Jules is an Ottawa-based Canadian artist delivering ballad
              R&amp;B and soul with raw emotional depth and vulnerability. His
              sound bridges classic soul tradition with a contemporary R&amp;B
              sensibility, drawing inspiration from artists like Donny
              Hathaway, Maxwell, and Giveon &mdash; while carving out a
              distinct lane all his own.
            </p>
            <p>
              A true craftsman of song, Almyr writes narratives centered on
              love, longing, and redemption. His performances are emotionally
              striking, delivered over seductive musical progressions with
              smouldering vocal work that draws listeners into the story
              behind every track.
            </p>
            <p>
              His most recent project, <em>Levels</em>, is a six-track EP
              featuring collaborations with JW-Jones and Jahmeema, alongside
              the standalone singles &ldquo;The Beginning&rdquo; and
              &ldquo;If You Come Back For More.&rdquo; His debut full-length
              album, <em>Essentials Vol. 1</em> &mdash; 13 tracks &mdash; is
              set for release on June 27, 2026.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-lg italic text-cream">
            &ldquo;Almyr&rsquo;s music is a seamless fusion of nostalgia and
            contemporary flair. With his velvety vocals and emotive lyrics, he
            effortlessly transports listeners.&rdquo;
            <footer className="mt-2 text-sm not-italic uppercase tracking-[0.2em] text-cream-soft">
              &mdash; Certified Bop
            </footer>
          </blockquote>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/portrait-studio.jpg"
            alt="Almyr Jules studio portrait"
            width={1200}
            height={1800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Music */}
      <div className="mt-20 border-t border-charcoal-line/60 pt-16">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          Music
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
          Featured Release
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-charcoal-line/60 shadow-2xl">
            <iframe
              title="Spotify player — If You Come Back For More"
              src={SPOTIFY_FEATURED_TRACK_EMBED}
              width="100%"
              height="352"
              style={{ border: 0 }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div>
            <ul className="space-y-3 text-cream-soft">
              <li>
                <span className="text-cream">If You Come Back For More</span>
                {" "}&mdash; latest single, streaming everywhere now.
              </li>
              <li>
                <span className="text-cream">The Beginning</span>
                {" "}&mdash; single, official music video available.
              </li>
              <li>
                <span className="text-cream">Levels</span>
                {" "}&mdash; six-track EP featuring JW-Jones and Jahmeema.
              </li>
              <li>
                <span className="text-cream">Essentials Vol. 1</span>
                {" "}&mdash; 13-track album, releasing June 27, 2026.
              </li>
            </ul>
            <a
              href={LISTEN_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-bright"
            >
              All streaming links &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="mt-20 border-t border-charcoal-line/60 pt-16">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          Videos
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
          Official Music Videos
        </h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <VideoEmbed key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
      </div>

      {/* Press Photos */}
      <div className="mt-20 border-t border-charcoal-line/60 pt-16">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          Press Photos
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
          Photo Gallery
        </h2>
        <p className="mt-4 max-w-xl text-cream-soft">
          High-resolution versions of these and additional images are
          available on request.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {PRESS_PHOTOS.map((photo) => (
            <div key={photo.src} className="overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Live / Band */}
      <div className="mt-20 border-t border-charcoal-line/60 pt-16">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          Live
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
          Performance &amp; Lineup
        </h2>
        <p className="mt-4 max-w-2xl text-cream-soft">
          Almyr performs across Ottawa and beyond, including residencies at
          Rabbit Hole (biweekly Thursdays) and Angelina&rsquo;s Restaurant
          (1st &amp; 3rd Sundays). The set can be tailored to the room, from
          a full band production to an intimate acoustic performance.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-charcoal-line/60 bg-charcoal-soft p-8">
            <h3 className="font-display text-xl text-cream">
              Full Band &mdash; SWAY
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">
              5-piece
            </p>
            <ul className="mt-4 space-y-2 text-cream-soft">
              <li>Lead Vocals &amp; Guitar &mdash; Almyr Jules</li>
              <li>Lead Guitar</li>
              <li>Keyboards</li>
              <li>Bass</li>
              <li>Drums</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-charcoal-line/60 bg-charcoal-soft p-8">
            <h3 className="font-display text-xl text-cream">
              Acoustic Set
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">
              Solo or duo
            </p>
            <ul className="mt-4 space-y-2 text-cream-soft">
              <li>Vocals &amp; Guitar &mdash; Almyr Jules</li>
              <li>Optional second guitar / keys</li>
            </ul>
            <p className="mt-4 text-sm text-cream-soft">
              Ideal for listening rooms, brunches, and intimate venues.
            </p>
          </div>
        </div>

        <p className="mt-8 text-cream-soft">
          Technical and stage requirements scale with the performance format
          &mdash; a detailed technical rider and stage plot are available on
          request.
        </p>
      </div>

      {/* Booking */}
      <div className="mt-20 border-t border-charcoal-line/60 pt-16 text-center">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          Booking &amp; Press
        </p>
        <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
          Let&rsquo;s work together
        </h2>
        <p className="mt-4 text-cream-soft">
          For booking inquiries, press requests, and collaborations, reach out
          directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="btn-gold rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
          >
            {BOOKING_EMAIL}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-cream-soft/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Contact Page
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.2em] text-cream-soft">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            Instagram
          </a>
          <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            Spotify
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

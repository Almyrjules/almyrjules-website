import type { Metadata } from "next";
import Image from "next/image";
import {
  AppleMusicIcon,
  SpotifyIcon,
} from "@/app/components/icons";
import {
  SOCIAL_LINKS,
  SPOTIFY_ARTIST_EMBED,
} from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Music | Almyr Jules",
  description:
    "Listen to music from Almyr Jules — singles, EPs, and full releases.",
};

const RELEASES = [
  {
    title: "If You Come Back For More",
    type: "Single",
    cover: "/images/cover-if-you-come-back.jpg",
  },
  {
    title: "The Beginning",
    type: "Single",
    cover: "/images/cover-the-beginning.jpg",
  },
  {
    title: "Levels",
    type: "EP",
    cover: "/images/cover-levels.jpg",
  },
];

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Discography
      </p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
        Music
      </h1>
      <p className="mt-4 max-w-xl text-cream-soft">
        Stream the full catalogue on Spotify, Apple Music, and everywhere else
        you listen.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={SOCIAL_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
        >
          <SpotifyIcon className="h-4 w-4" />
          Spotify
        </a>
        <a
          href={SOCIAL_LINKS.appleMusic}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-cream-soft/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
        >
          <AppleMusicIcon className="h-4 w-4" />
          Apple Music
        </a>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {RELEASES.map((release) => (
          <a
            key={release.title}
            href={SOCIAL_LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="overflow-hidden rounded-2xl border border-charcoal-line/60">
              <Image
                src={release.cover}
                alt={`${release.title} cover art`}
                width={1000}
                height={1000}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 font-display text-lg text-cream group-hover:text-gold">
              {release.title}
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-cream-soft">
              {release.type}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl text-cream">Listen on Spotify</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-charcoal-line/60 shadow-2xl">
          <iframe
            title="Spotify artist player"
            src={SPOTIFY_ARTIST_EMBED}
            width="100%"
            height="352"
            style={{ border: 0 }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

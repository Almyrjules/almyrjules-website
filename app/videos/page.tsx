import type { Metadata } from "next";
import VideoEmbed from "@/app/components/VideoEmbed";
import { LIVE_VIDEOS, MUSIC_VIDEOS, SOCIAL_LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Videos | Almyr Jules",
  description:
    "Music videos and full live performances from Almyr Jules.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Watch
      </p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
        Videos
      </h1>
      <p className="mt-4 max-w-xl text-cream-soft">
        Music videos and full live performances. Subscribe on{" "}
        <a
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-bright"
        >
          YouTube
        </a>{" "}
        for new uploads.
      </p>

      <h2 className="mt-16 font-display text-2xl text-cream sm:text-3xl">
        Music Videos
      </h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {MUSIC_VIDEOS.map((video) => (
          <VideoEmbed key={video.id} {...video} />
        ))}
      </div>

      <h2 className="mt-20 font-display text-2xl text-cream sm:text-3xl">
        Live Performances
      </h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {LIVE_VIDEOS.map((video) => (
          <VideoEmbed key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}

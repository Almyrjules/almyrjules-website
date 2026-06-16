import type { Metadata } from "next";
import VideoEmbed from "@/app/components/VideoEmbed";
import { SOCIAL_LINKS, VIDEOS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Videos | Almyr Jules",
  description: "Official music videos from Almyr Jules.",
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
        Official music videos. Subscribe on{" "}
        <a
          href={SOCIAL_LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-bright"
        >
          YouTube
        </a>{" "}
        for the latest releases.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {VIDEOS.map((video) => (
          <VideoEmbed key={video.id} id={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );
}

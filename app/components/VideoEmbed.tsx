"use client";

import { useState } from "react";

export default function VideoEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal-line/60">
      <div className="relative aspect-video bg-charcoal-soft">
        {playing ? (
          <iframe
            title={title}
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition-colors group-hover:bg-charcoal/10">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-charcoal transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="px-1 py-4 font-display text-lg text-cream">{title}</p>
    </div>
  );
}

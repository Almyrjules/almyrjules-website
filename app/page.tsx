import Image from "next/image";
import Link from "next/link";
import { LISTEN_NOW_URL, SPOTIFY_FEATURED_TRACK_EMBED } from "@/app/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-video-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-charcoal)_100%)] opacity-60" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:pb-24">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Soul &middot; Folk &middot; Story
          </p>
          <h1 className="text-shine mt-4 text-5xl font-light tracking-[0.05em] sm:text-6xl">
            Almyr Jules
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream-soft">
            New single &ldquo;If You Come Back For More&rdquo; out now.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={LISTEN_NOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
            >
              Listen Now
            </a>
            <Link
              href="/videos"
              className="rounded-full border border-cream-soft/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Watch Videos
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-line/60 bg-charcoal-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
                New Release
              </p>
              <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
                If You Come Back For More
              </h2>
              <p className="mt-4 max-w-md text-cream-soft">
                The latest single from Almyr Jules is streaming everywhere now.
                Press play below or find it on your favourite platform.
              </p>
              <a
                href={LISTEN_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-bright"
              >
                All streaming links &rarr;
              </a>
            </div>
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
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-line/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/portrait-studio.jpg"
              alt="Almyr Jules portrait"
              width={1200}
              height={1800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
              A voice rooted in soul, shaped by story.
            </h2>
            <p className="mt-4 text-cream-soft">
              Almyr Jules blends warm soul melodies with folk-driven
              storytelling, crafting songs that feel both timeless and deeply
              personal. Whether on stage with a full band or stripped down with
              just a guitar, every performance is an invitation into the story
              behind the song.
            </p>
            <Link
              href="/bio"
              className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-bright"
            >
              Read the full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-line/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
                On Stage
              </p>
              <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
                Live &amp; in the moment
              </h2>
            </div>
            <Link
              href="/shows"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-bright"
            >
              See upcoming shows &rarr;
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="glow-gold relative col-span-2 aspect-[3/2] overflow-hidden rounded-2xl sm:row-span-2 sm:aspect-auto">
              <Image
                src="/images/live-club-1.jpg"
                alt="Almyr Jules singing live at Overflow Brewing Company"
                fill
                sizes="(min-width: 640px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/live-festival-1.jpg"
                alt="Almyr Jules and band performing at City Folk Fest"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/live-festival-2.jpg"
                alt="Almyr Jules performing live at City Folk Fest"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/live-festival-4.jpg"
                alt="Almyr Jules band performing on stage"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/live-club-2.jpg"
                alt="Almyr Jules and band on stage at Overflow Brewing Company"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/live-festival-5.jpg"
                alt="Almyr Jules performing live at City Folk Fest"
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal-line/60 bg-charcoal-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
            Stay In The Loop
          </p>
          <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
            Follow along for new music &amp; show announcements
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shows"
              className="btn-gold rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
            >
              Upcoming Shows
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cream-soft/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

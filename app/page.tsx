import Image from "next/image";
import Link from "next/link";
import {
  FEATURED_APPLE_MUSIC_URL,
  LISTEN_NOW_URL,
  SPOTIFY_FEATURED_EMBED,
} from "@/app/lib/site";

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
            Contemporary R&amp;B &middot; Soul
          </p>
          <h1 className="text-shine mt-4 text-5xl font-light tracking-[0.05em] sm:text-6xl">
            Almyr Jules
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream-soft">
            The album <em>Essentials Vol. 1</em> is out now.
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
                Out Now
              </p>
              <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
                Essentials Vol. 1
              </h2>
              <p className="mt-4 max-w-md text-cream-soft">
                Thirteen songs from 2020 to 2026, including &ldquo;Starlight,&rdquo;
                &ldquo;If You Come Back For More&rdquo; and tracks from the{" "}
                <em>Levels</em> EP. Streaming now on Spotify, Apple Music and
                everywhere else.
              </p>
              <a
                href={FEATURED_APPLE_MUSIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-bright"
              >
                Listen on Apple Music &rarr;
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-charcoal-line/60 shadow-2xl">
              <iframe
                title="Spotify player: Essentials Vol. 1"
                src={SPOTIFY_FEATURED_EMBED}
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
              Songs about love, longing and second chances.
            </h2>
            <p className="mt-4 text-cream-soft">
              Almyr Jules is a singer-songwriter from Ottawa making
              contemporary R&amp;B and soul. He plays his songs two ways: alone
              with a guitar, or with his five-piece band, SWAY.
            </p>
            <Link
              href="/bio"
              className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold hover:text-gold-bright"
            >
              Read the bio &rarr;
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
                Live
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
            New music and show dates go up on Instagram first.
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

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bio | Almyr Jules",
  description:
    "Almyr Jules is a rising Canadian voice in ballad R&B and soul, blending classic influences with contemporary storytelling.",
};

export default function BioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Bio
      </p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
        Redefining modern ballad R&amp;B and soul
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-2xl md:sticky md:top-24">
          <Image
            src="/images/portrait-chair.jpg"
            alt="Almyr Jules portrait with guitar"
            width={1200}
            height={1800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6 text-cream-soft">
          <p>
            Almyr Jules is a rising Canadian voice in the ballad R&amp;B and
            soul world, delivering music with raw emotional depth and
            vulnerability. His sound bridges classic soul tradition with a
            contemporary R&amp;B sensibility, drawing inspiration from artists
            like Donny Hathaway, Maxwell, and Giveon &mdash; while carving out a
            distinct lane all his own.
          </p>
          <p>
            A true craftsman of song, Almyr writes narratives centered on
            love, longing, and redemption. His performances are emotionally
            striking, delivered over seductive musical progressions with
            smouldering vocal work that draws listeners into the story behind
            every track.
          </p>
          <p>
            His latest project, <em>Levels</em>, is a six-track EP featuring
            collaborations with JW-Jones and Jahmeema, alongside the
            standalone singles &ldquo;The Beginning&rdquo; and &ldquo;If You
            Come Back For More.&rdquo;
          </p>

          <blockquote className="border-l-2 border-gold pl-6 font-display text-lg italic text-cream">
            &ldquo;Almyr&rsquo;s music is a seamless fusion of nostalgia and
            contemporary flair. With his velvety vocals and emotive lyrics, he
            effortlessly transports listeners.&rdquo;
            <footer className="mt-2 text-sm not-italic uppercase tracking-[0.2em] text-cream-soft">
              &mdash; Certified Bop
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="mt-20">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          Portraits
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/portrait-chair-alt.jpg"
              alt="Almyr Jules studio portrait with guitar"
              width={800}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/portrait-noir.jpg"
              alt="Almyr Jules portrait in black"
              width={800}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/portrait-press.jpg"
              alt="Almyr Jules black and white press photo"
              width={799}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-2xl">
        <Image
          src="/images/candid-table.jpg"
          alt="Almyr Jules playing guitar"
          width={1800}
          height={1200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-20">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
          On Stage
        </p>
        <h2 className="mt-3 text-3xl font-light tracking-[0.05em] text-cream">
          Almyr Jules &amp; The Band
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/band-landscape.jpg"
              alt="Almyr Jules and band"
              width={1800}
              height={1159}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/band-portrait.jpg"
              alt="Almyr Jules and band, portrait"
              width={1212}
              height={1800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/band-group.jpg"
              alt="Almyr Jules and the full band"
              width={1800}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/live-festival-3.jpg"
              alt="Almyr Jules and band performing live at City Folk Fest"
              width={1800}
              height={1199}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

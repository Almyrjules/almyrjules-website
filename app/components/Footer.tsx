import Link from "next/link";
import {
  AppleMusicIcon,
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/app/components/icons";
import { NAV_LINKS, SOCIAL_LINKS } from "@/app/lib/site";

const SOCIALS = [
  { href: SOCIAL_LINKS.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: SOCIAL_LINKS.appleMusic, label: "Apple Music", Icon: AppleMusicIcon },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: TiktokIcon },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-line/60 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 text-center">
        <Link href="/" className="font-display text-lg tracking-[0.25em] text-cream">
          ALMYR <span className="text-gold">JULES</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-6">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream-soft transition-colors hover:text-gold"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-cream-soft">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs tracking-wide text-cream-soft/60">
          &copy; {new Date().getFullYear()} Almyr Jules. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import {
  AppleMusicIcon,
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/app/components/icons";
import { SOCIAL_LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Contact | Almyr Jules",
  description:
    "Get in touch with Almyr Jules for booking inquiries, press, or just to say hello.",
};

const SOCIALS = [
  { href: SOCIAL_LINKS.spotify, label: "Spotify", Icon: SpotifyIcon },
  { href: SOCIAL_LINKS.appleMusic, label: "Apple Music", Icon: AppleMusicIcon },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: TiktokIcon },
  { href: SOCIAL_LINKS.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-gold">
        Get In Touch
      </p>
      <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-cream-soft">
        Booking inquiries, press requests, collaborations, or just want to say
        hello? Send a message below.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <form
          action="https://formsubmit.co/almyrjules5@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input type="hidden" name="_subject" value="New message from almyrjules.ca" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="block text-sm uppercase tracking-[0.2em] text-cream-soft">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-cream outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm uppercase tracking-[0.2em] text-cream-soft">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-cream outline-none focus:border-gold"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-[0.2em] text-cream-soft">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg border border-charcoal-line bg-charcoal-soft px-4 py-3 text-cream outline-none focus:border-gold"
            />
          </div>

          <button
            type="submit"
            className="btn-gold rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal"
          >
            Send Message
          </button>
        </form>

        <div>
          <h2 className="font-display text-2xl text-cream">Find Almyr Online</h2>
          <p className="mt-4 text-cream-soft">
            Follow for new music, behind-the-scenes content, and show
            announcements.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-charcoal-line px-5 py-2.5 text-sm text-cream-soft transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

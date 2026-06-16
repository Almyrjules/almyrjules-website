"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/app/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-line/60 bg-charcoal/90 backdrop-blur supports-backdrop-filter:bg-charcoal/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-light tracking-[0.3em] text-cream"
          onClick={() => setOpen(false)}
        >
          ALMYR <span className="text-gold">JULES</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.15em] transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-cream-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-cream transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-charcoal-line/60 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm uppercase tracking-[0.15em] transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-cream-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

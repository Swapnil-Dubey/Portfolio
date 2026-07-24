"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlashlightToggle } from "./flashlight-toggle";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/case-studies/academic-os", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-text no-underline hover:no-underline"
        >
          Swapnil Dubey
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-5 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors no-underline hover:text-accent ${
                    pathname === href || (href !== "/" && pathname.startsWith(href.split("#")[0]))
                      ? "text-accent"
                      : "text-text-muted"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <FlashlightToggle />

          {/* Mobile menu button */}
          <MobileMenu pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="rounded-md p-1.5 text-text-muted transition-colors hover:text-text"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 right-0 top-full border-b border-border bg-bg px-6 py-4 space-y-3 text-sm">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block no-underline ${
                  pathname === href || (href !== "/" && pathname.startsWith(href.split("#")[0]))
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

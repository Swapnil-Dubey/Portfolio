import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Product case studies - a self-directed course planning tool, and a CPSC 344 team project that shipped a prototype and ran a usability study.",
};

const caseStudies = [
  {
    href: "/case-studies/academic-os",
    title: "Academic OS",
    quote:
      "Students don’t lack sources - they lack a single synthesized judgment they can trust.",
    summary:
      "A course planning tool that synthesizes what UBC CS students already look up separately. Self-directed: constructed research personas, with the synthesis, framing, and scope decisions as the work being shown.",
    meta: "Self-directed PM case study · 12 min read · July 2026",
  },
  {
    href: "/case-studies/ubc-arrival-guide",
    title: "The UBC Arrival Guide",
    quote:
      "Arrival information isn’t missing - it’s scattered, and asking publicly feels exposing.",
    summary:
      "A weekly newsletter email paired with an interactive task tracker for newly arrived international students. Five-person team, real participants, a deployed prototype, a ten-session usability study - and a critique of my own study design.",
    meta: "CPSC 344 team project · 15 min read · May – Aug 2026",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-24">
      <h1 className="mb-4">Case Studies</h1>
      <p className="text-text-muted text-sm leading-relaxed mb-16 max-w-[700px]">
        Longer write-ups of product work - how the problem was framed, what
        the research said, and which decisions went the other way and why.
      </p>

      <div className="space-y-4 max-w-[700px]">
        {caseStudies.map((cs) => (
          <Link
            key={cs.href}
            href={cs.href}
            className="group block rounded-lg border border-border p-6 md:p-8 no-underline hover:border-accent/40 transition-colors"
          >
            <h2 className="text-lg font-display font-normal mb-3 text-text group-hover:text-accent transition-colors">
              {cs.title}
            </h2>
            <blockquote className="text-text-muted italic text-sm leading-relaxed border-l-2 border-accent/40 pl-4 mb-4">
              &ldquo;{cs.quote}&rdquo;
            </blockquote>
            <p className="text-sm leading-relaxed mb-4">{cs.summary}</p>
            <p className="text-text-muted text-xs font-mono">{cs.meta}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

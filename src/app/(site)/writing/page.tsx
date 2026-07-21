import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Swapnil Dubey on product, data, and technology.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-[700px] px-6 py-16 md:py-24">
      <h1 className="mb-4">Writing</h1>
      <p className="text-text-muted text-sm leading-relaxed mb-16 max-w-[500px]">
        Posts on product thinking, data engineering, and things I&rsquo;m
        figuring out. Nothing here yet - check back soon.
      </p>

      <div className="rounded-lg border border-border border-dashed p-12 text-center">
        <p className="text-text-muted text-sm font-mono">
          First post coming soon.
        </p>
      </div>
    </div>
  );
}

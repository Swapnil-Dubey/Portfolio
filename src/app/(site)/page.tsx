export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 md:py-24">
      {/* ── Identity ── */}
      <section aria-labelledby="identity">
        <h1 id="identity" className="mb-3">
          Swapnil Dubey
        </h1>
        <p className="text-text-muted text-sm font-mono leading-relaxed">
          Computer Science + Statistics @ UBC&ensp;·&ensp;Incoming Technical
          Product Manager Intern @ Electronic Arts&ensp;·&ensp;Graduating May
          2027
        </p>

        <p className="mt-6 text-sm font-semibold text-accent">
          Open to new grad Product, Data and Engineering roles starting
          mid-2027. Based in Vancouver, BC - open to relocating within Canada.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="mailto:sdubey14@student.ubc.ca">Email</a>
          <a
            href="https://linkedin.com/in/swapnildub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/swapnil-dubey"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/Swapnil_EA_PM_Resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-[1080px] flex items-center justify-between text-sm text-text-muted">
        <span>&copy; {new Date().getFullYear()} Swapnil Dubey</span>
        <Link
          href="/terminal"
          className="text-text-muted no-underline hover:text-accent transition-colors font-mono text-xs"
        >
          ~/terminal
        </Link>
      </div>
    </footer>
  );
}

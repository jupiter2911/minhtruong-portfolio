import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
        404
      </p>
      <h2 className="mb-4 text-3xl font-bold text-foreground">
        Page not found
      </h2>
      <p className="mb-8 max-w-sm text-foreground/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}

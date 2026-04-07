import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import OrcidIcon from "@/components/ui/OrcidIcon";
import GoogleScholarIcon from "@/components/ui/GoogleScholarIcon";

export default function HeroSection() {
  const { profile, academicProfiles } = portfolioData;

  return (
    <section className="flex min-h-[60vh] items-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className="animate-in fade-in duration-700"
          style={{ animationFillMode: "both" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Medical Oncologist
          </p>
          <h1 className="mb-4 text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.title}
          </h1>
          <p className="mb-6 text-xl font-medium text-foreground/70 sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            {profile.bio}
          </p>

          {/* Academic profile links */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {academicProfiles.map((ap) => (
              <a
                key={ap.name}
                href={ap.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-foreground/15 bg-surface px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                {ap.icon === "orcid" && <OrcidIcon className="h-4 w-4" />}
                {ap.icon === "google-scholar" && (
                  <GoogleScholarIcon className="h-4 w-4" />
                )}
                {ap.name}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              Get in Touch
            </Link>
            <Link
              href="#publications"
              className="rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
            >
              View Publications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

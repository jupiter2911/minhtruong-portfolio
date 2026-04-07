import { portfolioData } from "@/data/portfolio";
import OrcidIcon from "@/components/ui/OrcidIcon";
import GoogleScholarIcon from "@/components/ui/GoogleScholarIcon";

export default function Footer() {
  const { profile, academicProfiles } = portfolioData;

  return (
    <footer className="border-t border-foreground/10 py-8 print:hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} {profile.title}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {academicProfiles.map((ap) => (
              <a
                key={ap.name}
                href={ap.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ap.name}
                className="text-foreground/40 transition-colors hover:text-foreground/80"
              >
                {ap.icon === "orcid" && <OrcidIcon className="h-5 w-5" />}
                {ap.icon === "google-scholar" && (
                  <GoogleScholarIcon className="h-5 w-5" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

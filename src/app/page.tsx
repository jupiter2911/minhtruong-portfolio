import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="animate-in fade-in duration-700">
            <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">
              {portfolioData.profile.title}
            </h1>
            <p className="mb-6 text-2xl font-semibold text-primary md:text-3xl">
              {portfolioData.profile.headline}
            </p>
            <p className="mb-8 max-w-2xl text-xl text-foreground/80">
              {portfolioData.profile.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Get in Touch
              </Link>
              <Link
                href="#publications"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                View Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About/Education Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 border-b-2 border-primary pb-4 text-4xl font-bold text-foreground">
            Education
          </h2>
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-lg bg-surface p-6 shadow-sm">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mb-3 text-lg font-semibold text-primary">
                    {edu.institution}
                  </p>
                  <p className="mb-4 text-foreground/70">{edu.period}</p>
                  {edu.details && edu.details.length > 0 && (
                    <ul className="list-inside list-disc space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-foreground/90">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Section */}
      <section className="bg-surface py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 border-b-2 border-primary pb-4 text-4xl font-bold text-foreground">
            Employment
          </h2>
          <div className="space-y-8">
            {portfolioData.employment.map((emp, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {emp.position}
                  </h3>
                  <p className="mb-3 text-lg font-semibold text-primary">
                    {emp.institution}
                  </p>
                  <p className="mb-4 text-foreground/70">{emp.period}</p>
                  <ul className="list-inside list-disc space-y-2">
                    {emp.description.map((desc, i) => (
                      <li key={i} className="text-foreground/90">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 border-b-2 border-primary pb-4 text-4xl font-bold text-foreground">
            Publications
          </h2>

          {/* Group by year */}
          {Array.from(
            new Set(portfolioData.publications.map((pub) => pub.year))
          )
            .sort((a, b) => b - a)
            .map((year) => (
              <div key={year} className="mb-12">
                <h3 className="mb-6 text-3xl font-bold text-primary">
                  {year}
                </h3>
                <div className="space-y-6">
                  {portfolioData.publications
                    .filter((pub) => pub.year === year)
                    .sort((a, b) => b.year - a.year)
                    .map((pub, index) => (
                      <div
                        key={index}
                        className="animate-in slide-in-from-left duration-700"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="rounded-lg bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                          <h4 className="mb-2 text-xl font-bold text-foreground">
                            {pub.link ? (
                              <Link
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                              >
                                {pub.title}
                              </Link>
                            ) : (
                              <>{pub.title}</>
                            )}
                          </h4>
                          <p className="mb-2 font-semibold text-foreground/90">
                            {pub.journal}
                          </p>
                          {pub.note && (
                            <p className="mb-2 text-accent">{pub.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-surface py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 border-b-2 border-accent pb-4 text-4xl font-bold text-foreground">
            Achievements
          </h2>
          <div className="space-y-8">
            {portfolioData.achievements.map((ach, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-right duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold text-white">
                      {ach.year}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {ach.title}
                    </h3>
                  </div>
                  <p className="mb-4 font-semibold text-primary">
                    {ach.organization}
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    {ach.description.map((desc, i) => (
                      <li key={i} className="text-foreground/90">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 border-b-2 border-primary pb-4 text-4xl font-bold text-foreground">
            Contact
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-foreground/80">{portfolioData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <Link
                    href={`tel:${portfolioData.contact.phone}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {portfolioData.contact.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <Link
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {portfolioData.contact.email}
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm text-white">
                  🎂
                </div>
                <div>
                  <p className="font-semibold text-foreground">Date of Birth</p>
                  <p className="text-foreground/80">{portfolioData.contact.dob}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm text-white">
                  🌍
                </div>
                <div>
                  <p className="font-semibold text-foreground">Nationality</p>
                  <p className="text-foreground/80">{portfolioData.contact.nationality}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm text-white">
                  🗣️
                </div>
                <div>
                  <p className="font-semibold text-foreground">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.contact.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-surface-dark px-3 py-1 text-sm text-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-8 text-center">
        <p className="text-foreground/70">
          © {new Date().getFullYear()} {portfolioData.profile.fullName}. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

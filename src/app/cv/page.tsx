import { portfolioData } from "@/data/portfolio";
import PrintButton from "@/components/ui/PrintButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `CV – ${portfolioData.profile.title}`,
  description: `Curriculum Vitae of ${portfolioData.profile.fullName}, Medical Oncologist.`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 border-b-2 border-primary pb-1 text-xl font-bold text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CVPage() {
  const { profile, contact, education, employment, publications, achievements, academicProfiles } =
    portfolioData;

  const sortedPubs = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-sm print:py-4">
      {/* Print button — hidden when printing */}
      <div className="mb-8 flex justify-end print:hidden">
        <PrintButton />
      </div>

      {/* Header */}
      <header className="mb-8 border-b border-foreground/15 pb-6">
        <h1 className="mb-1 text-3xl font-bold text-foreground">{profile.title}</h1>
        <p className="mb-3 text-base font-medium text-primary">{profile.headline}</p>
        <div className="flex flex-wrap gap-4 text-xs text-foreground/60">
          <span>{contact.address}</span>
          <span>·</span>
          <a href={`mailto:${contact.email}`} className="hover:text-primary">
            {contact.email}
          </a>
          <span>·</span>
          <a href={`tel:${contact.phone}`} className="hover:text-primary">
            {contact.phone}
          </a>
        </div>
        <div className="mt-2 flex gap-4 text-xs text-foreground/60">
          {academicProfiles.map((ap) => (
            <a key={ap.name} href={ap.url} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
              {ap.name}: {ap.url}
            </a>
          ))}
        </div>
      </header>

      {/* Education */}
      <Section title="Education">
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-foreground/70">{edu.institution}</p>
                </div>
                <span className="shrink-0 text-xs text-foreground/50">{edu.period}</span>
              </div>
              {edu.details && (
                <ul className="mt-1 list-inside list-disc text-xs text-foreground/60">
                  {edu.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Employment */}
      <Section title="Clinical Experience">
        <div className="space-y-4">
          {employment.map((job) => (
            <div key={job.position}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{job.position}</p>
                  <p className="text-foreground/70">{job.institution}</p>
                </div>
                <span className="shrink-0 text-xs text-foreground/50">{job.period}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section title="Awards & Achievements">
        <div className="space-y-3">
          {achievements.map((ach) => (
            <div key={ach.title}>
              <div className="flex items-start justify-between">
                <p className="font-semibold text-foreground">{ach.title}</p>
                <span className="shrink-0 text-xs text-foreground/50">{ach.year}</span>
              </div>
              <p className="text-xs text-primary">{ach.organization}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section title="Publications">
        <ol className="list-decimal space-y-4 pl-4">
          {sortedPubs.map((pub) => (
            <li key={pub.doi ?? pub.title} className="text-foreground/80">
              <span className="text-foreground/50">{pub.authors}. </span>
              <span className="font-medium text-foreground">{pub.title}. </span>
              <span className="italic">{pub.journal}</span>
              {". "}
              {pub.year}.
              {pub.doi && (
                <span className="ml-1 text-xs text-primary">
                  doi:{" "}
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {pub.doi}
                  </a>
                </span>
              )}
              {pub.note === "Corresponding author" && (
                <span className="ml-2 rounded bg-accent/15 px-1.5 py-0.5 text-xs font-medium text-accent">
                  Corresponding author
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}

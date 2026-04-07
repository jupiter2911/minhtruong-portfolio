import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <Card
              key={edu.degree}
              className="animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
              <p className="mt-1 font-medium text-primary">{edu.institution}</p>
              <p className="mt-1 text-sm text-foreground/60">{edu.period}</p>
              {edu.details && edu.details.length > 0 && (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
                  {edu.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

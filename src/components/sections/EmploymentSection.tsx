import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function EmploymentSection() {
  const { employment } = portfolioData;

  return (
    <section id="employment" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Clinical Experience</SectionHeading>
        <div className="space-y-6">
          {employment.map((job, i) => (
            <Card
              key={job.position}
              className="animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {job.position}
                  </h3>
                  <p className="mt-1 font-medium text-primary">
                    {job.institution}
                  </p>
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
                {job.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

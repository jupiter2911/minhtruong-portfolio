import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function AchievementsSection() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Achievements & Awards</SectionHeading>
        <div className="space-y-6">
          {achievements.map((ach, i) => (
            <Card
              key={ach.title}
              className="animate-in slide-in-from-right duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="flex flex-wrap items-start gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  {ach.year}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{ach.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {ach.organization}
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
                    {ach.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

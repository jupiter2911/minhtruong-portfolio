import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function ResearchSection() {
  const { researchInterests } = portfolioData;

  return (
    <section id="research" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Research Interests</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {researchInterests.map((interest, i) => (
            <Card
              key={interest.area}
              className="animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {interest.area}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                {interest.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {interest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import DOIBadge from "@/components/ui/DOIBadge";

function highlightAuthor(authors: string, keyword: string) {
  if (!keyword) return <span>{authors}</span>;
  const parts = authors.split(", ");
  return (
    <>
      {parts.map((part, i) => {
        const isHighlighted = part.toLowerCase().includes(keyword.toLowerCase());
        return (
          <span key={i}>
            {i > 0 && ", "}
            {isHighlighted ? (
              <strong className="font-semibold text-primary">{part}</strong>
            ) : (
              part
            )}
          </span>
        );
      })}
    </>
  );
}

const ALL_TAG = "All";

export default function PublicationsSection() {
  const { publications, profile } = portfolioData;
  const [activeTag, setActiveTag] = useState(ALL_TAG);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    publications.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
    return [ALL_TAG, ...Array.from(tags).sort()];
  }, [publications]);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return publications;
    return publications.filter((p) => p.tags?.includes(activeTag));
  }, [activeTag, publications]);

  const years = [...new Set(filtered.map((p) => p.year))].sort(
    (a, b) => b - a
  );

  return (
    <section id="publications" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Publications</SectionHeading>

        {/* Tag filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {years.map((year) => (
          <div key={year} className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-foreground/50">{year}</h3>
            <div className="space-y-4">
              {filtered
                .filter((p) => p.year === year)
                .map((pub, i) => (
                  <div
                    key={pub.doi ?? pub.title}
                    className="animate-in slide-in-from-left rounded-lg border border-foreground/8 bg-surface p-5 shadow-sm duration-700 transition-shadow hover:shadow-md"
                    style={{
                      animationDelay: `${i * 80}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Title */}
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-semibold leading-snug text-foreground sm:text-base">
                        {pub.link ? (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h4>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 shrink-0 text-foreground/40 transition-colors hover:text-primary"
                          aria-label="Open publication"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    {/* Journal + note */}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/60">
                      <span className="font-medium italic">{pub.journal}</span>
                      <span>·</span>
                      <span>{pub.year}</span>
                      {pub.note && (
                        <>
                          <span>·</span>
                          <span
                            className={`rounded px-1.5 py-0.5 font-medium ${
                              pub.note === "Corresponding author"
                                ? "bg-accent/15 text-accent"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {pub.note}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Authors */}
                    <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                      {highlightAuthor(pub.authors, profile.authorKeyword)}
                    </p>

                    {/* DOI badge + tags */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {pub.doi && pub.link && (
                        <DOIBadge doi={pub.doi} href={pub.link} />
                      )}
                      {pub.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/5 px-2 py-0.5 text-xs text-foreground/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-foreground/50">
            No publications found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}

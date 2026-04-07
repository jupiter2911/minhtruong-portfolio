import { MapPin, Phone, Mail, Globe, Languages } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
        aria-label={label}
      >
        <Icon size={16} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
          {label}
        </p>
        <div className="mt-0.5 text-sm text-foreground/80">{children}</div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Contact</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="space-y-5">
            <ContactRow icon={MapPin} label="Address">
              {contact.address}
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a
                href={`tel:${contact.phone}`}
                className="hover:text-primary transition-colors"
              >
                {contact.phone}
              </a>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
            </ContactRow>
          </Card>
          <Card className="space-y-5">
            <ContactRow icon={Globe} label="Nationality">
              {contact.nationality}
            </ContactRow>
            <ContactRow icon={Languages} label="Languages">
              <div className="mt-1 flex flex-wrap gap-2">
                {contact.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-surface-dark px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </ContactRow>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface DOIBadgeProps {
  doi: string;
  href: string;
}

export default function DOIBadge({ doi, href }: DOIBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-xs font-mono text-primary transition-colors hover:bg-primary/20"
      title={`DOI: ${doi}`}
    >
      <span className="font-semibold">DOI</span>
      <span className="hidden sm:inline">{doi}</span>
    </a>
  );
}

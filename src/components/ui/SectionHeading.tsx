interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mb-8 border-b-2 border-primary pb-3 text-2xl font-bold text-foreground sm:text-3xl"
    >
      {children}
    </h2>
  );
}

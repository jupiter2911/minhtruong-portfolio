export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl animate-pulse px-4 py-20 sm:px-6 lg:px-8">
      {/* Hero skeleton */}
      <div className="mb-16 space-y-4">
        <div className="h-4 w-32 rounded bg-foreground/10" />
        <div className="h-14 w-3/4 rounded bg-foreground/10" />
        <div className="h-6 w-1/2 rounded bg-foreground/10" />
        <div className="h-4 w-full max-w-xl rounded bg-foreground/10" />
        <div className="h-4 w-4/5 max-w-xl rounded bg-foreground/10" />
        <div className="mt-6 flex gap-4">
          <div className="h-11 w-32 rounded-lg bg-foreground/10" />
          <div className="h-11 w-40 rounded-lg bg-foreground/10" />
        </div>
      </div>

      {/* Section skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-12 space-y-4">
          <div className="h-8 w-48 rounded bg-foreground/10" />
          <div className="h-28 rounded-lg bg-foreground/10" />
          <div className="h-28 rounded-lg bg-foreground/10" />
        </div>
      ))}
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className = "", style }: CardProps) {
  return (
    <div
      className={`rounded-lg bg-surface p-6 shadow-sm ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

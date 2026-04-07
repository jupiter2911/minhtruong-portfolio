export default function GoogleScholarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Scholar"
    >
      <path d="M256 411.12L0 202.667 256 0l256 202.667z" fill="#4285F4" />
      <path d="M256 411.12l130.667-102.4V512H125.333V308.72z" fill="#356AC3" />
      <circle cx="256" cy="362.667" r="149.333" fill="#A0C3FF" />
      <path
        d="M121.143 197.333L256 295.467l134.857-98.134L512 298.667 256 512 0 298.667z"
        fill="#76A7FA"
      />
    </svg>
  );
}

export default function OrcidIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ORCID"
    >
      <circle cx="128" cy="128" r="128" fill="#A6CE39" />
      <path
        d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 183 93 133.3 93h-9v79.4zM88.7 56.8c0 5.5-4.5 9.9-9.9 9.9s-9.9-4.4-9.9-9.9 4.5-9.9 9.9-9.9 9.9 4.4 9.9 9.9z"
        fill="white"
      />
    </svg>
  );
}

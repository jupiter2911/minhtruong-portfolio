# Dr. Minh Trương Công — Academic Portfolio

Personal academic portfolio for **Dr. Minh Trương Công**, Medical Oncologist at K National Hospital, Hanoi. Built with Next.js 16, Tailwind CSS v4, and TypeScript.

## Features

- **Research Interests** — Thoracic oncology, breast oncology, real-world evidence
- **Publications** — 8 peer-reviewed publications (2021–2025) with DOI links, author list highlighting, and tag filtering
- **Achievements** — ASCO ICRS Award, TLCS Research Investigator Award
- **Academic Profiles** — ORCID and Google Scholar integration
- **CV Page** — Print-optimized CV at `/cv`
- **SEO** — Open Graph, Twitter Card, JSON-LD structured data, sitemap, robots.txt
- **Dark Mode** — Full dark mode support
- **Responsive** — Mobile-first with sticky navigation

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

```bash
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Data

All portfolio content is centralized in `src/data/portfolio.ts`. To update publications, education, achievements, or contact info, edit that single file.

## Deployment

Deployed automatically on [Vercel](https://vercel.com) on every push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jupiter2911/minhtruong-portfolio)

## License

© Minh Trương Công. All rights reserved.

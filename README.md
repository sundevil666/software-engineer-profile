# Serhii Tokmakov — Software Engineer Profile

Source code for a public, English-language portfolio and downloadable CV aimed
at international frontend recruiters. The site presents verified experience,
selected projects, technical skills, and contact channels without publishing
private ranking rules or NDA-protected client details.

## Stack

- Nuxt 3, Vue 3, and TypeScript
- SCSS
- Nitro server routes
- Playwright Core with serverless Chromium for PDF generation
- Vitest and ESLint

## Architecture

`content/profile.ts` is the typed source of truth shared by the portfolio,
the print-friendly `/resume` page, and the project-selection endpoint. Optional
project fields support live product, repository, and case-study URLs; the UI
renders only populated links.

The public application is split into:

```text
assets/       Shared visual system and responsive styles
components/   Reusable UI and protected contact components
config/       Public site metadata
content/      Typed, publishable profile content
layouts/      Portfolio shell and navigation
pages/        Portfolio and print-friendly resume
public/       Favicon, social image, and robots policy
server/       Sitemap, project selection, and PDF endpoint
tests/        Content and ranking tests
```

Private local materials belong in `.private/` and are ignored by Git. The
application never requires them to start.

## PDF generation

`GET /api/resume.pdf` renders `/resume` as a tagged A4 PDF with clickable
contact links. The endpoint:

- reuses one in-flight generation promise for concurrent requests;
- caches a successful PDF briefly in process memory;
- applies a navigation timeout and closes Chromium in `finally`;
- uses serverless Chromium on Linux and local Google Chrome on macOS.

Set `CHROME_PATH` only when Chrome/Chromium is outside the standard location.
The cache is intentionally process-local: it keeps the implementation simple
and is sufficient for a personal portfolio.

## Project ranking configuration

The PDF selects the first five public projects by default, so a fresh clone
works without private files. Ranking can be customized in either of two ways:

1. Set `RESUME_PROJECT_RANKING` to a JSON object.
2. Create the ignored file `.private/resume-project-ranking.json`.

Both formats use this safe example:

```json
{
  "limit": 2,
  "weights": { "target-stack": 5, "recent": 3 },
  "projects": {
    "project-id-one": { "signals": ["target-stack", "recent"] },
    "project-id-two": { "signals": ["target-stack"] }
  }
}
```

Every public project must be represented when custom ranking is enabled. Scores
and private decision criteria should not be committed. See `.env.example` for
the supported environment variables.

## Local development

Requirements:

- Node.js 22.12 or newer
- pnpm 10.18
- Google Chrome or compatible Chromium to generate the PDF locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Important routes:

- `/` — portfolio
- `/resume` — ATS-readable CV source
- `/api/resume.pdf` — downloadable PDF
- `/robots.txt` and `/sitemap.xml` — crawler metadata

No secret, private ranking file, or external service is required for a fresh
clone.

## Quality checks

```bash
pnpm lint       # ESLint
pnpm typecheck  # Nuxt/Vue TypeScript checks
pnpm test       # Vitest suite
pnpm build      # Production Nitro build
pnpm check      # All checks above
```

For PDF QA, download the generated file, inspect metadata and links with PDF
tools, and render every page to PNG with Poppler:

```bash
pdftoppm -png output/pdf/Serhii_Tokmakov_CV.pdf tmp/pdfs/resume
```

## Deployment

Build with `pnpm build` and deploy `.output/` to a Node-compatible Nuxt host.
Configure `PUBLIC_SITE_URL` with the canonical production origin when the PDF
renderer cannot infer it from the incoming request. Vercel's `VERCEL_URL` is
detected automatically.

Before publishing, verify the canonical URL and sitemap on the final domain.
Future professional contact addresses can be updated in `content/profile.ts`;
do not change the current email, GitHub username, or Telegram handle without
the profile owner's approval.

## Repository

The public source is available at
[github.com/sundevil666/software-engineer-profile](https://github.com/sundevil666/software-engineer-profile).

Do not commit secrets, client identities, private scoring criteria, or
NDA-protected information.

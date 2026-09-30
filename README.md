# Mohammed Benghanem — Portfolio

Bilingual (English / Français) portfolio built with Next.js 16, React 19 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — visitors are redirected to `/en` or `/fr` based on their browser language, and can switch with the EN / FR toggle.

## Edit content

All text lives in two files, one per language:

- `src/dictionaries/en.ts`
- `src/dictionaries/fr.ts`

Contact links, photo and CV path are in `src/dictionaries/index.ts` (`profile`).
Replace `public/profile.jpg` or `public/CV_MohammedBenghanem.pdf` to update the photo or CV.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). Set `NEXT_PUBLIC_SITE_URL` to your final domain so social previews use absolute URLs.

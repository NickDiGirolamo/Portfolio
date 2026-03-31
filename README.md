# Executive Brand Site

A premium one-page personal brand website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The current version is set up as an executive-forward showcase for a channel sales leader, go-to-market builder, and commercial operator.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Build For Production

```bash
npm run build
```

## Where To Edit Content

All of the editable site content lives in:

- `src/data/site-content.ts`

Update this file to change:

- name
- headline and subheadline
- hero stats
- results metrics
- executive summary copy
- experience timeline entries
- case studies
- strengths
- testimonials
- contact links

## Where To Change Styling

Global theme tokens and shared visual treatments live in:

- `src/app/globals.css`

Key areas to update there:

- base colors
- accent glow
- glass panel styling
- section spacing
- background gradients and grid texture

## Project Structure

- `src/app` app shell, metadata, page entrypoint, global styles
- `src/components/sections` page sections
- `src/components/ui` reusable UI primitives
- `src/data` centralized content/config
- `src/lib` helpers

## Notes

- The site is fully responsive and built as a flexible one-page architecture that can expand into multiple pages later.
- Placeholder copy is intentionally polished and structured for executive-brand positioning, but should be replaced with your actual experience and metrics.
- The headshot area is currently an abstract premium placeholder panel and can be swapped for a real image later.

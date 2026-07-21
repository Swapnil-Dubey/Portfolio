# Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX. Statically exported for Vercel deployment.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build   # Outputs to ./out (static export)
```

Deploy to Vercel by connecting the GitHub repo. Vercel auto-detects the Next.js framework and runs `next build`.

## How to add content

### Add a blog post

1. Create `src/app/(site)/writing/[slug]/page.tsx` with your post content, or set up MDX:
   - Create `src/content/writing/my-post.mdx` with frontmatter (title, date, description)
   - Create a dynamic route at `src/app/(site)/writing/[slug]/page.tsx` that reads MDX files
2. The post will appear at `/writing/my-post`

### Add a project

Edit the `projectGroups` array in `src/app/(site)/projects/page.tsx`. Each project has: `title`, `year`, `description`, `tags`, and an optional `github` link. Place it in the appropriate category group.

To feature a project on the homepage, add it to the `selectedProjects` array in `src/app/(site)/page.tsx` (max 3).

### Add a case study

1. Create a new directory: `src/app/(site)/case-studies/[slug]/page.tsx`
2. Follow the structure in `src/app/(site)/case-studies/academic-os/page.tsx`
3. Add a card for it in the Case Studies section of `src/app/(site)/page.tsx`

### Update the resume

1. Replace `public/Swapnil_EA_PM_Resume.pdf` with the new PDF
2. Update the HTML resume content in `src/app/(site)/resume/page.tsx`

## Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, theme, metadata)
    (site)/             # Route group with header/footer
      layout.tsx        # Site shell (header + footer)
      page.tsx          # Homepage
      case-studies/     # Case study pages
      projects/         # Projects page
      resume/           # HTML resume
      writing/          # Blog index
    terminal/           # Old terminal portfolio (easter egg)
  components/           # Shared components
  content/              # Source content files
public/                 # Static assets (resume PDF, robots.txt, sitemap)
```

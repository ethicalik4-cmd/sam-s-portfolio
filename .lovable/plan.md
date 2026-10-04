# Replace Selected Work with Savanna Spice, WanderLens, and a weather app

## What I'll build
- Replace the three current projects (Nexus Logistics, Ledger Finance, Orbit Workspace) with three new ones, using the images you uploaded:
  - **Savanna Spice** — restaurant website for a Lagos-based Nigerian kitchen.
  - **WanderLens** — travel and tours site.
  - **Weather app** — named **Clime** (my choice; happy to rename).
- Bring images back into the Selected Work section: each entry shows its project image, title, kicker, description, tech tags, and a case-study link.
- Give each new project a full case-study page (overview, challenge, solution, technologies, measured outcomes, next-project link), written in the same style as the current ones — realistic sample content.
- Update page metadata (titles, descriptions) so the case-study pages match the new projects.

## Content and scope
- Content stays in the typed data module (`src/lib/projects.ts`), so home cards and case-study routes remain synchronized.
- Old project data, images, and case-study content are removed entirely — no leftovers linking to Nexus/Ledger/Orbit.
- Presentation-only: no backend changes.

## Technical details
- Upload the three screenshots from chat as Lovable Assets pointers in `src/assets/` (`savanna-spice.png`, `wanderlens.png`, `clime.png`) and reference the pointer URLs — no binaries in the repo.
- Delete the old `project-nexus.jpg`, `project-ledger.jpg`, `project-orbit.jpg` files.
- Rewrite `src/lib/projects.ts`: three new `Project` entries with slugs, numbers, kickers, descriptions, images, accents (amber for Savanna Spice, gold/sand for WanderLens, slate/cyan for Clime), technologies, challenge, solution, and outcomes.
- Update the Selected Work layout in `src/routes/index.tsx` to render the project image in each entry again.
- `src/routes/projects.$slug.tsx` already renders whatever project data exists, so it needs only metadata wording checks — no structural change.
- Validate: build passes, homepage Selected Work shows the three new entries with images, each case-study page renders end-to-end, no dead links to old slugs.

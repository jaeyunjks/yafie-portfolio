# ADR 0001: Shared building blocks for new case studies

- **Status:** Accepted
- **Date:** 2026-11-25
- **Context owner:** Yafie

## Context
Four case studies (SDS, FocusPop, Lumora, FreshBasket) are hand-built: about
4,000 lines of components, each with its own copy of the same section header,
card grid and step-flow markup. Adding HOMS the same way would make a fifth copy.
Each copy is a place for styling to drift and for stale claims to hide (see the
SDS "Present" bug, which survived because the same fact was typed in four places).

## Options
1. **Hand-build HOMS like the others.** Fastest today; adds ~600 more lines of
   duplicated markup.
2. **Build a full case-study template and migrate all five.** Removes the most
   duplication, but rewrites four working, already-reviewed pages in one go.
   That's a big diff for little user-visible gain right now.
3. **Extract a few small shared building blocks, use them for HOMS only, and
   migrate old pages later, one at a time.** *(chosen)*

## Decision
Option 3. Add `src/components/sections/case-studies/shared/` with
`CaseSection`, `CardGrid`, `FlowSteps` and `StatRow`, styled to match the
existing pages. The HOMS page is composed from these plus a data file
(`src/data/caseStudies/homs.ts`). Existing case studies are left unchanged.

This follows the "rule of three": with five case studies, the repeated pattern
is clear enough to extract, but extracting doesn't require rewriting everything
at once.

## Consequences
- HOMS is mostly data plus composition, so it's quick to review and to correct.
- There are now two styles of case study in the codebase. Migrating an old page
  is a follow-up, done as its own small PR when that page next needs changes.
- If a building block needs a variant only one page uses, add a prop rather than
  forking the component.

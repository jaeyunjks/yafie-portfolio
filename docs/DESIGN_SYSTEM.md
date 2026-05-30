# Design System - Yafie Portfolio

## Colour Palette
- Background: `#f4f7ff` to `#eef3ff`
- Surface/Card: translucent white with cool-grey borders
- Text Primary: slate-900 range
- Text Secondary: slate-600 range
- Accent: subtle blue and lavender gradients

## Typography
- Primary font: Geist Sans
- Monospace: Geist Mono (for snippets)
- Hierarchy: bold display headlines, readable body text, compact labels

## Spacing
- Section rhythm: large vertical spacing (`mb-16` to `mb-24`)
- Card padding: `p-6`
- Button spacing: medium density with rounded edges

## Card Styles
- Frosted glass effect
- Rounded 2xl corners
- Soft border and shadow
- Minimal hover lift

## Button Styles
- Primary: dark solid with soft hover raise
- Secondary: bordered white surface style
- Rounded-xl with concise typography

## Animation Principles
- Use subtle reveal-on-scroll for content sections
- Keep motion durations short and calm
- Avoid distracting loops except gentle ambient background and code float

## Component Rules
- Reuse shared `Button`, `Card`, `Badge`, and `SectionHeader`
- Keep content in data files where possible
- Prefer semantic HTML and keyboard-friendly interactions
- Do not use heavy animation that competes with content

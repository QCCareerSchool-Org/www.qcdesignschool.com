# Agent Notes

## Project Style

- Prefer Bootstrap and existing site utilities before adding CSS module styles.
- Use built-in classes for layout, typography, spacing, color, flex/grid, buttons, and responsive behavior wherever practical.
- Add CSS module styles only when Bootstrap or the existing site system does not cover the need.
- For page sections, prefer the standard structure:

```tsx
<section>
  <div className="container">
    <div className="row">
      <div className="col-*">
```

- Let the app's global `section` spacing handle the standard vertical rhythm. Do not add custom section padding by default.
- Use `.row` and `.col-*` to center or constrain content width instead of adding custom wrapper classes.
- If a whole dark section needs white text, apply `text-white` at the section or container level instead of setting `color` in a CSS module.
- Avoid unnecessary `:global` selectors in CSS modules. Prefer adding a local class to the element that needs styling.
- Use the codebase's component declaration style:

```tsx
export const ComponentName: FC<Props> = props => (
```

- For responsive button rows, prefer simple Bootstrap patterns such as:

```tsx
d-flex flex-column flex-sm-row justify-content-center gap-3
```

- If a semantic CSS module class exists, keep its related styling together. For example, if `.eyebrow` exists, include its uppercase, font weight, letter spacing, color, and margin in that class rather than splitting the treatment across utility classes and the module.
- Match provided mockups closely before embellishing. Do not add images or treatments that are not present in the design.
- Preserve provided marketing/source-document copy exactly unless the task explicitly asks for rewriting. This applies especially to campaign sections, comparison tables, headings, CTAs, and legal or pricing language.
- When SVG icons are used as a set, normalize their `viewBox` values so they visually fill the same rendered space.
- For page-specific sections, local components beside the route are appropriate.
- For reusable components, keep the generic rendering primitive in `index.tsx` and export its public types there when needed.
- Put baked-in content variants in sibling files named for the variant, such as `careerPaths.tsx`, and compose them from the generic primitive.
- Prefer importing shared component types from the component folder barrel/current directory, for example `import type { ComparisonTableColumn, ComparisonTableRow } from '.';`.
- When fixed campaign content is large or likely to be reused, prefer a baked-in variant; for small one-off cases, it is fine for the page or local section to pass data to the generic primitive directly.
- If a section needs a reusable rendering pattern plus fixed campaign content, place the generic primitive in `src/components/<component>/index.tsx` and the baked-in variant in a sibling file like `careerPaths.tsx`.

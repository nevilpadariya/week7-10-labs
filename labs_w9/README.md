# Week 9 Lab Bundle – Figma → Tokens & Accessibility

This bundle contains files for the Week 9 lab on exporting tokens from Figma, mapping them into React/MUI, and fixing accessibility issues.

## Files
- `tokens_before.json`: Example of inaccessible color tokens (fails WCAG AA contrast).
- `tokens_after.json`: Corrected accessible tokens (passes WCAG AA contrast).
- `theme.ts`: Sample React theme file showing how to map tokens into MUI's `createTheme`.
- `README.md`: This guide.

## Workflow
1. Open `tokens_before.json` to see failing colors (low contrast grays).
2. Replace with `tokens_after.json` in your React project for accessible colors.
3. Use `theme.ts` as a reference for mapping tokens into your MUI theme.
4. Run Lighthouse/axe DevTools to confirm accessibility fixes.

---
**Deliverables for Students:**
- Updated `tokens.json` with accessible palette.
- Before/After accessibility audit screenshots.
- Short reflection write-up.


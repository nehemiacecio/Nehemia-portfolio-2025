# UI Improvement Requirements

## 1) Layout Adjustment, Sizing, and Mobile Responsiveness

Improve the overall UI layout consistency across all screens and ensure the website works well on mobile devices.

**Scope:**

- Fix spacing issues (padding/margin) and alignment inconsistencies
- Standardize component sizing (buttons, inputs, cards, sections)
- Ensure responsive layouts for:
  - Desktop
  - Tablet
  - Mobile (down to ~360px width)
- Prevent UI overflow and broken layout:
  - Long text handling (wrap/ellipsis)
  - Wide elements (tables, images, sliders)
  - Modal and popup scaling
- Improve navigation usability on mobile:
  - Collapsible menu / simplified header
  - Touch-friendly buttons and spacing

**Acceptance Criteria:**

- No unexpected horizontal scrolling on mobile (unless intentionally designed)
- UI components maintain consistent alignment across main pages
- Slider/timeline interaction remains usable on mobile (swipe support)

---

## 2) Dark Mode / Light Mode

Add theme switching so users can choose between **Light** and **Dark** mode.

**Scope:**

- Provide theme toggle control (header or settings)
- Apply theme consistently across:
  - Backgrounds, text, cards, borders
  - Buttons and hover states
  - Timeline/stage selector UI
- Persist user preference:
  - Save selection (local storage or user profile)
  - Default to system preference (optional)

**Acceptance Criteria:**

- Theme toggle works instantly without layout breaking
- All screens maintain readable contrast in both modes
- Theme preference is remembered after refresh

---

## 3) Visibility and Readability

Improve the clarity of UI so content is easy to read and important items stand out.

**Scope:**

- Ensure proper contrast between text and background (especially in dark mode)
- Improve typography:
  - Clear font sizes (mobile-friendly)
  - Consistent heading hierarchy (H1/H2/body)
  - Balanced line-height and spacing
- Improve readability of timeline content:
  - Avoid cluttered cards
  - Highlight key achievements clearly
  - Advice section should be easy to scan (bullets, icons, emphasis)
- Add clear states:
  - Loading / empty / error states
  - Focus states for keyboard navigation (accessibility)

**Acceptance Criteria:**

- Users can read content comfortably without zooming on mobile
- Key information is easy to scan (month title, highlight, advice)
- No low-contrast text that blends into backgrounds

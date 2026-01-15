```md
# Personal 2025 Timeline Website — Requirement Draft (Palette + Retro Game Vibe)

## Goal
Build a personal website that showcases what I’ve done throughout **2025** as a **January → December timeline**.  
The site should feel modern but with a **retro arcade / pixel-game vibe** (like a classic 2D fighting/platform game UI), using **animations and slider-style navigation**, and it should also **provide advice/insights** based on each timeline entry.

> Note: The year in the original request was written as **“2925”**, but the timeline scope is **January–December 2025**.

---

## Core Features

### 1) Timeline (Jan–Dec 2025)
- The website displays a monthly timeline from **January 2025** to **December 2025**
- Each month contains:
  - Title / heading (main achievement or highlight)
  - Short description of what I did
  - Media (optional): images, screenshots, links, files, videos
  - Tags (optional): Work / Project / Personal / Learning / Travel / etc.

### 2) Slider-Based Experience
- Users can navigate the timeline using a **slider** interaction:
  - Horizontal slide (preferred), one month per slide
  - Support:
    - Mouse drag
    - Touch swipe (mobile)
    - Arrow keys (desktop)
    - Next/Prev buttons
- Optional: A mini “month indicator” or “timeline bar” for quick jumping.

### 3) Rich Animations
The site should feel alive and premium with smooth animations:
- Page transitions between months (fade/slide/parallax)
- Animated elements on entry (text reveal, card pop-in, image fade-in)
- Scroll-triggered or slide-triggered animations
- Micro-interactions:
  - Hover effects
  - Button feedback
  - Progress indicator animation

### 4) Advice / Insights Section
For each month (or each major highlight), the site provides advice such as:
- Lessons learned
- What I would do differently
- Recommendations for others (tools, habits, workflow, etc.)
- Summary insight at the end of the year (overall growth + patterns)

---

## Pages / Sections

### A) Landing / Intro
- Site title: “My 2025 Journey” (example)
- Short intro text: who I am + what this site contains
- CTA: “Start the Timeline” button
- Optional: quick stats (projects completed, milestones, certifications, etc.)

### B) Timeline View (Main)
- The core slider timeline (Jan–Dec)
- Each month is a slide with:
  - Highlight card(s)
  - Media preview
  - Advice panel

### C) Year Summary (End Slide or Separate Section)
- Key achievements of the year
- Biggest challenges + how I handled them
- Skills improved
- Next-year focus (2026 goals)

### D) Optional Extras
- “Filter by category” (Work / Learning / Personal)
- Search within the timeline
- Downloadable PDF summary
- Shareable month link (deep linking)

---

## UI / UX Requirements
- Fully responsive (desktop, tablet, mobile)
- Clean layout, readable typography
- Smooth performance (animations should not lag)
- Support Light/Dark mode (optional but recommended)
- Accessibility basics:
  - Keyboard navigation
  - Reasonable contrast
  - Focus states for interactive elements

---

## Visual Theme — Color Palette (Mandatory)
Use this palette consistently across the site (backgrounds, buttons, highlights, accents, charts, etc.):

- **Primary (Teal):** `#3F9AAE`
- **Secondary (Mint):** `#79C9C5`
- **Base (Cream):** `#FFE2AF`
- **Accent (Coral):** `#F96E5B`

### Suggested Usage
- **Background:** `#FFE2AF` (main page background)  
- **Primary UI / Headers:** `#3F9AAE`  
- **Cards / Sub sections / Soft accents:** `#79C9C5`  
- **Buttons / Highlights / CTA / Alerts:** `#F96E5B`  

---

## Retro Game Vibe (Mandatory Style Direction)

### Overall Art Direction
The site should look and feel like a **retro arcade game UI**:
- Pixel / arcade-inspired typography (or font styling)
- HUD-like interface elements (frames, panels, counters, badges)
- “Stage select” or “level select” vibe for monthly navigation
- Retro effects: scanlines, glow outlines, pixel borders (subtle, not overwhelming)

### UI Elements Inspired by Retro Games
- **Top HUD bar**:
  - “PLAYER” / “TIME” / “YEAR 2025” style counters (for fun UI)
  - Month indicator like “STAGE: JAN”
- **Timeline navigation**:
  - Stage selector with 12 stages (Jan–Dec)
  - Progress bar resembles an energy bar / health bar
- **Cards/panels**:
  - Pixel-like borders, chunky frames, inner shadows
  - “Quest Log” look for descriptions

### Animations (Retro Feel)
- Slide transitions like “stage change”
- Text reveal like “type-in” or “pixel pop-in”
- Button click feels like arcade input (bounce, glow, sound optional)
- Optional: small particle effects (sparkle/pixel burst) on hover/CTA

### Optional Audio (If Allowed)
- Tiny click/confirm sounds for buttons (user can toggle sound ON/OFF)
- Keep it subtle and not annoying

---

## Suggested Tech (Optional)
- **Next.js** (or React) for app structure
- Animation libraries (choose one):
  - Framer Motion (recommended for React)
  - GSAP (advanced motion)
- Slider library (if needed):
  - Swiper.js / Embla Carousel
- TailwindCSS for fast styling (optional)

---

## Content Needed From Me
To fill the timeline, I will provide for each month:
- Month title
- Short description (what I did)
- Key outcomes/results (if any)
- Optional: images/screenshots/links
- Optional: “advice” or “lesson learned” bullet points

---

## Success Criteria
- Timeline covers all months from **Jan–Dec 2025**
- Slider navigation works smoothly on desktop and mobile
- Animations enhance the experience without harming performance
- Advice/insights are clearly visible and meaningful
- Palette is applied consistently across the entire website
- Retro arcade vibe is visible in UI (HUD, stage navigation, panels, effects)
- Site feels polished and shareable (portfolio-ready)
```

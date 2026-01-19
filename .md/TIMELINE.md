# Slide Presentation Starter Kit

A modern, professional slide-based presentation website built with React + Vite.

---

## Quick Start

```bash
# Create new project
npm create vite@latest my-presentation --template react
cd my-presentation
npm install

# Copy the App.jsx and App.css from this starter kit
# Add your logo to src/assets/images/
# Run development server
npm run dev
```

---

## Design System

### Color Palette

```css
:root {
  /* Base Colors */
  --color-dark: #323232;        /* Dark gray - primary background */
  --color-black: #000000;       /* Pure black */
  --color-white: #FFFFFF;       /* Pure white */
  --color-light-gray: #E2E2E2;  /* Light gray - cards, sections */
  --color-gray: #ABAAAA;        /* Medium gray - secondary text */
  --color-off-white: #EFEFED;   /* Off white - subtle backgrounds */
  --color-mint: #E1EEE6;        /* Mint green - accents, highlights */

  /* Accent Colors */
  --color-red: #FA3246;         /* Primary accent - CTAs, active states */
  --color-pink: #FE7684;        /* Secondary accent */
  --color-green: #00CE93;       /* Success, positive */
  --color-blue: #327FFA;        /* Info, links */
  --color-purple: #C370FE;      /* Creative, AI-related */
}
```

### Typography

**Font Family:** DM Sans (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
```

**Font Sizes:**
| Element | Size | Weight |
|---------|------|--------|
| Hero Title | clamp(2.5rem, 6vw, 5rem) | 700 |
| Section Title | clamp(1.5rem, 3vw, 2.5rem) | 700 |
| Subtitle | clamp(1.25rem, 2.5vw, 2rem) | 400 |
| Body | 1rem (16px) | 400 |
| Small | 0.85rem | 400 |
| Caption | 0.8rem | 400 |

**Letter Spacing:** -0.03em for headings

---

## Component Library

### 1. Slide Container

```jsx
<div className="slide slide-{name}">
  <div className="slide-bg">
    {/* Background elements */}
  </div>
  <div className="slide-content">
    {/* Content */}
  </div>
</div>
```

```css
.slide {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.slide-content {
  width: 100%;
  max-width: 1200px;
  padding: 60px 80px;
  position: relative;
  z-index: 1;
}

.slide-content.centered {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

### 2. Floating Circles (Background Decoration)

```jsx
<div className="slide-bg">
  <div className="circle circle-1"></div>
  <div className="circle circle-2"></div>
  <div className="circle circle-3"></div>
  <div className="circle circle-4"></div>
</div>
```

```css
.circle {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 80px;
  height: 80px;
  background: var(--color-red);
  top: 70%;
  right: 25%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  background: var(--color-red);
  top: 55%;
  right: 15%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

### 3. Card Grid

```jsx
<div className="card-grid">
  <div className="card">
    <div className="icon-circle icon-red"></div>
    <h3>Title</h3>
    <h4>Subtitle</h4>
    <p>Description text</p>
  </div>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.card {
  background: var(--color-white);
  padding: 30px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.icon-red { background: var(--color-red); }
.icon-pink { background: var(--color-pink); }
.icon-green { background: var(--color-green); }
.icon-gray { background: var(--color-gray); }
```

### 4. Bubble Visualization

```jsx
<div className="bubbles">
  <div className="bubble bubble-large"><span>Label</span></div>
  <div className="bubble bubble-medium"><span>Label</span></div>
  <div className="bubble bubble-small"><span>Label</span></div>
</div>
```

```css
.bubbles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.bubble {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  color: var(--color-black);
  animation: pulse 3s ease-in-out infinite;
}

.bubble-large { width: 160px; height: 160px; }
.bubble-medium { width: 130px; height: 130px; }
.bubble-small { width: 110px; height: 110px; }

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### 5. Project Badge

```jsx
<div className="project-header">
  <span className="badge badge-green">Label</span>
  <h2 className="section-title">Title</h2>
</div>
```

```css
.badge {
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-black);
}

.badge-green { background: var(--color-green); }
.badge-purple { background: var(--color-purple); }
.badge-red { background: var(--color-red); }
.badge-blue { background: var(--color-blue); }
```

### 6. Numbered Highlights

```jsx
<div className="highlights">
  <div className="highlight-item">
    <span className="number">1</span>
    <div>
      <p className="highlight-title">Title</p>
      <p className="highlight-desc">Description</p>
    </div>
  </div>
</div>
```

```css
.highlights {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.highlight-item .number {
  width: 32px;
  height: 32px;
  background: var(--color-dark);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.highlight-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 4px;
}

.highlight-desc {
  font-size: 0.85rem;
  color: var(--color-dark);
  line-height: 1.5;
}
```

### 7. Two-Column Layout

```jsx
<div className="two-column">
  <div className="column-left">
    {/* Content */}
  </div>
  <div className="column-right">
    {/* Content */}
  </div>
</div>
```

```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

@media (max-width: 1024px) {
  .two-column {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

### 8. Mockup Placeholders

```jsx
{/* Desktop + Mobile Mockup */}
<div className="mockup-container">
  <div className="mockup desktop"></div>
  <div className="mockup mobile"></div>
</div>

{/* Single Mockup with Gradient */}
<div className="mockup-gradient purple"></div>
```

```css
.mockup-container {
  position: relative;
  width: 100%;
  max-width: 450px;
}

.mockup {
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.mockup.desktop {
  width: 100%;
  height: 260px;
  background: linear-gradient(135deg, var(--color-off-white) 0%, var(--color-light-gray) 100%);
}

.mockup.mobile {
  position: absolute;
  right: -20px;
  bottom: -30px;
  width: 90px;
  height: 160px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--color-white) 0%, var(--color-off-white) 100%);
}

.mockup-gradient {
  width: 100%;
  max-width: 450px;
  height: 300px;
  border-radius: 16px;
}

.mockup-gradient.purple {
  background: linear-gradient(135deg, var(--color-purple) 0%, #8B5CF6 100%);
  box-shadow: 0 10px 40px rgba(195, 112, 254, 0.3);
}

.mockup-gradient.red {
  background: linear-gradient(135deg, var(--color-red) 0%, #E02040 100%);
  box-shadow: 0 10px 40px rgba(250, 50, 70, 0.3);
}
```

---

## Slide Animations

### Slide Transitions

```css
.slide-container {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
}

.slide-container.animating-next {
  animation: slideInFromRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-container.animating-prev {
  animation: slideInFromLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInFromRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInFromLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

---

## Navigation Components

### Arrow Buttons

```jsx
<button className="nav-arrow nav-prev">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
</button>
<button className="nav-arrow nav-next">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,6 15,12 9,18"></polyline>
  </svg>
</button>
```

```css
.nav-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 100;
  color: var(--color-white);
}

.nav-arrow:hover:not(.disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.nav-prev { left: 30px; }
.nav-next { right: 30px; }
```

### Dot Indicators

```jsx
<div className="indicators">
  {slides.map((_, index) => (
    <button
      key={index}
      className={`indicator ${index === current ? 'active' : ''}`}
      onClick={() => goToSlide(index)}
    />
  ))}
</div>
```

```css
.indicators {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 100;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.2);
}

.indicator.active {
  background: var(--color-red);
  transform: scale(1.2);
}
```

### Slide Counter

```jsx
<div className="counter">
  <span className="current">01</span>
  <span className="separator">/</span>
  <span className="total">09</span>
</div>
```

```css
.counter {
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  z-index: 100;
}

.counter .current {
  color: var(--color-white);
  font-weight: 700;
}
```

### Navigation Menu

```jsx
<nav className="slide-nav">
  {slides.map((slide, index) => (
    <button
      key={index}
      className={`nav-item ${index === current ? 'active' : ''}`}
      onClick={() => goToSlide(index)}
    >
      {slide.title}
    </button>
  ))}
</nav>
```

```css
.slide-nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.nav-item {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  color: var(--color-white);
  background: var(--color-red);
}
```

---

## React Hooks for Navigation

```jsx
import { useState, useEffect, useCallback } from 'react';

function useSlideNavigation(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return;
    if (index < 0 || index >= totalSlides) return;

    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentSlide(index);

    setTimeout(() => setIsAnimating(false), 500);
  }, [currentSlide, isAnimating, totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Mouse wheel navigation
  useEffect(() => {
    let wheelTimeout;
    const handleWheel = (e) => {
      if (wheelTimeout) return;
      wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 800);

      if (e.deltaY > 0) nextSlide();
      else if (e.deltaY < 0) prevSlide();
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch navigation
  useEffect(() => {
    let touchStartX = 0, touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      const diffY = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        diffX > 0 ? nextSlide() : prevSlide();
      } else if (Math.abs(diffY) > 50) {
        diffY > 0 ? nextSlide() : prevSlide();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  return { currentSlide, isAnimating, direction, goToSlide, nextSlide, prevSlide };
}
```

---

## Slide Templates

### Template 1: Hero/Title Slide

```jsx
const HeroSlide = ({ title, subtitle, tagline, date, logo }) => (
  <div className="slide slide-hero">
    <div className="slide-bg">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
    </div>
    <div className="slide-content">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className="hero-info">
        <p className="hero-tagline">{tagline}</p>
        <p className="hero-date">{date}</p>
      </div>
    </div>
    {logo && <img src={logo} alt="Logo" className="hero-logo" />}
  </div>
);
```

### Template 2: Split Layout

```jsx
const SplitSlide = ({ leftContent, rightContent, bgColor }) => (
  <div className="slide" style={{ background: bgColor }}>
    <div className="slide-content">
      <div className="two-column">
        <div className="column-left">{leftContent}</div>
        <div className="column-right">{rightContent}</div>
      </div>
    </div>
  </div>
);
```

### Template 3: Card Grid

```jsx
const CardGridSlide = ({ title, cards }) => (
  <div className="slide slide-cards">
    <div className="slide-content">
      <h2 className="section-title">{title}</h2>
      <div className="card-grid">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <div className={`icon-circle icon-${card.color}`}></div>
            <h3>{card.title}</h3>
            <h4>{card.subtitle}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
```

### Template 4: Project Detail

```jsx
const ProjectSlide = ({ badge, badgeColor, title, highlights, mockupType }) => (
  <div className="slide slide-project">
    <div className="slide-content">
      <div className="project-header">
        <span className={`badge badge-${badgeColor}`}>{badge}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="two-column">
        <div className="highlights">
          {highlights.map((item, i) => (
            <div key={i} className="highlight-item">
              <span className="number">{i + 1}</span>
              <div>
                <p className="highlight-title">{item.title}</p>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`mockup-gradient ${mockupType}`}></div>
      </div>
    </div>
  </div>
);
```

### Template 5: Quote/Thank You

```jsx
const QuoteSlide = ({ quote, author }) => (
  <div className="slide slide-quote">
    <div className="slide-bg">
      <div className="circle circle-q1"></div>
      <div className="circle circle-q2"></div>
    </div>
    <div className="slide-content centered">
      <blockquote className="quote">"{quote}"</blockquote>
      <p className="quote-author">{author}</p>
    </div>
  </div>
);
```

---

## File Structure

```
my-presentation/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

---

## Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1025px) { }

/* Tablet */
@media (max-width: 1024px) {
  .slide-content { padding: 40px 60px; }
  .card-grid { grid-template-columns: repeat(2, 1fr); }
  .two-column { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 768px) {
  .slide-content { padding: 30px 40px; }
  .slide-nav { display: none; }
  .card-grid { grid-template-columns: 1fr; }
}

/* Small Mobile */
@media (max-width: 480px) {
  .slide-content { padding: 20px 24px; }
}
```

---

## Usage Example

```jsx
const slides = [
  { id: 1, component: HeroSlide, title: 'Home' },
  { id: 2, component: AgendaSlide, title: 'Agenda' },
  { id: 3, component: ReviewSlide, title: 'Review' },
  { id: 4, component: ProjectsSlide, title: 'Projects' },
  { id: 5, component: ThankYouSlide, title: 'Thank You' }
];

function App() {
  const { currentSlide, isAnimating, direction, goToSlide, nextSlide, prevSlide } =
    useSlideNavigation(slides.length);

  const CurrentSlide = slides[currentSlide].component;

  return (
    <div className="presentation">
      <div className={`slide-container ${isAnimating ? `animating-${direction}` : ''}`}>
        <CurrentSlide />
      </div>
      {/* Navigation components */}
    </div>
  );
}
```

---

## License

MIT - Free to use and modify for personal and commercial projects.

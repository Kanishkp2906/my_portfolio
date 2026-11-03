# Design System

<!-- This documents the visual language for the Kanishk Prasad portfolio. Generated from the built world. -->

## Direction Contract

**THESIS:** A backend engineer's portfolio that feels like a well-crafted CLI — precise, responsive, and revealing depth on interaction. Refuses the standard "hero + cards" template; instead uses a terminal-inspired spatial system where content emerges through deliberate disclosure.

**OWN-WORLD:**
- Palette: Near-black base (`#0A0A0F`), elevated surfaces (`#14141E`), subtle borders (`#2A2A3E`), accent `#A79DFD` (lavender) for primary actions, `#E8E8F0` for primary text, `#888899` for muted text
- Typography: Geist Mono for UI/chrome (technical precision), Geist for body, Playfair Display for accent headlines (human warmth in technical context)
- Materials: Translucent layers with `backdrop-filter: blur(20px) saturate(180%)`, subtle inner glows on cards, no heavy shadows
- Motion: Critically damped springs (damping 1.0, response 0.35) for UI transitions; slight bounce (damping 0.8) only on momentum-driven interactions
- Grid: 12-column fluid grid with `clamp()` sizing, consistent 8px base unit

**STORY:** Visitor lands → sees name and claim immediately → scroll reveals technical depth progressively → each project shows architecture, not just stack → CTA feels inevitable, not aggressive.

**FIRST VIEWPORT:**
- Fixed translucent nav at top (blurred, shows scroll depth)
- Centered headline: "Kanishk Prasad" in Playfair, "Backends that scale, AI that ships." in Geist Mono
- Two CTAs: Resume (primary), View Work (outline) — both with instant press feedback
- Subtle animated grid backdrop (reduced-motion: static)
- No hero image — the type *is* the hero

**FORM:** Terminal-inspired disclosure system. Content blocks are "frames" that slide up on scroll intersection with spring motion, staggered. Project cards reveal detail on hover/focus (desktop) or tap (mobile) — no navigation away.

**SEED REFERENCE:** `seed: manual (designed without concept-seed roll)`

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

---

## Color System

```css
:root {
  /* Base - near black with subtle blue bias */
  --bg-deep: #0A0A0F;
  --bg-base: #0F0F16;
  --bg-elevated: #14141E;
  --bg-overlay: #1A1A24;

  /* Borders & dividers */
  --border-subtle: #1E1E2A;
  --border-default: #2A2A3E;
  --border-strong: #3A3A4E;

  /* Text */
  --fg-primary: #E8E8F0;
  --fg-secondary: #B8B8CC;
  --fg-muted: #787888;
  --fg-inverted: #0A0A0F;

  /* Accent - lavender family */
  --accent: #A79DFD;
  --accent-dim: #8B7FE8;
  --accent-soft: #A79DFD20;
  --accent-glow: #A79DFD40;

  /* Semantic */
  --success: #34D399;
  --warning: #FBBF24;
  --error: #F87171;

  /* Translucent materials */
  --glass-bg: rgba(20, 20, 30, 0.7);
  --glass-border: rgba(167, 157, 253, 0.15);
  --glass-hover: rgba(167, 157, 253, 0.25);
}
```

---

## Typography

```css
:root {
  /* Font families */
  --font-ui: 'Geist Mono', monospace;        /* Chrome, labels, code */
  --font-body: 'Geist', sans-serif;          /* Body copy */
  --font-display: 'Playfair Display', serif; /* Headlines, name */

  /* Fluid type scale */
  --text-xs: clamp(0.6875rem, 0.65rem + 0.19vw, 0.75rem);      /* 11-12px */
  --text-sm: clamp(0.8125rem, 0.76rem + 0.26vw, 0.875rem);     /* 13-14px */
  --text-base: clamp(0.9375rem, 0.87rem + 0.34vw, 1rem);       /* 15-16px */
  --text-lg: clamp(1.0625rem, 0.98rem + 0.41vw, 1.125rem);     /* 17-18px */
  --text-xl: clamp(1.25rem, 1.13rem + 0.6vw, 1.5rem);          /* 20-24px */
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);               /* 24-32px */
  --text-3xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);               /* 32-48px */
  --text-4xl: clamp(2.5rem, 2rem + 2.5vw, 4.5rem);             /* 40-72px */
  --text-5xl: clamp(3.5rem, 2.5rem + 5vw, 7rem);               /* 56-112px */

  /* Line heights (tight at display, relaxed at body) */
  --leading-tight: 1.05;
  --leading-snug: 1.15;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;

  /* Tracking (size-specific) */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
  --tracking-wider: 0.1em;
  --tracking-widest: 0.2em;
}
```

---

## Spacing & Layout

```css
:root {
  /* Base unit: 8px */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
}
```

---

## Motion System

```css
:root {
  /* Spring tokens (critically damped default) */
  --spring-fast: 0.25s;
  --spring-base: 0.35s;
  --spring-slow: 0.5s;

  /* Easing curves (cubic-bezier equivalents of springs) */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);      /* Critically damped */
  --ease-spring-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Slight overshoot */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Reduced motion fallbacks */
  --spring-fast-reduced: 0.01s;
  --spring-base-reduced: 0.01s;
  --spring-slow-reduced: 0.01s;
}

/* Motion utilities */
@media (prefers-reduced-motion: no-preference) {
  .motion-spring {
    transition: transform var(--spring-base) var(--ease-spring),
                opacity var(--spring-fast) var(--ease-spring);
  }
  .motion-spring-slow {
    transition: transform var(--spring-slow) var(--ease-spring),
                opacity var(--spring-base) var(--ease-spring);
  }
}

@media (prefers-reduced-motion: reduce) {
  .motion-spring,
  .motion-spring-slow {
    transition: opacity 0.2s ease;
    transform: none !important;
  }
}

/* Press feedback - instant, on pointer-down */
.interactive {
  transition: transform 0.08s ease-out, background-color 0.1s ease;
}
.interactive:active {
  transform: scale(0.97);
}
.interactive:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

## Components

### Navigation
- Fixed, translucent glass morphism
- Blur increases on scroll
- Links: Geist Mono, uppercase, tracking-wider
- Active section indicator (subtle accent underline)

### Reveal Frame (core component)
- IntersectionObserver-triggered
- Spring up from `translateY(24px)` + `opacity: 0`
- Staggered delays (80ms per item)
- Respects `prefers-reduced-motion`

### Project Card
- Glass panel with subtle border
- Image: grayscale → color on hover/focus, slight scale
- Tags: Geist Mono, pill-shaped, border highlights on hover
- Expandable detail on interaction (desktop: hover, mobile: tap)

### Button
- Two variants: Primary (filled accent), Outline (border accent)
- Geist Mono, uppercase, tracking-wider
- Instant press feedback (scale 0.97)
- Loading state with spinner

### Section
- Generous vertical padding (clamp 5rem to 8rem)
- Consistent 12-col grid
- Border-top divider (subtle)

---

## Responsive Breakpoints

```css
/* Mobile-first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1440px) { /* 2xl */ }
```

---

## Accessibility

- Semantic HTML5 landmarks
- Focus management on interactions
- ARIA labels on icon-only controls
- Color contrast: WCAG AA in dark mode
- `prefers-reduced-motion` honored globally
- `prefers-reduced-transparency` fallbacks for glass
- `prefers-contrast: more` increases border weight
- Keyboard navigable throughout
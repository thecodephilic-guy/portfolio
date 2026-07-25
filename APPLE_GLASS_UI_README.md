# Apple Glass UI Migration

This document details the transition to the new Apple-inspired Glass UI layout and styling across the application. The goal was to centralize navigation, implement adaptive glassmorphism across all themes, and bring a professional "Apple-style" fluidity to the animations.

## Key Changes

### 1. Unified Desktop Floating Navbar (`main-nav.tsx`)
- The traditional full-width top navbar was replaced with a **centered floating "island"** design.
- The width is now dynamic, hugging the navigation content to mirror the macOS dock or iPadOS multitasking bars.
- Applied **Glassmorphism**: Built using `bg-background/60`, `backdrop-blur-lg`, and a subtle `border-border/50` which dynamically absorbs the color of any active theme (Dark, Cyberpunk, Retro, etc.).
- The GSAP entrance animation was modified to a smooth, unified `scale` and `opacity` transition (`power3.out` over 0.8s), removing the previous "flying in" staggered effect.

### 2. Mobile Dock Architecture (`mobile-nav.tsx`)
- Instead of a traditional hamburger menu or top nav, mobile users now see:
  - A **clean Top Bar** showing the author's name ("Sohail").
  - A **Floating Bottom Dock** housing the navigation links with extreme depth (`backdrop-blur-2xl`, `shadow-2xl`).
- **GSAP Sliding Highlighter**: A pill-shaped highlighter dynamically slides (`back.out(1.2)` ease) behind the active icon as you navigate between pages, replicating the premium fluid feel of Apple OS elements.
- The dock uses clear **SVG Icons** to represent each section instead of text, saving space and improving aesthetics.
- The **Theme Toggle** (`ModeToggle`) was seamlessly integrated into the right side of this bottom dock.

### 3. Global Card Glassmorphism
- Replaced solid backgrounds on all content cards (Projects, Experience, Blogs) with theme-adaptive glass styles (`bg-background/40`, `backdrop-blur-xl`, `border-border/50`).
- Added subtle premium interactions: a smooth `hover:scale-[1.02]` scale-up effect combined with a slight brightness bump (`hover:bg-background/60`) for all cards.

### 4. Layout Integration (`app/(root)/layout.tsx`)
- The structural layout was overhauled to unconditionally import the new Desktop Glass Nav (`hidden md:flex`) and the Mobile Dock (`md:hidden`).
- Adjustments were made to the `<main>` padding (`pt-24`, `pb-28`) to prevent the new floating elements from obscuring content at the top or bottom of the screen.

### 5. Blog Readability
- Ensured the Blog sections (`app/(root)/blogs`) adhere to a simplistic, distraction-free typography style. 
- The content is strictly constrained by a `max-w-3xl` container, mimicking a clean reading experience without overly decorative elements.

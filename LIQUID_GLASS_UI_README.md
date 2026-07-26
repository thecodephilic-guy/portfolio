# Liquid Glass UI Kit - Developer Guide

This document explains how the **Liquid Glass UI** has been implemented across the project and provides an easy-to-understand guide on how to manually use, customize, and modify it later.

---

## What is Liquid Glass UI?
Liquid Glass is a premium UI aesthetic that gives your website a "frosted glass" look. It uses semi-transparent backgrounds, strong background blurs, subtle borders, and dynamic shadows to make elements look like they are floating over a clean, textured background.

By default, the global CSS (`globals.css`) automatically applies this look to all common components like standard buttons and cards. However, you can also manually apply these styles anywhere in your code.

---

## How to Manually Apply Glass Styles

We have added specific **utility classes** to your `globals.css` file. You can attach these classes to any HTML element or React component to instantly give it the glass look.

### 1. `.liquid-panel` (The Main Glass Card)
Use this class when you want to create a glass container, card, or widget. 

**What it does:**
- Applies the semi-transparent frosted background.
- Blurs everything behind the panel using `backdrop-filter: blur(20px)`.
- Enforces hardware acceleration (`backface-visibility: hidden`) to prevent browser rendering bugs with background blurs.
- Adds a subtle white border (or dark border in dark mode).
- Adds the floating drop shadow (shadow is completely disabled in light mode for a cleaner look).

**Example Usage:**
```html
<div class="liquid-panel p-6 rounded-2xl">
  <h2>My Glass Widget</h2>
  <p>This looks like frosted glass!</p>
</div>
```

### 2. `.glass-btn` (The Glass Button)
Use this class for interactive elements like buttons.

**What it does:**
- Adds a smooth transition so changes (like hover) fade in nicely.
- Gives the element a "click" effect (it slightly shrinks when you press it).
- Changes your cursor to a pointer.

**Example Usage:**
```html
<button class="liquid-panel glass-btn px-4 py-2 rounded-full">
  Click Me
</button>
```

### 3. `.glass-hover` (Hover Effect)
Use this class if you want the element to slightly change its background color when the user hovers their mouse over it.

**Example Usage:**
```html
<div class="liquid-panel glass-btn glass-hover p-4 rounded-xl">
  Hover over me to see the background change!
</div>
```

### 4. `.text-muted` (Faded Text)
Use this class for secondary text, subtitles, or timestamps. It makes the text slightly transparent so it doesn't distract from the main content.

**Example Usage:**
```html
<p class="text-muted text-sm">2 hours ago</p>
```

---

## How to Customize the Glass Settings

All the colors, blurs, and shadows are controlled by CSS variables located in `app/globals.css`. If you ever want to change how the glass looks, you just need to edit these variables.

### Where to find them:
Open `app/globals.css` and look for the `:root` (Light Mode) and `.dark` (Dark Mode) sections.

### The Variables Explained:

- **`--theme-bg`**: The base solid background color.
- **`--theme-text`**: The main text color (black in light mode, white in dark mode).
- **`--glass-bg`**: The background color of the glass itself. It uses `rgba` to add transparency (e.g., `0.55` in light mode, `0.75` in dark mode). *Increase this number if you want the glass to be less transparent.*
- **`--glass-border`**: The color of the border wrapping the glass panel.
- **`--glass-shadow`**: The drop shadow behind the panel to make it look like it's floating. (Set to `transparent` in light mode to prevent muddying the background pattern).
- **`--glass-inset`**: A small inner shadow that gives the glass panel depth (like light reflecting off the top edge).
- **`--bg-pattern`**: The base64-encoded SVG URL for the subtle zigzag background texture. We use specific stroke opacities (`0.03` for light mode, `0.04` for dark mode) to ensure the pattern looks premium without clashing with the glass panels.

### Architecture Note: The Background Rendering Bug
To fix a notorious WebKit/Blink bug where `backdrop-filter` fails to blur background images correctly when scrolling, the `--bg-pattern` is purposefully applied to a fixed `body::before` pseudo-element with `z-index: -1`, while `.liquid-panel` components utilize `backface-visibility: hidden` to force correct hardware compositing. Do not remove these rules, or the background blurs will fail!

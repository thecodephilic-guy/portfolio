# Framer Motion to GSAP Migration Overview

This document outlines the detailed migration process from Framer Motion to GSAP (`@gsap/react` and `gsap/ScrollTrigger`) across the portfolio project. The goal was to remove Framer Motion entirely, making animations more professional, smooth, and reliant on GreenSock's robust animation timeline and scroll-trigger features.

## What Was Changed

1. **Dependencies**: 
   - Uninstalled `framer-motion`.
   - Installed `gsap` and `@gsap/react`.

2. **Component Refactoring**: 
   - All `<motion.div>` components were converted to standard `<div>` elements or other semantic HTML tags.
   - Framer Motion's proprietary props (`initial`, `animate`, `whileHover`, `whileTap`, `whileInView`, `variants`) were removed.
   - Replaced `whileHover` and `whileTap` micro-interactions with native Tailwind CSS transition classes for better performance.
   - Introduced `useGSAP` hook from `@gsap/react` to safely manage GSAP animation lifecycles in React components.

## How GSAP is Integrated in Every File

### 1. `components/common/animated-link.tsx`
- **Before**: Used `<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} />`.
- **After**: Removed GSAP/Motion entirely here. Used native CSS classes: `hover:scale-[1.03] active:scale-95 transition-transform duration-300 ease-out`.
- **Reasoning**: CSS transitions are natively smoother, handle interruption better, and offload work from the main JavaScript thread for simple hover effects.

### 2. `components/common/animated-section.tsx`
- **Before**: Used `<motion.div whileInView={{ ... }} viewport={{ once: true }} />`.
- **After**: Integrated `useGSAP` with `gsap.fromTo`. We attached `ScrollTrigger` directly within the tween configuration.
- **Integration**: The component now takes the calculated `initialOffset` (based on direction) and animates to `x: 0, y: 0, opacity: 1` as soon as the element's top reaches `85%` of the viewport.

### 3. `components/common/scroll-animation.tsx`
- **Before**: Utilized Framer's `useScroll` and `useTransform` to bind scroll progress to inline styles.
- **After**: Replaced with GSAP's `ScrollTrigger` with `scrub: true`. 
- **Integration**: Inside `useGSAP`, we construct `fromVars` and `toVars` based on the requested effect (fade, zoom, slide, rotate). A single `gsap.fromTo` call binds the animation perfectly to the scroll position without relying on React state updates.

### 4. `components/common/animated-text.tsx`
- **Before**: Used a custom `textVariants` object and `<Component initial="hidden" animate="visible" />`.
- **After**: Converted to standard React elements dynamically using `Tag as any`. 
- **Integration**: Inside `useGSAP`, it performs a simple `gsap.fromTo` fading in and moving up from `y: 20` using the `power2.out` ease curve.

### 5. `components/common/main-nav.tsx`
- **Before**: Used `navItemVariants` to stagger navigation links, along with `<motion.div>` for the logo and buttons.
- **After**: Removed `framer-motion` imports.
- **Integration**: Using `useGSAP`, we grab an array of references to all navigation link wrappers. We then use `gsap.fromTo` with the `stagger: 0.1` property to sequentially animate the links into view. The logo is animated independently in the same hook. Hover effects were converted to standard Tailwind utility classes.

### 6. Page Wrappers (`client-page-wrapper.tsx` & `animated-page-transition.tsx`)
- **Before**: Used Framer's `<AnimatePresence>` pattern with exit animations.
- **After**: Simplified to standard page entrance animations.
- **Integration**: Both components utilize `useGSAP` and a `usePathname` dependency. Whenever the route changes, the wrapper safely executes a `gsap.fromTo` to fade in and slide up the page content using `power2.inOut` easing.

## Conclusion

The migration successfully replaced the React-centric declarative approach of Framer Motion with the highly performant, imperative approach of GSAP. By leaning on `useGSAP`, we ensured that animations are properly scoped, cleaned up on unmount, and tightly integrated into the Next.js App Router ecosystem.

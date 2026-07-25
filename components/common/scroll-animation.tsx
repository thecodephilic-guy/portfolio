"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  effect?: "fade" | "zoom" | "slide" | "rotate";
}

export const ScrollAnimation = ({
  children,
  className = "",
  effect = "fade",
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let fromVars: gsap.TweenVars = {};
      let toVars: gsap.TweenVars = {
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      };

      switch (effect) {
        case "fade":
          fromVars = { opacity: 0.2 };
          toVars = { ...toVars, opacity: 1 };
          break;
        case "zoom":
          fromVars = { opacity: 0.2, scale: 0.8 };
          toVars = { ...toVars, opacity: 1, scale: 1 };
          break;
        case "slide":
          fromVars = { opacity: 0.2, x: -50 };
          toVars = { ...toVars, opacity: 1, x: 0 };
          break;
        case "rotate":
          fromVars = { opacity: 0.2, rotation: -10 };
          toVars = { ...toVars, opacity: 1, rotation: 0 };
          break;
        default:
          fromVars = { opacity: 0.2 };
          toVars = { ...toVars, opacity: 1 };
      }

      gsap.fromTo(ref.current, fromVars, toVars);
    },
    { scope: ref, dependencies: [effect] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

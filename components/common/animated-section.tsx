"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const directionOffset = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
      };

      const initialOffset = directionOffset[direction];

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, ...initialOffset },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [direction, delay] }
  );

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

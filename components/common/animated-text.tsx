"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: AnimatedTextProps) => {
  const ref = useRef<any>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: delay,
          ease: "power2.out",
        }
      );
    },
    { scope: ref, dependencies: [delay] }
  );

  const Component = Tag as any;

  return (
    <Component ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Component>
  );
};

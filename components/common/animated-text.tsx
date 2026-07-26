"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  bounce?: boolean;
}

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  bounce = false,
}: AnimatedTextProps) => {
  const ref = useRef<any>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: delay });
      tl.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      if (bounce) {
        tl.to(ref.current, {
          y: 5,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: ref, dependencies: [delay, bounce] }
  );

  const Component = Tag as any;

  return (
    <Component ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Component>
  );
};

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";

interface AnimatedPageTransitionProps {
  children: ReactNode;
}

export const AnimatedPageTransition = ({
  children,
}: AnimatedPageTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
      );
    },
    { scope: ref, dependencies: [pathname] }
  );

  return (
    <div ref={ref} className="w-full" style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

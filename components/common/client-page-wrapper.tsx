"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="w-full" style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

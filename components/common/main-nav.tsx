"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Train_One } from "next/font/google";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";
import { ModeToggle } from "@/components/common/mode-toggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const trainOne = Train_One({
  weight: ["400"],
});

export function MainNav({ items }: { items?: any[] }) {
  const segment = useSelectedLayoutSegment();
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Smooth scale-in for the whole navbar container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="flex items-center gap-6 px-6 py-3" ref={containerRef} style={{ opacity: 0 }}>
      <Link href="/" className="flex items-center space-x-2">
        <span className={cn(trainOne.className, "text-xl font-bold")}>
          {siteConfig.authorName}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex items-center gap-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <div className="flex items-center border-l pl-6 border-border/50">
        <ModeToggle />
      </div>
    </div>
  );
}

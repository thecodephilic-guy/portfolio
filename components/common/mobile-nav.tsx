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
import { Icons } from "@/components/common/icons";

interface MobileNavProps {
  items: any[];
}

const trainOne = Train_One({
  weight: ["400"],
});

export function MobileNav({ items }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const dockRef = React.useRef<HTMLDivElement>(null);
  const highlighterRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  // Track active index based on segment
  const activeIndex = React.useMemo(() => {
    const index = items.findIndex(item => item.href.startsWith(`/${segment}`));
    return index !== -1 ? index : -1;
  }, [segment, items]);

  useGSAP(
    () => {
      // Entrance animation
      gsap.fromTo(
        dockRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    },
    { scope: dockRef }
  );

  useGSAP(
    () => {
      // Highlighter slide animation
      if (activeIndex !== -1 && itemRefs.current[activeIndex] && highlighterRef.current) {
        const activeEl = itemRefs.current[activeIndex];
        gsap.to(highlighterRef.current, {
          x: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          duration: 0.5,
          ease: "back.out(1.2)",
        });
      }
    },
    { dependencies: [activeIndex], scope: dockRef }
  );

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "projects": return <Icons.projects className="w-5 h-5" />;
      case "experience": return <Icons.work className="w-5 h-5" />;
      case "contributions": return <Icons.gitBranch className="w-5 h-5" />;
      case "skills": return <Icons.skills className="w-5 h-5" />;
      case "contact": return <Icons.contact className="w-5 h-5" />;
      case "blogs": return <Icons.blog className="w-5 h-5" />;
      default: return <Icons.chevronRight className="w-5 h-5" />;
    }
  }

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 w-full z-40 md:hidden bg-background/40 backdrop-blur-2xl border-b border-border/50">
        <div className="flex h-16 items-center justify-center px-4">
          <Link href="/">
            <span className={cn(trainOne.className, "text-xl font-bold")}>
              {siteConfig.authorName}
            </span>
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Dock */}
      <div
        ref={dockRef}
        style={{ opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center px-4 py-3 rounded-full bg-background/40 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all w-[90vw] max-w-[400px]"
      >
        <div className="relative flex items-center justify-around flex-grow">
          {/* Animated Highlighter Pill */}
          <div
            ref={highlighterRef}
            className="absolute left-0 h-full bg-foreground/10 rounded-full"
            style={{ width: "3rem" }} // Default width before first render
          />

          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={cn(
                  "p-3 rounded-full flex items-center justify-center min-w-[3rem] relative z-10 transition-colors",
                  isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {getIcon(item.title)}
              </Link>
            );
          })}
        </div>
        <div className="border-l border-border/50 pl-4 ml-2 relative z-10 flex-shrink-0">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

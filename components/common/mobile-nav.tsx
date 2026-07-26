"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Train_One } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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

  // Inject Home at the start
  const navItems = React.useMemo(() => [
    { title: "Home", href: "/" },
    ...items
  ], [items]);

  // Track active index based on segment or home
  const activeIndex = React.useMemo(() => {
    if (!segment) return 0; // Home is active if no segment
    const index = navItems.findIndex(item => item.href.startsWith(`/${segment}`));
    return index !== -1 ? index : -1;
  }, [segment, navItems]);

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
      case "home": return <Icons.home className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "projects": return <Icons.projects className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "experience": return <Icons.work className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "contributions": return <Icons.gitBranch className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "skills": return <Icons.skills className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "contact": return <Icons.contact className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "blogs": return <Icons.blog className="w-4 h-4 sm:w-5 sm:h-5" />;
      default: return <Icons.chevronRight className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  }

  return (
    <>
      {/* Mobile Top Bar */}
      <div role="banner" className="fixed top-0 left-0 w-full z-40 md:hidden backdrop-blur-2xl border-b border-border/50" style={{ backgroundColor: 'hsl(var(--background) / 0.4)' }}>
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/">
            <Image 
              src="/signature-black.png" 
              alt={siteConfig.authorName} 
              width={120} 
              height={48} 
              className="theme-logo-black h-7 w-auto object-contain"
              priority
            />
            <Image 
              src="/signature-white.png" 
              alt={siteConfig.authorName} 
              width={120} 
              height={48} 
              className="theme-logo-white h-7 w-auto object-contain"
              priority
            />
          </Link>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Bottom Dock */}
      <div className="fixed bottom-6 left-0 w-full z-50 md:hidden flex justify-center pointer-events-none">
        <div 
          ref={dockRef}
          style={{ opacity: 0 }}
          className="pointer-events-auto flex items-center px-2 py-2 rounded-full bg-background/40 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all w-[96vw] max-w-[450px]"
        >
        <div className="relative flex items-center justify-around flex-grow gap-1">
          {/* Animated Highlighter Pill */}
          <div
            ref={highlighterRef}
            className="absolute left-0 h-full bg-foreground/10 rounded-full"
            style={{ width: "2.5rem" }} // Default width before first render
          />

          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={cn(
                  "p-2 rounded-full flex items-center justify-center min-w-[2.5rem] relative z-10 transition-colors",
                  isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {getIcon(item.title)}
              </Link>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

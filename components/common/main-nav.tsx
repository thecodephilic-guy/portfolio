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

const trainOne = Train_One({
  weight: ["400"],
});

export function MainNav({ items }: { items?: any[] }) {
  const segment = useSelectedLayoutSegment();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const navRef = React.useRef<HTMLElement>(null);
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(
    () => {
      // Smooth scale-in for the whole navbar container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );

      // GSAP macOS Dock effect
      if (!navRef.current) return;
      const nav = navRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;

        itemRefs.current.forEach((item) => {
          if (!item) return;
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + rect.width / 2;
          const distance = Math.abs(mouseX - itemCenterX);

          const maxDistance = 150;
          let scale = 1;
          let y = 0;

          if (distance < maxDistance) {
            // Smoothstep curve for natural falloff
            let progress = 1 - distance / maxDistance;
            let eased = progress * progress * (3 - 2 * progress);
            scale = 1 + (0.4 * eased); // Peak scale 1.4x
            y = 6 * eased; // Move down 6px
          }

          gsap.to(item, {
            scale,
            y,
            duration: 0.15, // Ultra-fast response
            transformOrigin: "top center",
            overwrite: "auto",
            ease: "power2.out"
          });
        });
      };

      const handleMouseLeave = () => {
        itemRefs.current.forEach((item) => {
          if (!item) return;
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "elastic.out(1, 0.7)", // Springy bounce back
            overwrite: "auto"
          });
        });
      };

      nav.addEventListener("mousemove", handleMouseMove);
      nav.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        nav.removeEventListener("mousemove", handleMouseMove);
        nav.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef, dependencies: [items] }
  );

  return (
    <div className="flex items-center gap-6 px-6 py-2" ref={containerRef} style={{ opacity: 0 }}>
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/signature-black.png"
          alt={siteConfig.authorName}
          width={120}
          height={48}
          className="theme-logo-black h-8 w-auto object-contain"
          priority
        />
        <Image
          src="/signature-white.png"
          alt={siteConfig.authorName}
          width={120}
          height={48}
          className="theme-logo-white h-8 w-auto object-contain"
          priority
        />
      </Link>
      {items?.length ? (
        <nav className="flex items-center gap-6 relative" ref={navRef}>
          {items?.map((item, index) => (
            <Link
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "relative text-sm font-medium origin-top",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground",
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

"use client";

import { cn } from "@/lib/utils";

interface HeroVideoPlayerProps {
  videoId?: string;
  title?: string;
  className?: string;
}

export function HeroVideoPlayer({
  videoId = "zMzOzSFVbJY",
  title = "Sohail - Introduction Video",
  className,
}: HeroVideoPlayerProps) {
  return (
    <div className={cn("relative group mx-auto", className)}>
      {/* Ambient gradient glow backdrop */}
      <div
        className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-primary/25 via-primary/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        aria-hidden="true"
      />

      {/* Modern Device / Showcase Card Frame */}
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-border/80 dark:border-white/15 bg-black/5 dark:bg-black/40 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.01]">
        {/* Top pill indicator */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-background/85 dark:bg-neutral-900/85 backdrop-blur-md border border-border/60 dark:border-white/10 text-[11px] font-medium text-foreground/80 shadow-sm pointer-events-none select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>Intro</span>
        </div>

        {/* Vertical 9:16 YouTube Player */}
        <div className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px] xl:w-[340px] aspect-[9/16] overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "@/components/common/icons";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button className="liquid-panel w-9 h-9 rounded-full glass-hover flex items-center justify-center glass-btn text-lg text-[var(--theme-text)] shadow-xl opacity-0">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button 
      onClick={toggleTheme}
      className="liquid-panel w-9 h-9 rounded-full glass-hover flex items-center justify-center glass-btn text-lg text-[var(--theme-text)] shadow-md"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <Icons.sun className="text-yellow-400 scale-100" />
      ) : (
        <Icons.moon className="scale-100" />
      )}
    </button>
  );
}

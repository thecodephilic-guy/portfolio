"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export const AnimatedLink = ({
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
}: AnimatedLinkProps) => {
  return (
    <div className="inline-block transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-95">
      <Link
        href={href}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    </div>
  );
};

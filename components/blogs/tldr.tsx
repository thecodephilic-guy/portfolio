import { ReactNode } from "react";
import { Icons } from "../common/icons";

interface TLDRProps {
  children: ReactNode;
}

export default function TLDR({ children }: TLDRProps) {
  return (
    <div className="my-8 rounded-xl bg-muted p-6">
      <h3 className="m-0 mb-3 text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
        <Icons.sandclock className="flex-shrink-0 sm:w-5 sm:h-5" /> TL;DR
      </h3>
      <div className="text-muted-foreground text-sm [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

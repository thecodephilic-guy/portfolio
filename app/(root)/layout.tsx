import { MainNav } from "@/components/common/main-nav";
import { MobileNav } from "@/components/common/mobile-nav";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Desktop Header - Apple Glass UI */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center rounded-full bg-background/60 backdrop-blur-lg border border-border/50 shadow-xl transition-all">
        <MainNav items={routesConfig.mainNav} />
      </header>

      {/* Mobile Nav (Top Bar + Bottom Dock) */}
      <MobileNav items={routesConfig.mainNav} />

      <main className="container flex-1 pt-24 md:pt-32 px-4 pb-28 md:pb-12">{children}</main>
      <SiteFooter />
    </div>
  );
}

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const MAIN_SITE = "https://abstract-technology.de";
import logo from "@/assets/abstract-technology-logo.png";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function BrandMark() {
  return (
    <a href={`${MAIN_SITE}/`} target="_blank" rel="noopener noreferrer" className="shrink-0" aria-label="Abstract Technology home">
      <img src={logo} alt="Abstract Technology" width={531} height={105} className="h-auto w-36 sm:w-44" />
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95">
      <div className="site-shell flex min-h-20 flex-wrap items-center justify-between gap-5 py-3">
        <BrandMark />
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="site-navigation" aria-label="Primary navigation" className={`site-nav flex flex-wrap items-center gap-1 sm:gap-3${menuOpen ? " is-open" : ""}`}>
          <a href={`${MAIN_SITE}/ai-assistant-openedx`} target="_blank" rel="noopener noreferrer" className="nav-link">AI Assistant</a>
          <a href={`${MAIN_SITE}/ai-studio-openedx`} target="_blank" rel="noopener noreferrer" className="nav-link">AI Studio</a>
          <a href={`${MAIN_SITE}/`} className="nav-link" target="_blank" rel="noopener noreferrer">
            abstract-technology.de <ArrowUpRight className="inline size-3" aria-hidden="true" />
          </a>
          <Button asChild size="sm" className="site-header-cta ml-2 rounded-none">
            <a href={`${MAIN_SITE}/contact`} target="_blank" rel="noopener noreferrer">Book a demo</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <BrandMark />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Explainable, EU-hosted AI for the Open edX® platform – by Abstract-Technology GmbH, Berlin, Germany.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`${MAIN_SITE}/ai-assistant-openedx`} className="footer-link" target="_blank" rel="noopener noreferrer">AI Assistant</a>
          <a href={`${MAIN_SITE}/ai-studio-openedx`} className="footer-link" target="_blank" rel="noopener noreferrer">AI Studio</a>
          <a href={`${MAIN_SITE}/`} className="footer-link" target="_blank" rel="noopener noreferrer">abstract-technology.de</a>
          <a href={`${MAIN_SITE}/contact`} className="footer-link" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href={`${MAIN_SITE}/imprint`} className="footer-link" target="_blank" rel="noopener noreferrer">Imprint</a>
          <a href={`${MAIN_SITE}/privacy-policy`} className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
      <p className="site-shell pb-6 text-[10px] text-muted-foreground">Open edX® is a registered trademark of Axim Collaborative, Inc. Abstract-Technology is not affiliated with Axim Collaborative.</p>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function ProductLink({ to, children }: { to: "/assistant" | "/studio"; children: ReactNode }) {
  return (
    <Button asChild size="lg" className="w-full h-12 rounded-none px-5 sm:w-auto">
      <a href={`${MAIN_SITE}${to === "/assistant" ? "/ai-assistant-openedx" : "/ai-studio-openedx"}`} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

export function ProductNumber({ children }: { children: ReactNode }) {
  return <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{children}</span>;
}

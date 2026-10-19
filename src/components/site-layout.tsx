import { ArrowUpRight } from "lucide-react";

const MAIN_SITE = "https://abstract-technology.de";
import logo from "@/assets/abstract-logo-white.png";
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
  return (
    <header className="border-b border-border bg-background/95">
      <div className="site-shell flex min-h-20 flex-wrap items-center justify-between gap-5 py-3">
        <BrandMark />
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-1 sm:gap-3">
          <a href={`${MAIN_SITE}/ai-assistant-openedx`} target="_blank" rel="noopener noreferrer" className="nav-link">AI-Assistant</a>
          <a href={`${MAIN_SITE}/ai-studio-openedx`} target="_blank" rel="noopener noreferrer" className="nav-link">AI-Studio</a>
          <a href={`${MAIN_SITE}/`} className="nav-link hidden sm:inline-block" target="_blank" rel="noopener noreferrer">
            abstract-technology.de <ArrowUpRight className="inline size-3" aria-hidden="true" />
          </a>
          <Button asChild size="sm" className="ml-2 rounded-none">
            <a href={`${MAIN_SITE}/contact`} target="_blank" rel="noopener noreferrer">Get in touch</a>
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
            Building focused AI products for education and the work around it.
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
    <Button asChild size="lg" className="h-12 rounded-none px-5">
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
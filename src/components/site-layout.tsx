import { ArrowUpRight } from "lucide-react";

const MAIN_SITE = "https://abstract-technology.de";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export function BrandMark() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Abstract Technology AI home">
      <img src="/favicon.svg" alt="" className="size-9" aria-hidden="true" />
      <span className="max-w-44 text-sm font-semibold leading-tight text-foreground">
        Abstract Technology <span className="text-primary">AI</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95">
      <div className="site-shell flex min-h-20 items-center justify-between gap-5 py-3">
        <BrandMark />
        <nav aria-label="Primary navigation" className="flex items-center gap-1 sm:gap-3">
          <Link
            to="/assistant"
            className="nav-link"
            activeProps={{ className: "nav-link nav-link-active" }}
          >
            Assistant
          </Link>
          <Link
            to="/studio"
            className="nav-link"
            activeProps={{ className: "nav-link nav-link-active" }}
          >
            Studio
          </Link>
          <a href={MAIN_SITE} className="nav-link hidden sm:inline-block" rel="noopener">
            abstract-technology.de <ArrowUpRight className="inline size-3" aria-hidden="true" />
          </a>
          <Button asChild size="sm" className="ml-2 rounded-none">
            <a href={`${MAIN_SITE}/contact`} rel="noopener">Get in touch</a>
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
          <p className="font-display text-3xl">Abstract Technology GmbH</p>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Building focused AI products for education and the work around it.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link to="/assistant" className="footer-link">AI Assistant</Link>
          <Link to="/studio" className="footer-link">AI Studio</Link>
          <a href={MAIN_SITE} className="footer-link" rel="noopener">abstract-technology.de</a>
          <a href={`${MAIN_SITE}/contact`} className="footer-link" rel="noopener">Contact</a>
          <a href={`${MAIN_SITE}/imprint`} className="footer-link" rel="noopener">Imprint</a>
          <a href={`${MAIN_SITE}/privacy-policy`} className="footer-link" rel="noopener">Privacy</a>
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
      <Link to={to}>
        {children}
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </Button>
  );
}

export function ProductNumber({ children }: { children: ReactNode }) {
  return <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{children}</span>;
}
import { ArrowDownRight } from "lucide-react";
import type { ReactNode } from "react";

import { ProductNumber } from "@/components/site-layout";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

type SplitHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  aside: ReactNode;
  asideLink?: { label: ReactNode; href: string; external?: boolean };
  bgVariant?: BackgroundVariant;
};

export function SplitHero({ eyebrow, title, description, aside, asideLink, bgVariant = "default" }: SplitHeroProps) {
  return (
    <section className={backgroundVariants[bgVariant]}>
      <div className="site-shell home-hero">
        <div className="reveal">
          <ProductNumber>{eyebrow}</ProductNumber>
          <h1 className="home-title mt-8">{title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <div className="hero-aside reveal reveal-delay">
          <div className="max-w-md text-lg leading-relaxed text-muted-foreground">{aside}</div>
          {asideLink ? <a href={asideLink.href} target={asideLink.external ? "_blank" : undefined} rel={asideLink.external ? "noopener noreferrer" : undefined} className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 hover:text-primary">{asideLink.label}</a> : null}
          <ArrowDownRight className="mt-10 size-9 text-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

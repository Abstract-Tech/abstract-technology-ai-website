import type { ReactNode } from "react";

import { ProductLink, ProductNumber } from "@/components/site-layout";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

export type ProductGridItem = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  href: "/assistant" | "/studio";
  linkLabel: ReactNode;
};

type ProductGridBlockProps = {
  eyebrow: ReactNode;
  description?: ReactNode;
  items: readonly ProductGridItem[];
  bgVariant?: BackgroundVariant;
};

export function ProductGridBlock({ eyebrow, description, items, bgVariant = "default" }: ProductGridBlockProps) {
  return (
    <section className={cn("border-y border-border", backgroundVariants[bgVariant])} aria-label={typeof eyebrow === "string" ? eyebrow : undefined}>
      <div className="site-shell py-5">
        <div className="flex items-center justify-between gap-6">
          <ProductNumber>{eyebrow}</ProductNumber>
          {description ? <span className="text-xs text-muted-foreground">{description}</span> : null}
        </div>
      </div>
      <div className="site-shell grid gap-px border-x border-border bg-border lg:grid-cols-2">
        {items.map((item, index) => (
          <article key={index} className="product-panel bg-background">
            <div className="product-image-wrap product-grid-image-wrap"><img src={item.imageSrc} alt={item.imageAlt} width={item.imageWidth} height={item.imageHeight} loading={index === 0 ? "eager" : "lazy"} /></div>
            <div className="p-6 md:p-8">
              <ProductNumber>{item.eyebrow}</ProductNumber>
              <h3 className="mt-5 font-display text-4xl md:text-5xl">{item.title}</h3>
              <p className="mt-5 max-w-md text-muted-foreground">{item.description}</p>
              <div className="mt-8"><ProductLink to={item.href}>{item.linkLabel}</ProductLink></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { Hexagon } from "lucide-react";
import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";
import { MotionSection } from "@/components/motion/motion-section";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

export type FeaturedGridItem = {
  title: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
};

type FeaturedGridBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  items: readonly FeaturedGridItem[];
  className?: string;
  bgVariant?: BackgroundVariant;
};

export function FeaturedGridBlock({ eyebrow, title, items, className, bgVariant = "default" }: FeaturedGridBlockProps) {
  return (
    <MotionSection animation="fade" className={cn("py-16 md:py-24", backgroundVariants[bgVariant], className)}>
      <div className="site-shell">
        <BlockHeader eyebrow={eyebrow} titleClassName="max-w-none">{title}</BlockHeader>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map(({ title: itemTitle, description, icon }, index) => (
          <article key={index} className="rounded-2xl border border-border bg-muted p-5">
            <div className="mb-5 flex size-8 items-center justify-center rounded-xl bg-accent/10 text-accent">
              {icon ?? <Hexagon className="size-5" strokeWidth={1.75} aria-hidden="true" />}
            </div>
            <h3 className="font-display text-xl font-semibold">{itemTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </article>
        ))}
        </div>
      </div>
    </MotionSection>
  );
}

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";
import { Button } from "@/components/ui/button";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

type ExploreBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  buttonLabel: ReactNode;
  href: string;
  bgVariant?: BackgroundVariant;
  className?: string;
};

export function ExploreBlock({ eyebrow, title, description, buttonLabel, href, bgVariant = "default", className }: ExploreBlockProps) {
  return (
    <section className={cn("border-y border-border py-16 md:py-24", backgroundVariants[bgVariant], className)}>
      <div className="site-shell">
        <BlockHeader eyebrow={eyebrow}>{title}</BlockHeader>
        <div className="mt-10 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          <Button asChild variant="outline" size="lg" className="h-12 w-full shrink-0 rounded-none sm:w-auto">
            <a href={href} target="_blank" rel="noopener noreferrer">{buttonLabel} <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

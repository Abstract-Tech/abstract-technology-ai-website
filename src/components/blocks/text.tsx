import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

type TextBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  bgVariant?: BackgroundVariant;
};

export function TextBlock({ eyebrow, title, children, className, titleClassName, contentClassName, bgVariant = "surface" }: TextBlockProps) {
  return (
    <section className={cn("border-y border-border py-16 md:py-24", backgroundVariants[bgVariant], className)}>
      <div className="site-shell">
        <BlockHeader eyebrow={eyebrow} titleClassName={cn("max-w-none", titleClassName)}>{title}</BlockHeader>
        <div className={cn("body-large mt-8", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}

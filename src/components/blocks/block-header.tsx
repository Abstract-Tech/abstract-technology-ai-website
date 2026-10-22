import type { ReactNode } from "react";

import { ProductNumber } from "@/components/site-layout";
import { cn } from "@/lib/utils";

type BlockHeaderProps = {
  eyebrow: ReactNode;
  children: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
};

export function BlockHeader({ eyebrow, children, className, eyebrowClassName, titleClassName }: BlockHeaderProps) {
  return (
    <header className={cn("block-header", className)}>
      <ProductNumber className={eyebrowClassName}>{eyebrow}</ProductNumber>
      <h2 className={cn("block-header-title", titleClassName)}>{children}</h2>
    </header>
  );
}

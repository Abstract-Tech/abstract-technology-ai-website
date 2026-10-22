import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqBlockProps = {
  eyebrow?: ReactNode;
  title: string;
  items: readonly FaqItem[];
  bgVariant?: BackgroundVariant;
};

export function FaqBlock({ eyebrow = "FAQ'S", title, items, bgVariant = "surface" }: FaqBlockProps) {
  return (
    <section className={cn("border-y border-border py-16 md:py-24", backgroundVariants[bgVariant])}>
      <div className="site-shell">
        <BlockHeader eyebrow={eyebrow}>
          {title}
        </BlockHeader>
        <div className="mt-6">
          <div className="divide-y divide-border border-y border-border">
            {items.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl marker:hidden">
                  {question}
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

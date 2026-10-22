import type { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { BlockHeader } from "@/components/blocks/block-header";
import { MotionSection } from "@/components/motion/motion-section";
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
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  return (
    <MotionSection animation="slide-left" className={cn("border-y border-border py-16 md:py-24", backgroundVariants[bgVariant])}>
      <div className="site-shell">
        <BlockHeader eyebrow={eyebrow}>
          {title}
        </BlockHeader>
        <div className="mt-6">
          <div className="divide-y divide-border border-y border-border">
            {items.map(({ question, answer }) => {
              const isOpen = Boolean(openItems[question]);

              return (
              <div
                key={question}
                className="py-5"
              >
                <button
                  type="button"
                  className="group flex w-full items-center justify-between gap-4 text-left font-display text-xl"
                  aria-expanded={isOpen}
                  onClick={() => setOpenItems((current) => ({ ...current, [question]: !isOpen }))}
                >
                  {question}
                  <span className={`text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-3xl text-muted-foreground">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

import { ArrowRight } from "lucide-react";

import { BlockHeader } from "@/components/blocks/block-header";
import { MotionSection } from "@/components/motion/motion-section";
import { Button } from "@/components/ui/button";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

type CtaBlockProps = {
  eyebrow?: string;
  title: string;
  buttonLabel?: string;
  href?: string;
  bgVariant?: BackgroundVariant;
};

export function CtaBlock({ eyebrow = "READY TO GET STARTED?", title, buttonLabel = "Schedule a live demo", href = "https://abstract-technology.de/contact", bgVariant = "surface" }: CtaBlockProps) {
  return (
    <MotionSection animation="rise" className={cn("border-y border-border py-16 md:py-20", backgroundVariants[bgVariant])}>
      <div className="site-shell text-center">
        <BlockHeader eyebrow={eyebrow} />
        <h2 className="cta-block-title mx-auto mt-5">{title}</h2>
        <Button asChild size="lg" className="mt-8 rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={href} target="_blank" rel="noopener noreferrer">{buttonLabel} <ArrowRight aria-hidden="true" /></a>
        </Button>
      </div>
    </MotionSection>
  );
}

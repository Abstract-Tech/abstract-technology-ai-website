import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { ProductNumber } from "@/components/site-layout";
import { MotionSection } from "@/components/motion/motion-section";
import { Button } from "@/components/ui/button";
import {
  backgroundVariants,
  type BackgroundVariant,
} from "@/lib/background-variants";

type ProductHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  videoSrc: string;
  videoTitle: string;
  videoCaption: ReactNode;
  ctaLabel?: ReactNode | null;
  ctaHref?: string;
  bgVariant?: BackgroundVariant;
};

export function ProductHero({
  eyebrow,
  title,
  description,
  videoSrc,
  videoTitle,
  videoCaption,
  ctaLabel = "Schedule a live demo",
  ctaHref = "https://abstract-technology.de/contact",
  bgVariant = "default",
}: ProductHeroProps) {
  return (
    <MotionSection
      animation="fade"
      className={backgroundVariants[bgVariant]}
    >
      <div className="site-shell page-intro">
        <div className="intro-copy">
          <ProductNumber className="text-accent">
            {eyebrow}
          </ProductNumber>
          <h1 className="display-title mt-8">{title}</h1>
          <p className="intro-lede">{description}</p>
          {ctaLabel ? (
            <Button
              asChild
              size="lg"
              className="mt-8 w-full sm:w-auto"
            >
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabel} <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          ) : null}
          <ArrowDownRight
            className="mt-10 size-8 text-accent"
            aria-hidden="true"
          />
        </div>
        <div>
          <div className="video-frame">
            <iframe
              src={videoSrc}
              title={videoTitle}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {videoCaption}
          </p>
        </div>
      </div>
    </MotionSection>
  );
}

import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { ProductNumber } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

type ProductHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  videoSrc: string;
  videoTitle: string;
  videoCaption: ReactNode;
  ctaLabel?: ReactNode;
  ctaHref?: string;
};

export function ProductHero({ eyebrow, title, description, videoSrc, videoTitle, videoCaption, ctaLabel = "Schedule a live demo", ctaHref = "https://abstract-technology.de/contact" }: ProductHeroProps) {
  return (
    <section className="site-shell page-intro">
      <div className="intro-copy reveal">
        <ProductNumber className="text-accent">{eyebrow}</ProductNumber>
        <h1 className="display-title mt-8">{title}</h1>
        <p className="intro-lede">{description}</p>
        <Button asChild size="lg" className="mt-8 w-full rounded-none sm:w-auto">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">{ctaLabel} <ArrowRight aria-hidden="true" /></a>
        </Button>
        <ArrowDownRight className="mt-10 size-8 text-accent" aria-hidden="true" />
      </div>
      <div className="reveal reveal-delay">
        <div className="video-frame">
          <iframe src={videoSrc} title={videoTitle} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">{videoCaption}</p>
      </div>
    </section>
  );
}

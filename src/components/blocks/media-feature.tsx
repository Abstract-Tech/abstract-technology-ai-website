import { ArrowRight, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";
import { MotionSection } from "@/components/motion/motion-section";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

export type MediaFeatureItem = {
  title: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
};

type MediaFeatureBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  caption?: string;
  features: readonly MediaFeatureItem[];
  cta?: { label: ReactNode; href: string; external?: boolean };
  bgVariant?: BackgroundVariant;
  className?: string;
};

export function MediaFeatureBlock({ eyebrow, title, body, imageSrc, imageAlt, imageWidth, imageHeight, caption, features, cta, bgVariant = "default", className }: MediaFeatureBlockProps) {
  return (
    <MotionSection animation="slide-right" className={cn("border-y border-border py-14 md:py-20", backgroundVariants[bgVariant], className)}>
      <div className="site-shell">
        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(14rem,.8fr)_minmax(0,1.2fr)] md:items-start">
          <figure className="editorial-image">
            <img src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} loading="lazy" />
            {caption ? <figcaption>{caption}</figcaption> : null}
          </figure>
          <div>
            <BlockHeader eyebrow={eyebrow}>{title}</BlockHeader>
            {body ? <div className="body-large mt-8">{body}</div> : null}
            {cta ? <a className="mt-8 inline-flex items-center gap-3 font-medium underline underline-offset-4" href={cta.href} target={cta.external ? "_blank" : undefined} rel={cta.external ? "noopener noreferrer" : undefined}>{cta.label} <ArrowRight aria-hidden="true" /></a> : null}
          </div>
          <div className="grid gap-x-8 gap-y-6 border-t border-border pt-8 md:col-span-2 md:grid-cols-3">
            {features.map(({ title: featureTitle, description, icon }, index) => <div key={index}>
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {icon ?? <ShieldCheck className="size-5" strokeWidth={1.75} aria-hidden="true" />}
              </div>
              <h3 className="font-display text-xl font-semibold">{featureTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>)}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

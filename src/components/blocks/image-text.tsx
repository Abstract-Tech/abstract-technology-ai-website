import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { BlockHeader } from "@/components/blocks/block-header";
import { MotionSection } from "@/components/motion/motion-section";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

type ImageTextBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  caption?: string;
  reverse?: boolean;
  items?: readonly { title: ReactNode; description: ReactNode }[];
  itemsColumns?: 1 | 2;
  link?: { label: ReactNode; href: string; external?: boolean };
  bgVariant?: BackgroundVariant;
};

export function ImageTextBlock({ eyebrow, title, body, imageSrc, imageAlt, imageWidth, imageHeight, caption, reverse = false, items, itemsColumns = 2, link, bgVariant = "surface" }: ImageTextBlockProps) {
  return (
    <MotionSection animation="slide-right" className={cn("border-y border-border py-14 md:py-20", backgroundVariants[bgVariant])}>
      <div className="site-shell">
        <div className={`mt-6 grid gap-8 md:grid-cols-[minmax(14rem,.8fr)_minmax(0,1.2fr)] md:items-start${reverse ? " md:[&>figure]:order-2" : ""}`}>
          <figure className="editorial-image">
            <img src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} loading="lazy" />
            {caption ? <figcaption>{caption}</figcaption> : null}
          </figure>
          <div>
            <BlockHeader eyebrow={eyebrow}>{title}</BlockHeader>
            {body ? <div className="body-large mt-8">{body}</div> : null}
            {items?.length ? <div className={`mt-8 grid gap-6 ${itemsColumns === 1 ? "md:grid-cols-1" : "md:grid-cols-2"}`}>
              {items.map(({ title: itemTitle, description }, index) => <div key={index}><h3 className="font-display text-xl font-semibold">{itemTitle}</h3><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>)}
            </div> : null}
            {link ? <a className="mt-8 inline-flex items-center gap-3 font-medium underline underline-offset-4" href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.label} <ArrowRight aria-hidden="true" /></a> : null}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

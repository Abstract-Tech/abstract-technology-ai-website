import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";

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
};

export function ImageTextBlock({ eyebrow, title, body, imageSrc, imageAlt, imageWidth, imageHeight, caption, reverse = false, items, itemsColumns = 2 }: ImageTextBlockProps) {
  return (
    <section className="border-y border-border bg-surface py-14 md:py-20">
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
          </div>
        </div>
      </div>
    </section>
  );
}

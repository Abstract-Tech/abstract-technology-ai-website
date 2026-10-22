import { Fragment, type ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";

export type TableGroup = {
  label: ReactNode;
  cells: ReactNode[];
};

type TableBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  columns: ReactNode[];
  groups: readonly TableGroup[];
  detailLabel?: ReactNode;
};

export function TableBlock({ eyebrow, title, columns, groups, detailLabel = "Used by:" }: TableBlockProps) {
  return (
    <section className="site-shell py-16 md:py-24">
      <BlockHeader eyebrow={eyebrow}>{title}</BlockHeader>
      <div className="mt-8 overflow-x-auto border-y border-border">
        <table className="w-full min-w-[42rem] text-left text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr>{columns.map((column, index) => <th key={index} className="py-4 pr-6 font-medium last:pr-0">{column}</th>)}</tr>
          </thead>
          <tbody>
            {groups.map(({ label, cells }, groupIndex) => (
              <Fragment key={groupIndex}>
                <tr>
                  <th colSpan={columns.length} className="pt-6 pb-3 text-left font-display text-base font-semibold text-accent">{label}</th>
                </tr>
                <tr className="border-b border-border last:border-0">
                  <th className="py-5 pr-6 align-top font-semibold text-muted-foreground">{detailLabel}</th>
                  {cells.map((cell, index) => <td key={index} className="py-5 pr-6 align-top text-muted-foreground last:pr-0">{cell}</td>)}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";

export type TableRow = readonly ReactNode[];

type TableBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  columns: ReactNode[];
  rows: readonly TableRow[];
};

export function TableBlock({ eyebrow, title, columns, rows }: TableBlockProps) {
  return (
    <section className="site-shell py-16 md:py-24">
      <BlockHeader eyebrow={eyebrow}>{title}</BlockHeader>
      <div className="mt-8 overflow-x-auto border-y border-border">
        <table className="w-full min-w-[42rem] text-left text-sm">
          <thead className="border-b border-border text-muted-foreground">
            <tr>{columns.map((column, index) => <th key={index} className="py-4 pr-6 font-medium last:pr-0">{column}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border last:border-0">
                {row.map((cell, cellIndex) => <td key={cellIndex} className={`py-6 pr-6 align-top text-muted-foreground last:pr-0${cellIndex === 0 ? " font-semibold text-accent" : ""}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

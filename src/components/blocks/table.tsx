import type { ReactNode } from "react";

import { BlockHeader } from "@/components/blocks/block-header";
import { MotionSection } from "@/components/motion/motion-section";
import { backgroundVariants, type BackgroundVariant } from "@/lib/background-variants";
import { cn } from "@/lib/utils";

export type TableRow = readonly ReactNode[];

type TableBlockProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  columns: ReactNode[];
  rows: readonly TableRow[];
  bgVariant?: BackgroundVariant;
  showHeader?: boolean;
  accentFirstColumn?: boolean;
  columnWidths?: readonly string[];
};

export function TableBlock({ eyebrow, title, columns, rows, bgVariant = "default", showHeader = true, accentFirstColumn = true, columnWidths }: TableBlockProps) {
  return (
    <MotionSection animation="fade" className={cn("py-16 md:py-24", backgroundVariants[bgVariant])}>
      <div className="site-shell">
        <BlockHeader eyebrow={eyebrow}>{title}</BlockHeader>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[42rem] table-fixed border border-border text-left text-base">
          <colgroup>
            {columns.map((_, index) => <col key={index} className={columnWidths ? undefined : index === 0 ? "w-1/5" : "w-2/5"} style={columnWidths?.[index] ? { width: columnWidths[index] } : undefined} />)}
          </colgroup>
          {showHeader ? <thead className="bg-muted/50 text-muted-foreground">
            <tr>{columns.map((column, index) => <th key={index} className="border-b border-r border-border px-5 py-4 text-base font-medium last:border-r-0">{column}</th>)}</tr>
          </thead> : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="transition-colors hover:bg-muted/30">
                {row.map((cell, cellIndex) => <td key={cellIndex} className={`border-b border-r border-border px-5 py-6 align-top text-muted-foreground last:border-r-0${accentFirstColumn && cellIndex === 0 ? " font-semibold text-accent" : ""}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
    </MotionSection>
  );
}

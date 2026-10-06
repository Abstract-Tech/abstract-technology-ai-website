import { ArrowDownRight, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import studioImage from "@/assets/ai-studio-editorial.jpg";
import { pageHead } from "@/lib/seo";
import { PageShell, ProductNumber } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/studio")({
  head: () => pageHead("/studio"),
  component: StudioPage,
});

function StudioPage() {
  return (
    <PageShell>
      <section className="site-shell page-intro">
        <div className="intro-copy reveal">
          <ProductNumber>Product 02 / Platform</ProductNumber>
          <h1 className="display-title mt-8">The space where<br /><em>AI ideas take shape.</em></h1>
          <p className="intro-lede">
            AI Studio is where we introduce our tools, explain the thinking behind them, and make our AI direction visible.
          </p>
          <ArrowDownRight className="mt-10 size-8 text-accent" aria-hidden="true" />
        </div>
        <figure className="editorial-image reveal reveal-delay">
          <img src={studioImage} alt="A modular studio workspace with blue and coral forms" width={1600} height={1200} />
          <figcaption>A working space for ideas in progress.</figcaption>
        </figure>
      </section>

      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="site-shell editorial-grid">
          <div><ProductNumber>Its role</ProductNumber><p className="section-index">01</p></div>
          <div>
            <h2 className="section-title">One clear home for the products we are building.</h2>
            <p className="body-large mt-8">
              The studio connects product introductions with the broader thinking at Abstract Technology. Today, that starts with our AI Assistant for Open edX. Over time, it can grow alongside the company’s AI roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="site-shell py-20 md:py-28">
        <div className="editorial-grid">
          <div><ProductNumber>What belongs here</ProductNumber><p className="section-index">02</p></div>
          <div className="divide-y divide-border border-y border-border">
            {[
              ["Products", "Focused introductions to the AI tools created by Abstract Technology."],
              ["Thinking", "The intent, context, and principles that shape each product direction."],
              ["What’s next", "A place for the company’s AI portfolio to evolve without overpromising the future."],
            ].map(([title, copy], index) => (
              <div key={title} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr_1.5fr] sm:items-start">
                <span className="text-sm text-muted-foreground">0{index + 1}</span>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-accent-foreground md:py-20">
        <div className="site-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground/65">First from the studio</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">Meet the AI Assistant for Open edX.</h2>
          </div>
          <Button asChild size="lg" className="h-12 shrink-0 rounded-none bg-foreground text-background hover:bg-foreground/90">
            <Link to="/assistant">Explore the assistant <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
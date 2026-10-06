import { ArrowDownRight, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import assistantImage from "@/assets/open-edx-assistant-editorial.jpg";
import { pageHead } from "@/lib/seo";
import { PageShell, ProductNumber } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/assistant")({
  head: () => pageHead("/assistant"),
  component: AssistantPage,
});

function AssistantPage() {
  return (
    <PageShell>
      <section className="site-shell page-intro">
        <div className="intro-copy reveal">
          <ProductNumber>Product 01 / Learning</ProductNumber>
          <h1 className="display-title mt-8">AI Assistant<br /><em>for Open edX</em></h1>
          <p className="intro-lede">
            A focused AI companion conceived for the Open edX learning environment.
          </p>
          <ArrowDownRight className="mt-10 size-8 text-accent" aria-hidden="true" />
        </div>
        <figure className="editorial-image reveal reveal-delay">
          <img src={assistantImage} alt="Layered blue glass forms suggesting connected knowledge" width={1600} height={1200} />
          <figcaption>Knowledge, made easier to navigate.</figcaption>
        </figure>
      </section>

      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="site-shell editorial-grid">
          <div>
            <ProductNumber>The premise</ProductNumber>
            <p className="section-index">01</p>
          </div>
          <div>
            <h2 className="section-title">Bring AI support into a place learners already know.</h2>
            <p className="body-large mt-8">
              The assistant is designed around the Open edX context rather than around a generic chat window. Its purpose is simple: make AI feel like part of the learning experience, not another destination competing for attention.
            </p>
          </div>
        </div>
      </section>

      <section className="site-shell py-20 md:py-28">
        <div className="editorial-grid">
          <div><ProductNumber>Point of view</ProductNumber><p className="section-index">02</p></div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-7 md:p-10">
              <h3 className="font-display text-3xl">Context first</h3>
              <p className="mt-4 text-muted-foreground">Built around a real education platform and the people already using it.</p>
            </div>
            <div className="bg-background p-7 md:p-10">
              <h3 className="font-display text-3xl">Useful by design</h3>
              <p className="mt-4 text-muted-foreground">A product direction grounded in practical assistance, clarity, and thoughtful integration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="site-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">Continue exploring</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-6xl">See the studio behind our AI product work.</h2>
          </div>
          <Button asChild size="lg" variant="secondary" className="h-12 shrink-0 rounded-none">
            <Link to="/studio">Visit AI Studio <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
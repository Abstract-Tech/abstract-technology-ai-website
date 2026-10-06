import { ArrowDownRight, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import assistantImage from "@/assets/open-edx-assistant-editorial.jpg";
import studioImage from "@/assets/ai-studio-editorial.jpg";
import { pageHead } from "@/lib/seo";
import { PageShell, ProductLink, ProductNumber } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => pageHead("/"),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="site-shell home-hero">
        <div className="reveal">
          <ProductNumber>Abstract Technology GmbH / AI practice</ProductNumber>
          <h1 className="home-title mt-8">We make AI<br /><em>useful.</em></h1>
        </div>
        <div className="hero-aside reveal reveal-delay">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            We are building a focused portfolio of AI products, beginning with tools for learning and the studio that gives them a voice.
          </p>
          <a href="https://abstract-technology.de" rel="noopener" className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 hover:text-primary">
            From the team behind abstract-technology.de
          </a>
          <ArrowDownRight className="mt-10 size-9 text-accent" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-border" aria-labelledby="products-title">
        <div className="site-shell py-7">
          <div className="flex items-center justify-between gap-6">
            <h2 id="products-title" className="text-xs font-semibold uppercase tracking-[0.16em]">Current products</h2>
            <span className="text-xs text-muted-foreground">Two tools. One direction.</span>
          </div>
        </div>
        <div className="site-shell grid gap-px border-x border-border bg-border lg:grid-cols-2">
          <article className="product-panel bg-background">
            <div className="product-image-wrap"><img src={assistantImage} alt="Layered blue glass forms suggesting connected knowledge" width={1600} height={1200} /></div>
            <div className="p-7 md:p-10">
              <ProductNumber>01 / Learning</ProductNumber>
              <h3 className="mt-5 font-display text-4xl md:text-5xl">AI Assistant<br /><em>for Open edX</em></h3>
              <p className="mt-5 max-w-md text-muted-foreground">A focused AI companion conceived for the Open edX learning environment.</p>
              <div className="mt-8"><ProductLink to="/assistant">Explore the assistant</ProductLink></div>
            </div>
          </article>
          <article className="product-panel bg-background">
            <div className="product-image-wrap"><img src={studioImage} alt="A modular studio workspace with blue and coral forms" width={1600} height={1200} loading="lazy" /></div>
            <div className="p-7 md:p-10">
              <ProductNumber>02 / Platform</ProductNumber>
              <h3 className="mt-5 font-display text-4xl md:text-5xl">AI Studio<br /><em>by Abstract</em></h3>
              <p className="mt-5 max-w-md text-muted-foreground">The place where our AI tools are introduced, explained, and connected.</p>
              <div className="mt-8"><ProductLink to="/studio">Enter the studio</ProductLink></div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-32">
        <div className="site-shell editorial-grid">
          <div><ProductNumber>The company</ProductNumber><p className="section-index">AT</p></div>
          <div>
            <h2 className="section-title">Technology is abstract.<br /><em>Its value should not be.</em></h2>
            <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <p className="body-large">Abstract Technology GmbH turns emerging technology into focused products with a clear place in people’s work and learning.</p>
              <p className="text-muted-foreground">Our current work starts with AI for education and a dedicated studio for sharing the products and ideas that follow. We are building deliberately: one useful product at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-20 md:py-28">
        <div className="border-t border-foreground pt-7">
          <ProductNumber>Start exploring</ProductNumber>
          <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl font-display text-5xl leading-[0.98] md:text-7xl">Two starting points for what comes next.</h2>
            <Button asChild variant="outline" size="lg" className="h-12 shrink-0 rounded-none">
              <Link to="/assistant">View first product <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import { ArrowRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import assistantImage from "@/assets/ai-assistant-openedx.webp";
import studioImage from "@/assets/ai-studio-openedx.webp";
import partnerImage from "@/assets/open-edx-partner.webp";
import { ImageTextBlock } from "@/components/blocks/image-text";
import { SplitHero } from "@/components/heros/split-hero";
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
      <SplitHero
        eyebrow="Abstract-Technology GmbH / AI for the Open edX® platform"
        title={<>We make AI<br /><em>useful.</em></>}
        description="Explainable, GDPR-compliant AI for the Open edX® platform – for LMS administration and AI course authoring, built and hosted in Europe."
        aside={<>Abstract-Technology builds focused AI products for the Open edX® platform: the <strong className="text-foreground">AI Assistant</strong>, which manages your learning platform through natural-language conversation, and <strong className="text-foreground">AI Studio</strong>, which turns a single prompt into a complete online course. Hosted on EU servers, aligned with the EU AI Act.</>}
        asideLink={{ label: "By Abstract-Technology, certified partner for the Open edX® platform in Europe", href: "https://abstract-technology.de/about", external: true }}
      />

      <section className="border-y border-border" aria-labelledby="products-title">
        <div className="site-shell py-5">
          <div className="flex items-center justify-between gap-6">
            <h2 id="products-title" className="text-xs font-semibold uppercase tracking-[0.16em]">AI products for the Open edX® platform</h2>
            <span className="text-xs text-muted-foreground">Two tools. One platform. Less manual work.</span>
          </div>
        </div>
        <div className="site-shell grid gap-px border-x border-border bg-border lg:grid-cols-2">
          <article className="product-panel bg-background">
            <div className="product-image-wrap"><img src={assistantImage} alt="AI learning companion on a smartphone beside a notebook" width={1080} height={655} /></div>
            <div className="p-6 md:p-8">
              <ProductNumber>01 / LMS administration</ProductNumber>
              <h3 className="mt-5 font-display text-4xl md:text-5xl">AI Assistant<br /><em>for the Open edX® platform</em></h3>
              <p className="mt-5 max-w-md text-muted-foreground">A conversational AI assistant embedded in the LMS and Studio of the Open edX® platform. Learners, instructors and administrators manage enrolments, grades, deadlines, certificates and course audits in plain language – every change previewed and confirmed by a human.</p>
              <div className="mt-8"><ProductLink to="/assistant">Explore the AI Assistant</ProductLink></div>
            </div>
          </article>
          <article className="product-panel bg-background">
            <div className="product-image-wrap"><img src={studioImage} alt="AI Studio course creation tools displayed over a laptop" width={1323} height={800} loading="lazy" /></div>
            <div className="p-6 md:p-8">
              <ProductNumber>02 / AI course authoring</ProductNumber>
              <h3 className="mt-5 font-display text-4xl md:text-5xl">AI Studio<br /><em>for the Open edX® platform</em></h3>
              <p className="mt-5 max-w-md text-muted-foreground">An AI course authoring tool for instructional designers. Turn one prompt into a complete course with Bloom's-aligned learning objectives and assessments, then export it to the Open edX® platform in one click. Up to 60% faster course development.</p>
              <div className="mt-8"><ProductLink to="/studio">Explore AI Studio</ProductLink></div>
            </div>
          </article>
        </div>
      </section>

      <ImageTextBlock
        eyebrow="About Abstract-Technology"
        title={<>Technology is abstract.<br /><em>Its value should not be.</em></>}
        imageSrc={partnerImage}
        imageAlt="Open edX Partner"
        imageWidth={1080}
        imageHeight={655}
        bgVariant="surface"
        body={<div className="border-t border-border pt-8">
          <p>Abstract-Technology GmbH is a Berlin-based certified partner for the Open edX® platform. We build, host and maintain learning platforms for universities, public institutions, enterprises and NGOs across Europe – and bring that experience to AI for education.</p>
          <p className="company-detail mt-8 text-muted-foreground">Our AI products follow the same principles as our learning platforms: hosting on EU servers in Germany, GDPR compliance, your choice of language model – including self-hosted models – and no vendor lock-in. Every AI recommendation is grounded in Bloom's Taxonomy, fully auditable and aligned with the EU AI Act. We build deliberately: one useful product at a time.</p>
        </div>}
      />

      <section className="site-shell py-16 md:py-24">
        <div className="border-t border-foreground pt-7">
            <ProductNumber>Start exploring</ProductNumber>
          <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl"><h2 className="font-display text-4xl leading-[1] md:text-6xl">Two starting points for AI on the Open edX® platform.</h2><p className="mt-5 text-muted-foreground">See the AI Assistant and AI Studio live in a 45-minute demo – no sales deck, just the Abstract-Technology architects who build and run the Open edX® platform every day.</p></div>
            <Button asChild variant="outline" size="lg" className="w-full h-12 shrink-0 rounded-none sm:w-auto">
              <a href="https://abstract-technology.de/contact" target="_blank" rel="noopener noreferrer">Book a live demo <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

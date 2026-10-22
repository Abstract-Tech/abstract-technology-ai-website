import { ArrowDownRight, ArrowRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import studioImage from "@/assets/ai-studio-course-architect.png";
import assistantPreview from "@/assets/ai-assistant-preview.png";
import { FaqBlock } from "@/components/blocks/faq";
import { CtaBlock } from "@/components/blocks/cta";
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
          <ProductNumber className="text-accent">AI Studio / Open edX®</ProductNumber>
          <h1 className="display-title mt-8">Create online courses<br /><em>in minutes, not weeks.</em></h1>
          <p className="intro-lede">
            AI-powered content creation with built-in guardrails, including pedagogical and instructional design checks.
          </p>
          <Button asChild size="lg" className="mt-8 w-full rounded-none sm:w-auto">
            <a href="https://abstract-technology.de/contact" target="_blank" rel="noopener noreferrer">Schedule a live demo <ArrowRight aria-hidden="true" /></a>
          </Button>
          <ArrowDownRight className="mt-10 size-8 text-accent" aria-hidden="true" />
        </div>
        <div className="reveal reveal-delay">
          <div className="video-frame">
            <iframe
              src="https://player.vimeo.com/video/1231271012?title=0&byline=0&portrait=0&badge=0&dnt=1"
              title="The Abstract-Technology AI Studio for your Open edX platform"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">The Abstract-Technology AI Studio for your Open edX® platform</p>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-20">
        <div className="site-shell">
          <ProductNumber className="text-accent">AI Studio</ProductNumber>
          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(14rem,.8fr)_minmax(0,1.2fr)]">
            <figure className="editorial-image">
              <img src={studioImage} alt="AI Studio course authoring tools displayed over a laptop" width={1323} height={800} loading="lazy" />
              <figcaption>AI Studio course architect</figcaption>
            </figure>
            <div>
              <h2 className="section-title studio-section-title">Course creation, reimagined!</h2>
              <p className="body-large mt-8">
                Planning a course used to mean weeks of outlining, restructuring and manual set-up. The AI Studio turns that process into a streamlined experience that takes only minutes. You start with a simple idea or prompt. The AI Studio guides you through a conversational planning process, helping you define your audience, learning outcomes and pacing. From there it builds the course structure for you, so you can spend your time on what matters: the content and the learners.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-8 rounded-none">
                <a href="https://abstract-technology.de/contact" target="_blank" rel="noopener noreferrer">Schedule a live demo <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="grid gap-x-8 gap-y-6 border-t border-border pt-8 md:col-span-2 md:grid-cols-3">
              {[
                ["Conversational planning", "No blank page and no complicated forms. Describe what you want to teach and the AI Studio asks the right questions."],
                ["Complete course outlines", "Sections, subsections and units are generated automatically, giving you a solid structure to work from."],
                ["Instructors stay in charge", "Human-in-the-loop confirmation steps mean nothing is finalised without your approval."],
                ["Built-in validation", "Automatic scans flag structural issues and empty units before they reach your learners."],
                ["One-click export", "Finished courses go straight into Open edX Studio, ready for you to review, extend and publish."],
                ["Who it is for", "Course authors and instructors, learning and development teams, and platform administrators."],
              ].map(([title, copy]) => (
                <div key={title}>
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 md:py-24">
        <div className="site-shell">
          <ProductNumber className="text-accent">Overview of the AI Studio</ProductNumber>
          <div className="mt-6">
            <h2 className="section-title studio-section-title mb-8">From prompt to course in four steps</h2>
            <div className="divide-y divide-border border-y border-border">
              {[
                ["Describe your idea", "Start with a simple idea or prompt and open a guided, conversational planning session."],
                ["Define the essentials", "Answer questions about audience, outcomes and pacing. The AI Studio shapes the course concept around your goals."],
                ["Review and confirm", "Approve, adjust or refine at each step. The AI Studio builds a complete, structured outline with sections, subsections and units."],
                ["Validate and export", "Check the results and export your course. The AI Studio flags structural issues and empty units, then exports to Open edX Studio with one click."],
              ].map(([title, copy], index) => (
                <div key={title} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr_1.5fr] sm:items-start">
                  <span className="text-sm text-muted-foreground">0{index + 1}</span>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 md:py-24">
        <div className="grid gap-6 rounded-xl border border-border bg-card p-4 md:grid-cols-[minmax(12rem,.35fr)_minmax(0,1fr)] md:items-center md:p-6">
          <figure className="editorial-image">
            <img src={assistantPreview} alt="AI Assistant learning companion on a smartphone" width={1080} height={655} loading="lazy" />
            <figcaption>AI Assistant for Open edX</figcaption>
          </figure>
          <div>
            <ProductNumber className="text-accent">Your AI toolkit</ProductNumber>
            <h2 className="section-title studio-section-title mt-4">Part of our growing AI toolkit for the Open edX® platform.</h2>
            <p className="body-large mt-8">The AI Studio works hand in hand with our AI Assistant for Open edX. The AI Studio helps you create courses, and the AI Assistant helps learners, instructors and administrators manage the platform day to day.</p>
            <a className="mt-8 inline-flex items-center gap-2 font-medium underline underline-offset-4" href="https://abstract-technology.de/ai-assistant-openedx" target="_blank" rel="noopener noreferrer">Explore the AI Assistant <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <CtaBlock title="Less manual work. Fewer errors. More time for what matters." />

      <FaqBlock
        title="The questions we hear most."
        items={[
          { question: "What exactly does the AI Studio do?", answer: "It turns a short brief into a complete, structured course outline for Open edX — sections, subsections, units, pacing and basic assessment points — through a short, guided conversation. You review and refine at each step, and when you are happy, one click sends the whole thing into your Open edX Studio." },
          { question: "Does the AI write the course for me, or do I keep control?", answer: "You keep control. The AI Studio drafts; you decide. Every step needs your approval before it is added. Nothing is exported or published without you." },
          { question: "How does it fit with my existing Open edX setup?", answer: "The Studio installs alongside your Open edX platform and exports finished outlines straight into it as proper course structure. Your existing templates, branding and XBlocks are untouched." },
          { question: "Will it replace my course authors?", answer: "No. It removes the slowest part of their work so they can spend more time on content, examples and assessment design." },
          { question: "How is it different from the AI Assistant?", answer: "They are siblings. The AI Studio helps you create courses. The AI Assistant helps you run them — enrolments, dates, grades and learner questions." },
          { question: "What kinds of courses work best?", answer: "It is strongest on structured, outcome-based learning: onboarding, compliance, soft skills, technical fundamentals, certification preparation and learning and development programmes." },
        ]}
      />

    </PageShell>
  );
}

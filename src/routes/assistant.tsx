import { ArrowDownRight, ArrowRight, Hexagon } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import assistantImage from "@/assets/ai-assistant-openedx.webp";
import { pageHead } from "@/lib/seo";
import { PageShell, ProductNumber } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/assistant")({
  head: () => pageHead("/assistant"),
  component: AssistantPage,
});

const capabilities = [
  ["Enrolment management", "Add, remove, change roles, invite in bulk with CSV or SCIM, with confirmation."],
  ["Grading & progress", "Grades, pass rates, drop-offs and time-on-course reports."],
  ["Dates & scheduling", "Set deadlines, open or close enrolment, and reschedule units with a preview."],
  ["Course audits", "Find empty units, broken links, missing graders, outdated certificates and orphaned content."],
  ["Certificates", "Issue, revoke and bulk verify certificates while keeping the chain of signatures intact."],
  ["Discussion forums", "Open topics, moderate forums, summarise long threads and draft replies."],
  ["Email & nudges", "Draft and send personalised nudges to learner segments and schedule follow-ups."],
  ["Reports & exports", "Pivot the data you need and hand off CSV, PDF or live links for stakeholders."],
  ["Your own tools", "Extend the Assistant with internal APIs, LTI tools or an MCP server."],
];

const faqs = [
  ["Which Open edX releases are supported?", "The Assistant is tested against the three most recent named releases and installs as a Tutor plugin. We publish compatibility notes with every Open edX release. For older releases, we offer a one-off compatibility assessment before engagement."],
  ["Where does my data go? Which LLM powers it?", "Your data stays in your chosen environment. The Assistant supports your choice of language model, including self-hosted models, so you can make the right decision for your organisation."],
  ["Do admins approve every action, or can it run autonomously?", "You choose the level of control. Read-only answers can be immediate, while destructive or bulk actions pause for explicit confirmation before anything changes."],
  ["Can learners use the Assistant too?", "Yes. The Assistant can support learners with progress, deadlines, certificates and course questions while keeping platform actions under the appropriate permissions."],
  ["How is it priced?", "We scope the Assistant around your platform, users, integrations and security requirements. Schedule a demo and we will work through the right setup with you."],
  ["How does the AI Assistant relate to AI Studio?", "They work together. AI Studio helps you create courses; AI Assistant helps learners, instructors and administrators run the platform day to day."],
];

function AssistantPage() {
  return (
    <PageShell>
      <section className="site-shell page-intro">
        <div className="intro-copy reveal">
          <ProductNumber className="text-accent">AI Assistant</ProductNumber>
          <h1 className="display-title mt-8">Simplify<br /><em>LMS Administration</em></h1>
          <p className="intro-lede">Turn platform management into simple conversations using the AI Assistant and manage users, enrolments, and data in one place, without the usual complexity.</p>
          <Button asChild size="lg" className="mt-8 w-full rounded-none sm:w-auto"><a href="https://abstract-technology.de/contact" target="_blank" rel="noopener noreferrer">Schedule a live demo <ArrowRight aria-hidden="true" /></a></Button>
          <ArrowDownRight className="mt-10 size-8 text-accent" aria-hidden="true" />
        </div>
        <div className="reveal reveal-delay">
          <div className="video-frame"><iframe src="https://player.vimeo.com/video/1231271817?title=0&byline=0&portrait=0&badge=0&dnt=1" title="The Abstract-Technology AI Assistant for your Open edX platform" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
          <p className="mt-3 text-center text-xs text-muted-foreground">The Abstract-Technology AI Assistant for your Open edX® platform</p>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-14 md:py-20">
        <div className="site-shell">
          <ProductNumber className="text-accent">AI Assistant</ProductNumber>
          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(14rem,.8fr)_minmax(0,1.2fr)] md:items-start">
            <figure className="editorial-image"><img src={assistantImage} alt="AI Assistant learning companion on a smartphone" width={1080} height={655} loading="lazy" /><figcaption>AI Assistant for Open edX</figcaption></figure>
            <div><h2 className="section-title studio-section-title">Built for speed. Designed for control.</h2><p className="body-large mt-8">We build intelligent learning platforms, and our AI Assistant is the next step in making Open edX faster, smarter, and easier to manage. This assistant helps you reduce manual work, streamline operations, and interact with your platform in plain language — no complex navigation, no technical barriers. Embedded directly inside the LMS and Studio, the AI Assistant is like a knowledgeable colleague who is always available. It helps you retrieve data, perform actions, and manage your platform in seconds — securely and with full control.</p></div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 md:py-24">
        <ProductNumber className="text-accent">Overview of the AI Assistant</ProductNumber>
        <div className="mt-6"><h2 className="section-title studio-section-title mb-8">Key capabilities at a glance</h2><div className="overflow-x-auto border-y border-border"><table className="w-full min-w-[42rem] text-left text-sm"><thead className="border-b border-border text-muted-foreground"><tr><th className="py-4 pr-6 font-medium">Who</th><th className="py-4 pr-6 font-medium">Prompt</th><th className="py-4 font-medium">What the AI Assistant does</th></tr></thead><tbody>{[["Learner", "Learners", "Progress, deadlines, certificates, teams and notifications.", "Real-time responses in simple terminology."], ["Instructors and course authors", "Instructors and course authors", "Enrolments, grades, certificates, discussion activity and course settings.", "Reads data, carries out confirmed actions and summarises key findings."], ["Admin", "Admins", "Unrestricted access to all courses, users and tools.", "Acts as a super user and performs supported actions across the entire platform."]].map(([who, usedBy, prompt, result]) => <Fragment key={who}><tr><th colSpan={3} className="pt-6 pb-3 text-left text-base font-semibold text-accent">{who}</th></tr><tr className="border-b border-border last:border-0"><td className="py-5 pr-6 font-semibold text-muted-foreground">Used by:</td><td className="py-5 pr-6 text-muted-foreground">{usedBy}<br /><span className="text-xs">{prompt}</span></td><td className="py-5 text-muted-foreground">{result}</td></tr></Fragment>)}</tbody></table></div></div>
      </section>

      <section className="border-y border-border bg-surface py-16 md:py-24"><div className="site-shell"><ProductNumber className="text-accent">The solutions</ProductNumber><div className="mt-6 max-w-4xl"><h2 className="section-title studio-section-title">Built for your infrastructure</h2><p className="body-large mt-8">We build solutions that reduce complexity and give you control. The AI Assistant helps you eliminate repetitive tasks, reduce errors, and speed up every workflow on your platform. Course issues such as missing content, incorrect dates, or empty units are identified instantly. Entire course schedules can be adjusted in seconds, with a full preview before changes are applied. User management tasks can be completed in a single request. The result is a platform that is easier to manage, more intelligent, and efficient for everyone involved.</p></div></div></section>

      <section className="site-shell py-16 md:py-24"><ProductNumber className="text-accent">Capabilities</ProductNumber><div className="mt-6"><h2 className="assistant-capabilities-title mb-8">A growing toolbox, not a fixed feature.</h2><div className="grid gap-4 md:grid-cols-3">{capabilities.map(([title, copy]) => <article key={title} className="rounded-xl border border-border bg-muted p-5"><div className="mb-5 flex size-8 items-center justify-center rounded-md bg-accent/10 text-accent"><Hexagon className="size-5" strokeWidth={1.75} aria-hidden="true" /></div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></article>)}</div></div></section>

      <section className="border-y border-border bg-surface py-16 md:py-24"><div className="site-shell"><ProductNumber className="text-accent">Security &amp; control</ProductNumber><div className="mt-6 grid gap-8 md:grid-cols-[minmax(14rem,.5fr)_minmax(0,1fr)] md:items-start"><figure className="editorial-image"><img src={assistantImage} alt="AI Assistant interface on a smartphone" width={1080} height={655} loading="lazy" /><figcaption>Powerful by default</figcaption></figure><div><h2 className="section-title studio-section-title">Powerful by default. Reversible by design.</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{[["Human-in-the-loop for every step", "Destructive or bulk actions require explicit confirmation. No accidental enrolments, results or certificates."], ["Your data stays in your tenant", "Actions stay inside your environment and are logged so you can trace what happened and why."], ["Your choice of LLM", "Avoid vendor lock-in with your choice of language model, including self-hosted models."]].map(([title, copy]) => <div key={title}><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></div>)}</div></div></div></div></section>

      <section className="site-shell py-16 md:py-24"><div className="mx-auto max-w-4xl text-center"><h2 className="assistant-cta-title">Test the AI Assistant in a real environment and explore how it fits your use case.</h2><Button asChild size="lg" className="mt-8 rounded-full"><a href="https://abstract-technology.de/contact" target="_blank" rel="noopener noreferrer">Schedule a live demo <ArrowRight aria-hidden="true" /></a></Button></div></section>

      <section className="border-y border-border bg-surface py-16 md:py-24"><div className="site-shell"><ProductNumber className="text-accent">AI Studio for Open edX</ProductNumber><div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><h2 className="section-title studio-section-title">The AI Assistant helps you run Open edX.</h2><p className="body-large mt-6 max-w-2xl">AI Studio helps you create courses; the AI Assistant helps learners, instructors and administrators manage them day to day.</p></div><Button asChild variant="outline" size="lg" className="rounded-none"><a href="https://abstract-technology.de/ai-studio-openedx" target="_blank" rel="noopener noreferrer">See AI Studio <ArrowRight aria-hidden="true" /></a></Button></div></div></section>

      <section className="border-y border-border bg-surface py-16 md:py-24"><div className="site-shell"><ProductNumber className="text-accent">FAQ&apos;S</ProductNumber><div className="mt-6 max-w-4xl"><h2 className="section-title studio-section-title mb-8">Questions we get on discovery calls.</h2><div className="divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl marker:hidden">{question}<span className="text-accent transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-muted-foreground">{answer}</p></details>)}</div></div></div></section>
    </PageShell>
  );
}

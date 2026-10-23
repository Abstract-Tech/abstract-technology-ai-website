import { createFileRoute } from "@tanstack/react-router";

import studioImage from "@/assets/ai-studio-course-architect.png";
import assistantPreview from "@/assets/ai-assistant-preview.png";
import { FaqBlock } from "@/components/blocks/faq";
import { CtaBlock } from "@/components/blocks/cta";
import { ImageTextBlock } from "@/components/blocks/image-text";
import { MediaFeatureBlock } from "@/components/blocks/media-feature";
import { TableBlock } from "@/components/blocks/table";
import { ProductHero } from "@/components/heros/product-hero";
import { pageHead } from "@/lib/seo";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/ai-studio")({
  head: () => pageHead("/ai-studio"),
  component: StudioPage,
});

function StudioPage() {
  return (
    <PageShell>
      <ProductHero
        eyebrow="AI Studio"
        title={
          <>
            Create Online Courses
            <br />
            <em>in Minutes, not Weeks</em>
          </>
        }
        description="AI-powered content creation with built-in guardrails, including pedagogical and instructional design checks."
        videoSrc="https://player.vimeo.com/video/1231271012?title=0&byline=0&portrait=0&badge=0&dnt=1"
        videoTitle="The Abstract-Technology AI Studio for your Open edX® Platform"
        videoCaption="The Abstract-Technology AI Studio for your Open edX® Platform"
        ctaLabel={null}
      />

      <MediaFeatureBlock
        eyebrow="AI Studio"
        bgVariant="surface"
        title="Course creation, reimagined!"
        body="Planning a course used to mean weeks of outlining, restructuring and manual set-up. The AI Studio turns that process into a streamlined experience that takes only minutes. You start with a simple idea or prompt. The AI Studio guides you through a conversational planning process, helping you define your audience, learning outcomes and pacing. From there it builds the course structure for you, so you can spend your time on what matters: the content and the learners."
        imageSrc={studioImage}
        imageAlt="AI studio in Open edX"
        imageWidth={1323}
        imageHeight={800}
        cta={{
          label: "Schedule a live demo!",
          href: "https://abstract-technology.de/contact",
          external: true,
        }}
        features={[
          {
            title: "Conversational planning",
            description:
              "No blank page and no complicated forms. Describe what you want to teach and the AI Studio asks the right questions.",
          },
          {
            title: "Complete course outlines",
            description:
              "Sections, subsections and units are generated automatically, giving you a solid structure to work from.",
          },
          {
            title: "Instructors stay in charge",
            description:
              "Human-in-the-loop confirmation steps mean nothing is finalised without your approval.",
          },
          {
            title: "Built-in validation",
            description:
              "Automatic scans flag structural issues and empty units before they reach your learners.",
          },
          {
            title: "One-click export",
            description:
              "Finished courses go straight into Open edX Studio, ready for you to review, extend and publish.",
          },
          {
            title: "Who it is for",
            description:
              "Course authors and instructors, learning and development teams, platform administrators.",
          },
        ]}
      />

      <TableBlock
        eyebrow="Overview of the AI Studio"
        title="From prompt to course in four steps"
        columns={["", "Step", "Description"]}
        accentFirstColumn={false}
        columnWidths={["5%", "36%", "59%"]}
        rows={[
          [
            "1",
            "Describe your idea",
            "Start with a simple idea or prompt and open a guided, conversational planning session",
          ],
          [
            "2",
            "Define the essentials",
            "Answer questions about audience, outcomes and pacing. The AI Studio will shape the course concept around your goals.",
          ],
          [
            "3",
            "Review and confirm",
            "Approve, adjust or refine at each step. The AI Studio builds a complete, structured outline with sections, subsections and units",
          ],
          [
            "4",
            "Validate and export",
            "Check the results and export your course. The AI Studio flags structural issues and empty units, then exports to Open edX Studio with one click.",
          ],
        ]}
      />

      <ImageTextBlock
        bgVariant="surface"
        eyebrow="Your AI toolkit"
        title="Part of our growing AI toolkit for the Open edX platform"
        imageSrc={assistantPreview}
        imageAlt="Our AI Assistant for your Open edX Platform"
        imageWidth={1080}
        imageHeight={655}
        body="The AI Studio works hand in hand with our AI Assistant for Open edX. The AI Studio helps you create courses, and the AI Assistant helps learners, instructors and administrators manage the platform day to day."
      />

      <CtaBlock
        title="Less manual work. Fewer errors. More time for what matters."
        buttonLabel="Schedule a live demo!"
      />

      <FaqBlock
        bgVariant="surface"
        title="The questions we hear most."
        items={[
          {
            question: "What exactly does the AI Studio do?",
            answer:
              "It turns a short brief (“I want to teach new managers how to run their first retrospective”) into a complete, structured course outline for Open edX - sections, subsections, units, pacing and basic assessment points - through a short, guided conversation.\n\nYou review and refine at each step, and when you’re happy, one click sends the whole thing into your Open edX Studio.",
          },
          {
            question:
              "Does the AI write the course for me, or do I keep control?",
            answer:
              "You keep control. The AI Studio drafts; you decide. Every step - the audience definition, the learning outcomes, each section, each unit — needs your approval before it’s added. Nothing is exported or published without you.\n\nThink of it as a very fast instructional-design assistant that always waits for the green light.",
          },
          {
            question:
              "How does it fit with my existing Open edX setup?",
            answer:
              "The Studio installs alongside your Open edX platform and exports finished outlines straight into it, as proper course structure - not a text document you then have to re-type. Your existing templates, branding and XBlocks are untouched.",
          },
          {
            question: "Will it replace my course authors?",
            answer:
              "No - it removes the slowest part of their work so they can spend their time on content, examples and assessment design, which is where their expertise actually matters. Teams using it tell us they ship more courses with the same people, not fewer.",
          },
          {
            question: "How is it different from the AI Assistant?",
            answer:
              "They’re siblings. The AI Studio helps you create courses. The AI Assistant helps you run them - enrolments, dates, grades, learner questions. You can use either on its own, or both together for a full lifecycle setup.",
          },
          {
            question: "What kinds of courses work best?",
            answer:
              "It’s strongest on structured, outcome-based learning: onboarding, compliance, soft-skills, technical fundamentals, certification prep, L&D programmes. It also works well for shaping self-paced versions of existing instructor-led material.\n\nIt’s less useful for highly research-led or deeply personalised courses, where the planning itself is the point of the author’s craft.",
          },
        ]}
      />
    </PageShell>
  );
}

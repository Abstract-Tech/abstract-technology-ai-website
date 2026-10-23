import { createFileRoute } from "@tanstack/react-router";

import assistantImage from "@/assets/ai-assistant-openedx.webp";
import { FaqBlock } from "@/components/blocks/faq";
import { CtaBlock } from "@/components/blocks/cta";
import { FeaturedGridBlock } from "@/components/blocks/featured-grid";
import { MediaFeatureBlock } from "@/components/blocks/media-feature";
import { ExploreBlock } from "@/components/blocks/explore";
import { TableBlock } from "@/components/blocks/table";
import { TextBlock } from "@/components/blocks/text";
import { ProductHero } from "@/components/heros/product-hero";
import { pageHead } from "@/lib/seo";
import { PageShell, ProductNumber } from "@/components/site-layout";

export const Route = createFileRoute("/ai-assistant")({
  head: () => pageHead("/ai-assistant"),
  component: AssistantPage,
});

const capabilities = [
  [
    "Enrolment management",
    "Add, remove, change roles, invite in bulk. CSV or SCIM in, confirmation out.",
  ],
  [
    "Grading & progress",
    "Pull grades, pass rates, drop-off and time-on-task across cohorts, units or learners.",
  ],
  [
    "Dates & scheduling",
    "Shift deadlines, open and close enrolment, re-time entire schedules with preview.",
  ],
  [
    "Course audits",
    "Empty units, broken links, missing graders, outdated certificates, orphan content.",
  ],
  [
    "Certificates",
    "Issue, reissue, revoke, bulk-verify. Keeps the chain of signatures intact.",
  ],
  [
    "Discussion forums",
    "Open topics, moderate flags, summarise long threads, draft replies in your voice.",
  ],
  [
    "Email & nudges",
    "Draft and send personalised nudges to segments of learners. Preview and schedule.",
  ],
  [
    "Reports & exports",
    "Pivot the data you need and hand off CSV, PDF or a live link for stakeholders.",
  ],
  [
    "Your own tools",
    "Extend the assistant with internal APIs, LTI tools or an MCP server. Full SDK.",
  ],
];

const faqs = [
  [
    "Which Open edX releases are supported?",
    "The Assistant is tested against the three most recent named releases - currently and installs as a Tutor plugin. We publish compatibility notes with every Open edX release so you know what shifts when you upgrade.\n\nFor customers on older releases, we offer a one-off compatibility assessment before engagement.",
  ],
  [
    "Where does my data go? Which LLM powers it?",
    "You choose. The Assistant supports managed providers (Anthropic, OpenAI, Mistral, Azure OpenAI) and fully self-hosted open-weights models running on your own GPUs or in a private EU region.\n\nBy default, learner PII is not sent to the model. Tool outputs are redacted before any prompt leaves your tenant, and the DPA names every subprocessor in use. If you self-host the model, nothing leaves your network.",
  ],
  [
    "Do admins approve every action, or can it run autonomously?",
    "Every write operation requires explicit human confirmation by default. The assistant previews the exact objects it will touch (which courses, which learners, which rows) before anything is persisted.\n\nFor specific, idempotent operations - sending a nudge email, generating a weekly report - admins can grant standing approval. Confirmation requirements are configured per-tool, per-role, and the audit log makes it clear which actions ran autonomously.",
  ],
  [
    "Can learners use the Assistant too?",
    "Yes, and it’s typically where customers see the biggest reduction in support load. Learners get read-only answers scoped strictly to their own data: deadlines, grades, certificates, team membership and course content.",
  ],
  [
    "How is it priced?",
    "Three components make up the price: a flat platform fee (based on learner band), model usage (pass-through at provider cost, or zero if you self-host), and a one-off implementation that includes training and the first round of custom tools.\n\nWe’re happy to send a sample quote once we know your learner volume and hosting preference.",
  ],
  [
    "How does the AI Assistant relate to AI Studio?",
    "They’re siblings. The AI Assistant helps you run the LMS: administration, learner support, reporting, course audits. AI Studio helps you build the content: AI-powered course drafting with pedagogical and instructional-design guardrails. Both share the same security model and both can be deployed independently or together.",
  ],
];

function AssistantPage() {
  return (
    <PageShell>
      <ProductHero
        eyebrow="AI Assistant"
        title={
          <>
            Simplify
            <br />
            <em>LMS Administration</em>
          </>
        }
        description="Turn platform management into simple conversations using the AI Assistant and manage users, enrolments, and data in one place, without the usual complexity."
        videoSrc="https://player.vimeo.com/video/1231271817?title=0&byline=0&portrait=0&badge=0&dnt=1"
        videoTitle="The Abstract-Technology AI Assistant for your Open edX platform"
        videoCaption="The Abstract-Technology AI Assistant for your Open edX® platform"
      />

      <TextBlock
        bgVariant="surface"
        eyebrow="AI Assistant"
        title="Built for speed. Designed for control."
      >
        We build intelligent learning platforms, and our AI Assistant
        is the next step in making Open edX faster, smarter, and
        easier to manage. This assistant helps you reduce manual work,
        streamline operations, and interact with your platform in
        plain language—no complex navigation, no technical barriers.
        Embedded directly inside the LMS and Studio, the AI Assistant
        acts like a knowledgeable colleague who is always available.
        It helps you retrieve data, perform actions, and manage your
        platform in seconds—securely and with full control. What you
        see today is just the beginning. The assistant is built on an
        extensible architecture, allowing us to continuously expand
        its capabilities as your platform evolves.
      </TextBlock>

      <TableBlock
        eyebrow="Overview of the AI Assistant"
        title="Key Capabilities at a Glance"
        columns={["Who", "Prompt", "What the AI assistant does"]}
        rows={[
          [
            "Learner",
            "Progress, deadlines, certificates, teams, notifications",
            "Real-time responses in simple terminology.",
          ],
          [
            "Instructors and course authors",
            "Enrolments, grades, certificates, discussion activity, date changes, settings",
            "Reads data, carries out actions (with confirmation) and summarises the key findings",
          ],
          [
            "Admin",
            "Unrestricted access to all courses, users and tools.",
            "Acts as a super user and can perform all supported actions across the entire platform",
          ],
        ]}
      />

      <TextBlock
        bgVariant="surface"
        eyebrow="The solutions"
        title="Built for your infrastructure"
      >
        We build solutions that reduce complexity and give you
        control. The AI Assistant helps you eliminate repetitive
        tasks, reduce errors, and speed up every workflow on your
        platform. Course issues such as missing content, incorrect
        dates, or empty units can be identified instantly. Entire
        course schedules can be adjusted in seconds, with a full
        preview before any change is applied. User management tasks
        that once took hours can now be completed in a single request.
        The result is a platform that feels responsive, intelligent,
        and efficient—for everyone involved. This assistant is not a
        fixed feature. It is a growing system. We build it in a way
        that allows new capabilities to be added continuously as
        modular tools. This means your platform becomes more powerful
        over time without requiring major changes.
      </TextBlock>

      <CtaBlock title="Test the AI Assistant in a real environment and explore how it fits your use case." />

      <FeaturedGridBlock
        bgVariant="surface"
        eyebrow="Capabilities"
        title="A growing toolbox, not a fixed feature."
        items={capabilities.map(([title, description]) => ({
          title,
          description,
        }))}
      />

      <MediaFeatureBlock
        eyebrow="Security & control"
        title="Powerful by default. Reversible by design."
        body="Procurement teams and DPOs ask the same five questions. Here are the answers before you ask."
        imageSrc={assistantImage}
        imageAlt="Our AI Assistant for your Open edX Platform"
        imageWidth={1080}
        imageHeight={655}
        features={[
          {
            title: "Human-in-the-loop for every write",
            description:
              "Destructive and bulk actions require explicit confirmation. The assistant previews exactly what will change, in which rows, before anything is written.",
          },
          {
            title: "Your data stays in your tenant",
            description:
              "Deploy inside your own hosting (ours, yours, or a third party’s). Course data and PII are not shipped to the LLM. Tool outputs are redacted before any model call.",
          },
          {
            title: "Your choice of LLM",
            description:
              "Managed providers (Anthropic, OpenAI, Mistral, Azure OpenAI) or fully self-hosted open-weights models on your own GPUs. EU regions available for every option.",
          },
        ]}
      />

      <ExploreBlock
        bgVariant="surface"
        eyebrow="AI Studio for Open edX"
        title="AI Studio for Open edX"
        description="The Assistant handles the LMS. The Studio handles the authoring: AI-powered course drafting with pedagogical quality checks and assessment support, so instructors keep the pen while the AI does the typing."
        buttonLabel="See AI Studio"
        href="https://abstract-technology.de/ai-studio-openedx"
      />

      <FaqBlock
        title="Questions we get on discovery calls."
        items={faqs.map(([question, answer]) => ({
          question,
          answer,
        }))}
      />
    </PageShell>
  );
}

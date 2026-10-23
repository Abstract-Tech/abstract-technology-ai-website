import { createFileRoute } from "@tanstack/react-router";

import assistantImage from "@/assets/ai-assistant-openedx.webp";
import studioImage from "@/assets/ai-studio-openedx.webp";
import partnerImage from "@/assets/open-edx-partner.webp";
import { ImageTextBlock } from "@/components/blocks/image-text";
import { ExploreBlock } from "@/components/blocks/explore";
import { ProductGridBlock } from "@/components/blocks/product-grid";
import { SplitHero } from "@/components/heros/split-hero";
import { pageHead } from "@/lib/seo";
import { PageShell } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => pageHead("/"),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <SplitHero
        eyebrow="Abstract-Technology GmbH / AI for the Open edX® platform"
        title={
          <>
            We make AI
            <br />
            <em>useful.</em>
          </>
        }
        description="Explainable, GDPR-compliant AI for the Open edX® platform – for LMS administration and AI course authoring, built and hosted in Europe."
        aside={
          <>
            Abstract-Technology builds focused AI products for the
            Open edX® platform: the{" "}
            <strong className="text-foreground">AI Assistant</strong>,
            which manages your learning platform through
            natural-language conversation, and{" "}
            <strong className="text-foreground">AI Studio</strong>,
            which turns a single prompt into a complete online course.
            Hosted on EU servers, aligned with the EU AI Act.
          </>
        }
        asideLink={{
          label:
            "By Abstract-Technology, certified partner for the Open edX® platform in Europe",
          href: "https://abstract-technology.de/about",
          external: true,
        }}
      />

      <ProductGridBlock
        bgVariant="surface"
        eyebrow="AI products for the Open edX® platform"
        description="Two tools. One platform. Less manual work."
        items={[
          {
            eyebrow: "01 / LMS administration",
            title: (
              <>
                AI Assistant
                <br />
                for the Open edX® platform
              </>
            ),
            description:
              "A conversational AI assistant embedded in the LMS and Studio of the Open edX® platform. Learners, instructors and administrators manage enrolments, grades, deadlines, certificates and course audits in plain language – every change previewed and confirmed by a human.",
            imageSrc: assistantImage,
            imageAlt:
              "AI learning companion on a smartphone beside a notebook",
            imageWidth: 1080,
            imageHeight: 655,
            href: "/ai-assistant",
            linkLabel: "Explore the AI Assistant",
          },
          {
            eyebrow: "02 / AI course authoring",
            title: (
              <>
                AI Studio
                <br />
                for the Open edX® platform
              </>
            ),
            description:
              "An AI course authoring tool for instructional designers. Turn one prompt into a complete course with Bloom's-aligned learning objectives and assessments, then export it to the Open edX® platform in one click. Up to 60% faster course development.",
            imageSrc: studioImage,
            imageAlt:
              "AI Studio course creation tools displayed over a laptop",
            imageWidth: 1323,
            imageHeight: 800,
            href: "/ai-studio",
            linkLabel: "Explore AI Studio",
          },
        ]}
      />

      <ImageTextBlock
        eyebrow="About Abstract-Technology"
        title={
          <>
            Technology is abstract.
            <br />
            Its value should not be.
          </>
        }
        imageSrc={partnerImage}
        imageAlt="Open edX Partner"
        imageWidth={1080}
        imageHeight={655}
        body={
          <div className="border-t border-border pt-8">
            <p>
              Abstract-Technology GmbH is a Berlin-based certified
              partner for the Open edX® platform. We build, host and
              maintain learning platforms for universities, public
              institutions, enterprises and NGOs across Europe – and
              bring that experience to AI for education.
            </p>
            <p className="company-detail mt-8 text-muted-foreground">
              Our AI products follow the same principles as our
              learning platforms: hosting on EU servers in Germany,
              GDPR compliance, your choice of language model –
              including self-hosted models – and no vendor lock-in.
              Every AI recommendation is grounded in Bloom's Taxonomy,
              fully auditable and aligned with the EU AI Act. We build
              deliberately: one useful product at a time.
            </p>
          </div>
        }
      />

      <ExploreBlock
        bgVariant="surface"
        eyebrow="Start exploring"
        title="Two starting points for AI on the Open edX® platform."
        description="See the AI Assistant and AI Studio live in a 45-minute demo – no sales deck, just the Abstract-Technology architects who build and run the Open edX® platform every day."
        buttonLabel="Book a live demo"
        href="https://abstract-technology.de/contact"
      />
    </PageShell>
  );
}

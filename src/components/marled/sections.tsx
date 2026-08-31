import aiStudio from "@/assets/ai-studio.jpg";
import marledLogo from "@/assets/marled-logo.png.asset.json";
import workCgi from "@/assets/work-cgi.jpg";
import workUgc from "@/assets/work-ugc.jpg";
import workMotion from "@/assets/work-motion.jpg";
import workWeb from "@/assets/work-web.jpg";
import { ActionLink, Arrow, Eyebrow, Marquee, Reveal, SectionHeading } from "./primitives";

/* 03. WHAT MARLED DOES */

const capabilities = [
  {
    index: "01",
    title: "Performance",
    description:
      "Google Ads, Meta Ads and lead generation designed around measurable business outcomes.",
    items: ["Google Ads", "Meta Ads", "Lead Generation", "Retargeting", "Conversion Optimization"],
  },
  {
    index: "02",
    title: "Creative",
    description:
      "Social content, reels, motion graphics, AI UGC and CGI built to capture attention.",
    items: ["Social Media", "Reels", "Content Strategy", "Motion Graphics", "Brand Content"],
  },
  {
    index: "03",
    title: "Digital",
    description: "Websites and landing pages designed to turn attention into action.",
    items: ["Web Design", "Web Development", "Landing Pages", "Analytics", "Tracking"],
  },
  {
    index: "04",
    title: "Visibility",
    description:
      "SEO, Google Maps, AEO and GEO strategies that help customers discover your business.",
    items: ["SEO", "Google Business Profile", "Google Maps", "AEO", "GEO"],
  },
];

const cardOffsets = ["lg:mt-0", "lg:mt-14", "lg:-mt-6", "lg:mt-10"];
const cardTilts = [-1.6, 1.4, 1.8, -1.2];

export function WhatWeDo() {
  return (
    <section className="section-pad relative overflow-hidden bg-background">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />
      <div className="container-marled relative">
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title="Creative that moves business"
          copy="Strategy, creative production and performance living in one place, so your marketing does a lot more than look pretty."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={i * 90}
              tilt={cardTilts[i] ?? 0}
              className={cardOffsets[i] ?? ""}
            >
              <div className="brutal h-full bg-paper p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-6xl leading-none text-stroke-dark">
                    {cap.index}
                  </span>
                  <Arrow className="mt-2 h-5 w-5 text-graphite" />
                </div>
                <h3 className="display-md mt-6 text-graphite">{cap.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-graphite/70 sm:text-base">
                  {cap.description}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="mono-label border-2 border-graphite/25 px-2.5 py-1 text-[0.62rem] text-graphite/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 04. AI CREATIVE STUDIO */

const aiUgc = [
  ["AI UGC", "Creator-style product content designed for social feeds and paid campaigns."],
  ["AI Influencer / AI Model Videos", "Realistic influencer-style product content created for modern campaigns."],
  ["Product Demo", "Show the product clearly and communicate how it works."],
  ["Product Showcase", "Premium product-focused visuals for social and advertising."],
  ["Unboxing", "Creator-style unboxing experiences designed to build curiosity."],
  ["Product Review", "Review and testimonial-style creative designed to communicate product value."],
  ["Problem-Solution Ads", "Show the problem, introduce the product and communicate the solution quickly."],
  ["Talking Avatar", "AI presenter and talking avatar formats for promotional content."],
  ["Voice-Over Product Ads", "Narrative product advertising supported by professional voice-over."],
  ["Lifestyle Integration", "Place products naturally into aspirational lifestyle environments."],
  ["Storytelling Reels", "Short-form narratives designed for attention and retention."],
  ["Social Promotional Ads", "Direct-response creative designed for paid and organic social."],
];

const cgi = [
  ["Cinematic Product Reveal", "Premium cinematic introduction of a product."],
  ["Product Transformation", "Show a dramatic product transformation or visual transition."],
  ["3D Product Showcase", "Detailed 3D product presentation with controlled camera movement."],
  ["FOOH", "Large-scale fake out-of-home concepts designed to create social attention."],
  ["Luxury Product Commercials", "Premium cinematic advertising for high-value products."],
  ["VFX Product Ads", "Visual effects designed to make products more memorable."],
  ["Floating / Giant Product Concepts", "Surreal large-scale product concepts designed to stop the scroll."],
  ["Creative Product Launch", "Launch campaigns designed around strong visual storytelling."],
  ["Packaging Showcase", "Detailed packaging presentation with cinematic movement."],
  ["Realistic Product Integration", "Place products into realistic environments and scenes."],
  ["Cinematic Story Ads", "Short-form cinematic storytelling around a product or brand."],
  ["High-Energy Instagram Ads", "Fast, visually powerful advertising creatives designed for social feeds."],
];

function CategoryList({ label, entries }: { label: string; entries: string[][] }) {
  return (
    <div>
      <Eyebrow tone="light">{label}</Eyebrow>
      <ul className="mt-6 border-t-2 border-mist/25">
        {entries.map(([title, copy], i) => (
          <Reveal
            as="li"
            key={title}
            delay={Math.min(i * 40, 240)}
            className="group border-b-2 border-mist/15 py-5 transition-colors duration-300 hover:border-paper"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h4 className="font-display text-2xl uppercase leading-none text-paper transition-transform duration-300 group-hover:translate-x-2">
                  <span className="mr-3 text-mist/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {title}
                </h4>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist/65">{copy}</p>
              </div>
              <Arrow className="mt-1 h-4 w-4 shrink-0 text-mist/40 group-hover:text-paper" />
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function AiCreativeStudio() {
  return (
    <section className="grain relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="grain-layer" />
      <div className="relative">
        <div className="relative h-[38vh] min-h-[260px] w-full overflow-hidden">
          <img
            src={aiStudio}
            alt="Faceted metallic prisms refracting light in darkness"
            width={1408}
            height={912}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 grayscale"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0 0 0 / 55%) 0%, oklch(0 0 0 / 25%) 40%, oklch(0 0 0) 100%)",
            }}
          />
          <p className="display-xl absolute inset-x-0 bottom-0 translate-y-[18%] text-center text-stroke-light">
            AI Studio
          </p>
        </div>

        <div className="container-marled section-pad">
          <SectionHeading
            index="02"
            eyebrow="Marled AI Creative Studio"
            title="Creative without the old production limits"
            copy="AI-powered UGC, influencer-style content, product films and CGI advertising built for modern brands and very short attention spans."
            tone="light"
          />

          <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-16">
            <CategoryList label="AI UGC Creative" entries={aiUgc} />
            <CategoryList label="CGI Creative" entries={cgi} />
          </div>

          <Reveal className="mt-16 flex flex-wrap items-center gap-6">
            <ActionLink href="#contact" tone="invert">
              Create your next creative
            </ActionLink>
            <p className="mono-label text-mist/60">AI UGC + CGI + Motion + Performance</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 05. CREATIVE + PERFORMANCE */

const flow = [
  ["Strategy", "Understand the audience, offer and business goal."],
  ["Creative", "Build content and advertising assets designed to earn attention."],
  ["Distribution", "Put the right creative in front of the right audience."],
  ["Optimization", "Test, measure and improve."],
  ["Growth", "Scale what works."],
];

export function CreativePerformance() {
  return (
    <section className="section-pad bg-mist/40">
      <div className="container-marled grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal>
          <h2 className="display-lg max-w-[16ch] text-graphite">
            Creative grabs attention.{" "}
            <span className="text-stroke-dark">Performance</span> turns it into growth.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-graphite/70 sm:text-lg">
            Great creative without distribution stays invisible. Great distribution
            without great creative gets scrolled past. MARLED wires both together.
          </p>
        </Reveal>

        <ol className="space-y-4">
          {flow.map(([title, copy], i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              tilt={i % 2 === 0 ? -0.8 : 0.8}
              className={i % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}
            >
              <div className="brutal flex items-start gap-5 bg-paper p-6">
                <span className="font-display text-5xl leading-none text-stroke-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl uppercase leading-none text-graphite">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/70 sm:text-base">
                    {copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 06. SERVICES */

const serviceGroups = [
  { label: "Performance", items: ["Google Ads", "Meta Ads", "Lead Generation", "Retargeting", "Conversion Optimization"] },
  { label: "Content", items: ["Social Media", "Reels", "Content Strategy", "Motion Graphics", "Brand Content"] },
  {
    label: "AI Creative",
    items: [
      "AI UGC",
      "AI Influencer Videos",
      "AI Model Videos",
      "Product Demonstrations",
      "Product Reviews",
      "Testimonials",
      "CGI",
      "3D Product Films",
      "FOOH",
      "VFX Advertising",
    ],
  },
  { label: "Digital", items: ["Web Design", "Web Development", "Landing Pages", "Analytics", "Tracking"] },
  { label: "Search", items: ["SEO", "Google Business Profile", "Google Maps", "AEO", "GEO"] },
  { label: "Growth", items: ["Brand Strategy", "Positioning", "Lead Outreach", "Acquisition Strategy", "Growth Marketing"] },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="container-marled">
        <SectionHeading index="03" eyebrow="Services" title="What we can build with you" />
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 70}
              tilt={i % 3 === 1 ? 1.5 : -1.2}
              className={i % 3 === 1 ? "md:mt-8" : ""}
            >
              <div className="brutal h-full bg-paper p-7">
                <div className="flex items-center justify-between border-b-2 border-graphite pb-3">
                  <h3 className="font-display text-3xl uppercase leading-none text-graphite">
                    {group.label}
                  </h3>
                  <span className="mono-label text-graphite/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-graphite/80">
                      <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-graphite" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 07. WHY MARLED */

const principles = [
  ["One connected team", "Strategy, creative, performance and digital execution working together."],
  ["Built for modern attention", "We create content for the way people actually consume media today."],
  ["Creative with a purpose", "Every creative asset should have a reason to exist."],
  ["Focused on growth", "We care about qualified leads, customers, visibility and real outcomes."],
];

export function WhyMarled() {
  return (
    <section className="section-pad bg-graphite">
      <div className="container-marled">
        <SectionHeading
          index="04"
          eyebrow="Why Marled"
          title="No random marketing. No vanity metrics."
          copy="We start with the business problem, build the right creative and distribution system, then sharpen it with real performance data."
          tone="light"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {principles.map(([title, copy], i) => (
            <Reveal key={title} delay={i * 80} tilt={i % 2 === 0 ? 1.2 : -1.2}>
              <div className="brutal-light h-full bg-graphite p-8 sm:p-10">
                <span className="font-display text-5xl leading-none text-stroke-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-3xl uppercase leading-none text-paper">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist/70 sm:text-base">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 08. WHO WE WORK WITH */

const audiences = [
  ["Product brands", "Create demand, build attention and acquire customers."],
  ["Service businesses", "Generate qualified leads and build a stronger digital presence."],
  ["B2B companies", "Build visibility, demand and acquisition systems."],
  ["Growing startups", "Build the brand, digital presence and growth engine from scratch."],
];

export function WhoWeWorkWith() {
  return (
    <section className="section-pad bg-background">
      <div className="container-marled">
        <SectionHeading
          index="05"
          eyebrow="Who we work with"
          title="Built for brands with something to grow"
          copy="We work with businesses that want more than likes and impressions. They want visibility, sharper creative and growth they can measure."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([title, copy], i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className={i % 2 === 1 ? "lg:mt-10" : ""}
            >
              <div className="group border-t-4 border-graphite pt-5">
                <h3 className="font-display text-2xl uppercase leading-none text-graphite transition-colors group-hover:text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/70">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Marquee
        className="mt-20"
        items={["Loud creative", "Real growth", "Zero fluff", "Made to convert"]}
      />
    </section>
  );
}

/* 09. PROCESS */

const process = [
  ["01", "Discover", "Understand the business, audience, offer and goals."],
  ["02", "Strategize", "Build the creative and growth direction."],
  ["03", "Create", "Produce campaigns, content, websites and advertising assets."],
  ["04", "Launch", "Put the work into market."],
  ["05", "Optimize", "Measure, learn and improve."],
];

export function Process() {
  return (
    <section id="process" className="section-pad bg-ink">
      <div className="container-marled">
        <SectionHeading index="06" eyebrow="Our process" title="From idea to growth" tone="light" />

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.map(([num, title, copy], i) => (
            <Reveal
              as="li"
              key={num}
              delay={i * 100}
              tilt={i % 2 === 0 ? -1.4 : 1.4}
              className={i % 2 === 0 ? "lg:mt-8" : ""}
            >
              <div className="brutal-light h-full bg-ink p-6">
                <p className="font-display text-5xl leading-none text-stroke-light">{num}</p>
                <h3 className="mt-4 font-display text-2xl uppercase leading-none text-paper">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/65">{copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 10. SELECTED WORK */

const work = [
  {
    image: workCgi,
    alt: "Giant glossy geometric object floating above a reflective plaza",
    category: "CGI",
    title: "Floating product concept",
    copy: "Placeholder visual direction for a large-scale CGI product campaign. Ready to swap for real project work.",
  },
  {
    image: workUgc,
    alt: "Unbranded matte bottle on a faceted stone pedestal in hard light",
    category: "AI UGC",
    title: "Creator-style product series",
    copy: "Placeholder direction for AI UGC and product review formats. Ready to swap for real project work.",
  },
  {
    image: workMotion,
    alt: "Angular folded metallic ribbons twisting through a dark studio with streaks of silver light",
    category: "Motion",
    title: "Brand motion system",
    copy: "Placeholder direction for motion graphics and social creative. Ready to swap for real project work.",
  },
  {
    image: workWeb,
    alt: "Desktop and mobile devices showing a clean website layout on a graphite pedestal",
    category: "Web",
    title: "Conversion-focused site",
    copy: "Placeholder direction for web design and landing page work. Ready to swap for real project work.",
  },
];

export function Work() {
  return (
    <section id="work" className="section-pad relative overflow-hidden bg-mist/40">
      <div className="container-marled relative">
        <SectionHeading
          index="07"
          eyebrow="Selected work"
          title="Work that earns attention"
          copy="The projects below are placeholder visual directions created for this build. They are ready to be replaced with real MARLED work."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {work.map((item, i) => (
            <Reveal
              as="article"
              key={item.title}
              delay={i * 90}
              tilt={i % 2 === 0 ? -1.6 : 1.6}
              className={i % 2 === 1 ? "sm:mt-16" : ""}
            >
              <div className="group">
                <div className="relative overflow-hidden border-2 border-graphite bg-paper">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={1504}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <span className="mono-label absolute left-4 top-4 border-2 border-graphite bg-paper px-2.5 py-1 text-graphite">
                    {item.category}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="display-md text-graphite">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite/70">
                      {item.copy}
                    </p>
                  </div>
                  <Arrow className="mt-2 h-5 w-5 text-graphite" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. ABOUT */

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-marled grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>About Marled</Eyebrow>
          <h2 className="display-lg mt-6 max-w-[16ch] text-graphite">
            We sit where <span className="text-stroke-dark">creative</span> meets growth
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-graphite/75 sm:text-lg">
            <p>
              MARLED brings creative production, performance marketing, technology and
              growth strategy into one room.
            </p>
            <p>
              Instead of treating content, advertising, websites and growth as separate
              pieces, we wire them into one system.
            </p>
          </div>
          <p className="mt-7 inline-block -rotate-1 bg-graphite px-4 py-2 font-display text-2xl uppercase text-paper">
            That is what makes Marled different
          </p>
        </Reveal>
        <Reveal delay={150} tilt={2} className="relative">
          <div className="flex items-center justify-center overflow-hidden border-2 border-graphite bg-graphite p-8">
            <img
              src={marledLogo.url}
              alt="MARLED logo"
              width={1512}
              height={1008}
              loading="lazy"
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 12. FINAL CTA */

export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden bg-graphite">
      <div aria-hidden="true" className="grain-layer" />
      <div className="container-marled section-pad relative text-center">
        <Reveal>
          <h2 className="display-xl mx-auto max-w-[14ch] text-paper">
            Got something worth <span className="text-stroke-light">growing?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-mist/75 sm:text-lg">
            Tell us what you are building. If there is a strong opportunity here, let us
            talk it through.
          </p>
          <div className="mt-10 flex justify-center">
            <ActionLink href="#contact" tone="invert">
              Start a project
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 13. CONTACT */

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-marled grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="display-lg mt-6 text-graphite">Let us talk</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-graphite/75 sm:text-lg">
            Have a project, campaign or wild idea in mind? Reach MARLED directly.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href="tel:+919533322337"
              className="block font-display text-4xl uppercase leading-none text-graphite transition-opacity hover:opacity-70 sm:text-5xl"
            >
              +91 95333 22337
            </a>
            <a
              href="mailto:contact@marled.in"
              className="block font-display text-4xl uppercase leading-none text-graphite transition-opacity hover:opacity-70 sm:text-5xl"
            >
              contact@marled.in
            </a>
          </div>
        </Reveal>
        <Reveal delay={140} tilt={-1.5} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <ActionLink href="tel:+919533322337" className="min-h-[58px] px-9">
            Call Marled
          </ActionLink>
          <ActionLink href="mailto:contact@marled.in" tone="outline" className="min-h-[58px] px-9">
            Email Marled
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}

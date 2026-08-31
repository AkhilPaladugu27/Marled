import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/marled/nav";
import { Hero } from "@/components/marled/hero";
import {
  About,
  AiCreativeStudio,
  Contact,
  CreativePerformance,
  FinalCta,
  Process,
  Services,
  WhatWeDo,
  WhoWeWorkWith,
  WhyMarled,
  Work,
} from "@/components/marled/sections";
import { SiteFooter } from "@/components/marled/footer";

const title = "MARLED | Creative Growth Partner";
const description =
  "MARLED combines performance marketing, creative production, AI UGC, CGI, web development, search visibility and growth strategy to help ambitious brands grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <WhatWeDo />
        <AiCreativeStudio />
        <CreativePerformance />
        <Services />
        <WhyMarled />
        <WhoWeWorkWith />
        <Process />
        <Work />
        <About />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

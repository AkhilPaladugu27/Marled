import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-facet.jpg";
import { ActionLink, Eyebrow, Marquee, Reveal } from "./primitives";

const strip = [
  "Performance",
  "Creative",
  "AI UGC",
  "CGI",
  "Web",
  "Search",
  "Growth",
];

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="grain relative overflow-hidden bg-background pt-28 sm:pt-36">
      <div aria-hidden="true" className="grain-layer" />
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-reflect)" }}
      />

      <div className="container-marled relative pb-16 lg:pb-24">
        <Reveal>
          <Eyebrow>Creative / Performance / Technology / Growth</Eyebrow>
        </Reveal>

        <div className="relative mt-8">
          <Reveal delay={80}>
            <h1 className="display-xl text-graphite">
              <span className="block">Brands that</span>
              <span className="block pl-[6vw] text-stroke-dark">get noticed,</span>
              <span className="block">
                demand
                <span className="ml-[0.3em] inline-block -rotate-2 bg-graphite px-[0.18em] pb-[0.08em] text-paper">
                  that grows
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal
            delay={260}
            tilt={3}
            className="pointer-events-none absolute -top-6 right-0 hidden lg:block"
          >
            <div className="spin-slow flex h-28 w-28 items-center justify-center rounded-full border-2 border-graphite bg-paper">
              <span className="mono-label text-center text-[0.6rem] leading-tight text-graphite">
                Since
                <br />
                Day One
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-14">
          <Reveal delay={200} tilt={-1.4} className="max-w-xl">
            <div className="brutal bg-paper p-7">
              <p className="text-base leading-relaxed text-graphite/80 sm:text-lg">
                MARLED mixes creative, performance marketing, technology and growth
                strategy so ambitious businesses build louder brands and win real
                customers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ActionLink href="#contact">Start a project</ActionLink>
                <ActionLink href="#work" tone="outline">
                  See the work
                </ActionLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280} tilt={2} className="relative">
            <div className="relative overflow-hidden border-2 border-graphite bg-paper">
              <img
                src={heroImage}
                alt="Abstract faceted metallic sculpture lit in a studio"
                width={1408}
                height={1408}
                className="aspect-[4/3] w-full object-cover grayscale"
                style={{
                  transform: `translate3d(0, ${Math.min(offset * 0.05, 40)}px, 0) scale(1.08)`,
                }}
              />
            </div>
            <span className="mono-label absolute -bottom-4 -left-3 border-2 border-graphite bg-paper px-3 py-1 text-graphite">
              Studio 01
            </span>
          </Reveal>
        </div>
      </div>

      <Marquee items={strip} />
    </section>
  );
}

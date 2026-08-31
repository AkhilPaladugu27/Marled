import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll-triggered reveal wrapper. Supports a resting tilt angle. */
export function Reveal({
  children,
  className,
  delay = 0,
  tilt = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", visible && "is-visible", className)}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-tilt": `${tilt}deg`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mono-label inline-flex items-center gap-2 border-2 px-3 py-1",
        tone === "dark"
          ? "border-graphite/70 text-graphite"
          : "border-mist/50 text-mist",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-2 w-2",
          tone === "dark" ? "bg-graphite" : "bg-paper",
        )}
      />
      {children}
    </p>
  );
}

type ButtonTone = "solid" | "outline" | "invert" | "outlineLight";

const toneClasses: Record<ButtonTone, string> = {
  solid: "brutal bg-graphite text-paper",
  invert: "brutal-light bg-paper text-graphite",
  outline: "brutal bg-paper text-graphite",
  outlineLight: "brutal-light bg-transparent text-paper",
};

const baseButton =
  "group inline-flex min-h-[54px] items-center justify-center gap-3 whitespace-nowrap px-8 font-display text-lg uppercase tracking-[0.06em]";

export function ActionLink({
  href,
  children,
  tone = "solid",
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(baseButton, toneClasses[tone], className)}
    >
      {children}
      <Arrow />
    </a>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
        className,
      )}
    >
      <path d="M4 12h15" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Infinite scrolling ticker strip. */
export function Marquee({
  items,
  tone = "dark",
  reverse = false,
  className,
}: {
  items: string[];
  tone?: "dark" | "light";
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "overflow-hidden border-y-2 py-3",
        tone === "dark"
          ? "border-graphite bg-paper text-graphite"
          : "border-paper bg-graphite text-paper",
        className,
      )}
    >
      <div className={cn("marquee", reverse && "marquee-reverse")}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 font-display text-2xl uppercase tracking-[0.04em] sm:text-3xl"
          >
            {item}
            <span aria-hidden="true" className="inline-block h-2 w-2 rotate-45 bg-current" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  tone = "dark",
  align = "left",
  index,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  index?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center [&_p:first-child]:justify-center",
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        {index ? (
          <span
            className={cn(
              "font-display text-3xl leading-none",
              tone === "dark" ? "text-stroke-dark" : "text-stroke-light",
            )}
          >
            {index}
          </span>
        ) : null}
      </div>
      <h2
        className={cn("display-lg mt-6", tone === "dark" ? "text-graphite" : "text-paper")}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-graphite/70" : "text-mist/75",
          )}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

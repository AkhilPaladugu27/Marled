import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Arrow } from "./primitives";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b-2 border-graphite bg-background/90 backdrop-blur-xl"
          : "border-b-2 border-transparent",
      )}
    >
      <div
        className={cn(
          "container-marled flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-24",
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="MARLED home">
          <img
            src="/favicon.png"
            alt="MARLED logo"
            width={1512}
            height={1008}
            className={cn("w-auto transition-all duration-500", scrolled ? "h-6" : "h-9")}
          />
          <span className="font-display text-2xl uppercase tracking-[0.22em] text-graphite">
            Marled
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono-label border-b-2 border-transparent pb-1 text-graphite/70 transition-colors hover:border-graphite hover:text-graphite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden min-h-[44px] items-center gap-2 border-2 border-graphite bg-graphite px-5 font-display text-base uppercase tracking-[0.08em] text-paper transition-colors duration-300 hover:bg-paper hover:text-graphite md:inline-flex"
          >
            Start a project
            <Arrow className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border-2 border-graphite bg-paper text-graphite md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8h16" strokeLinecap="round" />
                  <path d="M4 16h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t-2 border-graphite bg-background/97 backdrop-blur-xl md:hidden">
          <nav className="container-marled flex flex-col py-2" aria-label="Mobile">
            {[...links, { label: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-graphite/20 py-4 font-display text-3xl uppercase text-graphite last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

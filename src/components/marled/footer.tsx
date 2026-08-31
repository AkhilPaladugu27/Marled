import logo from "@/assets/marled-logo.png.asset.json";
import { Marquee } from "./primitives";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-graphite">
      <Marquee
        tone="light"
        reverse
        items={["Creative", "Performance", "Technology", "Growth"]}
      />
      <div className="container-marled py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={logo.url}
              alt="MARLED logo"
              width={1512}
              height={1008}
              loading="lazy"
              className="h-12 w-auto"
            />
            <p className="mt-8 font-display text-4xl uppercase leading-[0.9] text-paper">
              Creative
              <br />
              <span className="text-stroke-light">growth</span>
              <br />
              company
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mono-label text-mist/60">Navigate</h2>
            <ul className="mt-5 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-display text-2xl uppercase text-mist/80 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mono-label text-mist/60">Contact</h2>
            <ul className="mt-5 space-y-3 text-base font-medium text-mist/80">
              <li>
                <a href="tel:+919533322337" className="transition-colors hover:text-paper">
                  +91 95333 22337
                </a>
              </li>
              <li>
                <a href="mailto:contact@marled.in" className="transition-colors hover:text-paper">
                  contact@marled.in
                </a>
              </li>
            </ul>
            <h2 className="mono-label mt-8 text-mist/60">Social</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/marled.in/" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mono-label inline-block border-2 border-mist/50 px-3 py-1 text-mist/80 transition-colors hover:border-paper hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t-2 border-mist/25 pt-6">
          <p className="mono-label text-mist/50">
            © {new Date().getFullYear()} Marled. All rights reserved.
          </p>
          <p className="mono-label text-mist/40">Made loud in India</p>
        </div>
      </div>
    </footer>
  );
}

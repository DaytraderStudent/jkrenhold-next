"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { name: "Tjenester", href: "#tjenester" },
  { name: "Prosess", href: "#prosess" },
  { name: "Priser", href: "#priser" },
  { name: "Kundehistorier", href: "#kundehistorier" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#F6F4EF]/80 backdrop-blur-2xl border-b border-border/40"
          : ""
      }`}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px] px-6 lg:px-10">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-heading italic text-2xl text-foreground tracking-tight">
            JK
          </span>
          <span className="hidden sm:block w-px h-5 bg-border" />
          <span className="hidden sm:block text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
            Renhold
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-[13px] text-foreground/50 hover:text-foreground transition-colors duration-300"
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#tilbud"
            className="relative text-[13px] font-medium text-foreground border border-foreground/15 rounded-full px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer"
            style={{ transitionTimingFunction: "var(--ease-in-out)" }}
          >
            Få tilbud
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden cursor-pointer" aria-label="Meny">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0 bg-[#F6F4EF]">
            <div className="flex flex-col h-full pt-20 px-8 pb-8">
              <nav className="flex flex-col gap-0">
                {links.map((l, i) => (
                  <a
                    key={l.name}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-4 text-2xl font-heading italic text-foreground/80 hover:text-foreground border-b border-border/40 transition-colors"
                  >
                    {l.name}
                  </a>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="#tilbud"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-foreground text-background py-4 rounded-full text-sm font-medium"
                >
                  Få gratis tilbud
                </a>
                <p className="text-[11px] text-muted-foreground text-center mt-4">
                  post@jkrenhold.no · 900 00 000
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

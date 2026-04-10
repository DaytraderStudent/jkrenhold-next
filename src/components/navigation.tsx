"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { name: "Tjenester", href: "#tjenester" },
  { name: "Slik fungerer det", href: "#prosess" },
  { name: "Kundehistorier", href: "#kundehistorier" },
  { name: "Områder", href: "#omrader" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F7F4]/80 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="font-heading font-bold text-primary-foreground text-xs tracking-tight">
              JK
            </span>
          </div>
          <span className="font-heading font-semibold text-[15px] text-foreground tracking-tight">
            JK Renhold
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="px-3 py-1.5 text-[13px] font-medium text-foreground/60 hover:text-foreground transition-colors rounded-md hover:bg-black/[0.03]"
            >
              {l.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+4790000000"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3" />
            900 00 000
          </a>
          <a
            href="#tilbud"
            className={buttonVariants({
              className:
                "bg-primary text-primary-foreground hover:bg-primary/90 text-[13px] font-medium h-8 px-4 cursor-pointer",
            })}
          >
            Få tilbud
          </a>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-1.5 cursor-pointer" aria-label="Meny">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-8">
            <nav className="flex flex-col gap-1 mt-12">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[15px] text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.name}
                </a>
              ))}
              <div className="h-px bg-border my-4" />
              <a
                href="tel:+4790000000"
                className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
              >
                <Phone className="w-4 h-4" />
                900 00 000
              </a>
              <a
                href="#tilbud"
                onClick={() => setOpen(false)}
                className={buttonVariants({
                  className:
                    "bg-primary text-primary-foreground w-full justify-center cursor-pointer",
                })}
              >
                Få gratis tilbud
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  { name: "Vaskehjelp", href: "#tjenester" },
  { name: "Flyttevask", href: "#tjenester" },
  { name: "Kontorrenhold", href: "#tjenester" },
  { name: "Vinduspuss", href: "#tjenester" },
  { name: "Trapperenhold", href: "#tjenester" },
];

const navLinks = [
  { name: "Tjenester", href: "#tjenester" },
  { name: "Om oss", href: "#om-oss" },
  { name: "Områder", href: "#omrader" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">
                JK
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-foreground text-base leading-tight">
                JK Renhold
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight tracking-wider uppercase">
                Profesjonelt renhold
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer">
                Tjenester
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border p-2 min-w-[200px]">
                  {services.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors animated-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+4790000000"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              900 00 000
            </a>
            <a
              href="#tilbud"
              className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-white font-medium px-5 cursor-pointer" })}
            >
              Gratis tilbud
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden p-2 cursor-pointer"
              aria-label="Åpne meny"
            >
              {open ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-6">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Tjenester
                  </p>
                  {services.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="py-2 text-foreground/80 hover:text-foreground transition-colors text-sm"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
                <div className="h-px bg-border" />
                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-1 text-foreground font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-border" />
                <a
                  href="tel:+4790000000"
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  900 00 000
                </a>
                <a
                  href="#tilbud"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-white font-medium w-full cursor-pointer" })}
                >
                  Få gratis tilbud
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

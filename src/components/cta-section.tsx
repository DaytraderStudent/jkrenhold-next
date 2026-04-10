"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-4">
          Klar for et renere hjem?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Det koster ingenting å sende en forespørsel. Vi finner den beste
          lokale renholdsleverandøren for deg — raskt og uforpliktende.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tilbud"
            className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-13 text-base cursor-pointer group" })}
          >
            Få gratis tilbud nå
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+4790000000"
            className={buttonVariants({ variant: "outline", size: "lg", className: "border-border hover:bg-secondary font-medium h-13 text-base cursor-pointer" })}
          >
            <Phone className="w-4 h-4 mr-2" />
            Ring oss direkte
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border max-w-lg mx-auto">
          <div>
            <p className="font-heading font-bold text-3xl text-foreground">
              15+
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Års erfaring
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-3xl text-foreground">
              1 000+
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Fornøyde kunder
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-3xl text-foreground">
              4.8
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Snittkarakter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

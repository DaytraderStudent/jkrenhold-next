"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="prosess" className="relative overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Editorial heading — left aligned, dramatic */}
        <div className="mb-20 lg:mb-28">
          <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] mb-4">
            Prosess
          </p>
          <h2 className="font-heading italic text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em]">
            Tre steg.
            <br />
            <span className="text-[#C48B3F]">Null stress.</span>
          </h2>
        </div>

        {/* Steps — editorial row layout with alternating image */}
        <div className="flex flex-col gap-0">
          {/* Step 1 */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center py-12 lg:py-16 border-t border-border/60">
            <div className="flex gap-8 items-start">
              <span className="font-heading italic text-[5rem] lg:text-[7rem] text-foreground/[0.04] leading-none shrink-0 -mt-4">
                01
              </span>
              <div>
                <h3 className="font-heading italic text-2xl mb-3">
                  Fortell oss hva du trenger
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-sm">
                  Fyll ut et kort skjema med type renhold, adressen din og ønsket frekvens. Det tar under 60 sekunder.
                </p>
              </div>
            </div>
            <div className="relative h-[240px] rounded-2xl overflow-hidden lg:ml-auto lg:w-[85%]">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Lyst stueinteriør"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center py-12 lg:py-16 border-t border-border/60">
            <div className="relative h-[240px] rounded-2xl overflow-hidden order-2 lg:order-1 lg:w-[85%]">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Rent kjøkken"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="flex gap-8 items-start order-1 lg:order-2">
              <span className="font-heading italic text-[5rem] lg:text-[7rem] text-foreground/[0.04] leading-none shrink-0 -mt-4">
                02
              </span>
              <div>
                <h3 className="font-heading italic text-2xl mb-3">
                  Vi matcher deg
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-sm">
                  Innen 24 timer kontakter vi deg med den beste lokale leverandøren, tilpasset dine behov og budsjett.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center py-12 lg:py-16 border-t border-border/60">
            <div className="flex gap-8 items-start">
              <span className="font-heading italic text-[5rem] lg:text-[7rem] text-foreground/[0.04] leading-none shrink-0 -mt-4">
                03
              </span>
              <div>
                <h3 className="font-heading italic text-2xl mb-3">
                  Nyt et rent hjem
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-sm mb-6">
                  Velg leverandøren som passer deg. Vi følger opp og garanterer kvaliteten — hver gang.
                </p>
                <a
                  href="#tilbud"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/20 pb-0.5 hover:border-foreground transition-colors duration-500 cursor-pointer group"
                >
                  Kom i gang — det er gratis
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="relative h-[240px] rounded-2xl overflow-hidden lg:ml-auto lg:w-[85%]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Flott stue"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

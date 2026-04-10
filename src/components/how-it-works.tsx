"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Fortell oss hva du trenger",
      body: "Fyll ut skjemaet med type renhold, adresse og ønsket frekvens. Under 60 sekunder.",
    },
    {
      num: "02",
      title: "Vi matcher deg",
      body: "Innen 24 timer finner vi den beste lokale leverandøren for akkurat ditt behov og budsjett.",
    },
    {
      num: "03",
      title: "Nyt et rent hjem",
      body: "Renholderne kommer som avtalt. Vi følger opp for å sikre at du er 100 % fornøyd.",
    },
  ];

  return (
    <section id="prosess" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image collage */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Profesjonell rengjøring"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A14]/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-xl shadow-xl shadow-black/10 p-5 border border-border/60">
              <p className="font-heading font-bold text-2xl text-[#1B4332]">24t</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Gjennomsnittlig responstid</p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 -left-3 sm:left-6 bg-[#1B4332] text-white rounded-lg px-4 py-2.5 shadow-lg">
              <p className="font-heading font-bold text-sm">100%</p>
              <p className="text-[10px] text-white/50">Gratis formidling</p>
            </div>
          </div>

          {/* Right — Steps */}
          <div>
            <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
              Prosess
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight leading-[1.1] mb-4">
              Tre steg til rent hjem
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-10 max-w-md">
              Vi har gjort det enkelt å finne riktig renholder. Du trenger bare å fortelle oss hva du trenger.
            </p>

            <div className="flex flex-col gap-8">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5 group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1B4332]/[0.06] flex items-center justify-center group-hover:bg-[#1B4332] transition-colors duration-300">
                    <span className="font-heading font-bold text-sm text-[#1B4332]/40 group-hover:text-white transition-colors duration-300">
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[15px] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#tilbud"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-[#1B4332] text-white hover:bg-[#1B4332]/90 h-11 px-6 text-sm font-medium cursor-pointer group",
                })}
              >
                Start her — det er gratis
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

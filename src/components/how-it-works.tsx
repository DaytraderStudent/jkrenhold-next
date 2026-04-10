"use client";

import { MessageSquare, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Fortell oss hva du trenger",
    description:
      "Send inn en kort forespørsel med type renhold, frekvens og sted. Det tar under ett minutt.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Motta tilbud",
    description:
      "Vi matcher deg med kvalifiserte, lokale renholdere og du mottar et uforpliktende tilbud innen 24 timer.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Nyt et rent hjem",
    description:
      "Velg den leverandøren som passer best. Vi følger opp for å sikre at du er fornøyd.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
            Slik fungerer det
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Tre steg til rent hjem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center group">
              {/* Step circle */}
              <div className="relative mx-auto mb-6">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-primary flex items-center justify-center mx-auto relative z-10 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-foreground text-xs font-bold flex items-center justify-center z-20">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Home, Truck, Building2, Sparkles, Wind, Waves } from "lucide-react";

const services = [
  {
    title: "Vaskehjelp",
    description:
      "Fast renholder som kjenner hjemmet ditt. Ukentlig eller annenhver uke — du bestemmer rytmen.",
    icon: <Home className="w-5 h-5 text-[#2D6A4F]" />,
    header: (
      <div className="relative w-full h-full min-h-[8rem] rounded-lg overflow-hidden bg-gradient-to-br from-[#1B4332]/10 via-[#2D6A4F]/5 to-transparent flex items-end p-4">
        <span className="font-heading text-[2.5rem] font-bold text-[#1B4332]/[0.07] leading-none">
          450,-
        </span>
        <span className="text-[11px] text-muted-foreground ml-1 mb-2">/time</span>
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Flyttevask",
    description:
      "Grundig rengjøring som sikrer depositumet ditt. Sjekkliste inkludert.",
    icon: <Truck className="w-5 h-5 text-[#C8965A]" />,
    header: (
      <div className="relative w-full h-full min-h-[8rem] rounded-lg overflow-hidden bg-gradient-to-br from-[#C8965A]/10 via-[#C8965A]/5 to-transparent flex items-center justify-center">
        <div className="text-center">
          <span className="block font-heading text-lg font-semibold text-[#C8965A]/60">Depositum</span>
          <span className="block text-xs text-muted-foreground">garantert tilbake</span>
        </div>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Kontorrenhold",
    description:
      "Profesjonelt renhold tilpasset bedriftens behov. Fastpris-avtale.",
    icon: <Building2 className="w-5 h-5 text-[#1B4332]" />,
    header: (
      <div className="relative w-full h-full min-h-[8rem] rounded-lg overflow-hidden bg-gradient-to-br from-[#1B4332]/8 to-transparent flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded bg-[#1B4332]" />
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Vinduspuss & spesialrenhold",
    description:
      "Vinduer, trappeoppganger, fasader og terrasser. De jobbene som krever litt ekstra.",
    icon: <Wind className="w-5 h-5 text-[#6B8F71]" />,
    header: (
      <div className="relative w-full h-full min-h-[8rem] rounded-lg overflow-hidden bg-gradient-to-br from-[#6B8F71]/10 to-transparent flex items-center justify-center">
        <div className="flex gap-3">
          <Sparkles className="w-8 h-8 text-[#6B8F71]/20" />
          <Waves className="w-8 h-8 text-[#6B8F71]/15" />
          <Wind className="w-8 h-8 text-[#6B8F71]/10" />
        </div>
      </div>
    ),
    className: "md:col-span-2",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="py-28 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
              Tjenester
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight leading-[1.1]">
              Hva trenger du hjelp med?
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Alle våre partnere er sertifiserte, forsikrede og lokalt forankret.
          </p>
        </div>

        <BentoGrid className="md:auto-rows-[16rem] gap-5">
          {services.map((s, i) => (
            <BentoGridItem
              key={i}
              title={s.title}
              description={s.description}
              header={s.header}
              icon={s.icon}
              className={`${s.className} border-border/60 bg-white/80 backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-pointer`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

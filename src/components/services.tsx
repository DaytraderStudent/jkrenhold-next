"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Vaskehjelp",
    description:
      "Fast renholder som kjenner hjemmet ditt. Ukentlig eller annenhver uke.",
    price: "Fra 450,-/t",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Flyttevask",
    description: "Grundig rengjøring som sikrer depositumet ditt.",
    price: "Fra 3 500,-",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Kontorrenhold",
    description: "Profesjonelt renhold for bedrifter. Fastpris-avtale.",
    price: "Få tilbud",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Vinduspuss",
    description: "Innvendig og utvendig. Også fasade og trapperenhold.",
    price: "Få tilbud",
    image:
      "https://images.unsplash.com/photo-1527515637462-cee1395c529c?w=600&q=80",
    span: "md:col-span-1",
    large: false,
  },
  {
    title: "Byggevask",
    description: "Profesjonell rengjøring etter oppussing og nybygg.",
    price: "Få tilbud",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    span: "md:col-span-1",
    large: false,
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
            Alle våre partnere er sertifiserte, forsikrede og lokalt
            forankret i ditt nærområde.
          </p>
        </div>

        {/* Bento-style image grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {services.map((s) => (
            <a
              key={s.title}
              href="#tilbud"
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${s.span} ${
                s.large ? "min-h-[420px]" : "min-h-[220px]"
              }`}
            >
              {/* Image */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={s.large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-1 flex items-center gap-2">
                      {s.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-white/50 text-[13px] leading-relaxed max-w-[280px]">
                      {s.description}
                    </p>
                  </div>
                  <span className="text-[#C8965A] text-sm font-medium whitespace-nowrap ml-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    {s.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

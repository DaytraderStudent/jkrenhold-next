"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Vaskehjelp",
    tag: "Privat",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
  },
  {
    title: "Flyttevask",
    tag: "Inn / Ut",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
  },
  {
    title: "Kontorrenhold",
    tag: "Bedrift",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  },
  {
    title: "Spesialrenhold",
    tag: "Vinduer · Fasade",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="relative bg-[#1A3C2A] overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Editorial heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="font-heading italic text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white">
            Hva trenger du
            <br />
            <span className="text-[#C48B3F]">hjelp med?</span>
          </h2>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed lg:pb-2">
            Fire kjernetjenester. Alle levert av sertifiserte, lokale partnere med garanti.
          </p>
        </div>

        {/* Staggered image cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <a
              key={s.title}
              href="#tilbud"
              className={`group relative rounded-2xl overflow-hidden cursor-pointer block ${
                i % 2 !== 0 ? "lg:translate-y-8" : ""
              }`}
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.06]"
                style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] text-white/50 uppercase tracking-[0.15em] font-medium bg-white/10 backdrop-blur-md rounded-full px-3 py-1">
                  {s.tag}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <h3 className="font-heading italic text-xl sm:text-2xl text-white leading-tight">
                    {s.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

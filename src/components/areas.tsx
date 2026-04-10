"use client";

import { MapPin } from "lucide-react";

const cities = [
  "Oslo",
  "Bergen",
  "Trondheim",
  "Stavanger",
  "Drammen",
  "Kristiansand",
  "Fredrikstad",
  "Tønsberg",
  "Sandefjord",
  "Tromsø",
  "Bodø",
  "Ålesund",
  "Haugesund",
  "Larvik",
  "Skien",
  "Porsgrunn",
  "Moss",
  "Sarpsborg",
  "Horten",
  "Arendal",
];

export function Areas() {
  return (
    <section id="omrader" className="py-28 bg-[#0E1A14] relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#2D6A4F]/6 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center max-w-lg mx-auto mb-14">
          <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
            Dekning
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight text-white leading-[1.1] mb-3">
            Lokalt renhold, hele landet
          </h2>
          <p className="text-white/35 text-sm leading-relaxed">
            Vi har partnere i over 50 byer og kommuner. Finner vi ikke dekning i ditt område, hjelper vi deg videre.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E1A14] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E1A14] to-transparent z-10" />

          <div className="marquee-track" style={{ "--duration": "35s", "--gap": "1rem" } as React.CSSProperties}>
            {[...cities, ...cities].map((city, i) => (
              <a
                key={i}
                href="#tilbud"
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-white/50 text-sm hover:bg-white/[0.06] hover:text-white/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                {city}
              </a>
            ))}
          </div>

          <div className="marquee-track mt-3" style={{ "--duration": "40s", "--gap": "1rem", animationDirection: "reverse" } as React.CSSProperties}>
            {[...cities.slice(10), ...cities.slice(0, 10), ...cities.slice(10), ...cities.slice(0, 10)].map((city, i) => (
              <a
                key={i}
                href="#tilbud"
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-white/50 text-sm hover:bg-white/[0.06] hover:text-white/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-3 h-3 text-[#C8965A]/50" />
                {city}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[13px] text-white/25">
            Ser du ikke din by?{" "}
            <a href="#tilbud" className="text-[#C8965A]/60 hover:text-[#C8965A] transition-colors underline underline-offset-2">
              Send en forespørsel
            </a>{" "}
            — vi utvider hele tiden.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kristine M.",
    location: "Tønsberg",
    service: "Vaskehjelp",
    text: "Endelig en vaskehjelp som gjør jobben skikkelig. Hanna kommer annenhver uke og hjemmet ser fantastisk ut etterpå. Veldig glad for at jeg fant JK Renhold.",
    rating: 5,
  },
  {
    name: "Erik B.",
    location: "Oslo",
    service: "Flyttevask",
    text: "Brukte JK Renhold til flyttevasken da vi solgte leiligheten. Rask respons, grei pris og kjemperesultat. Fikk tilbake hele depositumet uten problemer.",
    rating: 5,
  },
  {
    name: "Silje og Thomas",
    location: "Bergen",
    service: "Kontorrenhold",
    text: "Vi har prøvd flere renholdsfirmaer for kontoret vårt. JK Renhold matchet oss med en lokal leverandør som forstår behovene våre. Stor forskjell.",
    rating: 5,
  },
  {
    name: "Morten L.",
    location: "Stavanger",
    service: "Vaskehjelp",
    text: "Ukentlig vaskehjelp som er pålitelig og grundig. Det frigjør tid til det som betyr mest. Anbefales varmt.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
            Kundeomtaler
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Det kundene sier
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Over 1 000 fornøyde kunder har brukt JK Renhold til å finne sin
            renholdsleverandør.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/12 transition-colors duration-300"
            >
              <Quote className="w-6 h-6 text-accent/60 mb-4" />
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3 h-3 fill-accent text-accent"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-white/50 text-xs">
                  {t.location} · {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { TestimonialStack, type Testimonial } from "@/components/glass-testimonial-swiper";
import { Star, MapPin } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "KM",
    name: "Kristine M.",
    role: "Tønsberg — Fast vaskehjelp",
    quote:
      "Endelig en vaskehjelp som gjør jobben skikkelig. Hanna kommer annenhver uke og hjemmet ser fantastisk ut etterpå.",
    tags: [
      { text: "Fast avtale", type: "featured" },
      { text: "Vaskehjelp", type: "default" },
    ],
    stats: [
      { icon: Star, text: "5.0" },
      { icon: MapPin, text: "Vestfold" },
    ],
    avatarGradient: "linear-gradient(135deg, #2B5E42, #1A3C2A)",
  },
  {
    id: 2,
    initials: "EB",
    name: "Erik B.",
    role: "Oslo — Flyttevask",
    quote:
      "Rask respons, grei pris og kjemperesultat. Fikk tilbake hele depositumet uten problemer. Anbefales!",
    tags: [
      { text: "Depositum OK", type: "featured" },
      { text: "Flyttevask", type: "default" },
    ],
    stats: [
      { icon: Star, text: "5.0" },
      { icon: MapPin, text: "Oslo" },
    ],
    avatarGradient: "linear-gradient(135deg, #C48B3F, #A0764C)",
  },
  {
    id: 3,
    initials: "ST",
    name: "Silje & Thomas",
    role: "Bergen — Kontorrenhold",
    quote:
      "JK Renhold matchet oss med en lokal leverandør som forstår behovene våre. Stor forskjell i kvaliteten.",
    tags: [
      { text: "Bedrift", type: "featured" },
      { text: "Kontor", type: "default" },
    ],
    stats: [
      { icon: Star, text: "4.9" },
      { icon: MapPin, text: "Bergen" },
    ],
    avatarGradient: "linear-gradient(135deg, #5E8A6A, #2B5E42)",
  },
  {
    id: 4,
    initials: "ML",
    name: "Morten L.",
    role: "Stavanger — Ukentlig",
    quote:
      "Pålitelig og grundig ukentlig vaskehjelp. Frigjør tid til det som betyr mest. Kan varmt anbefales.",
    tags: [
      { text: "Ukentlig", type: "featured" },
      { text: "Privat", type: "default" },
    ],
    stats: [
      { icon: Star, text: "5.0" },
      { icon: MapPin, text: "Rogaland" },
    ],
    avatarGradient: "linear-gradient(135deg, #1A3C2A, #0E1A14)",
  },
];

export function Testimonials() {
  return (
    <section id="kundehistorier" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] mb-4">
              Kundehistorier
            </p>
            <h2 className="font-heading italic text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mb-4">
              Fra de som
              <br />
              <span className="text-[#C48B3F]">har prøvd</span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-10 max-w-sm">
              Over 1 000 privatpersoner og bedrifter har funnet sin renholdsleverandør gjennom oss.
            </p>

            {/* Big stats */}
            <div className="flex gap-12">
              {[
                { val: "4.8", label: "Snittkarakter" },
                { val: "98%", label: "Anbefaler oss" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-heading italic text-4xl text-foreground">{s.val}</span>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Swiper */}
          <TestimonialStack testimonials={testimonials} visibleBehind={2} />
        </div>
      </div>
    </section>
  );
}

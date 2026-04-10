"use client";

import { TestimonialStack, type Testimonial } from "@/components/glass-testimonial-swiper";
import { Star, MapPin } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "KM",
    name: "Kristine M.",
    role: "Tønsberg · Vaskehjelp",
    quote:
      "Endelig en vaskehjelp som gjør jobben skikkelig. Hanna kommer annenhver uke og hjemmet ser fantastisk ut etterpå. Veldig glad for at jeg fant JK Renhold.",
    tags: [
      { text: "Fast avtale", type: "featured" },
      { text: "Vaskehjelp", type: "default" },
    ],
    stats: [
      { icon: Star, text: "5.0" },
      { icon: MapPin, text: "Vestfold" },
    ],
    avatarGradient: "linear-gradient(135deg, #2D6A4F, #1B4332)",
  },
  {
    id: 2,
    initials: "EB",
    name: "Erik B.",
    role: "Oslo · Flyttevask",
    quote:
      "Brukte JK Renhold til flyttevasken da vi solgte leiligheten. Rask respons, grei pris og kjemperesultat. Fikk tilbake hele depositumet uten problemer.",
    tags: [
      { text: "Depositum tilbake", type: "featured" },
      { text: "Flyttevask", type: "default" },
    ],
    stats: [
      { icon: Star, text: "5.0" },
      { icon: MapPin, text: "Oslo" },
    ],
    avatarGradient: "linear-gradient(135deg, #C8965A, #A67C52)",
  },
  {
    id: 3,
    initials: "ST",
    name: "Silje & Thomas",
    role: "Bergen · Kontorrenhold",
    quote:
      "Vi har prøvd flere renholdsfirmaer for kontoret. JK Renhold matchet oss med en lokal leverandør som forstår behovene våre. Stor forskjell i kvaliteten.",
    tags: [
      { text: "Bedrift", type: "featured" },
      { text: "Kontorrenhold", type: "default" },
    ],
    stats: [
      { icon: Star, text: "4.9" },
      { icon: MapPin, text: "Bergen" },
    ],
    avatarGradient: "linear-gradient(135deg, #6B8F71, #2D6A4F)",
  },
  {
    id: 4,
    initials: "ML",
    name: "Morten L.",
    role: "Stavanger · Vaskehjelp",
    quote:
      "Ukentlig vaskehjelp som er pålitelig og grundig. Det frigjør tid til det som betyr mest. Anbefales varmt til alle.",
    tags: [
      { text: "Ukentlig", type: "featured" },
      { text: "Privat", type: "default" },
    ],
    stats: [
      { icon: Star, text: "5.0" },
      { icon: MapPin, text: "Rogaland" },
    ],
    avatarGradient: "linear-gradient(135deg, #1B4332, #0E1A14)",
  },
];

export function Testimonials() {
  return (
    <section id="kundehistorier" className="py-28 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
              Kundehistorier
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight leading-[1.1] mb-4">
              Ekte erfaringer fra ekte kunder
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              Over 1 000 privatpersoner og bedrifter har brukt JK Renhold til å
              finne sin renholdsleverandør.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-heading font-bold text-2xl text-foreground">4.8</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Snittkarakter</p>
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-foreground">1 000+</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Kunder</p>
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-foreground">98%</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Anbefaler oss</p>
              </div>
            </div>
          </div>

          {/* Right — Swiper */}
          <div>
            <TestimonialStack testimonials={testimonials} visibleBehind={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

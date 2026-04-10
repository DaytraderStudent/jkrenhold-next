"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Clock,
  BadgeCheck,
  MapPin,
  HeartHandshake,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Kvalitetsgaranti", body: "Ikke fornøyd? Ny renholder — gratis." },
  { icon: Award, title: "Sertifiserte", body: "Godkjent renholdskort og referanser." },
  { icon: BadgeCheck, title: "Forsikret", body: "Full ansvarsforsikring på alle oppdrag." },
  { icon: MapPin, title: "Lokalt", body: "Renholdere fra ditt nærområde." },
  { icon: Clock, title: "24t respons", body: "Rask matching og oppfølging." },
  { icon: HeartHandshake, title: "Personlig", body: "Dedikert kontaktperson for deg." },
];

export function Trust() {
  return (
    <section className="relative bg-[#1A3C2A] overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          {/* Left — overlapping images */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Profesjonell rengjøring"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            {/* Secondary overlapping image */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 w-[55%] aspect-[4/3] rounded-xl overflow-hidden border-4 border-[#1A3C2A] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt="Rent kjøkken"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>

          {/* Right — text + grid */}
          <div>
            <p className="text-[11px] text-[#C48B3F] uppercase tracking-[0.25em] mb-4">
              Hvorfor oss
            </p>
            <h2 className="font-heading italic text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6">
              Trygghet i
              <br />
              <span className="text-[#C48B3F]">hver</span> detalj
            </h2>
            <p className="text-white/30 text-[15px] leading-relaxed mb-12 max-w-md">
              Vi tar kvalitet på alvor. Alle partnere er nøye utvalgt, kontrollert og følges opp med kvalitetskontroll.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.title} className="group">
                  <item.icon className="w-5 h-5 text-[#C48B3F]/60 mb-3 group-hover:text-[#C48B3F] transition-colors duration-500" />
                  <h3 className="text-[13px] font-medium text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/25 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

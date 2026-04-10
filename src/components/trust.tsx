"use client";

import { GlowCard } from "@/components/spotlight-card";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Kvalitetsgaranti",
    body: "Ikke fornøyd? Vi sender ny renholder — uten ekstra kostnad.",
    color: "green" as const,
  },
  {
    icon: Award,
    title: "Sertifiserte partnere",
    body: "Godkjent renholdskort, ansvarsforsikring og referanser sjekket.",
    color: "green" as const,
  },
  {
    icon: BadgeCheck,
    title: "Full forsikring",
    body: "Ansvarsforsikring dekker alle oppdrag. Trygt for deg og ditt.",
    color: "blue" as const,
  },
  {
    icon: MapPin,
    title: "Lokal forankring",
    body: "Renholdere som kjenner nærområdet ditt og kan komme raskt.",
    color: "green" as const,
  },
  {
    icon: Clock,
    title: "Svar innen 24t",
    body: "Rask respons og matching med riktig leverandør etter behov.",
    color: "blue" as const,
  },
  {
    icon: Users,
    title: "Personlig oppfølging",
    body: "Dedikert kontaktperson som sørger for at alt fungerer.",
    color: "green" as const,
  },
];

export function Trust() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="max-w-lg mb-14">
          <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
            Trygghet
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight leading-[1.1] mb-3">
            Vi gjør det enkelt å stole på oss
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Alle partnere er nøye utvalgt og følges opp med kvalitetskontroll.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <GlowCard
              key={item.title}
              glowColor={item.color}
              customSize
              className="!aspect-auto !grid-rows-none !p-0 !shadow-none !rounded-xl"
            >
              <div className="relative z-10 p-6">
                <div className="w-9 h-9 rounded-lg bg-[#1B4332]/8 flex items-center justify-center mb-4">
                  <item.icon className="w-4 h-4 text-[#1B4332]" />
                </div>
                <h3 className="font-heading font-semibold text-[15px] mb-1.5 text-foreground">
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

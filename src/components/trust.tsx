"use client";

import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  BadgeCheck,
  Handshake,
} from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Kvalitetsgaranti",
    description:
      "Ikke fornøyd? Vi sender en ny renholder — uten ekstra kostnad.",
  },
  {
    icon: Award,
    title: "Sertifiserte partnere",
    description:
      "Alle våre renholdere er godkjent, forsikret og har gyldig renholdskort.",
  },
  {
    icon: BadgeCheck,
    title: "Forsikret",
    description:
      "Full ansvarsforsikring på alle oppdrag. Du er trygg med oss.",
  },
  {
    icon: Handshake,
    title: "Lokal forankring",
    description:
      "Vi samarbeider med lokale leverandører som kjenner ditt nærområde.",
  },
  {
    icon: Clock,
    title: "Rask respons",
    description:
      "Vi matcher deg med en leverandør innen 24 timer etter henvendelse.",
  },
  {
    icon: Users,
    title: "Personlig oppfølging",
    description:
      "Dedikert kontaktperson som sørger for at du er fornøyd, hver gang.",
  },
];

export function Trust() {
  return (
    <section id="om-oss" className="py-24 lg:py-32 bg-secondary relative">
      <div className="absolute inset-0 noise-bg" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
            Derfor velger kunder oss
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Trygghet i hver detalj
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Vi tar kvalitet og sikkerhet på alvor. Alle våre partnere er nøye
            utvalgt og følges opp kontinuerlig.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

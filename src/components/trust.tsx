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
  {
    icon: ShieldCheck,
    title: "Kvalitetsgaranti",
    body: "Ikke fornøyd med jobben? Vi sender en ny renholder uten ekstra kostnad.",
  },
  {
    icon: Award,
    title: "Sertifiserte partnere",
    body: "Alle har godkjent renholdskort fra Arbeidstilsynet og sjekket referanser.",
  },
  {
    icon: BadgeCheck,
    title: "Full ansvarsforsikring",
    body: "Alle oppdrag er dekket av forsikring. Trygt for deg, dine ting og ditt hjem.",
  },
  {
    icon: MapPin,
    title: "Lokale renholdere",
    body: "Partnere som kjenner nærområdet ditt og kan komme raskt når du trenger det.",
  },
  {
    icon: Clock,
    title: "Svar innen 24 timer",
    body: "Rask respons og matching med riktig leverandør basert på dine behov.",
  },
  {
    icon: HeartHandshake,
    title: "Personlig oppfølging",
    body: "En dedikert kontaktperson som sørger for at alt fungerer som det skal.",
  },
];

export function Trust() {
  return (
    <section className="py-28 bg-[#0E1A14] relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1B4332]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
          {/* Left — Text + image */}
          <div>
            <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
              Hvorfor JK Renhold
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight text-white leading-[1.1] mb-4">
              Trygghet i hver detalj
            </h2>
            <p className="text-white/35 text-[15px] leading-relaxed mb-8 max-w-sm">
              Vi tar kvalitet og sikkerhet på alvor. Alle partnere er nøye utvalgt, kontrollert og følges opp.
            </p>

            {/* Image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Rent og ryddig hjem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A14]/50 to-transparent" />
            </div>
          </div>

          {/* Right — Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center mb-3.5 group-hover:bg-[#2D6A4F]/20 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <h3 className="font-heading font-semibold text-[14px] text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[12px] text-white/30 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

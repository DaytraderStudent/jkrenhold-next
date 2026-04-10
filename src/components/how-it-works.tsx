"use client";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Beskriv behovet",
      body: "Fyll ut skjemaet med type renhold, adresse og ønsket frekvens. Under 60 sekunder.",
    },
    {
      num: "02",
      title: "Vi matcher deg",
      body: "Innen 24 timer finner vi den beste lokale leverandøren for akkurat ditt behov.",
    },
    {
      num: "03",
      title: "Rent og ferdig",
      body: "Renholderne kommer som avtalt. Vi følger opp for å sikre at du er fornøyd.",
    },
  ];

  return (
    <section id="prosess" className="py-28 bg-[#0E1A14] relative overflow-hidden">
      <div className="absolute inset-0 grain" />
      {/* Ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2D6A4F]/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
          Prosess
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight text-white leading-[1.1] mb-16 max-w-md">
          Tre steg. Null stress.
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="bg-[#0E1A14] p-8 sm:p-10 group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <span className="block font-heading text-[4rem] font-bold text-white/[0.04] leading-none mb-6 group-hover:text-white/[0.08] transition-colors duration-500">
                {s.num}
              </span>
              <h3 className="font-heading font-semibold text-lg text-white mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const cities = [
  "Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Kristiansand",
  "Fredrikstad", "Tønsberg", "Sandefjord", "Tromsø", "Bodø", "Ålesund",
  "Haugesund", "Larvik", "Skien", "Porsgrunn", "Moss", "Sarpsborg",
  "Horten", "Arendal", "Molde", "Lillehammer", "Hamar", "Gjøvik",
];

export function Areas() {
  return (
    <section id="omrader" className="relative overflow-hidden py-20">
      {/* Full-width marquee — editorial feel */}
      <div className="divider-editorial mb-16" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="font-heading italic text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em]">
            Vi dekker <span className="text-[#C48B3F]">hele</span> Norge
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            50+ byer og kommuner. Ser du ikke din by?{" "}
            <a href="#tilbud" className="text-foreground underline underline-offset-2">
              Spør oss
            </a>
            .
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="overflow-hidden mb-4">
        <div className="marquee-strip" style={{ "--duration": "40s" } as React.CSSProperties}>
          {[...cities, ...cities].map((city, i) => (
            <span
              key={i}
              className="shrink-0 font-heading italic text-[2rem] sm:text-[2.8rem] text-foreground/[0.06] hover:text-foreground/20 transition-colors duration-700 cursor-default whitespace-nowrap"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="marquee-strip"
          style={{ "--duration": "50s", animationDirection: "reverse" } as React.CSSProperties}
        >
          {[...cities.slice(12), ...cities.slice(0, 12), ...cities.slice(12), ...cities.slice(0, 12)].map((city, i) => (
            <span
              key={i}
              className="shrink-0 font-heading italic text-[2rem] sm:text-[2.8rem] text-foreground/[0.06] hover:text-foreground/20 transition-colors duration-700 cursor-default whitespace-nowrap"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      <div className="divider-editorial mt-16" />
    </section>
  );
}

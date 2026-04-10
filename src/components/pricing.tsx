"use client";

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Vaskehjelp",
    sub: "Fast renhold av bolig",
    price: "450",
    unit: "kr/time",
    features: [
      "Ukentlig, annenhver uke eller månedlig",
      "Fast renholder som kjenner hjemmet",
      "Rengjøringsmidler inkludert",
      "Fleksibel avbestilling",
    ],
    popular: false,
  },
  {
    name: "Flyttevask",
    sub: "Inn- og utflytting",
    price: "3 500",
    unit: "kr fra",
    features: [
      "Hele boligen inkl. hvitevarer",
      "Sjekkliste etter standard",
      "Depositum-garanti",
      "Ettersjekk inkludert",
      "Ferdig til avtalt dato",
    ],
    popular: true,
  },
  {
    name: "Kontorrenhold",
    sub: "For bedrifter",
    price: "Tilbud",
    unit: "",
    features: [
      "Tilpasset areal og behov",
      "Fastpris-avtale per måned",
      "Kveld- og helgerenhold",
      "Kontaktperson og oppfølging",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="priser" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] mb-4">
            Priser
          </p>
          <h2 className="font-heading italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] mb-4">
            Ærlig prising, <span className="text-[#C48B3F]">ingen</span> overraskelser
          </h2>
          <p className="text-muted-foreground text-[15px] max-w-md mx-auto">
            Du betaler kun for renholdet. Formidlingen er alltid gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-500 ${
                plan.popular
                  ? "bg-[#1A3C2A] text-white ring-1 ring-[#1A3C2A] shadow-2xl shadow-[#1A3C2A]/20 scale-[1.02]"
                  : "bg-white border border-border/60"
              }`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C48B3F] text-white text-[9px] font-semibold uppercase tracking-[0.15em] px-4 py-1 rounded-full">
                  Mest populær
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading italic text-xl mb-0.5">{plan.name}</h3>
                <p className={`text-[12px] ${plan.popular ? "text-white/40" : "text-muted-foreground"}`}>
                  {plan.sub}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading italic text-[2.5rem] tracking-tight leading-none">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className={`text-[12px] ${plan.popular ? "text-white/40" : "text-muted-foreground"} ml-1`}>
                      {plan.unit}
                    </span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px]">
                    <Check
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        plan.popular ? "text-[#C48B3F]" : "text-[#2B5E42]"
                      }`}
                    />
                    <span className={plan.popular ? "text-white/70" : "text-foreground/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#tilbud"
                className={`flex items-center justify-center gap-2 h-11 rounded-xl text-[13px] font-medium cursor-pointer group transition-all duration-500 ${
                  plan.popular
                    ? "bg-white text-[#1A3C2A] hover:bg-white/90"
                    : "bg-foreground/[0.04] hover:bg-foreground/[0.08] border border-border/60"
                }`}
                style={{ transitionTimingFunction: "var(--ease-in-out)" }}
              >
                Velg {plan.name.toLowerCase()}
                <ArrowRight className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

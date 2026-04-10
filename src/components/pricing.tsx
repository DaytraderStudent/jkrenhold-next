"use client";

import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const plans = [
  {
    name: "Vaskehjelp",
    description: "Regelmessig renhold av bolig",
    price: "450",
    unit: "/time",
    features: [
      "Ukentlig, annenhver uke eller månedlig",
      "Fast renholder som kjenner hjemmet",
      "Alle rengjøringsmidler inkludert",
      "Fleksibel avbestilling",
      "Kvalitetsgaranti",
    ],
    popular: false,
    cta: "Bestill vaskehjelp",
  },
  {
    name: "Flyttevask",
    description: "Grundig rengjøring inn/ut",
    price: "3 500",
    unit: "fra",
    features: [
      "Hele boligen inkl. hvitevarer",
      "Sjekkliste etter utleierstandard",
      "Depositum-garanti",
      "Ferdig til overleveringsdato",
      "Ettersjekk inkludert",
    ],
    popular: true,
    cta: "Bestill flyttevask",
  },
  {
    name: "Kontorrenhold",
    description: "Profesjonelt for bedrifter",
    price: "Tilbud",
    unit: "",
    features: [
      "Tilpasset bedriftens areal og behov",
      "Fast avtale med forutsigbar pris",
      "Kveld- og helgerenhold",
      "Kontaktperson og oppfølging",
      "Fakturering per måned",
    ],
    popular: false,
    cta: "Få bedriftstilbud",
  },
];

export function Pricing() {
  return (
    <section className="py-28 bg-secondary/50 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center max-w-lg mx-auto mb-14">
          <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
            Priser
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight leading-[1.1] mb-3">
            Enkel og ærlig prising
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Ingen skjulte kostnader. Du betaler kun for renholdet — formidlingen er alltid gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.popular
                  ? "border-[#1B4332] bg-white shadow-xl shadow-black/[0.06] ring-1 ring-[#1B4332]/10"
                  : "border-border/60 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B4332] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  Mest populær
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg mb-0.5">
                  {plan.name}
                </h3>
                <p className="text-[13px] text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.unit === "fra" ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-[11px] text-muted-foreground">fra</span>
                    <span className="font-heading font-bold text-3xl tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[13px] text-muted-foreground">kr</span>
                  </div>
                ) : plan.unit ? (
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-heading font-bold text-3xl tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[13px] text-muted-foreground">
                      kr{plan.unit}
                    </span>
                  </div>
                ) : (
                  <span className="font-heading font-bold text-3xl tracking-tight">
                    {plan.price}
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-foreground/80">
                    <Check className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#tilbud"
                className={buttonVariants({
                  className: plan.popular
                    ? "bg-[#1B4332] text-white hover:bg-[#1B4332]/90 w-full justify-center h-10 text-[13px] font-medium cursor-pointer"
                    : "bg-foreground/[0.04] text-foreground hover:bg-foreground/[0.08] border border-border/60 w-full justify-center h-10 text-[13px] font-medium cursor-pointer",
                })}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Home,
  Truck,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Vaskehjelp",
    description:
      "Regelmessig renhold av hjemmet ditt. Ukentlig, annenhver uke eller etter behov — tilpasset din hverdag.",
    features: [
      "Fleksible intervaller",
      "Faste renholdere",
      "Alle rengjøringsmidler inkludert",
    ],
    price: "Fra 450 kr/t",
    accent: "bg-primary/8 text-primary",
  },
  {
    icon: Truck,
    title: "Flyttevask",
    description:
      "Grundig rengjøring ved inn- eller utflytting. Vi sørger for at alt er plettfritt til overleveringen.",
    features: [
      "Depositum-garanti",
      "Sjekkliste inkludert",
      "Ferdig på avtalt tid",
    ],
    price: "Fra 3 500 kr",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Building2,
    title: "Kontorrenhold",
    description:
      "Profesjonelt renhold for bedrifter. Rene lokaler gir bedre arbeidsmiljø og et godt inntrykk.",
    features: [
      "Tilpasset bedriftens behov",
      "Avtale med fast pris",
      "Kveld- og helgerenhold",
    ],
    price: "Få tilbud",
    accent: "bg-emerald-light/10 text-emerald-light",
  },
  {
    icon: Sparkles,
    title: "Spesialrenhold",
    description:
      "Vinduspuss, trapperenhold, fasadevask og mer. For de jobbene som krever litt ekstra.",
    features: [
      "Vinduer innvendig & utvendig",
      "Trappeoppganger",
      "Fasade og terrasse",
    ],
    price: "Få tilbud",
    accent: "bg-chart-4/10 text-chart-4",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
            Våre tjenester
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
            Alt renhold, ett sted
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Uansett om du trenger en fast vaskehjelp eller en grundig
            flyttevask — vi finner den rette leverandøren for deg.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href="#tilbud"
              className="group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${service.accent} flex items-center justify-center mb-5`}
              >
                <service.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-lg mb-2 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5 mb-5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <span className="font-heading font-semibold text-foreground">
                  {service.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

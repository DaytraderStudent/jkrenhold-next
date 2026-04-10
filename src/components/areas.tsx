"use client";

import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const regions = [
  {
    name: "Østlandet",
    cities: [
      "Oslo",
      "Drammen",
      "Fredrikstad",
      "Sarpsborg",
      "Moss",
      "Lillestrøm",
      "Ski",
      "Jessheim",
    ],
  },
  {
    name: "Vestfold & Telemark",
    cities: [
      "Tønsberg",
      "Sandefjord",
      "Larvik",
      "Horten",
      "Skien",
      "Porsgrunn",
      "Nøtterøy",
    ],
  },
  {
    name: "Vestlandet",
    cities: [
      "Bergen",
      "Stavanger",
      "Haugesund",
      "Ålesund",
      "Molde",
      "Kristiansund",
    ],
  },
  {
    name: "Sørlandet",
    cities: [
      "Kristiansand",
      "Arendal",
      "Grimstad",
      "Mandal",
      "Vennesla",
    ],
  },
  {
    name: "Trøndelag",
    cities: ["Trondheim", "Steinkjer", "Levanger", "Stjørdal", "Namsos"],
  },
  {
    name: "Nord-Norge",
    cities: ["Tromsø", "Bodø", "Narvik", "Harstad", "Alta"],
  },
];

export function Areas() {
  return (
    <section id="omrader" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
              Dekning
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4">
              Lokalt renhold, over hele landet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Vi har partnere i alle landets regioner. Finner vi ikke en
              leverandør i ditt område, hjelper vi deg videre.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">
                <strong className="text-foreground">50+</strong> byer og
                kommuner dekket
              </span>
            </div>
          </div>

          {/* Right — regions grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div key={region.name}>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-3">
                  {region.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {region.cities.map((city) => (
                    <Badge
                      key={city}
                      variant="secondary"
                      className="font-normal text-xs bg-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {city}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

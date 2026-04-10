"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { name: "Vaskehjelp", href: "#tjenester" },
  { name: "Flyttevask", href: "#tjenester" },
  { name: "Kontorrenhold", href: "#tjenester" },
  { name: "Vinduspuss", href: "#tjenester" },
  { name: "Trapperenhold", href: "#tjenester" },
  { name: "Fasadevask", href: "#tjenester" },
];

const companyLinks = [
  { name: "Om oss", href: "#om-oss" },
  { name: "Våre partnere", href: "#om-oss" },
  { name: "Områder", href: "#omrader" },
  { name: "Vanlige spørsmål", href: "#faq" },
  { name: "Personvern", href: "#" },
  { name: "Vilkår", href: "#" },
];

const popularCities = [
  "Oslo",
  "Bergen",
  "Trondheim",
  "Stavanger",
  "Drammen",
  "Tønsberg",
  "Kristiansand",
  "Fredrikstad",
];

export function Footer() {
  return (
    <footer id="kontakt" className="bg-[#0F1F19] text-white/70 relative">
      <div className="absolute inset-0 noise-bg" />
      <div className="relative z-10">
        {/* Main footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">
                    JK
                  </span>
                </div>
                <span className="font-heading font-semibold text-white text-base">
                  JK Renhold
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Profesjonelt renhold for bedrifter og privatpersoner i hele
                Norge. Vi kobler deg med de beste lokale renholdsleverandørene.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="tel:+4790000000"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  900 00 000
                </a>
                <a
                  href="mailto:post@jkrenhold.no"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  post@jkrenhold.no
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  Man–Fre 08:00–16:00
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-white text-sm mb-4">
                Tjenester
              </h3>
              <ul className="flex flex-col gap-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading font-semibold text-white text-sm mb-4">
                Selskap
              </h3>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular cities */}
            <div>
              <h3 className="font-heading font-semibold text-white text-sm mb-4">
                Populære byer
              </h3>
              <ul className="flex flex-col gap-2.5">
                {popularCities.map((city) => (
                  <li key={city}>
                    <a
                      href="#omrader"
                      className="text-sm hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3" />
                      Renhold i {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} JK Renhold. Alle rettigheter
              reservert.
            </p>
            <p className="text-xs text-white/40">
              Org.nr: 000 000 000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

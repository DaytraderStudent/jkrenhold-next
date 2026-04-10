"use client";

import { Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0E1A14] text-white/50 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md bg-white/[0.08] flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-[10px]">JK</span>
                </div>
                <span className="font-heading font-semibold text-white text-sm">JK Renhold</span>
              </div>
              <p className="text-[13px] leading-relaxed mb-5 max-w-[220px]">
                Profesjonelt renhold for private og bedrifter. Vi kobler deg med de beste lokale leverandørene.
              </p>
              <div className="flex flex-col gap-2 text-[13px]">
                <a href="tel:+4790000000" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3 h-3" /> 900 00 000
                </a>
                <a href="mailto:post@jkrenhold.no" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3 h-3" /> post@jkrenhold.no
                </a>
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Man–Fre 08–16
                </span>
              </div>
            </div>

            {/* Tjenester */}
            <div>
              <h3 className="font-heading font-semibold text-white text-[13px] mb-4">Tjenester</h3>
              <ul className="space-y-2 text-[13px]">
                {["Vaskehjelp", "Flyttevask", "Kontorrenhold", "Vinduspuss", "Trapperenhold", "Fasadevask"].map((s) => (
                  <li key={s}>
                    <a href="#tjenester" className="hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selskap */}
            <div>
              <h3 className="font-heading font-semibold text-white text-[13px] mb-4">Selskap</h3>
              <ul className="space-y-2 text-[13px]">
                {["Om oss", "Partnere", "Områder", "Vanlige spørsmål", "Personvern", "Vilkår"].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Byer */}
            <div>
              <h3 className="font-heading font-semibold text-white text-[13px] mb-4">Byer</h3>
              <ul className="space-y-2 text-[13px]">
                {["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Kristiansand", "Tønsberg", "Fredrikstad"].map((s) => (
                  <li key={s}>
                    <a href="#omrader" className="hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-white/25">
              &copy; {new Date().getFullYear()} JK Renhold. Alle rettigheter reservert.
            </p>
            <p className="text-[11px] text-white/25">
              Org.nr: 000 000 000
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

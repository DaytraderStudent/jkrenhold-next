"use client";

import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-[#0E1A14] text-white/40 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10">
        {/* Big CTA text */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16 border-b border-white/[0.06]">
          <a
            href="#tilbud"
            className="group flex items-center justify-between cursor-pointer"
          >
            <h2 className="font-heading italic text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white group-hover:text-[#C48B3F] transition-colors duration-700">
              La oss snakkes
            </h2>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shrink-0 ml-8">
              <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#0E1A14] transition-colors duration-500" />
            </div>
          </a>
        </div>

        {/* Footer grid */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading italic text-xl text-white block mb-4">
                JK Renhold
              </span>
              <p className="text-[13px] leading-relaxed max-w-[200px] mb-6">
                Profesjonelt renhold for private og bedrifter i hele Norge.
              </p>
              <div className="text-[13px] space-y-1.5">
                <a href="mailto:post@jkrenhold.no" className="block hover:text-white transition-colors">
                  post@jkrenhold.no
                </a>
                <a href="tel:+4790000000" className="block hover:text-white transition-colors">
                  900 00 000
                </a>
                <span className="block">Man–Fre 08–16</span>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] text-white/60 uppercase tracking-[0.2em] mb-4">
                Tjenester
              </h3>
              <ul className="space-y-2 text-[13px]">
                {["Vaskehjelp", "Flyttevask", "Kontorrenhold", "Vinduspuss", "Trapperenhold"].map((s) => (
                  <li key={s}>
                    <a href="#tjenester" className="hover:text-white transition-colors duration-300">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] text-white/60 uppercase tracking-[0.2em] mb-4">
                Selskap
              </h3>
              <ul className="space-y-2 text-[13px]">
                {["Om oss", "Partnere", "Priser", "FAQ", "Personvern"].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-white transition-colors duration-300">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] text-white/60 uppercase tracking-[0.2em] mb-4">
                Byer
              </h3>
              <ul className="space-y-2 text-[13px]">
                {["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Tønsberg", "Kristiansand"].map((s) => (
                  <li key={s}>
                    <a href="#omrader" className="hover:text-white transition-colors duration-300">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-white/20">
              &copy; {new Date().getFullYear()} JK Renhold AS. Org.nr 000 000 000
            </p>
            <p className="text-[11px] text-white/20">
              Alle rettigheter reservert
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

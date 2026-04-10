"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-[#1A3C2A]/90 backdrop-blur-sm" />
          <div className="absolute inset-0 grain" />

          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-28 lg:px-24">
            <div className="max-w-2xl">
              <h2 className="font-heading italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6">
                Klar for et
                <br />
                <span className="text-[#C48B3F]">renere</span> hjem?
              </h2>
              <p className="text-white/35 text-base leading-relaxed mb-10 max-w-md">
                Under ett minutt å sende forespørsel. Vi finner den beste lokale renholdsleverandøren for deg.
              </p>

              <a
                href="#tilbud"
                className="inline-flex items-center gap-3 bg-white text-[#1A3C2A] font-medium text-sm px-8 py-4 rounded-full cursor-pointer group hover:bg-white/90 transition-colors duration-500"
                style={{ transitionTimingFunction: "var(--ease-in-out)" }}
              >
                Få gratis tilbud
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-white/10">
              {[
                { val: "15+", label: "Års erfaring" },
                { val: "1 000+", label: "Kunder" },
                { val: "4.8", label: "Snittkarakter" },
                { val: "50+", label: "Byer" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-heading italic text-3xl text-white">{s.val}</span>
                  <p className="text-[10px] text-white/25 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

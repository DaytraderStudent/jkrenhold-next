"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-[#1B4332]/85 backdrop-blur-sm" />
          <div className="absolute inset-0 grain" />

          <div className="relative z-10 w-full px-8 py-16 sm:px-16 sm:py-20">
            <div className="max-w-lg">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.8rem] tracking-tight text-white leading-[1.1] mb-4">
                Klar for et renere hjem?
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8 max-w-md">
                Det tar under ett minutt å sende en forespørsel. Vi finner
                den beste renholdsleverandøren i ditt område — helt gratis.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#tilbud"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-white text-[#1B4332] hover:bg-white/90 font-semibold h-11 px-7 text-sm cursor-pointer group",
                  })}
                >
                  Få gratis tilbud
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+4790000000"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "border-white/20 text-white hover:bg-white/10 h-11 px-7 text-sm cursor-pointer",
                  })}
                >
                  Ring 900 00 000
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-8 border-t border-white/10">
              {[
                { val: "15+", label: "Års erfaring" },
                { val: "1 000+", label: "Fornøyde kunder" },
                { val: "4.8", label: "Snittkarakter" },
                { val: "50+", label: "Byer dekket" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-heading font-bold text-xl text-white">{s.val}</p>
                  <p className="text-[11px] text-white/30 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

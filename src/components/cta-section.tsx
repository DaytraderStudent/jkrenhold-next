"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="relative bg-[#1B4332] rounded-3xl overflow-hidden">
          {/* Ambient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D6A4F]/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C8965A]/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 grain" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.8rem] tracking-tight text-white leading-[1.1] mb-4 max-w-lg mx-auto">
              Klar for et renere hjem?
            </h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
              Send en uforpliktende forespørsel. Vi finner den beste lokale renholdsleverandøren for deg.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postnummer: "",
    tjeneste: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0E1A14]">
      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#2D6A4F" />

      {/* Grain */}
      <div className="absolute inset-0 grain" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#1B4332]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C8965A]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-28 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] rounded-full px-3.5 py-1 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-medium text-white/50 uppercase tracking-[0.15em]">
                Tilgjengelig i hele Norge
              </span>
            </div>

            <h1 className="font-heading font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-white mb-6">
              <TextGenerateEffect
                words="Vi finner renholderen du fortjener"
                className="font-heading"
                duration={0.4}
              />
            </h1>

            <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-md mb-10">
              Lokale, sertifiserte renholdere — håndplukket for ditt behov.
              Privat eller bedrift. Gratis og uforpliktende.
            </p>

            {/* Social proof — real-feeling, not templated */}
            <div className="flex items-center gap-5">
              <div className="flex -space-x-2">
                {["KM", "EB", "ST", "ML"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0E1A14] bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] flex items-center justify-center text-[9px] font-bold text-white/70"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-[13px] text-white/30 leading-tight">
                <span className="text-white/60 font-medium">1 000+</span>{" "}
                fornøyde kunder
                <br />
                <span className="text-[#C8965A]/70">4.8</span> gjennomsnittlig
                vurdering
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div id="tilbud" className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent" />
            <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.06] p-7 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-heading font-semibold text-lg text-white">
                    Få tilbud
                  </h2>
                  <p className="text-[13px] text-white/30 mt-0.5">
                    Svar innen 24 timer. Alltid gratis.
                  </p>
                </div>
                <div className="text-[10px] font-medium text-[#C8965A] bg-[#C8965A]/10 border border-[#C8965A]/20 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                  Gratis
                </div>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-4" />
                  <p className="text-white font-medium mb-1">Takk for henvendelsen!</p>
                  <p className="text-white/40 text-sm">Vi tar kontakt innen 24 timer.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-1.5 block">
                        Navn
                      </Label>
                      <Input
                        placeholder="Ola Nordmann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 h-10 text-sm focus:border-[#2D6A4F] focus:ring-[#2D6A4F]/20"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-1.5 block">
                        Telefon
                      </Label>
                      <Input
                        type="tel"
                        placeholder="400 00 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 h-10 text-sm focus:border-[#2D6A4F] focus:ring-[#2D6A4F]/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-1.5 block">
                      E-post
                    </Label>
                    <Input
                      type="email"
                      placeholder="din@epost.no"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 h-10 text-sm focus:border-[#2D6A4F] focus:ring-[#2D6A4F]/20"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-1.5 block">
                        Postnummer
                      </Label>
                      <Input
                        placeholder="0000"
                        maxLength={4}
                        value={formData.postnummer}
                        onChange={(e) => setFormData({ ...formData, postnummer: e.target.value })}
                        className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-white/20 h-10 text-sm focus:border-[#2D6A4F] focus:ring-[#2D6A4F]/20"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-medium text-white/40 uppercase tracking-wider mb-1.5 block">
                        Tjeneste
                      </Label>
                      <Select
                        value={formData.tjeneste}
                        onValueChange={(v) => setFormData({ ...formData, tjeneste: v ?? "" })}
                      >
                        <SelectTrigger className="bg-white/[0.05] border-white/[0.08] text-white h-10 text-sm cursor-pointer [&>span]:text-white/20 data-[state=open]:border-[#2D6A4F]">
                          <SelectValue placeholder="Velg..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vaskehjelp">Vaskehjelp</SelectItem>
                          <SelectItem value="flyttevask">Flyttevask</SelectItem>
                          <SelectItem value="kontorrenhold">Kontorrenhold</SelectItem>
                          <SelectItem value="vinduspuss">Vinduspuss</SelectItem>
                          <SelectItem value="annet">Annet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-white text-[#0E1A14] hover:bg-white/90 font-semibold text-sm mt-1 cursor-pointer group transition-all"
                  >
                    Send forespørsel
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-[11px] text-white/20 text-center">
                    Uforpliktende · Ingen spam · Dine data er trygge
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

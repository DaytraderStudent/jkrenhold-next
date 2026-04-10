"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#F6F4EF]">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-[72px]">
        {/* Top editorial bar */}
        <div className="flex items-center justify-between py-6 border-b border-border/60">
          <span className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
            Est. 2010 — Norge
          </span>
          <span className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
            Sertifiserte partnere · Hele landet
          </span>
        </div>

        {/* Main hero grid */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-10 lg:gap-16 pt-12 pb-16 lg:pt-20 lg:pb-24">
          {/* Left — Editorial typography */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-heading italic text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-foreground mb-8">
                Rent hjem,
                <br />
                <span className="text-[#C48B3F]">uten</span> bryet
              </h1>

              <p className="text-foreground/40 text-base sm:text-lg leading-relaxed max-w-[420px] mb-10">
                Vi kobler deg med lokale, sertifiserte renholdere — håndplukket
                for akkurat ditt behov. Gratis formidling, alltid.
              </p>

              {/* Horizontal stat strip */}
              <div className="flex items-center gap-8 sm:gap-12">
                {[
                  { val: "1 000+", label: "Kunder" },
                  { val: "4.8", label: "Snitt" },
                  { val: "24t", label: "Respons" },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <span className="font-heading italic text-3xl sm:text-4xl text-foreground">
                      {s.val}
                    </span>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image — overlapping composition */}
            <div className="hidden lg:block relative mt-12">
              <div className="relative w-full h-[280px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                  alt="Rent og lyst hjem"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
              {/* Overlapping floating card */}
              <div className="absolute -bottom-6 -right-6 bg-[#1A3C2A] text-white rounded-xl px-6 py-4 shadow-2xl shadow-black/20">
                <p className="font-heading italic text-2xl leading-none">100%</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">
                  Gratis formidling
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form card */}
          <div id="tilbud" className="lg:mt-8">
            <div className="bg-white rounded-3xl border border-border/60 shadow-2xl shadow-black/[0.04] p-7 sm:p-9 relative">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C48B3F]/5 to-transparent rounded-tr-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-heading italic text-2xl text-foreground mb-1">
                      Få tilbud
                    </h2>
                    <p className="text-[13px] text-muted-foreground">
                      Svar innen 24 timer — alltid gratis
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-2" />
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                    <p className="font-heading italic text-xl mb-1">Mottatt!</p>
                    <p className="text-muted-foreground text-sm">
                      Vi tar kontakt innen 24 timer.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                          Navn
                        </Label>
                        <Input
                          placeholder="Ola Nordmann"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="bg-[#F6F4EF]/60 border-border/60 h-11 text-sm placeholder:text-foreground/20 focus:border-[#1A3C2A] focus:ring-[#1A3C2A]/10 rounded-xl"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                          Telefon
                        </Label>
                        <Input
                          type="tel"
                          placeholder="400 00 000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="bg-[#F6F4EF]/60 border-border/60 h-11 text-sm placeholder:text-foreground/20 focus:border-[#1A3C2A] focus:ring-[#1A3C2A]/10 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        E-post
                      </Label>
                      <Input
                        type="email"
                        placeholder="din@epost.no"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-[#F6F4EF]/60 border-border/60 h-11 text-sm placeholder:text-foreground/20 focus:border-[#1A3C2A] focus:ring-[#1A3C2A]/10 rounded-xl"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                          Postnummer
                        </Label>
                        <Input
                          placeholder="0000"
                          maxLength={4}
                          value={formData.postnummer}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              postnummer: e.target.value,
                            })
                          }
                          className="bg-[#F6F4EF]/60 border-border/60 h-11 text-sm placeholder:text-foreground/20 focus:border-[#1A3C2A] focus:ring-[#1A3C2A]/10 rounded-xl"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                          Tjeneste
                        </Label>
                        <Select
                          value={formData.tjeneste}
                          onValueChange={(v) =>
                            setFormData({ ...formData, tjeneste: v ?? "" })
                          }
                        >
                          <SelectTrigger className="bg-[#F6F4EF]/60 border-border/60 h-11 text-sm cursor-pointer [&>span]:text-foreground/20 rounded-xl">
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
                      className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-medium text-sm mt-2 cursor-pointer group rounded-xl transition-all duration-500"
                      style={{
                        transitionTimingFunction: "var(--ease-in-out)",
                      }}
                    >
                      Send forespørsel
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-500 group-hover:translate-x-1.5" />
                    </Button>

                    <p className="text-[10px] text-muted-foreground/60 text-center mt-1">
                      Helt uforpliktende · Ingen spam · Personvern ivaretatt
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
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
import { ArrowRight, Shield, Star, Clock } from "lucide-react";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postnummer: "",
    tjeneste: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Takk! Vi tar kontakt innen 24 timer.");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient noise-bg" />

      {/* Decorative shapes */}
      <div className="absolute top-32 right-[15%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">
                Sertifiserte renholdere i hele Norge
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-foreground mb-6">
              Renhold som
              <br />
              faktisk fungerer
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Vi kobler deg med erfarne, lokale renholdere — skreddersydd for
              ditt behov. Privat eller bedrift, liten jobb eller stor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#tilbud"
                className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white font-medium px-8 h-12 text-base cursor-pointer group" })}
              >
                Få gratis tilbud
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#tjenester"
                className={buttonVariants({ variant: "outline", size: "lg", className: "border-border hover:bg-secondary font-medium h-12 text-base cursor-pointer" })}
              >
                Se våre tjenester
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span>4.8 / 5</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Svar innen 24t</span>
              </div>
            </div>
          </div>

          {/* Right — Form card */}
          <div
            id="tilbud"
            className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-border p-6 sm:p-8 relative"
          >
            <div className="absolute -top-3 left-6 bg-accent text-foreground text-xs font-semibold px-3 py-1 rounded-full">
              100% gratis
            </div>

            <h2 className="font-heading font-semibold text-xl mb-1">
              Få tilbud på renhold
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fyll ut skjemaet — vi matcher deg med de beste lokale
              leverandørene.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Navn
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ditt fulle navn"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-11 bg-sand-light border-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="400 00 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-11 bg-sand-light border-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium mb-1.5 block"
                >
                  E-post
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="din@epost.no"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-11 bg-sand-light border-border focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="postnummer"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Postnummer
                  </Label>
                  <Input
                    id="postnummer"
                    placeholder="0000"
                    maxLength={4}
                    value={formData.postnummer}
                    onChange={(e) =>
                      setFormData({ ...formData, postnummer: e.target.value })
                    }
                    className="h-11 bg-sand-light border-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-1.5 block">
                    Type tjeneste
                  </Label>
                  <Select
                    value={formData.tjeneste}
                    onValueChange={(v) =>
                      setFormData({ ...formData, tjeneste: v ?? "" })
                    }
                  >
                    <SelectTrigger className="h-11 bg-sand-light border-border cursor-pointer">
                      <SelectValue placeholder="Velg tjeneste" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vaskehjelp">Vaskehjelp</SelectItem>
                      <SelectItem value="flyttevask">Flyttevask</SelectItem>
                      <SelectItem value="kontorrenhold">
                        Kontorrenhold
                      </SelectItem>
                      <SelectItem value="vinduspuss">Vinduspuss</SelectItem>
                      <SelectItem value="trapperenhold">
                        Trapperenhold
                      </SelectItem>
                      <SelectItem value="annet">Annet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base mt-2 cursor-pointer group"
              >
                Send forespørsel
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Helt uforpliktende. Vi sender aldri spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Koster det noe å få tilbud?",
    a: "Nei — helt gratis og uforpliktende. Vi tar kun betalt fra våre partnere, aldri fra deg.",
  },
  {
    q: "Hvor raskt får jeg svar?",
    a: "Vi matcher deg med en lokal leverandør innen 24 timer. Ofte samme dag.",
  },
  {
    q: "Er renholderne forsikret?",
    a: "Alle partnere har gyldig ansvarsforsikring og godkjent renholdskort fra Arbeidstilsynet.",
  },
  {
    q: "Hva om jeg ikke er fornøyd?",
    a: "Kvalitetsgaranti — vi sørger for at det rettes opp uten ekstra kostnad for deg.",
  },
  {
    q: "Kan jeg få fast renholder?",
    a: "Ja. Ved faste avtaler vil du som regel få den samme renholderen hver gang.",
  },
  {
    q: "Dekker dere mitt område?",
    a: "Vi har partnere i hele Norge. Send postnummeret ditt, så sjekker vi dekningen.",
  },
];

export function FAQ() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] mb-4">
              FAQ
            </p>
            <h2 className="font-heading italic text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mb-4">
              Spørsmål
              <br />
              <span className="text-[#C48B3F]">& svar</span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-sm">
              Finner du ikke svaret du leter etter? Ta kontakt — vi svarer gjerne.
            </p>
          </div>

          {/* Right — Accordion */}
          <Accordion className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="border-b border-border/60 rounded-none px-0 data-[open]:pb-2"
              >
                <AccordionTrigger className="text-left font-heading italic text-lg hover:no-underline py-5 cursor-pointer text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

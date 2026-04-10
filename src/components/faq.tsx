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
    a: "Nei, det er helt gratis og uforpliktende. Vi tar kun betalt fra våre partnere — aldri fra deg som kunde.",
  },
  {
    q: "Hvor raskt får jeg svar?",
    a: "Vi matcher deg med en lokal renholdsleverandør innen 24 timer. I de fleste tilfeller hører du fra oss samme dag.",
  },
  {
    q: "Er renholderne forsikret?",
    a: "Alle våre partnere har gyldig ansvarsforsikring og godkjent renholdskort fra Arbeidstilsynet. Vi kontrollerer dette løpende.",
  },
  {
    q: "Hva om jeg ikke er fornøyd?",
    a: "Vi har kvalitetsgaranti. Hvis du ikke er fornøyd med jobben, sørger vi for at det rettes opp uten ekstra kostnad.",
  },
  {
    q: "Kan jeg få fast renholder?",
    a: "Ja, ved faste avtaler vil du som regel få den samme renholderen hver gang. Det gir trygghet og bedre resultat over tid.",
  },
  {
    q: "Dekker dere mitt område?",
    a: "Vi har partnere i alle landets regioner. Send inn en forespørsel med ditt postnummer, så sjekker vi dekningen.",
  },
];

export function FAQ() {
  return (
    <section className="py-28 bg-secondary/50 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium text-[#C8965A] uppercase tracking-[0.2em] mb-2">
            Spørsmål
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-[2.5rem] tracking-tight leading-[1.1]">
            Ofte stilte spørsmål
          </h2>
        </div>

        <Accordion className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              className="bg-white rounded-xl border border-border/60 px-6 data-[open]:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-medium text-[15px] hover:no-underline py-4 cursor-pointer text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[13px] text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

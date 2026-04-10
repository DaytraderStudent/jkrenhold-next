"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Er tjenesten virkelig gratis?",
    a: "Ja, det koster ingenting å sende en forespørsel eller motta tilbud fra oss. Vi tar kun betalt fra våre partnere — aldri fra deg som kunde.",
  },
  {
    q: "Hvor raskt får jeg svar?",
    a: "Vi matcher deg med en lokal renholdsleverandør innen 24 timer. I de fleste tilfeller hører du fra oss samme dag.",
  },
  {
    q: "Er renholderne forsikret?",
    a: "Absolutt. Alle våre partnere har gyldig ansvarsforsikring og godkjent renholdskort fra Arbeidstilsynet. Vi kontrollerer dette løpende.",
  },
  {
    q: "Hva om jeg ikke er fornøyd?",
    a: "Vi har kvalitetsgaranti. Hvis du ikke er fornøyd med jobben som er gjort, sørger vi for at det rettes opp — uten ekstra kostnad for deg.",
  },
  {
    q: "Kan jeg velge fast renholder?",
    a: "Ja, ved faste avtaler vil du som regel få den samme renholderen hver gang. Det gir trygghet og et bedre resultat over tid.",
  },
  {
    q: "Dekker dere mitt område?",
    a: "Vi har partnere i alle landets regioner. Send inn en forespørsel med ditt postnummer, så sjekker vi dekningen for deg.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative">
      <div className="absolute inset-0 noise-bg" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
            Vanlige spørsmål
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Har du spørsmål?
          </h2>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              className="bg-white rounded-xl border border-border px-6 data-[open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-medium text-base hover:no-underline py-5 cursor-pointer">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Trust } from "@/components/trust";
import { Testimonials } from "@/components/testimonials";
import { Areas } from "@/components/areas";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Trust />
        <Testimonials />
        <Areas />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

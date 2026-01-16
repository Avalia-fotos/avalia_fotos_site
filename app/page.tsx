import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata = {
  title: "AvaliA — Avalie suas fotos com IA",
  description:
    "Análise técnica automática, feedback educativo e nota visual para você evoluir suas fotos com clareza.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}


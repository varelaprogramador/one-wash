import {
  Header,
  HeroSection,
  ProcessSection,
  ServicesSection,
  AdvantagesSection,
  DifferentialsSection,
  FranchiseSection,
  SocialProofSection,
  CTAFinalSection,
  Footer,
} from "@/app/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section id="processo">
          <ProcessSection />
        </section>
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="vantagens">
          <AdvantagesSection />
        </section>
        <section id="diferenciais">
          <DifferentialsSection />
        </section>
        <section id="franquia">
          <FranchiseSection />
        </section>
        <section id="depoimentos">
          <SocialProofSection />
        </section>
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  );
}

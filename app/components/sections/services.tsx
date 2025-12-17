"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Sun,
  Factory,
  Wind,
  Droplets,
  Shield,
} from "lucide-react";
import { FeatureCard, ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// SERVICES DATA
// ============================================

const services = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Fachadas de Edifícios",
    description:
      "Limpeza completa de fachadas residenciais e comerciais, removendo sujeira, poluição e manchas sem riscos de trabalho em altura.",
  },
  {
    icon: <Sun className="w-7 h-7" />,
    title: "Painéis Solares",
    description:
      "Aumente a eficiência dos seus painéis em até 30% com limpeza especializada que não danifica as células fotovoltaicas.",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: "Galpões Industriais",
    description:
      "Limpeza de telhados, calhas e estruturas industriais de grande porte com rapidez e sem interromper sua operação.",
  },
  {
    icon: <Wind className="w-7 h-7" />,
    title: "Torres & Estruturas",
    description:
      "Manutenção de torres de telecomunicação, antenas e estruturas metálicas em locais de difícil acesso.",
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Reservatórios de Água",
    description:
      "Limpeza externa de caixas d'água e reservatórios elevados com técnicas seguras e eficientes.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Inspeções Aéreas",
    description:
      "Serviço complementar de inspeção visual com drones para identificar problemas estruturais e vazamentos.",
  },
];

// ============================================
// SERVICES SECTION
// ============================================

export function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Nossos Serviços
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Soluções{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Tecnologia de drones aplicada a diferentes necessidades de limpeza
            profissional.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={motionTokens.ease.hoverSpring}
            className="inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer group"
          >
            <span>Não encontrou o que precisa? Fale conosco</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

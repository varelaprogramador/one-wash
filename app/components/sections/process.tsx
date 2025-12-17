"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Plane,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ProcessCard, ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// PROCESS SECTION - "Como Funciona"
// ============================================

const steps = [
  {
    number: 1,
    title: "Análise & Orçamento",
    description:
      "Avaliamos sua necessidade, dimensionamos o projeto e enviamos um orçamento detalhado em até 24h.",
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "Planejamento de Voo",
    description:
      "Mapeamos a área, definimos rotas de voo seguras e preparamos todo o equipamento necessário.",
    icon: <Plane className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Execução Precisa",
    description:
      "Nossos drones executam a limpeza com jatos de alta pressão controlados remotamente.",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    number: 4,
    title: "Entrega & Garantia",
    description:
      "Realizamos inspeção final com imagens aéreas e garantimos a qualidade do serviço.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Processo
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Como{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Um processo simples, eficiente e totalmente seguro do início ao fim.
          </p>
        </ScrollReveal>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>

        {/* Process Steps - Mobile */}
        <StaggerContainer className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <StaggerItem key={step.number} animation="slideUp">
              <MobileProcessCard step={step} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated Progress Line (Desktop) */}
        <div className="hidden lg:block mt-12">
          <div className="relative h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full max-w-4xl mx-auto overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1.5,
                ease: motionTokens.ease.smooth,
              }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 origin-left"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MOBILE PROCESS CARD
// ============================================

interface MobileProcessCardProps {
  step: (typeof steps)[0];
  index: number;
}

function MobileProcessCard({ step, index }: MobileProcessCardProps) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex gap-6 items-start"
    >
      {/* Number and line */}
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={motionTokens.ease.hoverSpring}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30"
        >
          {step.number}
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-0.5 h-16 bg-gradient-to-b from-orange-500 to-orange-300 origin-top mt-2"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-orange-500">{step.icon}</div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
            {step.title}
          </h3>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

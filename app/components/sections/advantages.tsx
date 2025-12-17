"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Mountain,
  Rocket,
  PiggyBank,
  Leaf,
  Camera,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// ADVANTAGES DATA
// ============================================

const advantages = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Segurança Aumentada",
    description:
      "O uso de drones elimina a necessidade de escaladas ou trabalhos em altura, reduzindo os riscos para os trabalhadores e aumentando a segurança no local.",
    highlight: "Zero acidentes",
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Acesso a Locais de Difícil Acesso",
    description:
      "Drones podem atingir áreas de difícil acesso, como fachadas altas, telhados inclinados ou áreas remotas, sem a necessidade de andaimes ou escadas.",
    highlight: "Sem limitações",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Eficiência e Agilidade",
    description:
      "A combinação de drones e lavadoras de alta pressão permite uma limpeza mais rápida, cobrindo grandes áreas em menos tempo.",
    highlight: "5x mais rápido",
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: "Redução de Custos",
    description:
      "A utilização de drones e equipamentos de pressão pode reduzir os custos com equipamentos de segurança, andaimes e trabalho manual intensivo.",
    highlight: "Até 40% economia",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Sustentabilidade",
    description:
      "Menor consumo de água e energia comparado aos métodos tradicionais, com produtos de limpeza biodegradáveis e menor impacto ambiental.",
    highlight: "Eco-friendly",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Inspeção Integrada",
    description:
      "Além da limpeza, os drones capturam imagens de alta resolução que permitem identificar problemas estruturais, vazamentos e áreas de manutenção.",
    highlight: "Diagnóstico incluso",
  },
];

// ============================================
// ADVANTAGES SECTION
// ============================================

export function AdvantagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-white dark:bg-zinc-950"
    >
      {/* Background decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[80px]" />
      </motion.div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Por que escolher drones?
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Vantagens da{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Lavagem com Drone
            </span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Tecnologia de ponta que revoluciona a forma de realizar limpeza
            vertical e em altura.
          </p>
        </ScrollReveal>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              advantage={advantage}
              index={index}
            />
          ))}
        </div>

        {/* Bottom stats */}
        <ScrollReveal direction="up" className="mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "100%", label: "Seguro" },
                { value: "70%", label: "Mais rápido" },
                { value: "40%", label: "Economia" },
                { value: "0", label: "Acidentes" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-orange-100 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================
// ADVANTAGE CARD
// ============================================

interface AdvantageCardProps {
  advantage: (typeof advantages)[0];
  index: number;
}

function AdvantageCard({ advantage, index }: AdvantageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: motionTokens.duration.slow,
        delay: index * 0.1,
        ease: motionTokens.ease.smooth,
      }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-sm"
    >
      {/* Highlight badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="absolute -top-3 right-6 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full"
      >
        {advantage.highlight}
      </motion.div>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={motionTokens.ease.hoverSpring}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/25"
      >
        {advantage.icon}
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
        {advantage.title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {advantage.description}
      </p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/10 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

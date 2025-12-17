"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Target,
  Clock,
  Leaf,
  Award,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// DIFFERENTIALS DATA
// ============================================

const differentials = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Alta Performance",
    description: "Drones de última geração com capacidade de limpeza 5x mais rápida.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Total",
    description: "Zero risco de acidentes. Sem andaimes, sem trabalho em altura.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precisão Absoluta",
    description: "Controle milimétrico da pressão e do ângulo de limpeza.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Agilidade",
    description: "Redução de até 70% no tempo de execução comparado a métodos tradicionais.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustentabilidade",
    description: "Menor consumo de água e produtos químicos biodegradáveis.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certificação",
    description: "Equipe certificada pela ANAC e seguros completos.",
  },
];

// ============================================
// DIFFERENTIALS SECTION
// ============================================

export function DifferentialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 overflow-hidden dark:bg-zinc-950 bg-white transition-colors duration-300"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 bg-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] dark:bg-orange-500/10 bg-orange-500/5 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative container mx-auto px-6">
        {/* Header with mask reveal */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Por que ONE WASH
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: motionTokens.duration.slow,
                ease: motionTokens.ease.entrance,
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-6"
            >
              Nossos{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Diferenciais
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg dark:text-zinc-400 text-zinc-600 max-w-2xl mx-auto"
          >
            Tecnologia avançada aliada à experiência para entregar resultados
            excepcionais.
          </motion.p>
        </ScrollReveal>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <DifferentialCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

// ============================================
// DIFFERENTIAL CARD
// ============================================

interface DifferentialCardProps {
  item: (typeof differentials)[0];
  index: number;
}

function DifferentialCard({ item, index }: DifferentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: motionTokens.duration.normal,
        delay: index * 0.1,
        ease: motionTokens.ease.smooth,
      }}
      whileHover={{ y: -4 }}
      className="group relative p-6 rounded-2xl border dark:border-zinc-800 border-zinc-200 hover:border-orange-500/50 dark:bg-zinc-900/50 bg-white backdrop-blur-sm transition-colors duration-300 shadow-sm"
    >
      {/* Glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-orange-600/10 pointer-events-none"
      />

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300"
      >
        {item.icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative text-lg font-bold dark:text-white text-zinc-900 mb-2 group-hover:text-orange-400 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="relative dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed">
        {item.description}
      </p>

      {/* Corner decoration */}
      <motion.div
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-500"
      />
    </motion.div>
  );
}

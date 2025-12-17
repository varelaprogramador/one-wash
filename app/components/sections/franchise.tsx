"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  GraduationCap,
  Wrench,
  Headphones,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal, CTAButton, Button } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// FRANCHISE BENEFITS DATA
// ============================================

const franchiseBenefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Mercado em Expansão",
    description: "Setor de limpeza profissional cresce 15% ao ano no Brasil.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Marca Consolidada",
    description: "Associe-se a uma marca reconhecida por qualidade e inovação.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Treinamento Completo",
    description: "Capacitação técnica e comercial para você e sua equipe.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Equipamentos de Ponta",
    description: "Acesso aos melhores drones e tecnologias do mercado.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Suporte Contínuo",
    description: "Acompanhamento operacional, marketing e comercial.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Rede de Parceiros",
    description: "Faça parte de uma rede nacional de franqueados.",
  },
];

const investmentFeatures = [
  "Território exclusivo de atuação",
  "Manual operacional completo",
  "Sistema de gestão integrado",
  "Marketing e material de divulgação",
  "Suporte técnico especializado",
  "Acesso a fornecedores homologados",
  "Treinamento inicial e contínuo",
  "Certificação ANAC inclusa",
];

// ============================================
// FRANCHISE SECTION
// ============================================

export function FranchiseSection() {
  return (
    <section className="relative py-24 overflow-hidden dark:bg-zinc-900 bg-white transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 bg-white" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Oportunidade de Negócio</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-6">
            Seja um{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Franqueado ONE WASH
            </span>
          </h2>

          <p className="text-lg dark:text-zinc-400 text-zinc-600 max-w-3xl mx-auto">
            Entre para o mercado de limpeza profissional com drones. Uma
            oportunidade única de empreender com tecnologia de ponta e suporte
            completo.
          </p>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: motionTokens.duration.normal,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-xl dark:bg-zinc-800/50 bg-white border dark:border-zinc-700/50 border-zinc-200 hover:border-orange-500/50 transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 mb-3">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold dark:text-white text-zinc-900 mb-1">{benefit.title}</h4>
                <p className="text-sm dark:text-zinc-400 text-zinc-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Investment Card */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl" />

              <div className="relative dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 bg-white rounded-3xl p-8 border dark:border-zinc-700 border-zinc-200 shadow-xl">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block mb-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30">
                      <BadgeCheck className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold dark:text-white text-zinc-900 mb-2">
                    Pacote Franquia
                  </h3>
                  <p className="dark:text-zinc-400 text-zinc-600">Tudo que você precisa para começar</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {investmentFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 dark:text-zinc-300 text-zinc-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Investment info */}
                <div className="dark:bg-zinc-900/50 bg-zinc-100 rounded-xl p-4 mb-6 text-center">
                  <p className="text-lg font-semibold dark:text-white text-zinc-900">
                    Consulte valores e condições
                  </p>
                  <p className="text-sm dark:text-zinc-400 text-zinc-600 mt-1">
                    Entre em contato para saber mais
                  </p>
                </div>

                {/* CTA */}
                <CTAButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  className="w-full"
                >
                  Quero ser Franqueado
                </CTAButton>

                <p className="text-center text-xs text-zinc-500 mt-4">
                  Entraremos em contato em até 24h
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl dark:bg-zinc-800/30 bg-white border dark:border-zinc-700/50 border-zinc-200 shadow-lg">
            <div className="text-left">
              <p className="dark:text-white text-zinc-900 font-semibold">
                Ainda tem dúvidas sobre a franquia?
              </p>
              <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                Agende uma conversa com nosso time comercial
              </p>
            </div>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white whitespace-nowrap"
            >
              Agendar Reunião
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

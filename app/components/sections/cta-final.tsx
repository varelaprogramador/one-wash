"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { CTAButton, Button, ScrollReveal, PulseGlow } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// CTA FINAL SECTION
// ============================================

export function CTAFinalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden dark:bg-zinc-950 bg-white transition-colors duration-300"
    >
      {/* Animated background */}
      <CTABackground />

      <motion.div
        style={{ scale, opacity }}
        className="relative container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal direction="up">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
            >
              <PulseGlow duration={2}>
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
              </PulseGlow>
              <span>Pronto para começar?</span>
            </motion.div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-zinc-900 mb-6 leading-tight">
              Transforme a limpeza{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  da sua empresa
                </span>
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full origin-left"
                />
              </span>
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="up">
            <p className="text-lg sm:text-xl dark:text-zinc-400 text-zinc-600 mb-10 max-w-2xl mx-auto">
              Solicite um orçamento gratuito e descubra como nossos drones podem
              revolucionar a manutenção do seu patrimônio.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="https://wa.me/5547997174918" target="_blank" rel="noopener noreferrer">
                <CTAButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Solicitar Orçamento Grátis
                </CTAButton>
              </a>

              <a href="https://wa.me/5543991650099" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  className="dark:border-zinc-700 border-zinc-300 dark:text-white text-zinc-700 hover:border-orange-500 hover:bg-orange-500/10"
                >
                  (43) 99165-0099
                </Button>
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-8 dark:text-zinc-500 text-zinc-600">
              <motion.a
                href="mailto:comercial@onewashbrasil.com.br"
                whileHover={{ color: "#f97316", y: -2 }}
                className="flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>comercial@onewashbrasil.com.br</span>
              </motion.a>

              <motion.a
                href="https://instagram.com/onewashbrasil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#f97316", y: -2 }}
                className="flex items-center gap-2 transition-colors"
              >
                <span>@onewashbrasil</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>SC & PR - Brasil</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================
// CTA BACKGROUND
// ============================================

function CTABackground() {
  return (
    <div className="absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950 bg-white" />

      {/* Animated orange glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-orange-500/20 bg-orange-500/10 rounded-full blur-[150px]"
      />

      {/* Secondary glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] dark:bg-orange-600/15 bg-orange-500/10 rounded-full blur-[120px]"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-radial dark:from-transparent dark:via-zinc-950/50 dark:to-zinc-950 from-transparent via-white/50 to-white" />
    </div>
  );
}

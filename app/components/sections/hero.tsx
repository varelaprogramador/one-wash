"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Button, CTAButton, Floating } from "@/app/components/ui";
import {
  motionTokens,
  staggerContainer,
  slideUpVariants,
  scaleVariants,
} from "@/app/lib/motion";

// ============================================
// HERO SECTION
// ============================================

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-zinc-950 bg-white transition-colors duration-300">
      {/* Animated Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >


          {/* Headline */}
          <motion.h1
            variants={slideUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-zinc-900 mb-6 leading-tight"
          >
            Limpeza Profissional{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                com Drones
              </span>
              {/* Underline animado */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-2 left-0 w-full h-3 dark:bg-orange-500/20 bg-orange-500/30 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={slideUpVariants}
            className="text-lg sm:text-xl dark:text-zinc-400 text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Alcançamos onde ninguém mais chega. Limpeza de fachadas, painéis
            solares e estruturas elevadas com precisão tecnológica e segurança
            absoluta.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://wa.me/5547997174918" target="_blank" rel="noopener noreferrer">
              <CTAButton icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Solicitar Orçamento
              </CTAButton>
            </a>

            <a href="https://instagram.com/onewashbrasil" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="lg"
                icon={<Play className="w-5 h-5" />}
                className="dark:text-white text-zinc-700 hover:text-orange-500"
              >
                Ver em Ação
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={slideUpVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: "500+", label: "Projetos" },
              { value: "98%", label: "Satisfação" },
              { value: "24h", label: "Resposta" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1 + index * 0.1,
                  duration: motionTokens.duration.normal,
                }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold dark:text-white text-zinc-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm dark:text-zinc-500 text-zinc-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Drone Illustration */}
      <DroneIllustration />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

// ============================================
// HERO BACKGROUND
// ============================================

function HeroBackground() {
  return (
    <div className="absolute inset-0">
      {/* Gradient base */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 bg-white" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 dark:bg-orange-500/20 bg-orange-500/10 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 dark:bg-orange-600/15 bg-orange-500/10 rounded-full blur-[120px]"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 dark:opacity-20 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade */}
      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-zinc-950 dark:via-transparent dark:to-zinc-950 bg-transparent" />
    </div>
  );
}

// ============================================
// DRONE ILLUSTRATION
// ============================================

function DroneIllustration() {
  return (
    <Floating amplitude={15} duration={5} className="absolute right-10 top-1/3 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative"
      >
        {/* Drone SVG */}
        <svg
          width="200"
          height="120"
          viewBox="0 0 200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          {/* Body */}
          <motion.rect
            x="70"
            y="45"
            width="60"
            height="30"
            rx="6"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />

          {/* Arms */}
          <motion.line
            x1="70"
            y1="50"
            x2="30"
            y2="30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          />
          <motion.line
            x1="130"
            y1="50"
            x2="170"
            y2="30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          />
          <motion.line
            x1="70"
            y1="70"
            x2="30"
            y2="90"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />
          <motion.line
            x1="130"
            y1="70"
            x2="170"
            y2="90"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          {/* Propellers */}
          {[
            { cx: 30, cy: 30 },
            { cx: 170, cy: 30 },
            { cx: 30, cy: 90 },
            { cx: 170, cy: 90 },
          ].map((prop, i) => (
            <motion.g key={i}>
              <circle cx={prop.cx} cy={prop.cy} r="8" fill="#27272a" />
              <motion.ellipse
                cx={prop.cx}
                cy={prop.cy}
                rx="18"
                ry="4"
                fill="rgba(249, 115, 22, 0.5)"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: `${prop.cx}px ${prop.cy}px` }}
              />
            </motion.g>
          ))}

          {/* Camera */}
          <motion.circle
            cx="100"
            cy="80"
            r="8"
            fill="#3f3f46"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          />
          <motion.circle
            cx="100"
            cy="80"
            r="4"
            fill="#18181b"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
          />
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 blur-xl bg-orange-500/20 -z-10" />
      </motion.div>
    </Floating>
  );
}

// ============================================
// SCROLL INDICATOR
// ============================================

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 dark:text-zinc-500 text-zinc-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 dark:border-zinc-600 border-zinc-300 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-orange-500"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

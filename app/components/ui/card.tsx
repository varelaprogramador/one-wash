"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// ANIMATED CARD
// ============================================

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient" | "outline";
  hover?: "lift" | "glow" | "border" | "scale" | "none";
  className?: string;
  glowColor?: string;
}

export function Card({
  children,
  variant = "default",
  hover = "lift",
  className = "",
  glowColor = "orange",
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white dark:bg-zinc-900 shadow-lg",
    glass: "bg-white/10 backdrop-blur-lg border border-white/20",
    gradient:
      "bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20",
    outline: "border-2 border-zinc-200 dark:border-zinc-700",
  };

  const hoverEffects = {
    lift: {
      y: -8,
      boxShadow:
        "0 25px 50px -12px rgb(0 0 0 / 0.15), 0 12px 24px -8px rgb(0 0 0 / 0.1)",
    },
    glow: {
      boxShadow: `0 0 40px -10px var(--glow-color, rgb(249 115 22 / 0.4))`,
    },
    border: {},
    scale: {
      scale: 1.02,
    },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverEffects[hover]}
      transition={motionTokens.ease.hoverSpring}
      className={`
        rounded-2xl p-6 transition-all duration-300
        ${variants[variant]}
        ${hover === "border" ? "hover:border-orange-500" : ""}
        ${className}
      `}
      style={
        {
          "--glow-color": `rgb(249 115 22 / 0.4)`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// FEATURE CARD (Para seção de serviços)
// ============================================

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
  className = "",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: motionTokens.duration.slow,
        delay: index * 0.1,
        ease: motionTokens.ease.smooth,
      }}
      whileHover={{ y: -8 }}
      className={`
        group relative bg-white dark:bg-zinc-900 rounded-2xl p-8
        border border-zinc-100 dark:border-zinc-800
        hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10
        transition-all duration-300
        ${className}
      `}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/10 transition-all duration-300" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={motionTokens.ease.hoverSpring}
        className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/25"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-zinc-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="relative text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>

      {/* Arrow indicator */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-8 right-8 text-orange-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// PROCESS CARD (Para "Como Funciona")
// ============================================

interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
  index?: number;
}

export function ProcessCard({
  number,
  title,
  description,
  icon,
  isLast = false,
  index = 0,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: motionTokens.duration.slow,
        delay: index * 0.15,
        ease: motionTokens.ease.smooth,
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connection line */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.3,
            ease: motionTokens.ease.smooth,
          }}
          className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 origin-left"
        />
      )}

      {/* Number badge */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={motionTokens.ease.hoverSpring}
        className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-xl shadow-orange-500/30 mb-6"
      >
        <span className="text-2xl font-bold">{number}</span>

        {/* Icon overlay on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content */}
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}

// ============================================
// TESTIMONIAL CARD
// ============================================

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  index?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: motionTokens.duration.slow,
        delay: index * 0.1,
        ease: motionTokens.ease.smooth,
      }}
      className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-100 dark:border-zinc-800"
    >
      {/* Quote icon */}
      <svg
        className="w-10 h-10 text-orange-500/30 mb-4"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>

      {/* Quote */}
      <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">{author}</p>
          <p className="text-sm text-zinc-500">
            {role} · {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

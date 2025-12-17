"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useState } from "react";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// TYPES
// ============================================

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  magnetic?: boolean;
  ripple?: boolean;
  className?: string;
}

// ============================================
// ANIMATED BUTTON
// ============================================

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  magnetic = false,
  ripple = true,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });

  // Variantes de estilo
  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25",
    secondary:
      "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
    outline:
      "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
    ghost:
      "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
  };

  // Tamanhos
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ripple) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick?.(e);
  };

  // Magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setMagneticPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={motionTokens.ease.hoverSpring}
      style={{
        x: magneticPosition.x,
        y: magneticPosition.y,
      }}
      onClick={handleRipple}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={loading}
      className={`
        relative overflow-hidden rounded-full font-semibold
        transition-colors duration-300 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: r.x,
            top: r.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
          }}
        />
      ))}

      {/* Loading spinner */}
      {loading && (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.span>
      )}

      {/* Content */}
      <span className={`flex items-center gap-2 ${loading ? "opacity-0" : ""}`}>
        {icon && iconPosition === "left" && (
          <motion.span
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <motion.span
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}

// ============================================
// CTA BUTTON (Versão especial para CTAs)
// ============================================

interface CTAButtonProps extends ButtonProps {
  glowColor?: string;
}

export function CTAButton({
  children,
  glowColor = "orange",
  className = "",
  ...props
}: CTAButtonProps) {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 bg-${glowColor}-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Button
        variant="primary"
        size="lg"
        magnetic
        ripple
        className={`relative z-10 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}

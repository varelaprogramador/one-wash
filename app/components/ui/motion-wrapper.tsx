"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import {
  fadeVariants,
  slideUpVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleVariants,
  scaleFadeVariants,
  blurInVariants,
  scrollRevealVariants,
  staggerContainer,
  viewportSettings,
  createStaggerDelay,
  motionTokens,
} from "@/app/lib/motion";
import { ReactNode } from "react";

// ============================================
// TYPES
// ============================================

type AnimationType =
  | "fade"
  | "slideUp"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "scaleFade"
  | "blurIn"
  | "scrollReveal"
  | "stagger";

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  animation?: AnimationType;
  variants?: Variants;
  delay?: number;
  staggerIndex?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

// ============================================
// ANIMATION MAPPING
// ============================================

const animationMap: Record<AnimationType, Variants> = {
  fade: fadeVariants,
  slideUp: slideUpVariants,
  slideLeft: slideLeftVariants,
  slideRight: slideRightVariants,
  scale: scaleVariants,
  scaleFade: scaleFadeVariants,
  blurIn: blurInVariants,
  scrollReveal: scrollRevealVariants,
  stagger: staggerContainer,
};

// ============================================
// MOTION WRAPPER COMPONENT
// ============================================

export function MotionWrapper({
  children,
  animation = "fade",
  variants,
  delay = 0,
  staggerIndex,
  className,
  once = true,
  amount = 0.2,
  ...props
}: MotionWrapperProps) {
  const selectedVariants = variants || animationMap[animation] || fadeVariants;

  // Se tem staggerIndex, calcula o delay baseado no índice
  const calculatedDelay =
    staggerIndex !== undefined
      ? createStaggerDelay(staggerIndex)
      : delay;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariants}
      transition={calculatedDelay > 0 ? { delay: calculatedDelay } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CONTAINER
// ============================================

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = motionTokens.stagger.normal,
  delayChildren = 0.1,
  once = true,
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER ITEM
// ============================================

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  animation?: "slideUp" | "fade" | "scale" | "blurIn";
}

export function StaggerItem({
  children,
  className,
  animation = "slideUp",
  ...props
}: StaggerItemProps) {
  const variants: Record<string, Variants> = {
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: motionTokens.duration.normal,
          ease: motionTokens.ease.smooth,
        },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: motionTokens.duration.normal },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: motionTokens.ease.gentleSpring,
      },
    },
    blurIn: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: motionTokens.duration.normal },
      },
    },
  };

  return (
    <motion.div variants={variants[animation]} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// ============================================
// SCROLL REVEAL
// ============================================

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  distance = 60,
  once = true,
  ...props
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: motionTokens.duration.slow,
        ease: motionTokens.ease.entrance,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// FLOATING ELEMENT
// ============================================

interface FloatingProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function Floating({
  children,
  className,
  amplitude = 10,
  duration = 4,
  ...props
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// PULSE GLOW
// ============================================

interface PulseGlowProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function PulseGlow({
  children,
  className,
  duration = 2,
  ...props
}: PulseGlowProps) {
  return (
    <motion.div
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ONE WASH - Motion Design System
 * Sistema de tokens e variantes para animações consistentes
 *
 * Filosofia: Tecnologia em movimento, controle total e precisão aérea
 */

import { Variants, Transition } from "framer-motion";

// ============================================
// MOTION TOKENS - Configurações Base
// ============================================

export const motionTokens = {
  // Durações padronizadas
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
    slowest: 1.2,
  },

  // Delays para stagger effects
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    slower: 0.2,
  },

  // Curvas de easing
  ease: {
    // Suaves e tecnológicas
    smooth: [0.4, 0, 0.2, 1],
    // Entrada dramática
    entrance: [0, 0.55, 0.45, 1],
    // Saída suave
    exit: [0.4, 0, 1, 1],
    // Bounce sutil (drone landing)
    landing: [0.34, 1.56, 0.64, 1],
    // Spring natural
    spring: { type: "spring", stiffness: 300, damping: 30 },
    // Spring suave
    gentleSpring: { type: "spring", stiffness: 200, damping: 25 },
    // Spring para hover
    hoverSpring: { type: "spring", stiffness: 400, damping: 25 },
  },
} as const;

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions: Record<string, Transition> = {
  // Transição padrão suave
  default: {
    duration: motionTokens.duration.normal,
    ease: motionTokens.ease.smooth,
  },

  // Entrada de elementos
  entrance: {
    duration: motionTokens.duration.slow,
    ease: motionTokens.ease.entrance,
  },

  // Saída de elementos
  exit: {
    duration: motionTokens.duration.fast,
    ease: motionTokens.ease.exit,
  },

  // Spring para interações
  spring: motionTokens.ease.spring as Transition,

  // Spring suave para movimentos contínuos
  gentleSpring: motionTokens.ease.gentleSpring as Transition,

  // Hover responsivo
  hover: {
    duration: motionTokens.duration.fast,
    ease: motionTokens.ease.smooth,
  },
};

// ============================================
// ANIMATION VARIANTS - Padrões Reutilizáveis
// ============================================

// Fade simples
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.entrance,
  },
  exit: {
    opacity: 0,
    transition: transitions.exit,
  },
};

// Slide de baixo para cima (efeito de ascensão - drone subindo)
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.entrance,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: transitions.exit,
  },
};

// Slide da esquerda
export const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.entrance,
  },
};

// Slide da direita
export const slideRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.entrance,
  },
};

// Scale in (zoom de entrada)
export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.entrance,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: transitions.exit,
  },
};

// Scale + Fade suave
export const scaleFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.smooth,
    },
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionTokens.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionTokens.stagger.fast,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionTokens.stagger.slow,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// SPECIAL EFFECTS - Efeitos ONE WASH
// ============================================

// Floating effect (movimento de drone parado no ar)
export const floatingVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Pulse glow (pulsação de luz)
export const pulseGlowVariants: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Rotate hover (rotação suave no hover)
export const rotateHoverVariants: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: 180,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.smooth,
    },
  },
};

// Card hover lift (elevação de card)
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: motionTokens.ease.hoverSpring as Transition,
  },
};

// Draw line animation
export const drawLineVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};

// Blur in effect
export const blurInVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.smooth,
    },
  },
};

// ============================================
// SCROLL TRIGGERED VARIANTS
// ============================================

export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.entrance,
    },
  },
};

export const scrollScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.smooth,
    },
  },
};

// ============================================
// VIEWPORT SETTINGS
// ============================================

export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: "-100px",
};

export const viewportSettingsEager = {
  once: true,
  amount: 0.1,
  margin: "-50px",
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Cria delay customizado para stagger manual
 */
export const createStaggerDelay = (index: number, baseDelay = 0.1): number => {
  return index * baseDelay;
};

/**
 * Cria transição com delay
 */
export const withDelay = (delay: number, transition: Transition = transitions.entrance): Transition => ({
  ...transition,
  delay,
});

/**
 * Variantes para itens de stagger
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.ease.smooth,
    },
  },
};

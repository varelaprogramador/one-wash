"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TestimonialCard, ScrollReveal } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// TESTIMONIALS DATA
// ============================================

const testimonials = [
  {
    quote:
      "A ONE WASH transformou a fachada do nosso prédio. Resultado impecável e sem nenhum transtorno para os moradores.",
    author: "Carlos Mendes",
    role: "Síndico",
    company: "Condomínio Vista Verde",
  },
  {
    quote:
      "Nossos painéis solares estavam com 30% de perda de eficiência. Após a limpeza, voltaram ao máximo de performance.",
    author: "Ana Paula Ribeiro",
    role: "Gerente de Facilities",
    company: "Tech Park SP",
  },
  {
    quote:
      "Profissionalismo e tecnologia de primeiro mundo. A equipe é extremamente competente e o resultado fala por si.",
    author: "Roberto Silva",
    role: "Diretor de Operações",
    company: "Grupo Industrial ABC",
  },
  {
    quote:
      "Serviço rápido, seguro e eficiente. Não precisamos parar a operação da fábrica em nenhum momento.",
    author: "Fernanda Costa",
    role: "Engenheira de Produção",
    company: "Metalúrgica Precision",
  },
  {
    quote:
      "Excelente custo-benefício. A economia com mão de obra e equipamentos tradicionais foi significativa.",
    author: "Marcos Oliveira",
    role: "Controller Financeiro",
    company: "Shopping Center Norte",
  },
];

// ============================================
// CLIENTS/LOGOS DATA
// ============================================

const clients = [
  "TechCorp",
  "SolarMax",
  "BuildPro",
  "IndusTech",
  "CleanEnergy",
  "MetalForce",
  "AgroSmart",
  "LogiPrime",
];

// ============================================
// SOCIAL PROOF SECTION
// ============================================

export function SocialProofSection() {
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
            Depoimentos
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Mais de 500 projetos realizados com excelência e satisfação.
          </p>
        </ScrollReveal>

        {/* Rating summary */}
        <ScrollReveal direction="up" className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-white dark:bg-zinc-800 rounded-full px-6 py-3 shadow-lg">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: star * 0.1 }}
                >
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                </motion.div>
              ))}
            </div>
            <span className="font-bold text-zinc-900 dark:text-white">4.9</span>
            <span className="text-zinc-500 text-sm">baseado em 127 avaliações</span>
          </div>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel testimonials={testimonials} />

        {/* Client Logos */}
        <ClientLogos clients={clients} />
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

interface TestimonialsCarouselProps {
  testimonials: typeof testimonials;
}

function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex]);

  const handleManualNavigation = (dir: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    paginate(dir);
  };

  return (
    <div className="relative max-w-3xl mx-auto mb-20">
      {/* Carousel container */}
      <div className="overflow-hidden relative h-[320px]">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <TestimonialCard
            quote={testimonials[currentIndex].quote}
            author={testimonials[currentIndex].author}
            role={testimonials[currentIndex].role}
            company={testimonials[currentIndex].company}
          />
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleManualNavigation(-1)}
          className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-orange-500"
                  : "bg-zinc-300 dark:bg-zinc-600 hover:bg-orange-300"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleManualNavigation(1)}
          className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

// ============================================
// CLIENT LOGOS
// ============================================

interface ClientLogosProps {
  clients: string[];
}

function ClientLogos({ clients }: ClientLogosProps) {
  return (
    <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800">
      <ScrollReveal direction="up" className="text-center mb-8">
        <p className="text-sm text-zinc-500 uppercase tracking-wider">
          Empresas que confiam na ONE WASH
        </p>
      </ScrollReveal>

      {/* Infinite scroll logos */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-12 items-center"
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <motion.div
              key={`${client}-${index}`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 0.6, filter: "blur(0px)" }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ delay: index * 0.05 }}
              className="flex-shrink-0 px-8 py-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm"
            >
              <span className="text-xl font-bold text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

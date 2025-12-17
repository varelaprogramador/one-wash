"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";
import { useTheme } from "@/app/context";

// ============================================
// NAVIGATION ITEMS
// ============================================

const navItems = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Franquia", href: "#franquia" },
  { label: "Contato", href: "#depoimentos" },
];

// ============================================
// HEADER COMPONENT
// ============================================

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: motionTokens.ease.smooth }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg border-b py-4 dark:bg-zinc-950/90 bg-white/90 dark:border-zinc-800/50 border-zinc-200/50"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10"
            >
              <Logo />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <NavLink key={item.label} item={item} index={index} />
              ))}
            </nav>

            {/* CTA Button & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-orange-500 bg-zinc-100 text-zinc-600 hover:text-orange-500 transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === "dark" ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>

              <motion.a
                href="https://wa.me/5547997174918"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 dark:text-zinc-400 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(47) 99717-4918</span>
              </motion.a>

              <a href="https://wa.me/5547997174918" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">
                  Orçamento
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center dark:text-white text-zinc-900"
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

// ============================================
// LOGO COMPONENT
// ============================================

function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo mark */}
      <motion.div
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          {/* Simplified drone icon */}
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path
            d="M12 5V9M12 15V19M5 12H9M15 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="5" cy="5" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="19" cy="5" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="5" cy="19" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="19" cy="19" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Logo text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold dark:text-white text-zinc-900 tracking-tight">
          ONE<span className="text-orange-500">WASH</span>
        </span>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
          Drone Cleaning
        </span>
      </div>
    </div>
  );
}

// ============================================
// NAV LINK
// ============================================

interface NavLinkProps {
  item: (typeof navItems)[0];
  index: number;
}

function NavLink({ item, index }: NavLinkProps) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="relative text-sm font-medium dark:text-zinc-300 dark:hover:text-white text-zinc-600 hover:text-zinc-900 transition-colors group"
    >
      {item.label}

      {/* Hover underline */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 origin-left"
      />
    </motion.a>
  );
}

// ============================================
// MOBILE MENU
// ============================================

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          opacity: 1,
          pointerEvents: "auto" as const,
        },
        closed: {
          opacity: 0,
          pointerEvents: "none" as const,
        },
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      {/* Backdrop */}
      <motion.div
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-lg"
      />

      {/* Menu content */}
      <motion.nav
        variants={{
          open: {
            x: 0,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 },
          },
          closed: {
            x: "100%",
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-zinc-900 border-l border-zinc-800 pt-24 px-8"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={onClose}
            variants={{
              open: { x: 0, opacity: 1 },
              closed: { x: 50, opacity: 0 },
            }}
            whileHover={{ x: 8, color: "#f97316" }}
            className="block py-4 text-xl font-medium text-zinc-300 border-b border-zinc-800"
          >
            {item.label}
          </motion.a>
        ))}

        {/* Mobile CTA */}
        <motion.div
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: 20, opacity: 0 },
          }}
          className="mt-8"
        >
          <a href="https://wa.me/5547997174918" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="w-full">
              Solicitar Orçamento
            </Button>
          </a>

          <a
            href="https://wa.me/5547997174918"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>(47) 99717-4918</span>
          </a>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}

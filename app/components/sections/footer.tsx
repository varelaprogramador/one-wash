"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ui";
import { motionTokens } from "@/app/lib/motion";

// ============================================
// FOOTER DATA
// ============================================

const footerLinks = {
  services: [
    { label: "Fachadas", href: "#" },
    { label: "Painéis Solares", href: "#" },
    { label: "Galpões", href: "#" },
    { label: "Torres", href: "#" },
    { label: "Inspeções", href: "#" },
  ],
  company: [
    { label: "Sobre Nós", href: "#" },
    { label: "Processo", href: "#" },
    { label: "Diferenciais", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
};

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/onewashbrasil", label: "Instagram" },
];

// ============================================
// FOOTER COMPONENT
// ============================================

export function Footer() {
  return (
    <footer className="dark:bg-zinc-950 bg-white border-t dark:border-zinc-800 border-zinc-200 transition-colors duration-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="up">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
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
                <div>
                  <span className="text-xl font-bold dark:text-white text-zinc-900 tracking-tight">
                    ONE<span className="text-orange-500">WASH</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="dark:text-zinc-400 text-zinc-600 mb-6 max-w-sm">
                Liderança em limpeza profissional com drones. Tecnologia,
                segurança e resultados excepcionais.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <p className="dark:text-zinc-500 text-zinc-500 text-xs uppercase tracking-wider mb-2">Santa Catarina</p>
                <motion.a
                  href="https://wa.me/5547997174918"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, color: "#f97316" }}
                  className="flex items-center gap-3 dark:text-zinc-400 text-zinc-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(47) 99717-4918 - Aquiles</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 dark:text-zinc-400 text-zinc-600"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Praia Brava - Itajaí, SC</span>
                </motion.div>

                <p className="dark:text-zinc-500 text-zinc-500 text-xs uppercase tracking-wider mb-2 mt-4">Paraná</p>
                <motion.a
                  href="https://wa.me/5543991650099"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, color: "#f97316" }}
                  className="flex items-center gap-3 dark:text-zinc-400 text-zinc-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(43) 99165-0099 - Gilson</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 dark:text-zinc-400 text-zinc-600"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Cornélio Procópio, PR</span>
                </motion.div>

                <motion.a
                  href="mailto:comercial@onewashbrasil.com.br"
                  whileHover={{ x: 4, color: "#f97316" }}
                  className="flex items-center gap-3 dark:text-zinc-400 text-zinc-600 transition-colors mt-4"
                >
                  <Mail className="w-4 h-4" />
                  <span>comercial@onewashbrasil.com.br</span>
                </motion.a>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full dark:bg-zinc-800 bg-zinc-100 hover:bg-orange-500 flex items-center justify-center dark:text-zinc-400 text-zinc-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Services Column */}
          <div>
            <ScrollReveal direction="up">
              <h4 className="dark:text-white text-zinc-900 font-semibold mb-4">Serviços</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Company Column */}
          <div>
            <ScrollReveal direction="up">
              <h4 className="dark:text-white text-zinc-900 font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Support Column */}
          <div>
            <ScrollReveal direction="up">
              <h4 className="dark:text-white text-zinc-900 font-semibold mb-4">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t dark:border-zinc-800 border-zinc-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <ScrollReveal direction="left">
              <p className="text-zinc-500 text-sm">
                © {new Date().getFullYear()} ONE WASH. Todos os direitos reservados.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex items-center gap-6 text-sm text-zinc-500">
                <span>ANAC Certified</span>
                <span>•</span>
                <span>ISO 9001</span>
                <span>•</span>
                <span>Seguro Completo</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <BackToTop />
    </footer>
  );
}

// ============================================
// FOOTER LINK
// ============================================

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      className="dark:text-zinc-400 text-zinc-600 hover:text-orange-500 transition-colors inline-flex items-center gap-1 group"
    >
      {children}
      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}

// ============================================
// BACK TO TOP
// ============================================

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 flex items-center justify-center z-50"
    >
      <motion.svg
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </motion.svg>
    </motion.button>
  );
}

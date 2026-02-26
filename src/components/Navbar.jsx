import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Problema", href: "#problema" },
    { label: "Solución", href: "#propuesta" },
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleEvaluar = () => {
    setMobileOpen(false);
    window.dispatchEvent(new CustomEvent("openEvalModal"));
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "transparent" }}
    >
      {/* ── Desktop / Tablet bar ─────────────────────────────── */}
      <div className="px-4 sm:px-8 lg:px-10">
        <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-between">

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3 lg:gap-6 min-w-0">
            {/* LOGO PNG completo (reemplaza ícono + texto) */}
            <img
              src="https://i.imgur.com/bAdU5VB.png"
              alt="optimizApp Solutions SAS"
              className="h-14 sm:h-24 lg:h-28 w-auto"
              style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.4))' }}
            />
          </div>

          {/* NAV LINKS — desktop only */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="
                  text-sm font-medium text-gray-300
                  relative transition-all duration-300
                  hover:text-blue-400 hover:-translate-y-0.5
                  after:absolute after:-bottom-1.5 after:left-0
                  after:w-0 after:h-[2px] after:bg-blue-400
                  hover:after:w-full after:transition-all
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CTA button — hidden on very small screens */}
            <Button
              onClick={handleEvaluar}
              className="
                hidden sm:flex
                text-sm lg:text-base
                px-4 lg:px-6 py-2 lg:py-5
                rounded-lg lg:rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white font-semibold
                whitespace-nowrap
                shadow-lg shadow-blue-500/30
                hover:scale-105 hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Evaluar mi escenario
            </Button>

            {/* Hamburger — mobile / tablet */}
            <button
              className="xl:hidden p-2 text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden mx-4 mb-4 rounded-2xl bg-[#060d1f]/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
        >
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-all font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleEvaluar}
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-center"
            >
              Evaluar mi escenario
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;

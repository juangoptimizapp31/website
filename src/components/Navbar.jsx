import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Problema", href: "#problema" },
    { label: "Solución", href: "#propuesta" },
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-black/60
        border-b border-white/10
      "
    >
      <div className="px-10">
        <div className="h-24 flex items-center justify-between">
          
          {/* LOGO + BRAND */}
          <div className="flex items-center gap-6">
            <div className="
              w-16 h-16
              rounded-2xl
              bg-blue-500/20
              border border-blue-400/30
              flex items-center justify-center
              shadow-lg shadow-blue-500/20
            ">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.OfN2gLfLTLKoTnT-VW1QcQHaHV?rs=1&pid=ImgDetMain&o=7&rm=3"
                className="w-10 h-10"
                alt="OptimizApp Logo"
              />
            </div>

            <span className="text-1xl md:text-2xl font-bold tracking-wide text-white">
              optimizApp Solutions SAS
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="
                  text-lg font-medium text-gray-300
                  relative
                  transition-all duration-300
                  hover:text-blue-400
                  hover:-translate-y-1
                  hover:drop-shadow-[0_6px_12px_rgba(59,130,246,0.5)]
                  after:absolute after:-bottom-2 after:left-0
                  after:w-0 after:h-[2px]
                  after:bg-blue-400
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              className="
                text-lg px-8 py-6 rounded-xl
                bg-gradient-to-r from-blue-500 to-indigo-500
                text-white font-semibold
                shadow-lg shadow-blue-500/30
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_rgba(59,130,246,0.6)]
              "
            >
              Empezar ahora
            </Button>
          </div>

        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

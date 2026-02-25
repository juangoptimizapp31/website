import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, DollarSign, Shield, Zap, Users } from 'lucide-react';

import BackgroundBrand from "./BackgroundBrand";
const problems = [
  { icon: AlertCircle, title: "Herramientas desconectadas", desc: "Silos de información que frenan decisiones." },
  { icon: TrendingUp, title: "Crecimiento desordenado", desc: "Escalabilidad sin estrategia ni control." },
  { icon: DollarSign, title: "Costos imprevistos", desc: "Fugas de presupuesto en recursos zombie." },
  { icon: Shield, title: "Datos en riesgo", desc: "Vulnerabilidades por falta de gobierno." },
  { icon: Zap, title: "Procesos lentos", desc: "Burocracia técnica que mata la innovación." },
  { icon: Users, title: "Falta de visibilidad", desc: "Ceguera operativa sobre el rendimiento real." }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
};

const ProblemIdentification = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-[#060b16] to-[#02050c]">
      
      {/* 🔥 Background visual (marca / imagen / patrón) */}
      <BackgroundBrand />

      {/* overlays decorativos */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-blue-500 mb-2 tracking-wider uppercase">
              Identificación
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Si esto te pasa, <br />no estás solo.
            </h3>
          </div>

          <p className="mt-4 md:mt-0 text-gray-400 max-w-md text-sm md:text-base border-l-2 border-blue-500/30 pl-4">
            La complejidad tecnológica es el principal freno del crecimiento empresarial moderno. Nosotros ponemos orden.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="
                group relative p-8 rounded-3xl
                bg-white/[0.03] backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]
                hover:border-blue-500/40
                hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)]
                transition-all duration-500
              "
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              </div>

              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-6 h-6 text-blue-400" />
              </div>

              <h4 className="text-xl font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors">
                {problem.title}
              </h4>

              <p className="text-gray-400 leading-relaxed text-sm">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemIdentification;

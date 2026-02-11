import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "¿Cuánto tiempo toma ver resultados tangibles?",
    a: "Nuestro enfoque de 'Quick Wins' está diseñado para generar valor en las primeras 4 semanas, mientras construimos la estrategia a largo plazo."
  },
  {
    q: "¿Necesito un equipo técnico interno grande?",
    a: "No. Nosotros actuamos como tu brazo tecnológico extendido. Tu equipo se enfoca en el negocio, nosotros en la complejidad técnica."
  },
  {
    q: "¿Cómo se integran con nuestra operación actual?",
    a: "Trabajamos con metodologías ágiles no intrusivas. Nos adaptamos a tus herramientas (Slack, Jira, Teams) para una comunicación fluida."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-4 bg-[#050914] relative">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-xl bg-[#0f1629] border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className={`font-medium ${activeIndex === idx ? 'text-blue-400' : 'text-gray-300'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-blue-500' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
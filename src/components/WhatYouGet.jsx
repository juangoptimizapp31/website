import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AgendaModal from '@/components/AgendaModal';

const steps = [
  { title: "Diagnóstico inicial", desc: "Radiografía completa de tu infraestructura sin costo." },
  { title: "Plan de acción", desc: "Hoja de ruta con prioridades claras y ROI estimado." },
  { title: "Implementación ágil", desc: "Sprints cortos con entregables tangibles cada semana." },
  { title: "Optimización continua", desc: "Monitoreo y mejora constante basada en datos." }
];

const WhatYouGet = () => {
  const [openAgenda, setOpenAgenda] = useState(false);

  return (
    <>
      <section className="py-24 px-4 bg-[#030711] relative">
        <div className="container max-w-5xl mx-auto">
          <div className="relative bg-[#0f1629]/40 border border-white/5 rounded-3xl p-8 md:p-16 overflow-hidden">

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/10 to-transparent pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12">

              {/* LEFT */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold mb-6"
                >
                  Tu viaje hacia la <br />
                  <span className="text-blue-500">eficiencia total</span>
                </motion.h2>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  No dejamos nada al azar. Nuestro proceso está diseñado para minimizar riesgos y maximizar la velocidad de implementación.
                </p>

                <Button
                  onClick={() => setOpenAgenda(true)}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30"
                >
                  Iniciar mi viaje
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* RIGHT – TIMELINE */}
              <div className="relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-800" />

                <div className="space-y-8 relative">
                  {steps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="flex gap-6 items-start group"
                    >
                      <div className="relative w-8 h-8 rounded-full bg-[#030711] border border-blue-500/30 flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors">
                        <div className="w-3 h-3 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AgendaModal
        open={openAgenda}
        onClose={() => setOpenAgenda(false)}
      />
    </>
  );
};

export default WhatYouGet;

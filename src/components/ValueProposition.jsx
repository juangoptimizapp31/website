import React from 'react';
import { motion } from 'framer-motion';
import { Target, Gauge, TrendingUp, BarChart3, Activity } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-24 px-4 bg-[#030711] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Convertimos complejidad <span className="text-blue-500">en resultados</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Ahorro y Control */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="
            glass-card rounded-3xl p-8 relative overflow-hidden group
            transition-all duration-500
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            hover:shadow-[0_40px_140px_rgba(59,130,246,0.45)]
            hover:-translate-y-2
          "

          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded">
                  +45% Savings
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Ahorro y control</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Visibilidad total sobre tu inversión. Eliminamos costos fantasma.
              </p>

              {/* Mini Widget Visualization */}
              <div className="h-24 w-full bg-[#0a0f1d] rounded-lg p-3 border border-white/5 flex items-end justify-between gap-1">
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="w-full bg-blue-500/20 rounded-t-sm hover:bg-blue-500/40 transition-colors"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Rendimiento */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
            glass-card rounded-3xl p-8 relative overflow-hidden group
            transition-all duration-500
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            hover:shadow-[0_40px_140px_rgba(99,102,241,0.45)]
            hover:-translate-y-2
          "
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Gauge className="w-8 h-8 text-indigo-400" />
                </div>
                <Activity className="w-5 h-5 text-indigo-400 animate-pulse" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Rendimiento</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Infraestructura optimizada para velocidad y estabilidad crítica.
              </p>

              {/* Speedometer Visualization */}
              <div className="h-24 w-full bg-[#0a0f1d] rounded-lg p-4 border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
                   />
                </div>
                <div className="absolute bottom-2 right-4 font-mono text-xs text-indigo-300">99.9% Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Crecimiento */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="
            glass-card rounded-3xl p-8 relative overflow-hidden group
            transition-all duration-500
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            hover:shadow-[0_40px_140px_rgba(6,182,212,0.45)]
            hover:-translate-y-2
          "
          >
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <BarChart3 className="w-5 h-5 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Crecimiento seguro</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Escala tu operación sin riesgos ni deuda técnica acumulada.
              </p>

               {/* Growth Line Visualization */}
               <div className="h-24 w-full bg-[#0a0f1d] rounded-lg p-3 border border-white/5 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                    <motion.path
                      d="M0,40 Q25,35 50,20 T100,5"
                      fill="none"
                      stroke="url(#gradient-line)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
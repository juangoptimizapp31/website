import React from 'react';
import { motion } from 'framer-motion';

const ProofTrust = () => {
  return (
    <section className="py-24 px-4 bg-[#050914] border-t border-white/5">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Menos caos. Más control. <br/>
          <span className="text-blue-500">Resultados medibles.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0f1629] p-6 rounded-2xl border border-white/5 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
             <div className="text-5xl font-bold text-white mb-2 font-mono">40%</div>
             <p className="text-gray-400 text-sm">Reducción de costos Cloud</p>
             {/* Abstract Graph */}
             <div className="mt-6 flex items-end justify-center gap-1 h-12 opacity-50">
               <div className="w-2 h-8 bg-blue-500 rounded-sm" />
               <div className="w-2 h-4 bg-gray-700 rounded-sm" />
               <div className="w-2 h-6 bg-gray-700 rounded-sm" />
               <div className="w-2 h-10 bg-gray-700 rounded-sm" />
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f1629] p-6 rounded-2xl border border-white/5 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
             <div className="text-5xl font-bold text-white mb-2 font-mono">3x</div>
             <p className="text-gray-400 text-sm">Velocidad de deploy</p>
             <div className="mt-6 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="h-full bg-green-500"
                />
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f1629] p-6 rounded-2xl border border-white/5 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
             <div className="text-5xl font-bold text-white mb-2 font-mono">99.9%</div>
             <p className="text-gray-400 text-sm">Uptime garantizado</p>
             <div className="mt-6 flex justify-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-500 uppercase tracking-widest">Operational</span>
             </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0f1629] p-6 rounded-2xl border border-white/5 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
             <div className="text-5xl font-bold text-white mb-2 font-mono">24/7</div>
             <p className="text-gray-400 text-sm">Soporte experto</p>
             <div className="mt-6 flex items-center justify-center -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0f1629]" />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofTrust;
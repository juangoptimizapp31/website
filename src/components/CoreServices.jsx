import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, PiggyBank, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CoreServices = () => {
  const { toast } = useToast();

  const handleConsult = () => {
    toast({
      title: "Solicitud recibida",
      description: "Pronto te conectaremos con un consultor experto. 🚀",
    });
  };

  return (
    <section className="py-32 px-4 bg-[#050914] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/5">
              <span className="text-blue-400 text-sm font-medium tracking-wide">
                CORE EXPERTISE
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Consultoría Cloud & AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                enfocada en resultados.
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              No vendemos servidores, vendemos eficiencia. Nuestro enfoque integra
              inteligencia artificial y arquitectura cloud moderna.
            </p>

            <div className="space-y-8">
              {[
                { icon: Rocket, title: "Crecimiento ordenado", text: "Escala globalmente con arquitectura resiliente." },
                { icon: PiggyBank, title: "Costos optimizados", text: "FinOps para maximizar el ROI de cada dólar." },
                { icon: Cog, title: "Operación eficiente", text: "Automatización inteligente y efectiva." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f1629] border border-white/5 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={handleConsult}
              className="
                mt-12 px-8 py-6 text-lg rounded-xl font-semibold
                bg-white text-black
                hover:bg-white hover:text-black
                relative z-30
              "
            >
              Explorar soluciones
            </Button>
          </motion.div>

          {/* VISUAL */}
          <div className="relative h-[600px] w-full hidden lg:block">

            {/* CUADRO 1 – BASE (con imagen) */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              whileHover={{ scale: 1.25, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                absolute top-1/4 left-10 w-64 h-64 rounded-3xl
                overflow-hidden
                border border-blue-500/20 backdrop-blur-xl
                shadow-[0_0_80px_rgba(59,130,246,0.4)]
              "
            >
              <img
                src="https://i.imgur.com/bGBCISZ.jpeg"
                alt="Cloud Infrastructure"
                className="w-full h-full object-cover opacity-90"
              />

              {/* overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/20" />
            </motion.div>

            {/* CUADRO 2 – MEDIO (con imagen) */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              whileHover={{ scale: 1.25, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                absolute top-1/3 right-10 w-72 h-80 rounded-3xl
                overflow-hidden
                border border-blue-500/20 backdrop-blur-2xl
                shadow-[0_0_140px_rgba(59,130,246,0.6)]
              "
            >
              <img
                src="https://i.imgur.com/X7nGua5.jpeg"
                alt="AI Dashboard"
                className="w-full h-full object-cover opacity-85"
              />

              {/* overlay oscuro elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </motion.div>

            {/* CUADRO 3 – REDONDO (sin cambios) */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              whileHover={{ scale: 1.35, zIndex: 60 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="
                absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full
                bg-blue-500/10 border border-blue-400/30
                backdrop-blur-2xl flex items-center justify-center
                shadow-[0_0_180px_rgba(59,130,246,0.85)]
              "
            >
              <img
                src="https://i.imgur.com/Re8C8Oc.jpeg"
                alt="AI Brain"
                className="w-32 h-32 rounded-full opacity-90"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreServices;

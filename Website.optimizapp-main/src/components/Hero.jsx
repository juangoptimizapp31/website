import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EvaluarModal from "@/components/EvaluarModal";
import EvaluarModal2 from "@/components/EvaluarModal2";
import EvaluarModal3 from "@/components/EvaluarModal3";
import HologramHeroBackground from "@/components/HologramHeroBackground";

const Hero = () => {
  const ref = useRef(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Escucha el botón del Navbar
  useEffect(() => {
    const open = () => setStep(1);
    window.addEventListener("openEvalModal", open);
    return () => window.removeEventListener("openEvalModal", open);
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative w-full overflow-hidden
        flex items-center justify-end
        h-screen
        min-h-[500px]
        px-4 sm:px-8 lg:px-16
      "
    >
      {/* FONDO a pantalla completa */}
      <HologramHeroBackground />

      {/* ── Panel (visible en todos los tamaños) ──────────────── */}
      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full sm:w-auto"
      >
        {/*
          Tamaños del panel por breakpoint:
          - mobile  : ancho 100%, posicionado abajo-centro
          - sm/md   : ancho fijo 340px
          - lg+     : ancho fijo 380px
        */}
        <div
          className="
            relative
            w-full sm:w-[340px] lg:w-[380px]
            mx-auto sm:mx-0
          "
        >
          {/* Glow exterior */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />

          {/* Panel glass */}
          <div
            className="
              relative z-10 w-full
              rounded-2xl lg:rounded-[28px]
              overflow-hidden
              flex flex-col
              pt-14 pb-5 px-4 sm:px-5 lg:px-6
              bg-[#0b1222]/70
              backdrop-blur-2xl
              shadow-[0_20px_50px_-10px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.25)]
              transform-gpu hover:-translate-y-2 transition-transform duration-500
            "
          >
            {/* System Optimal badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-3 right-3 bg-[#0f1629]/90 px-2.5 py-1 rounded-xl border border-white/10 shadow-xl"
            >
              <span className="text-xs sm:text-sm text-green-400">● System Optimal</span>
            </motion.div>

            {/* Contenido */}
            <div className="space-y-3 sm:space-y-4">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                AI-Driven Cloud Optimization
              </div>

              {/* Título */}
              <h1 className="font-bold leading-tight">
                <span className="block text-white text-2xl sm:text-3xl lg:text-4xl">Orden, control y</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-2xl sm:text-3xl lg:text-4xl">
                  crecimiento
                </span>
                <span className="block text-gray-400 text-base sm:text-lg lg:text-xl mt-1">en la nube.</span>
              </h1>

              {/* Descripción */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Eliminamos el caos tecnológico con arquitectura inteligente y resultados reales.
              </p>

              {/* Botón dentro del panel */}
              <Button
                variant="outline"
                size="default"
                className="w-full rounded-xl bg-white/5 border-white/20 text-white hover:bg-white/10 text-sm"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Hablar con experto
              </Button>

              {/* Botón evaluar — solo visible en mobile donde navbar no tiene botón */}
              <Button
                onClick={() => setStep(1)}
                className="sm:hidden w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-sm"
              >
                Evaluar mi escenario
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Modales ─────────────────────────────────────────── */}
      <EvaluarModal
        open={step === 1}
        setOpen={(v) => !v && setStep(0)}
        onNext={(d) => { console.log("Paso 1:", d); setStep(2); }}
      />
      <EvaluarModal2
        open={step === 2}
        setOpen={(v) => !v && setStep(0)}
        onBack={() => setStep(1)}
        onNext={(d) => { console.log("Paso 2:", d); setStep(3); }}
      />
      <EvaluarModal3
        open={step === 3}
        setOpen={(v) => !v && setStep(0)}
        onBack={() => setStep(2)}
        onSubmit={(d) => { console.log("Paso 3:", d); setStep(0); }}
      />
    </section>
  );
};

export default Hero;

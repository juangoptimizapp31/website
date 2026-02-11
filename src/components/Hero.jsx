import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import EvaluarModal from "@/components/EvaluarModal";
import EvaluarModal2 from "@/components/EvaluarModal2";
import EvaluarModal3 from "@/components/EvaluarModal3";

const Hero = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const [step, setStep] = useState(0);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleAction = (feature) => {
    toast({
      title: "🚧 Feature in development",
      description: `The '${feature}' feature isn't implemented yet. Request it in the next update! 🚀`,
    });
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">

        {/* CONTENT */}
        <motion.div style={{ y, opacity }} className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI-Driven Cloud Optimization
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white">Orden, control y</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-glow">
              crecimiento
            </span>
            <span className="block text-gray-400 text-3xl mt-2">en la nube.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl">
            Eliminamos el caos tecnológico con arquitectura inteligente y resultados reales.
          </p>

          <div className="flex gap-4">
            <Button
              onClick={() => setStep(1)}
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 px-8 h-14 rounded-xl shadow-xl"
            >
              Evaluar mi escenario <ArrowRight className="ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-xl bg-white/5 border-white/10"
            >
              <MessageSquare className="mr-2" /> Hablar con experto
            </Button>
          </div>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <div className="relative w-full max-w-[560px] mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />

            <div className="
              relative z-10 w-full h-full 
              rounded-[32px] 
              overflow-hidden 
              flex items-center justify-center p-6
              bg-[#0b1222]/70
              backdrop-blur-2xl
              shadow-[0_30px_60px_-10px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)]
              transform-gpu transition-transform duration-700 hover:-translate-y-4
              before:absolute before:inset-0 
              before:rounded-[32px]
              before:p-[1px]
              before:bg-gradient-to-br 
              before:from-white/10 
              before:via-transparent 
              before:to-blue-500/10
              before:opacity-40
              before:pointer-events-none
            ">
              
              <img
                src="https://i.imgur.com/q9EVOwh.png"
                alt="Optimizapp Cloud Dashboard"
                className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-700"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 bg-[#0f1629]/90 px-4 py-2 rounded-xl border border-white/10 shadow-xl"
              >
                <span className="text-sm text-green-400">● System Optimal</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 left-6 bg-[#0f1629]/90 px-4 py-3 rounded-xl border border-white/10 shadow-xl"
              >
                <span className="text-xs text-gray-400">Cloud Efficiency</span>
                <div className="w-32 h-1 bg-gray-700 rounded-full mt-1">
                  <div className="h-full w-[94%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* PASO 1 */}
      <EvaluarModal
        open={step === 1}
        setOpen={(v) => !v && setStep(0)}
        onNext={(dataPaso1) => {
          console.log("Paso 1:", dataPaso1);
          setStep(2);
        }}
      />

      {/* PASO 2 */}
      <EvaluarModal2
        open={step === 2}
        setOpen={(v) => !v && setStep(0)}
        onBack={() => setStep(1)}
        onNext={(dataPaso2) => {
          console.log("Paso 2:", dataPaso2);
          setStep(3); // luego harás el paso 3
        }}
      />
      <EvaluarModal3
        open={step === 3}
        setOpen={(v) => !v && setStep(0)}
        onBack={() => setStep(2)}
        onSubmit={(dataPaso3) => {
          console.log("Paso 3:", dataPaso3);
          setStep(0); // cerrar todo
        }}
      />
    </section>
  );
};

export default Hero;

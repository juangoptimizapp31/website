import { motion } from "framer-motion";

export default function AiVisual() {
  return (
    <div className="relative w-full h-[420px] rounded-2xl bg-[#0b1220] overflow-hidden flex items-center justify-center">

      {/* Glow animado */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Imagen */}
      <motion.img
        src="/images/ai-human.png"
        alt="AI Assistant"
        className="absolute w-[320px]"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}

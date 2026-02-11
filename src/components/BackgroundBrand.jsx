import { motion } from "framer-motion";

export default function BackgroundBrand() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      animate={{ x: [0, -120], y: [0, -240] }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 grid grid-cols-3 gap-y-28 gap-x-48 rotate-[-12deg]">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="text-blue-500 font-medium tracking-widest
                       text-[28px] opacity-[0.04] select-none"
            style={{
              marginLeft: i % 2 === 0 ? "0px" : "160px",
            }}
          >
            optimizapp
          </span>
        ))}
      </div>
    </motion.div>
  );
}

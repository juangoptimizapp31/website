import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Zap, Users, Bot, TrendingUp, Plus } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: CreditCard,
    title: "SmartCard",
    desc: "Plataforma de pagos inteligente con conciliación automática.",
    image: "https://i.imgur.com/8QfQYkR.jpg"
  },
  {
    id: 2,
    icon: Zap,
    title: "Automatización",
    desc: "Workflows end-to-end que eliminan el trabajo manual.",
    image: "https://i.imgur.com/E0KeMMu.jpeg"
  },
  {
    id: 3,
    icon: Users,
    title: "CRM Inteligente",
    desc: "Gestión de clientes potenciada por modelos predictivos.",
    image: "https://i.imgur.com/q0JqAam.jpeg"
  },
  {
    id: 4,
    icon: Bot,
    title: "Asistente Virtual",
    desc: "Agentes de IA entrenados en tu negocio 24/7.",
    image: "https://i.imgur.com/7WrCl7Y.jpeg"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Business Analytics",
    desc: "Dashboards en tiempo real para decisiones ejecutivas.",
    image: "https://i.imgur.com/JxZJQpR.jpg"
  }
];

const ServicesCatalog = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 px-4 bg-[#030711]">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Catálogo de <span className="text-blue-500">Soluciones</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 h-[400px] lg:h-[300px]">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layout
              onHoverStart={() => setHovered(service.id)}
              onHoverEnd={() => setHovered(null)}
              className={`relative rounded-2xl border border-white/5 bg-[#0f1629] overflow-hidden cursor-pointer transition-colors hover:border-blue-500/30
                ${hovered === service.id ? 'lg:col-span-2 bg-blue-900/10' : 'col-span-1'}
              `}
            >
              {/* IMAGEN DE FONDO (NO TOCA LA LÓGICA) */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-30
                "
              />

              {/* OVERLAY ORIGINAL */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629] via-[#0f1629]/70 to-transparent z-10" />

              {/* CONTENIDO ORIGINAL */}
              <div className="absolute inset-0 p-6 flex flex-col z-20 h-full">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl bg-blue-500/10 text-blue-400 transition-all ${hovered === service.id ? 'scale-110' : ''}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <Plus
                    className={`w-5 h-5 text-gray-600 transition-transform ${hovered === service.id ? 'rotate-45 text-blue-500' : ''}`}
                  />
                </div>

                <div className="mt-auto">
                  <h3
                    className={`font-bold text-lg mb-2 transition-all ${hovered === service.id ? 'text-2xl text-blue-400' : 'text-gray-200'}`}
                  >
                    {service.title}
                  </h3>

                  <AnimatePresence>
                    {hovered === service.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-400 text-sm leading-relaxed"
                      >
                        {service.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCatalog;

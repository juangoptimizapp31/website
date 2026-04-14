import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, Users, Bot, TrendingUp, Plus, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const services = [
  // ... (mantiene los mismos servicios)
  {
    id: 1,
    icon: CreditCard,
    title: "SmartCard",
    desc: "Plataforma de pagos inteligente con conciliación automática. Simplifica tus operaciones financieras con nuestra tecnología de SmartCard, diseñada para empresas que buscan agilidad y precisión en cada transacción.",
    image: "https://i.imgur.com/8QfQYkR.jpg"
  },
  {
    id: 2,
    icon: Zap,
    title: "Automatización",
    desc: "Workflows end-to-end que eliminan el trabajo manual. Transforma tus procesos internos con automatización robótica de procesos (RPA) y flujos de trabajo inteligentes que liberan a tu equipo para tareas de mayor valor.",
    image: "https://i.imgur.com/E0KeMMu.jpeg"
  },
  {
    id: 3,
    icon: Users,
    title: "CRM Inteligente",
    desc: "Gestión de clientes potenciada por modelos predictivos. Entiende a tus clientes antes de que ellos mismos lo hagan. Nuestro CRM utiliza IA para predecir comportamientos y optimizar cada punto de contacto.",
    image: "https://i.imgur.com/q0JqAam.jpeg"
  },
  {
    id: 4,
    icon: Bot,
    title: "Asistente Virtual",
    desc: "Agentes de IA entrenados en tu negocio 24/7. Mejora la satisfacción del cliente con asistentes conversacionales que resuelven dudas complejas y ejecutan tareas directamente en tus sistemas legacy.",
    image: "https://i.imgur.com/7WrCl7Y.jpeg"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Business Analytics",
    desc: "Dashboards en tiempo real para decisiones ejecutivas. Convierte los datos brutos en inteligencia competitiva. Visualiza el rendimiento de tu empresa con claridad absoluta y previsión estratégica.",
    image: "https://i.imgur.com/JxZJQpR.jpg"
  }
];

const ServicesCatalog = () => {
  const [selectedService, setSelectedService] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoPlay = () => {
      if (window.innerWidth >= 640) return; // Solo en vista móvil (sm breakpoint)

      const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
      const isAtEnd = scrollLeft + offsetWidth >= scrollWidth - 10;
      const nextScroll = isAtEnd ? 0 : scrollLeft + offsetWidth;
      
      scrollContainer.scrollTo({
        left: nextScroll,
        behavior: 'smooth'
      });
    };

    const interval = setInterval(autoPlay, 5000); // Un poco mas lento para permitir lectura
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#030711]">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Catálogo de <span className="text-blue-500">Soluciones</span>
          </h2>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-12 px-4 -mx-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-8 sm:overflow-visible sm:px-0 sm:mx-0 sm:pb-0"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              animate={{ 
                y: [0, -12, 0],
              }}
              translateY={0}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5
                }
              }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedService(service)}
              className="
                snap-center flex-shrink-0 w-[85vw] sm:w-full
                group relative rounded-3xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-md 
                overflow-hidden cursor-pointer h-[280px] transition-all duration-500
                shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
                hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
              "
              style={{ perspective: "1000px" }}
            >
              {/* Resplandor interno animado */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
              
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent z-10" />
              
              <div className="absolute inset-0 p-8 flex flex-col z-20 h-full">
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-blue-500/20 backdrop-blur-xl text-blue-400 border border-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-500">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Plus className="w-5 h-5 text-blue-400 group-hover:rotate-180 transition-transform duration-700" />
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 block">
                      Solution {service.id}
                    </span>
                    <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-full mt-3 shadow-[0_0_10px_rgba(59,130,246,1)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL PARA DESCRIPCIÓN */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl bg-[#0a0f1e] border-white/10 p-0 overflow-hidden shadow-2xl">
            {selectedService && (
              <div className="relative">
                {/* Imagen de cabecera */}
                <div className="relative h-64 w-full">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  <div className="absolute bottom-6 left-8 flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400">
                      <selectedService.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {selectedService.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-6 px-8 rounded-xl flex items-center gap-2 group transition-all"
                    >
                      Solicitar información
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedService(null)}
                      className="border-white/10 hover:bg-white/5 text-gray-400 py-6 px-8 rounded-xl"
                    >
                      Cerrar
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServicesCatalog;

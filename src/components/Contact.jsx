import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Bot } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#030711] z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0" />

      <div className="container max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Empieza hoy la <br />transformación.
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Sin compromisos. Solo una conversación honesta sobre cómo podemos ayudarte a escalar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: MessageCircle, label: "WhatsApp", link: "https://wa.me/+573007283879", color: "bg-green-600" },
            { icon: Phone, label: "Llamar ahora", link: "tel:+573007283879", color: "bg-blue-600" },
            { icon: Mail, label: "Enviar correo", link: "mailto:infocomercial@gmail.com", color: "bg-indigo-600" },
            { icon: Bot, label: "Chat IA", link: "https://optimizapp.com/chat", color: "bg-purple-600" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="relative rounded-2xl"
            >
              {/* Glow estable */}
              <div
                className={`absolute inset-0 rounded-2xl ${item.color} opacity-25 blur-2xl`}
              />

              {/* Card */}
              <div
                className="
                  relative
                  bg-[#0b1224]
                  border border-white/10
                  rounded-2xl
                  p-8
                  flex flex-col
                  items-center
                  gap-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-full ${item.color}
                  flex items-center justify-center
                  text-white
                  shadow-lg`}
                >
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Label */}
                <span className="text-sm font-semibold text-white tracking-wide">
                  {item.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

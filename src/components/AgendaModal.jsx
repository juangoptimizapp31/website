import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, MessageCircle } from "lucide-react";
import CalendarPicker from "@/components/agenda/CalendarPicker";

const HOURS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const AgendaModal = ({ open, onClose }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  // 👉 NUEVO: estado real de agenda
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  if (!open) return null;

  const confirmAgenda = () => {
    const agenda = {
      date: selectedDate,
      hour: selectedHour,
      createdAt: new Date().toISOString(),
    };

    // 👉 aquí luego va backend / firebase
    console.log("AGENDA CONFIRMADA:", agenda);

    setConfirmed(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative w-full max-w-xl rounded-3xl p-8 md:p-10
            bg-[#0b1222]/90 backdrop-blur-2xl
            border border-white/10
            shadow-[0_0_80px_rgba(59,130,246,0.35)]
          "
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
          >
            <X />
          </button>

          {/* HEADER */}
          <h3 className="text-3xl font-bold mb-2 text-white">
            Agenda una llamada
          </h3>
          <p className="text-gray-400 mb-8">
            Hablemos de tu infraestructura y definamos el siguiente paso.
          </p>

          {/* ================= STEP 1 ================= */}
          {!showCalendar && (
            <div className="space-y-4">
              <button
                onClick={() => setShowCalendar(true)}
                className="
                  flex items-center justify-between w-full px-6 py-4
                  rounded-xl bg-blue-600 hover:bg-blue-500
                  text-white font-medium transition shadow-lg
                "
              >
                <span className="flex items-center gap-3">
                  <Calendar />
                  Abrir calendario
                </span>
                →
              </button>

              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-between w-full px-6 py-4
                  rounded-xl bg-[#0f1629] border border-green-500/30
                  hover:border-green-500 hover:bg-green-500/10
                  text-white transition
                "
              >
                <span className="flex items-center gap-3 text-green-400">
                  <MessageCircle />
                  WhatsApp directo
                </span>
                →
              </a>

              <a
                href="mailto:contacto@tudominio.com"
                className="
                  flex items-center justify-between w-full px-6 py-4
                  rounded-xl bg-[#0f1629] border border-blue-500/30
                  hover:border-blue-500 hover:bg-blue-500/10
                  text-white transition
                "
              >
                <span className="flex items-center gap-3 text-blue-400">
                  <Mail />
                  Escribir por email
                </span>
                →
              </a>
            </div>
          )}

          {/* ================= STEP 2 ================= */}
          {showCalendar && !confirmed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-6"
            >
              {/* FECHA */}
              <CalendarPicker
                selectedDate={selectedDate}
                onSelect={(day) => {
                  setSelectedDate(day);
                  setSelectedHour(null);
                }}
              />

              {/* HORA */}
              {selectedDate && (
                <div className="space-y-3">
                  <p className="text-sm text-white/70">
                    Escoge una hora
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {HOURS.map((hour) => (
                      <button
                        key={hour}
                        onClick={() => setSelectedHour(hour)}
                        className={`py-2 rounded-lg text-sm transition
                          ${
                            selectedHour === hour
                              ? "bg-blue-500 text-white shadow-lg"
                              : "bg-white/10 hover:bg-white/20"
                          }
                        `}
                      >
                        {hour}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CONFIRMAR */}
              {selectedDate && selectedHour && (
                <button
                  onClick={confirmAgenda}
                  className="
                    w-full mt-4 py-3 rounded-xl
                    bg-blue-600 hover:bg-blue-500
                    text-white font-medium shadow-lg
                  "
                >
                  Confirmar agenda
                </button>
              )}
            </motion.div>
          )}

          {/* ================= CONFIRMADO ================= */}
          {confirmed && (
            <div className="mt-10 text-center space-y-3">
              <h4 className="text-2xl font-bold text-white">
                ✅ Agenda confirmada
              </h4>
              <p className="text-white/70">
                Día {selectedDate} a las {selectedHour}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgendaModal;
